package vn.cinemahub.cinemahub.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import vn.cinemahub.cinemahub.entities.GheEntity;
import vn.cinemahub.cinemahub.repository.SeatRepository;
import vn.cinemahub.cinemahub.service.DAO;


import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class SeatServiceImpl implements DAO<GheEntity> {
    @Autowired
    private SeatRepository seatRepository;

    @Override
    public List<GheEntity> findAll() {
        return this.seatRepository.findAll();
    }

    public List<GheEntity> findbyRoom(Long roomid) {
        return this.seatRepository.findbyRoom(roomid);
    }

    @Override
    public Optional<GheEntity> get(Long id) {
        return seatRepository.findById(id);
    }

    @Override
    public GheEntity save(GheEntity gheEntity) {
        return seatRepository.save(gheEntity);
    }

    @Override
    public void update(GheEntity seat) {
        seatRepository.save(seat);
    }

    @Override
    public void delete(Long id) {
        this.seatRepository.deleteById(id);
    }
}
