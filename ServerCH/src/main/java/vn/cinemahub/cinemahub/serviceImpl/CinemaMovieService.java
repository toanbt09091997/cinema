package vn.cinemahub.cinemahub.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import vn.cinemahub.cinemahub.entities.CinemaMovie;
import vn.cinemahub.cinemahub.repository.CinemaMovieRepository;
import vn.cinemahub.cinemahub.service.DAO;

import java.util.List;
import java.util.Optional;
@Transactional
@Service
public class CinemaMovieService implements DAO<CinemaMovie> {

    @Autowired
    private CinemaMovieRepository cinemaMovieRepository;

    @Override
    public List<CinemaMovie> findAll() {
        return cinemaMovieRepository.findAll();
    }

    @Override
    public Optional<CinemaMovie> get(Long id) {
        return cinemaMovieRepository.findById(id);
    }

    @Override
    public CinemaMovie save(CinemaMovie cinemaMovie) {
        return cinemaMovieRepository.save(cinemaMovie);
    }

//    public Optional<Cinema> findbyMarap(int marap) {
//        return cinemaMovieRepository.findbyMarap(marap);
//    }

//    public Long checkExitsMaPhim(int maphim) {
//        return cinemaMovieRepository.checkExitsMaPhim(maphim);
//    }

//    public Long checkExitsMaRap(int marap) {
//        return cinemaMovieRepository.checkExitsMaRap(marap);
//    }

    @Override
    public void update(CinemaMovie CinemaMovie) {
        cinemaMovieRepository.save(CinemaMovie);
    }

    @Override
    public void delete(Long id) {
        cinemaMovieRepository.deleteById(id);
    }
}
