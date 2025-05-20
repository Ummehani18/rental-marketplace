package com.rentalmarket.backend.config;

import com.rentalmarket.backend.model.Product;
import com.rentalmarket.backend.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class LoadSampleData {

    @Bean
    public CommandLineRunner loadData(ProductRepository repo) {
        return args -> {
            repo.save(new Product(
                "Red Jeep",
                "Mumbai",
                "1000/-",
                "/assets/vehicles/red-jeep.jpg",
                "Jeep",
                "Bold red jeep for stylish and rugged drives.",
                "Vehicle"
            ));

            repo.save(new Product(
                "Black Jeep",
                "Delhi",
                "1200/-",
                "/assets/vehicles/black-jeep.jpg",
                "Jeep",
                "Robust black jeep perfect for off-road excursions.",
                "Vehicle"
            ));

            // Add more products as needed
        };
    }
}
