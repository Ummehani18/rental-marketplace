package com.rentalmarket.backend.repository;

import com.rentalmarket.backend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByCategoryIgnoreCase(String category);
    List<Product> findBySubCategoryIgnoreCase(String subCategory);
}
