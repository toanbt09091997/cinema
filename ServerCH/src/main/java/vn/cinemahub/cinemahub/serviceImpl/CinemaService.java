package vn.cinemahub.cinemahub.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import vn.cinemahub.cinemahub.entities.Cinema;
import vn.cinemahub.cinemahub.repository.CinemaRepository;
import vn.cinemahub.cinemahub.service.DAO;

import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class CinemaService implements DAO<Cinema> {

    @Autowired
    private CinemaRepository cinemaRepository;

    @Override
    public List<Cinema> findAll() {
        return cinemaRepository.findAll();
    }

    @Override
    public Optional<Cinema> get(Long id) {
        return cinemaRepository.findById(id);
    }

    @Override
    public Cinema save(Cinema cinema) {
        return cinemaRepository.save(cinema);
    }

    public Optional<Cinema> findbyMarap(int marap) {
        return cinemaRepository.findbyMarap(marap);
    }

    public Long checkExitsTenRap(String tenrap) {
        return cinemaRepository.checkExitsTenRap(tenrap);
    }

    public Long checkExitsMaRap(int marap) {
        return cinemaRepository.checkExitsMaRap(marap);
    }

    @Override
    public void update(Cinema cinema) {
        cinemaRepository.save(cinema);
    }

    @Override
    public void delete(Long id) {
        cinemaRepository.deleteById(id);
    }
}
