package org.uisil.cr.backend.Entity;

import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
@Table
public class Users {

    @Id
    @Column(name = "userId", length = 10)
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int userId;
    @Column(name = "userName",length = 50)
    private String userName;
    @Column(name = "email",length = 100)
    private String email;
    @Column(name = "password",length = 100)
    private String password;
    @Column(name = "imgName",length = 50)
    private String imgName;
    @Column(name = "imgType",length = 50)
    private String imgType;
    @Column(name = "imgData" )
    private byte[]imgData;

    public Users(int userId, String userName, String email, String password) {
        this.userId = userId;
        this.userName = userName;
        this.email = email;
        this.password = password;
    }


}
