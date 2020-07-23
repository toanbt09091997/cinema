package vn.cinemahub.cinemahub.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import vn.cinemahub.cinemahub.entities.Movie;
import java.util.List;
import vn.cinemahub.cinemahub.entities.Cinema;
import vn.cinemahub.cinemahub.entities.Movie;
import java.util.List;
import java.util.Optional;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {
    @Query("SELECT c.id FROM Movie c where c.id = :id")
    Long checkExitsMid(Long id);

//    @Query("SELECT m FROM Movie m where m.cinema.id = :idrap")
//    List<Movie> findbyRap(Long idrap);
}
