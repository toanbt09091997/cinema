package vn.cinemahub.cinemahub.serviceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import vn.cinemahub.cinemahub.entities.Ticket;
import vn.cinemahub.cinemahub.repository.TicketRepository;
import vn.cinemahub.cinemahub.service.DAO;

import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class TicketServiceImpl implements DAO<Ticket> {
    @Autowired
    private TicketRepository ticketRepository;

    @Override
    public List<Ticket> findAll() {
        return this.ticketRepository.findAll();
    }

    @Override
    public Optional<Ticket> get(Long id) {
        return ticketRepository.findById(id);
    }

    @Override
    public Ticket save(Ticket ticket) {
        return ticketRepository.save(ticket);
    }

    @Override
    public void update(Ticket ticket) {
        ticketRepository.save(ticket);
    }

    @Override
    public void delete(Long id) {
        this.ticketRepository.deleteById(id);
    }
}
