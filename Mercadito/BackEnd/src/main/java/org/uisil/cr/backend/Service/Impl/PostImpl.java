package org.uisil.cr.backend.Service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import org.uisil.cr.backend.Dto.PostDto;
import org.uisil.cr.backend.Entity.Posts;
import org.uisil.cr.backend.Entity.Users;
import org.uisil.cr.backend.Repository.PostsRepository;
import org.uisil.cr.backend.Service.PostsService;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Service
public class PostImpl implements PostsService {

    @Autowired
    private PostsRepository postsRepository;

    @Override
    public Posts createPost(MultipartFile file, PostDto postDto) throws IOException {
        //Obtener dia de creacion
        Date date = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
        String day = formatter.format(date);

        // Validar que el archivo no esté vacío
        if (file == null || file.isEmpty()) {
            throw new IllegalArgumentException("El archivo no puede estar vacío");
        }

        // Validar que el título y la descripción no estén vacíos
        if (postDto.getTitle() == null || postDto.getTitle().isEmpty()) {
            throw new IllegalArgumentException("El título no puede estar vacío");
        }
        if (postDto.getDescription() == null || postDto.getDescription().isEmpty()) {
            throw new IllegalArgumentException("La descripción no puede estar vacía");
        }

        try {
            String fileName = StringUtils.cleanPath(file.getOriginalFilename());

            Posts posts = new Posts();
            posts.setTitle(postDto.getTitle());
            posts.setDescription(postDto.getDescription());
            posts.setTelNumber(postDto.getTelNumber());
            posts.setDate(day);
            posts.setPostsImgName(fileName);
            posts.setPostsImgType(file.getContentType());
            posts.setPostsImgData(file.getBytes());

            return postsRepository.save(posts);

        } catch (IOException e) {
            throw new IOException("Error al procesar el archivo: " + e.getMessage(), e);
        }
    }




    @Transactional(readOnly = true)
    @Override
    public List<Posts> getPosts() {
        return postsRepository.findAll();
    }

    @Override
    public List<Posts> byTitle(String title) throws IOException {
        List<Posts> postsList = postsRepository.findByTitle(title);
        if (postsList == null || postsList.isEmpty()) {
            throw new IllegalArgumentException("El título no existe");
        }
        return postsList;
    }



}
