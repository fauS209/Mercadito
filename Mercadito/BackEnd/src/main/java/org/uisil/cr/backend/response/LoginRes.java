package org.uisil.cr.backend.response;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class LoginRes {
    String message;
    Boolean status;

}