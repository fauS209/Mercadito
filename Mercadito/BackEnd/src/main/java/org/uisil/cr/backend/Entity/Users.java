package org.uisil.cr.backend.Entity;

import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table
public class Users {

    @Id
    @Column(name = "userId",length = 10)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int userId;
    @Column(name = "userName",length = 50)
    private String userName;
    @Column(name = "email",length = 100)
    private String email;
    @Column(name = "password",length = 100)
    private String password;


}
