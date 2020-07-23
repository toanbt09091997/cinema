package vn.cinemahub.cinemahub.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.cinemahub.cinemahub.entities.RoomEntity;
import vn.cinemahub.cinemahub.serviceImpl.CinemaService;
import vn.cinemahub.cinemahub.serviceImpl.RoomServiceImpl;

import java.util.Date;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping({"/api/room"})
public class RoomResource {
    @Autowired
    private RoomServiceImpl roomService;

    @Autowired
    private CinemaService cinemaService;

    @GetMapping
    public List<RoomEntity> findAll() {
        return roomService.findAll();
    }

    @PostMapping
    public RoomEntity save(@RequestBody RoomEntity roomEntity) {
        Date date = new Date();
        roomEntity.setCreatedAt(date);
        roomEntity.setUpdateAt(date);
        roomEntity.setStatus(1);
        roomEntity.setCinema(cinemaService.findbyMarap(roomEntity.getCinema().getMarap()).get());
        return roomService.save(roomEntity);
    }

    @GetMapping("/{id}")
    public ResponseEntity<RoomEntity> findOne(@PathVariable Long id) {
        return roomService.get(id).map(room -> new ResponseEntity<>(room, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
