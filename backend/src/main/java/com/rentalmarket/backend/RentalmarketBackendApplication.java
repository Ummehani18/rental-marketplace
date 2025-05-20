package com.rentalmarket.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.net.InetAddress;

@SpringBootApplication
public class RentalmarketBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(RentalmarketBackendApplication.class, args);

		try {
			String port = System.getProperty("server.port", "8080");
			String host = InetAddress.getLocalHost().getHostAddress();
			System.out.println("\n✅ Application started successfully!");
			System.out.println("🔗 Local Access:      http://localhost:" + port + "/");
			System.out.println("🌐 Network Access:    http://" + host + ":" + port + "/\n");
		} catch (Exception e) {
			System.out.println("⚠️ Could not resolve host information.");
		}
	}
}
