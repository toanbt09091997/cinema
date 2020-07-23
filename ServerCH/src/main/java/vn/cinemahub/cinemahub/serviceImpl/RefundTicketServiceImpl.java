package vn.cinemahub.cinemahub.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import vn.cinemahub.cinemahub.entities.RefundTicket;
import vn.cinemahub.cinemahub.repository.RefundTicketRepository;
import vn.cinemahub.cinemahub.service.DAO;

import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class RefundTicketServiceImpl implements DAO<RefundTicket> {
    @Autowired
    private RefundTicketRepository refundTicketRepository;

    @Override
    public List<RefundTicket> findAll() {
        return this.refundTicketRepository.findAll();
    }

    @Override
    public Optional<RefundTicket> get(Long id) {
        return refundTicketRepository.findById(id);
    }

    @Override
    public RefundTicket save(RefundTicket refundTicket) {
        return refundTicketRepository.save(refundTicket);
    }

    @Override
    public void update(RefundTicket refundTicket) {
        refundTicketRepository.save(refundTicket);
    }

    @Override
    public void delete(Long id) {
        this.refundTicketRepository.deleteById(id);
    }
}
