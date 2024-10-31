package org.uisil.cr.backend.Dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class UserDto {
    private int userId;
    private String userName;
    private String email;
    private String password;

}
