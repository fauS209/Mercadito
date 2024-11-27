package org.uisil.cr.backend.Dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class PostDto {

    public int postsId;
    public int userId;
    private String title;
    private String description;
    private String  telNumber;
    private String postsImgName;
    private String postsImgType;
    private byte[]postsImgData;


}
