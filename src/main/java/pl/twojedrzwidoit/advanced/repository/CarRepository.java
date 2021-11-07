package pl.twojedrzwidoit.advanced.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.twojedrzwidoit.advanced.domain.Car;

public interface CarRepository extends JpaRepository<Car, String> {}
