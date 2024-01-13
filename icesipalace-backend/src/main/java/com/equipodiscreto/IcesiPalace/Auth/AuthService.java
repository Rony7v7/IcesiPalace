package com.equipodiscreto.IcesiPalace.Auth;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.equipodiscreto.IcesiPalace.Dto.AuthResponse;
import com.equipodiscreto.IcesiPalace.Dto.LoginDTO;
import com.equipodiscreto.IcesiPalace.Dto.RegisterDTO;
import com.equipodiscreto.IcesiPalace.JWT.JWTService;
import com.equipodiscreto.IcesiPalace.User.User;
import com.equipodiscreto.IcesiPalace.User.UserRepository;
import com.equipodiscreto.IcesiPalace.User.enums.Role;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AuthService {

    private final UserRepository userRepositoryl;
    private final JWTService jwtService;
    private final AuthenticationManager authManager;
    private final PasswordEncoder passwordEncoder;

    public AuthResponse register(RegisterDTO registerDTO) {
        LocalDateTime date = LocalDateTime.now();
        User user = User.builder()
                .email(registerDTO.getEmail())
                .password(passwordEncoder.encode(registerDTO.getPassword())) // Encrypt
                .username(registerDTO.getUsername())
                .created_at(date)
                .role(Role.USER)
                .build();

        User user1 = userRepositoryl.save(user);
        Boolean status = user1 != null;

        return AuthResponse.builder()
                .token(null)
                .status(status)
                .build();
    }

    public AuthResponse login(LoginDTO loginDTO) {
        authManager.authenticate(new UsernamePasswordAuthenticationToken(loginDTO.getEmail(), loginDTO.getPassword()));
        UserDetails userDetails = userRepositoryl.findByEmail(loginDTO.getEmail()).orElseThrow();
        String token = jwtService.getToken(userDetails);
        return AuthResponse.builder()
                .token(token)
                .status(true)
                .build();
    }

}
