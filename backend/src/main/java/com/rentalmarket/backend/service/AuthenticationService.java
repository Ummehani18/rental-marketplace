package com.rentalmarket.backend.service;

import com.rentalmarket.backend.dto.AuthRequest;
import com.rentalmarket.backend.dto.AuthResponse;
import com.rentalmarket.backend.model.User;
import com.rentalmarket.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthResponse authenticate(AuthRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
        );

        User user = userRepository.findByUsername(request.getUsername())
                .orElseThrow(() -> new RuntimeException("Invalid username or password"));

        String token = jwtService.generateToken(user.getUsername());
        String refreshToken = jwtService.createOrUpdateRefreshToken(user.getId());

        return new AuthResponse(token, refreshToken);
    }
}
