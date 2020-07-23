package vn.cinemahub.cinemahub.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.cinemahub.cinemahub.entities.RoomEntity;
import vn.cinemahub.cinemahub.entities.Showtime;
import vn.cinemahub.cinemahub.serviceImpl.MovieService;
import vn.cinemahub.cinemahub.serviceImpl.RoomServiceImpl;
import vn.cinemahub.cinemahub.serviceImpl.ShowtimeServiceImpl;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping({"/api/showtime"})
public class ShowtimeResource {
    @Autowired
    private ShowtimeServiceImpl showtimeService;

    @Autowired
    private MovieService movieService;

    @Autowired
    private RoomServiceImpl roomService;

    @GetMapping
    public List<Showtime> findAll() {
        return showtimeService.findAll();
    }

    @GetMapping({"fbymovie/{id}"})
    public List<Showtime> findAllByMovieID(@PathVariable Long id) {
        return showtimeService.findAllByMovieID(id);
    }

    @PostMapping
    public Showtime save(@RequestBody Showtime showtime) {
        showtime.setStatus(1);
        Date date = new Date();
        Calendar def = Calendar.getInstance();
        def.setTime(date);
        showtime.setCreatedAt(date);
        showtime.setUpdateAt(date);
        showtime.setMovie(movieService.get(showtime.getMovie().getId()).get());

        //date start
        String start[] = showtime.getTimeStart().split(":");
        Calendar startT = Calendar.getInstance();
        startT.setTime(showtime.getDateStart());
        startT.set(Calendar.HOUR_OF_DAY, Integer.parseInt(start[0]));
        startT.set(Calendar.MINUTE, Integer.parseInt(start[1]));
        showtime.setDateStart(startT.getTime());

        if(startT.before(def) == false) {
            // Date end
            int movietime = movieService.get(showtime.getMovie().getId()).get().getMinutes();
            int hours = movietime / 60;
            int minutes = movietime % 60;
            Calendar endT = Calendar.getInstance();
            endT.setTime(startT.getTime());
            endT.set(Calendar.HOUR_OF_DAY, Integer.parseInt(start[0]) + hours);
            endT.set(Calendar.MINUTE, Integer.parseInt(start[1]) +  minutes + 15);
            showtime.setDateEnd(endT.getTime());


            Calendar getT = Calendar.getInstance();
            List<RoomEntity> rooms = roomService.findAll();
            for (int i = 0; i < rooms.size(); i++) {
                List<Showtime> shows = showtimeService.findAllByRoom(rooms.get(i).getId());
                if (shows.size() == 0) {
                    try {
                        if(movieService.checkExitsMid(showtime.getMovie().getId()) != null ) {
                            List<Date> sbyMovie = showtimeService.findDatebyMovie(showtime.getMovie().getId());
                            Date maxDatebyM = sbyMovie.stream().map(d -> d).max(Date::compareTo).get();
                            Calendar cbyM = Calendar.getInstance();
                            cbyM.setTime(maxDatebyM);
                            startT.set(Calendar.HOUR_OF_DAY, startT.get(Calendar.HOUR) - 1);
                            if(startT.getTime().after(cbyM.getTime())) {
                                showtime.setRoomEntity(roomService.get(rooms.get(i).getId()).get());
                                return this.showtimeService.save(showtime);
                            }
                            else {
                                System.out.println("hon 1 tieng moi dc");
                                startT.set(Calendar.HOUR_OF_DAY, startT.get(Calendar.HOUR) + 1);
                            }
                        }
                    } catch (Exception e) {
                        showtime.setRoomEntity(roomService.get(rooms.get(i).getId()).get());
                        return this.showtimeService.save(showtime);
                    }
                }
                else {
                    for (int j = 0; j < shows.size(); j++) {
                        Date maxDate = shows.stream().map(s -> s.getDateEnd()).max(Date::compareTo).get();
                        getT.setTime(maxDate);
                        if(getT.getTime().before(showtime.getDateStart()) == true) {
                            showtime.setRoomEntity(roomService.get(rooms.get(i).getId()).get());
                            startT.set(Calendar.MINUTE, startT.get(Calendar.MINUTE) + 10);
                            if (shows.get(j).getMovie().getId() == showtime.getMovie().getId()) {
                                getT.set(Calendar.HOUR_OF_DAY, getT.get(Calendar.HOUR) +1);
                                System.out.println(getT.getTime());
                                System.out.println(showtime.getDateStart());
                                if(getT.getTime().before(showtime.getDateStart())) {
                                    startT.set(Calendar.HOUR_OF_DAY, startT.get(Calendar.HOUR));
                                    showtime.setDateStart(startT.getTime());
                                    this.showtimeService.save(showtime);
                                    getT.set(Calendar.HOUR_OF_DAY, getT.get(Calendar.HOUR) - 1);
                                    startT.set(Calendar.MINUTE, startT.get(Calendar.MINUTE) - 10);
                                    return showtime;
                                }
                                else System.out.println("Jz");
                            }
                            else {
//                                List<Date> sbyMovie = showtimeService.findDatebyMovie(showtime.getMovie().getId());
//                                Date maxDatebyM = sbyMovie.stream().map(d -> d).max(Date::compareTo).get();
//                                Calendar cbyM = Calendar.getInstance();
//                                cbyM.setTime(maxDatebyM);
//                                cbyM.set(Calendar.HOUR_OF_DAY, cbyM.get(Calendar.HOUR) - 1);
//                                System.out.println(cbyM.getTime());
//                                System.out.println(showtime.getDateStart());
//                                System.out.println(showtime.getDateStart().after(cbyM.getTime()));
//                                if(showtime.getDateStart().after(cbyM.getTime()) == false) {
                                    showtime.setRoomEntity(roomService.get(rooms.get(i).getId()).get());
                                    return this.showtimeService.save(showtime);
//                                }
//                                else {
//                                    System.out.println("hon 1 tieng moi dc");
//                                    startT.set(Calendar.HOUR_OF_DAY, startT.get(Calendar.HOUR) + 1);
//                                }
//                                startT.set(Calendar.HOUR_OF_DAY, startT.get(Calendar.HOUR));
//                                showtime.setDateStart(startT.getTime());
//                                this.showtimeService.save(showtime);
//                                startT.set(Calendar.MINUTE, startT.get(Calendar.MINUTE) - 10);
//                                return showtime;
                            }
                        }
                        else {
//                            System.out.println("Loi nhe");
                        }
                    }
                }
            }
        }
        else {
            System.out.println("hehe sai roi, ve qua khu ma xem");
        }
        return null;
    }

    @PutMapping
    public ResponseEntity<Void> update(@RequestBody Showtime showtime) {
        this.showtimeService.update(showtime);
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping({"/{id}"})
    public ResponseEntity findOne(@PathVariable Long id) {
        return (ResponseEntity)this.showtimeService.get(id).map((showtime) -> {
            return new ResponseEntity(showtime, HttpStatus.OK);
        }).orElse(new ResponseEntity(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping({"/{id}"})
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        this.showtimeService.delete(id);
        return new ResponseEntity(HttpStatus.OK);
    }
}
