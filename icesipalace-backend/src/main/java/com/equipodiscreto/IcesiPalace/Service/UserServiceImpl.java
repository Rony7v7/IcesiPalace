package com.equipodiscreto.IcesiPalace.Service;

import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.equipodiscreto.IcesiPalace.Dto.LoginDTO;
import com.equipodiscreto.IcesiPalace.Dto.UserDTO;
import com.equipodiscreto.IcesiPalace.Entity.User;
import com.equipodiscreto.IcesiPalace.PayloadResponse.LoginMessage;
import com.equipodiscreto.IcesiPalace.Repository.UserRepository;
import com.equipodiscreto.IcesiPalace.Service.interfaces.UserServiceInterface;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserServiceInterface {
    private UserRepository userRepository;

    private PasswordEncoder passwordEncoder;

    @Override
    public String addUser(UserDTO userDTO) {
        User user1 = userRepository.findByEmail(userDTO.getEmail());
        if (user1 != null) {
            return "Email already exists";
        } else {
            User user = new User(
                    userDTO.getUserID(),
                    userDTO.getUsername(),
                    userDTO.getEmail(),
                    this.passwordEncoder.encode(userDTO.getPassword()));
            userRepository.save(user);
            return user.getUsername();
        }
    }

    @Override
    public LoginMessage loginUser(LoginDTO loginDTO) {
        String msg = "";
        User user1 = userRepository.findByEmail(loginDTO.getEmail());
        if (user1 != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = user1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<User> user = userRepository.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if (user.isPresent()) {
                    return new LoginMessage("Login Success", true);
                } else {
                    return new LoginMessage("Login Failed", false);
                }
            } else {
                return new LoginMessage("password Not Match", false);
            }
        } else {
            return new LoginMessage("Email not exits", false);
        }
    }

}
