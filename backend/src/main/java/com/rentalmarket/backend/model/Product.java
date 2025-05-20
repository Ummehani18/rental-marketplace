package com.rentalmarket.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "products") // ✅ Make sure your table is named `products`
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String location;
    private String rent;
    private String image;

    // ✅ Explicitly map to DB column
    @Column(name = "sub_category") // match DB column name
    private String subCategory;

    private String description;

    // ✅ Explicitly map to DB column
    @Column(name = "category")
    private String category;

    public Product(String name, String location, String rent, String image,
                   String subCategory, String description, String category) {
        this.name = name;
        this.location = location;
        this.rent = rent;
        this.image = image;
        this.subCategory = subCategory;
        this.description = description;
        this.category = category;
    }
}
