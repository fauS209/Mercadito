package org.uisil.cr.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import org.uisil.cr.backend.Entity.Users;

import java.util.Optional;


@EnableJpaRepositories
@Repository
public interface UserRepository extends JpaRepository<Users, Integer> {

     
     Optional<Users>findOneByEmailAndAndPassword(String email, String password);
     Users findByEmail(String email);


}
