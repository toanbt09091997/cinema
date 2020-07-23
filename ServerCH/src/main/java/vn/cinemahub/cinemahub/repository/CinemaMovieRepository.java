package vn.cinemahub.cinemahub.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import vn.cinemahub.cinemahub.entities.CinemaMovie;

import java.util.Optional;

public interface CinemaMovieRepository extends JpaRepository<CinemaMovie, Long> {
    @Query("SELECT c FROM Cinema c where c.marap = :marap")
    Optional<CinemaMovie> findbyMarap(int marap);

    @Query("SELECT c.id FROM Cinema c where c.marap = :marap")
    Long checkExitsTenRap(int marap);



//    @Query("SELECT c.id FROM Cinema c where c.marap = :marap")
//    Long checkExitsMaRap(int marap);
//
}
