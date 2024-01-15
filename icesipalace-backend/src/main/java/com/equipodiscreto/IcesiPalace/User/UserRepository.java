package com.equipodiscreto.IcesiPalace.User;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findOneByEmailAndPassword(String email, String password);

    Optional<User> findByEmail(String Email);

    boolean existsByEmail(String email);
}
