package pl.twojedrzwidoit.advanced.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.twojedrzwidoit.advanced.domain.Order;

public interface OrderRepository extends JpaRepository<Order, String> {}
