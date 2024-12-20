package org.uisil.cr.backend.Service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.uisil.cr.backend.Dto.LoginDto;
import org.uisil.cr.backend.Dto.UserDto;
import org.uisil.cr.backend.Entity.Users;
import org.uisil.cr.backend.Repository.UserRepository;
import org.uisil.cr.backend.Service.UserService;
import org.uisil.cr.backend.response.LoginRes;


import java.util.Optional;

@Service
public class UserImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String addUser( UserDto userDto) {
        Users user = new Users(
                                 userDto.getUserId(),
                                 userDto.getUserName(),
                                 userDto.getEmail(),
                                 this.passwordEncoder.encode(userDto.getPassword())
                                );
        userRepository.save(user);
        return user.getUserName();
    }

    UserDto userDto;
    @Override
    public LoginRes loginUser(LoginDto loginDto) {
        String msg = "";
        Users user1 = userRepository.findByEmail(loginDto.getEmail());
        if (user1 != null) {
            String password = loginDto.getPassword();
            String encodedPassword = user1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<Users> users = userRepository.findOneByEmailAndAndPassword(loginDto.getEmail(), encodedPassword);
                if (users.isPresent()) {
                    return new LoginRes("Login Success", true);
                } else {
                    return new LoginRes("Login Failed", false);
                }
            } else {
                return new LoginRes("password Not Match", false);
            }
        }else {
            return new LoginRes("Email not exits", false);
        }
    }
    }







