package org.uisil.cr.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import org.uisil.cr.backend.Entity.Posts;

import java.util.List;

@EnableJpaRepositories
@Repository
public interface PostsRepository extends JpaRepository<Posts, Integer>{
    List<Posts> findByTitle(String title);



}
