package org.uisil.cr.backend.Entity;

import jakarta.persistence.*;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
@Entity
@Table
public class Posts {
    @Id
    @Column(name = "postsId", length = 10)
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int postsId;
    @Column(name = "userId", length = 10)
    public int userId;
    @Column(name = "title",length = 50)
    private String title;
    @Column(name = "description",length = 200)
    private String description;
    @Column(name = "telNumber",length = 50)
    private String  telNumber;
    @Column(name = "date",length = 50)
    private String  date;
    @Column(name = "postsImgName",length = 50)
    private String postsImgName;
    @Column(name = "postsImgType",length = 50)
    private String postsImgType;
    @Column(name = "postsImgData" )
    private byte[] postsImgData;



    public Posts(int postsId, String title, String description, String telNumber ) {
    }
}
