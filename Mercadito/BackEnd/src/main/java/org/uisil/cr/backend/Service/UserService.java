package org.uisil.cr.backend.Service;


import org.springframework.stereotype.Service;
import org.uisil.cr.backend.Dto.LoginDto;
import org.uisil.cr.backend.Dto.UserDto;
import org.uisil.cr.backend.response.LoginRes;


@Service
public interface UserService {

 String addUser(UserDto userDto);
LoginRes loginUser(LoginDto loginDto);


}
