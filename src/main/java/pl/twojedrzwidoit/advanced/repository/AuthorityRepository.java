package pl.twojedrzwidoit.advanced.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.twojedrzwidoit.advanced.domain.Authority;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {}
