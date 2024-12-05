package org.uisil.cr.backend.Service.Impl;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import org.uisil.cr.backend.Dto.LoginDto;
import org.uisil.cr.backend.Dto.UserDto;
import org.uisil.cr.backend.Entity.Users;
import org.uisil.cr.backend.Repository.UserRepository;
import org.uisil.cr.backend.Service.UserService;
import org.uisil.cr.backend.response.LoginRes;


import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Optional;

@Service
public class UserImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String addUser(UserDto userDto) throws IOException {
        // Validar campos
        if (userDto.getUserName() == null || userDto.getUserName().isEmpty()) {
            throw new IllegalArgumentException("El nombre de usuario no puede estar vacío");
        }
        if (userDto.getEmail() == null || userDto.getEmail().isEmpty()) {
            throw new IllegalArgumentException("El email no puede estar vacío");
        }
        if (userDto.getPassword() == null || userDto.getPassword().isEmpty()) {
            throw new IllegalArgumentException("La contraseña no puede estar vacía");
        }

        // Validación adicional de formato de email (opcional)
        if (!userDto.getEmail().matches("^[A-Za-z0-9+_.-]+@(.+)$")) {
            throw new IllegalArgumentException("El email no tiene un formato válido");
        }

        try {
            // Crear usuario con los datos de userDto
            Users user = new Users(
                    userDto.getUserId(),
                    userDto.getUserName(),
                    userDto.getEmail(),
                    this.passwordEncoder.encode(userDto.getPassword())
            );

            userRepository.save(user);
            return user.getUserName();
        } catch (DataAccessException e) {
            throw new RuntimeException("Error al guardar el usuario en la base de datos: " + e.getMessage(), e);
        } catch (Exception e) {
            throw new RuntimeException("Error inesperado al crear el usuario: " + e.getMessage(), e);
        }
    }


    UserDto userDto;
    @Override
    public LoginRes loginUser(LoginDto loginDto) throws IOException {
        // Validar que el email y la contraseña no estén vacíos
        if (loginDto.getEmail() == null || loginDto.getEmail().isEmpty()) {
            throw new IllegalArgumentException("El email no puede estar vacío");
        }
        if (loginDto.getPassword() == null || loginDto.getPassword().isEmpty()) {
            throw new IllegalArgumentException("La contraseña no puede estar vacía");
        }

        try {
            Users user = userRepository.findByEmail(loginDto.getEmail());

            if (user == null) {
                return new LoginRes("Email no existe", false);
            }

            // Verificar si la contraseña ingresada coincide con la guardada
            boolean isPasswordCorrect = passwordEncoder.matches(loginDto.getPassword(), user.getPassword());
            if (!isPasswordCorrect) {
                return new LoginRes("Contraseña incorrecta", false);
            }

            // Confirmar que el usuario esté presente en la base de datos
            Optional<Users> users = userRepository.findOneByEmailAndAndPassword(loginDto.getEmail(), user.getPassword());
            if (users.isPresent()) {
                // Devolver también el ID del usuario
                return new LoginRes("Inicio de sesión exitoso", true, users.get().getUserId());
            } else {
                return new LoginRes("Falló el inicio de sesión", false);
            }

        } catch (DataAccessException e) {
            throw new RuntimeException("Error de base de datos al buscar el usuario: " + e.getMessage(), e);
        } catch (Exception e) {
            throw new RuntimeException("Error inesperado en el inicio de sesión: " + e.getMessage(), e);
        }
    }




    @Override
    public Users storeImg(MultipartFile file, int id) throws IOException {
        // Validar que el archivo no esté vacío
        if (file == null || file.isEmpty()) {
            throw new IllegalArgumentException("El archivo no puede estar vacío");
        }
        try {
            // Buscar usuario existente por ID
            Users existingUser = userRepository.findById(id)
                    .orElseThrow(() -> new EntityNotFoundException("Usuario no encontrado con ID: " + id));

            // Limpiar y establecer los datos del archivo
            String fileName = StringUtils.cleanPath(file.getOriginalFilename());
            existingUser.setImgName(fileName);
            existingUser.setImgType(file.getContentType());
            existingUser.setImgData(file.getBytes());

            // Guardar los cambios en el usuario
            return userRepository.save(existingUser);

        } catch (EntityNotFoundException e) {
            throw new EntityNotFoundException("Error: " + e.getMessage(), e);
        } catch (IOException e) {
            throw new IOException("Error al procesar el archivo: " + e.getMessage(), e);
        } catch (DataAccessException e) {
            throw new RuntimeException("Error de base de datos al actualizar el usuario: " + e.getMessage(), e);
        } catch (Exception e) {
            throw new RuntimeException("Error inesperado al almacenar la imagen: " + e.getMessage(), e);
        }
    }




    @Override
    public Optional<Users> getFile(int id) throws FileNotFoundException {
        try {
            Optional<Users> imgUser = userRepository.findById(id);

            // Verificar si el usuario existe
            if (imgUser.isEmpty()) {
                throw new FileNotFoundException("Usuario no encontrado con ID: " + id);
            }

            // Verificar si el usuario tiene imagen asociada
            Users user = imgUser.get();
            if (user.getImgData() == null || user.getImgData().length == 0) {
                throw new FileNotFoundException("El usuario con ID: " + id + " no tiene una imagen asociada");
            }

            return imgUser;

        } catch (DataAccessException e) {
            throw new RuntimeException("Error de base de datos al recuperar el archivo: " + e.getMessage(), e);
        } catch (Exception e) {
            throw new RuntimeException("Error inesperado al recuperar el archivo: " + e.getMessage(), e);
        }
    }




}







