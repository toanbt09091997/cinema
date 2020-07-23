package vn.cinemahub.cinemahub.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import vn.cinemahub.cinemahub.entities.Showtime;
import vn.cinemahub.cinemahub.repository.ShowtimeRepository;
import vn.cinemahub.cinemahub.service.DAO;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class ShowtimeServiceImpl implements DAO<Showtime> {
    @Autowired
    private ShowtimeRepository showtimeRepository;

    public List<Showtime> findAllByRoom(Long maphong) {
        return showtimeRepository.findAllByRoom(maphong);
    }

    @Override
    public List<Showtime> findAll() {
        return this.showtimeRepository.findAll();
    }

    @Override
    public Optional<Showtime> get(Long id) {
        return showtimeRepository.findById(id);
    }

    @Override
    public Showtime save(Showtime showtime) {
        return showtimeRepository.save(showtime);
    }

    @Override
    public void update(Showtime showtime) {
        showtimeRepository.save(showtime);
    }

    @Override
    public void delete(Long id) {
        this.showtimeRepository.deleteById(id);
    }

    public List<Showtime> findAllByMovieID(Long phimid) {
        return showtimeRepository.findAllByMovieID(phimid);
    }

    public List<Date> findDatebyMovie(Long phimid) {
        return showtimeRepository.findDatebyMovie(phimid);
    }
}
