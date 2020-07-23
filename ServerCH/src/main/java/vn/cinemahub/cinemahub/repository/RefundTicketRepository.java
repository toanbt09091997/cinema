package vn.cinemahub.cinemahub.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.cinemahub.cinemahub.entities.RefundTicket;

@Repository
public interface RefundTicketRepository extends JpaRepository<RefundTicket,Long> {
}
