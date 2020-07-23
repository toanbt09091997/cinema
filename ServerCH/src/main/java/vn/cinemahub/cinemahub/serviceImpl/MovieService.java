package vn.cinemahub.cinemahub.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import vn.cinemahub.cinemahub.entities.Cinema;
import vn.cinemahub.cinemahub.entities.Movie;
import vn.cinemahub.cinemahub.repository.MovieRepository;
import vn.cinemahub.cinemahub.service.DAO;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class MovieService implements DAO<Movie> {

    private EntityManager entityManager;

    @Autowired
    private MovieRepository movieRepository;

    @Override
    public List<Movie> findAll() {
        return movieRepository.findAll();
    }

    @Override
    public Optional<Movie> get(Long id) {
        return movieRepository.findById(id);
//        return Optional.ofNullable(entityManager.find(Movie.class, id));
    }


    @Override
    public Movie save(Movie movie) {

        return movieRepository.save(movie);
    }

    @Override
    public void update(Movie movie) {
        movieRepository.save(movie);
    }

    @Override
    public void delete(Long id) {
        movieRepository.deleteById(id);
    }

    public Long checkExitsMid(Long id) {
        return movieRepository.checkExitsMid(id);
    }

//    public List<Movie> findbyRap(Long idrap) {
//        return movieRepository.findbyRap(idrap);
//    }
}
