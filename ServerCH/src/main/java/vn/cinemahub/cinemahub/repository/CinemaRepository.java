package vn.cinemahub.cinemahub.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import vn.cinemahub.cinemahub.entities.Cinema;

import java.util.Optional;

@Repository
public interface CinemaRepository extends JpaRepository<Cinema, Long> {
    @Query("SELECT c FROM Cinema c where c.marap = :marap")
    Optional<Cinema> findbyMarap(int marap);

    @Query("SELECT c.id FROM Cinema c where c.tenrap = :tenrap")
    Long checkExitsTenRap(String tenrap);

    @Query("SELECT c.id FROM Cinema c where c.marap = :marap")
    Long checkExitsMaRap(int marap);

}
