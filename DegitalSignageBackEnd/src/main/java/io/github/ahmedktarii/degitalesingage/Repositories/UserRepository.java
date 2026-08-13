package io.github.ahmedktarii.degitalesingage.Repositories;

import io.github.ahmedktarii.degitalesingage.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);// custom finder
    Boolean existsByUsername(String username);
    User findByEmail(String email);

}