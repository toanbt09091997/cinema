package vn.cinemahub.cinemahub.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.cinemahub.cinemahub.entities.CinemaMovie;
import vn.cinemahub.cinemahub.serviceImpl.CinemaMovieService;
import vn.cinemahub.cinemahub.serviceImpl.CinemaService;
import vn.cinemahub.cinemahub.serviceImpl.MovieService;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/cinemamovie")
public class CinemaMovieResource implements Serializable {
    Date date = new Date();

    @Autowired
    private CinemaMovieService cinemaMovieService;

    @Autowired
    private CinemaService cinemaService;

    @Autowired
    private MovieService movieService;

    @GetMapping
    public List<CinemaMovie> findAll() {
        return cinemaMovieService.findAll();
    }

    @PostMapping
    public CinemaMovie save(@RequestBody CinemaMovie cinemaMovie) {
        System.out.println(cinemaMovie.getCinema().getMarap());
        cinemaMovie.setCinema(cinemaService.get(cinemaMovie.getCinema().getId()).get());
        cinemaMovie.setMovie(movieService.get(cinemaMovie.getMovie().getId()).get());
        cinemaMovie.setCreatedAt(date);
        cinemaMovie.setUpdateAt(date);
            return cinemaMovieService.save(cinemaMovie);
    }

    @PutMapping
    public ResponseEntity<Void> update(@RequestBody CinemaMovie cinemaMovie) {
        cinemaMovie.setUpdateAt(date);
        cinemaMovieService.update(cinemaMovie);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CinemaMovie> findOne(@PathVariable Long id) {
        return cinemaMovieService.get(id).map(cinemaMovie -> new ResponseEntity<>(cinemaMovie, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        cinemaMovieService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
