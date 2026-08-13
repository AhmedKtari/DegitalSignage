package io.github.ahmedktarii.degitalesingage.Services;

import io.github.ahmedktarii.degitalesingage.Entities.User;
import io.github.ahmedktarii.degitalesingage.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void save(User user) {
        userRepository.save(user);
    }

    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }
    public Boolean existsByUsername(String username) {
        return userRepository.existsByUsername(username);
    }
    public String grapPasswordByUsername(String username){
        User user = userRepository.findByUsername(username);
        return user != null ? user.getPassword() : null;
    }
    public Boolean doesEmailExist(String email) {
        User user = userRepository.findByEmail(email);
        return user != null ;
    }
}