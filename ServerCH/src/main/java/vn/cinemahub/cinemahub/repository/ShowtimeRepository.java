package vn.cinemahub.cinemahub.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import vn.cinemahub.cinemahub.entities.Showtime;

import java.util.Date;
import java.util.List;

@Repository
public interface ShowtimeRepository extends JpaRepository<Showtime,Long> {
    @Query("SELECT s FROM Showtime s where s.roomEntity.id = :maphong")
    List<Showtime> findAllByRoom(Long maphong);

    @Query("SELECT s FROM Showtime s where s.movie.id = :phimid")
    List<Showtime> findAllByMovieID(Long phimid);

    @Query("SELECT s.dateStart FROM Showtime s where s.movie.id = :phimid")
    List<Date> findDatebyMovie(Long phimid);

}
