package org.uisil.cr.backend.Service;


import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.uisil.cr.backend.Dto.LoginDto;
import org.uisil.cr.backend.Dto.UserDto;
import org.uisil.cr.backend.Entity.Users;
import org.uisil.cr.backend.response.LoginRes;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Optional;


@Service
public interface UserService {

 String addUser(UserDto userDto) throws IOException;
LoginRes loginUser(LoginDto loginDto) throws IOException ;

Users storeImg (MultipartFile file, int id) throws IOException;
Optional<Users> getFile (int id) throws FileNotFoundException;



}
