package org.uisil.cr.backend.Service;

import org.springframework.web.multipart.MultipartFile;
import org.uisil.cr.backend.Dto.PostDto;
import org.uisil.cr.backend.Entity.Posts;
import org.uisil.cr.backend.Entity.Users;

import java.io.IOException;
import java.util.List;

public interface PostsService {

    Posts createPost (MultipartFile file, PostDto postDto) throws IOException;
     List<Posts> getPosts () throws IOException;
     List<Posts> byTitle(String title) throws IOException;
}
