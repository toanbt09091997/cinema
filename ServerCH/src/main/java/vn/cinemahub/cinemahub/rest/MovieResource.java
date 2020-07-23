package vn.cinemahub.cinemahub.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.cinemahub.cinemahub.entities.Movie;
import vn.cinemahub.cinemahub.serviceImpl.CinemaService;
import vn.cinemahub.cinemahub.serviceImpl.MovieService;

import java.util.Date;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/movie")
public class MovieResource {
    Date date = new Date();
    @Autowired
    private MovieService movieService;

    @Autowired
    private CinemaService cinemaService;

    @GetMapping
    public List<Movie> findAll() {
        return movieService.findAll();
    }

//    @GetMapping("/c/{id}")
//    public List<Movie> findbyRap(@PathVariable Long id) {
//        return movieService.findbyRap(id);
//    }

    @PostMapping
    public Movie save(@RequestBody Movie movie) {
        movie.setCreatedAt(date);
        movie.setUpdateAt(date);
        movie.setStatus(1);
//        movie.setCinema(cinemaService.get(movie.getCinema().getId()).get());
        return movieService.save(movie);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Movie> findOne(@PathVariable Long id) {
        return movieService.get(id).map(movie -> new ResponseEntity<>(movie, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        movieService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
