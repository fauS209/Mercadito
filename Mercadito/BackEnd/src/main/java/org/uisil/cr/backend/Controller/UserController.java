package org.uisil.cr.backend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.uisil.cr.backend.Dto.LoginDto;
import org.uisil.cr.backend.Dto.UserDto;
import org.uisil.cr.backend.Service.UserService;
import org.uisil.cr.backend.response.LoginRes;

@RestController
@CrossOrigin
@RequestMapping("api/v1/mercadito")
public class UserController {

    @Autowired
    private UserService userService;


    @PostMapping(path = "/register")
    public String saveUser(@RequestBody UserDto userDto) {
    String id = userService.addUser(userDto);
    return id ;
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDto loginDto)
    {
        LoginRes loginRes = userService.loginUser(loginDto);
        return ResponseEntity.ok(loginRes);

    }


}
