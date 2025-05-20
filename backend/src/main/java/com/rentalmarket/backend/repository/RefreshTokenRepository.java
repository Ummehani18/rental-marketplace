package com.rentalmarket.backend.repository;

import com.rentalmarket.backend.model.RefreshToken;
import com.rentalmarket.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Long> {
    Optional<RefreshToken> findByToken(String token);
    Optional<RefreshToken> findByUserId(Long userId);  // Add this method
    int deleteByUser(User user);
}
