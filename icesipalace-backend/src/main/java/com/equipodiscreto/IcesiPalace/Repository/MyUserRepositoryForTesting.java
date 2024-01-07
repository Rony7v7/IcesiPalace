package com.equipodiscreto.IcesiPalace.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import com.equipodiscreto.IcesiPalace.Entity.User;

import jakarta.annotation.PostConstruct;

@Repository
public class MyUserRepositoryForTesting {

    private Logger logger = LoggerFactory.getLogger(MyUserRepositoryForTesting.class);

    @PostConstruct
    public void init() {
        logger.info("UserRepository created");
        users = new ArrayList<>();
    }

    private List<User> users;

    public User findByEmail(String email) {
        return null;
    }

    public Optional<User> findOneByEmailAndPassword(String email, String encodedPassword) {
        return null;
    }

    public void save(User user) {
        logger.info("User saved");
        logger.info(user.toString());
        users.add(user);
    }

}
