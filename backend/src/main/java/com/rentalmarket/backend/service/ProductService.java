package com.rentalmarket.backend.service;

import com.rentalmarket.backend.model.Product;
import com.rentalmarket.backend.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository repo;

    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }

    public List<Product> getAll() {
        return repo.findAll();
    }

    public Product save(Product product) {
        return repo.save(product);
    }

    public List<Product> saveAll(List<Product> products) {
        return repo.saveAll(products);
    }

    public List<Product> getByCategory(String category) {
        if (category == null || category.trim().isEmpty()) {
            return getAll(); // fallback if empty
        }

        String cleaned = category.trim().replaceAll("\\s+", " ");
        System.out.println("🔍 Fetching by cleaned category: '" + cleaned + "'");
        return repo.findByCategoryIgnoreCase(cleaned);
    }

    public List<Product> getBySubCategory(String subcategory) {
        if (subcategory == null || subcategory.trim().isEmpty()) {
            return List.of(); // return empty if no subcategory
        }

        String cleaned = subcategory.trim().replaceAll("\\s+", " ");
        System.out.println("🔍 Fetching by subcategory: '" + cleaned + "'");
        return repo.findBySubCategoryIgnoreCase(cleaned);
    }

    public void deleteAllById(List<Long> ids) {
        try {
            repo.deleteAllById(ids);
        } catch (Exception e) {
            throw new RuntimeException("Error occurred while deleting products", e);
        }
    }
}
