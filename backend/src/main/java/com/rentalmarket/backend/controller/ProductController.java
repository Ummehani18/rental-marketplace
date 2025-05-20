package com.rentalmarket.backend.controller;

import com.rentalmarket.backend.model.Product;
import com.rentalmarket.backend.service.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    // ✅ GET /api/products?category=...
    @GetMapping
    public List<Product> getAllOrByCategory(@RequestParam(required = false) String category) {
        if (category != null && !category.isEmpty()) {
            System.out.println("🔍 Query Param - Category: " + category);
            return service.getByCategory(category);
        }
        return service.getAll();
    }

    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        return service.save(product);
    }

    @PostMapping("/batch")
    public List<Product> addProductsBatch(@RequestBody List<Product> products) {
        return service.saveAll(products);
    }

    // ✅ GET /api/products/category/Sports%20Equipment
    @GetMapping("/category/{category}")
    public List<Product> getByCategoryPath(@PathVariable String category) {
        System.out.println("🔍 Path Variable - Category: " + category);
        return service.getByCategory(category);
    }

    @GetMapping("/subcategory/{subcategory}")
    public List<Product> getBySubCategory(@PathVariable String subcategory) {
        return service.getBySubCategory(subcategory);
    }

    @DeleteMapping(value = "/batch", consumes = "application/json")
    public ResponseEntity<Void> deleteProducts(@RequestBody List<Long> ids) {
        service.deleteAllById(ids);
        return ResponseEntity.noContent().build();
    }
}
