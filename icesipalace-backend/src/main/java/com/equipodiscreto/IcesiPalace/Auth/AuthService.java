package com.equipodiscreto.IcesiPalace.Auth;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.equipodiscreto.IcesiPalace.Dto.AuthResponse;
import com.equipodiscreto.IcesiPalace.Dto.LoginDTO;
import com.equipodiscreto.IcesiPalace.Dto.RegisterDTO;
import com.equipodiscreto.IcesiPalace.JWT.JWTService;
import com.equipodiscreto.IcesiPalace.User.User;
import com.equipodiscreto.IcesiPalace.User.UserRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AuthService {

    private final UserRepository userRepositoryl;
    private final JWTService jwtService;
    private final AuthenticationManager authManager;

    public AuthResponse register(RegisterDTO registerDTO) {
        User user = User.builder()
                .email(registerDTO.getEmail())
                .password(registerDTO.getPassword())
                .username(registerDTO.getUsername())
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
