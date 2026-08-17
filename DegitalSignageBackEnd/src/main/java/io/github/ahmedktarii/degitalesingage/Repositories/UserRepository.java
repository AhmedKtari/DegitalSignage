package io.github.ahmedktarii.degitalesingage.Repositories;

import io.github.ahmedktarii.degitalesingage.Entities.Media;
import io.github.ahmedktarii.degitalesingage.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
   // void saveMedia(Media media);
   // void setUserCode(String userCode);
}