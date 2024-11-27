package org.uisil.cr.backend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.uisil.cr.backend.Dto.LoginDto;
import org.uisil.cr.backend.Dto.UserDto;
import org.uisil.cr.backend.Entity.Users;
import org.uisil.cr.backend.Service.UserService;
import org.uisil.cr.backend.response.LoginRes;
import org.uisil.cr.backend.response.responseMessage;

import java.io.IOException;

@RestController
@CrossOrigin
@RequestMapping("api/v1/mercadito/users")
public class UserController {

    @Autowired
    private UserService userService;


    @PostMapping(path = "/register")
    public String saveUser(@RequestBody UserDto userDto) {
        String id = null;
        try {
            id = userService.addUser(userDto);
        } catch (java.io.IOException e) {
            throw new RuntimeException(e);
        }
        return id ;
    }


    @PostMapping(path = "/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDto loginDto)
    {
        LoginRes loginRes = null;
        try {
            loginRes = userService.loginUser(loginDto);
        } catch (java.io.IOException e) {
            throw new RuntimeException(e);
        }
        return ResponseEntity.ok(loginRes);

    }

    @PutMapping(path = "/upload/{id}")
    public ResponseEntity<responseMessage> uploadUser(@RequestParam("file") MultipartFile file, @PathVariable int id) throws IOException {
        userService.storeImg(file, id);
        return ResponseEntity.status(HttpStatus.OK).body(new responseMessage("El archivo fue subido exitosamente"));
    }

    @GetMapping(path = "files/{id}")
    public ResponseEntity<byte[]> getFile(@PathVariable int id) throws IOException {
        Users imgUser = userService.getFile(id).get();
        return ResponseEntity.status(HttpStatus.OK)
                .header(HttpHeaders.CONTENT_DISPOSITION,"attachment: imgName\""+imgUser.getImgName()+"\"" )
                .body(imgUser.getImgData());

    }



}
