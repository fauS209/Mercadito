package org.uisil.cr.backend.Controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.uisil.cr.backend.Dto.PostDto;
import org.uisil.cr.backend.Dto.UserDto;
import org.uisil.cr.backend.Entity.Posts;
import org.uisil.cr.backend.Service.PostsService;
import org.uisil.cr.backend.response.responseMessage;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/mercadito/posts")
public class PostsController {
    @Autowired
    private PostsService postsService;

    @PostMapping("/create")
    public ResponseEntity<Posts> createPost(@RequestParam("file") MultipartFile file,
                                            @RequestParam("postDto") String postDtoStr) throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        PostDto postDto = objectMapper.readValue(postDtoStr, PostDto.class);
        Posts createdPost = postsService.createPost(file, postDto);
        return new ResponseEntity<>(createdPost, HttpStatus.CREATED);
    }



    @GetMapping("/filter/{title}")
    public ResponseEntity<List<Posts>> filterPostsByTitle(@PathVariable("title") String title) {
        if (title == null || title.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        try {
            List<Posts> posts = postsService.byTitle(title);
            return new ResponseEntity<>(posts, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (IOException e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (Exception e) {
            // Imprimir el mensaje de error en los registros
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<Posts>> getAllPosts() throws IOException {
        List<Posts> posts = postsService.getPosts();
        return ResponseEntity.ok(posts);
    }

}





