package vn.cinemahub.cinemahub.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import vn.cinemahub.cinemahub.entities.Cinema;
import vn.cinemahub.cinemahub.entities.GheEntity;

import java.util.List;
import java.util.Optional;

@Repository
public interface SeatRepository extends JpaRepository<GheEntity, Long> {
    @Query("SELECT g FROM GheEntity g where g.roomEntity.id = :roomid")
    List<GheEntity> findbyRoom(Long roomid);
}
