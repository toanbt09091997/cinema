package vn.cinemahub.cinemahub.rest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.cinemahub.cinemahub.entities.Ticket;
import vn.cinemahub.cinemahub.serviceImpl.TicketServiceImpl;

import java.util.Date;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping({"/api/ticket"})
public class TicketResource {
    private final TicketServiceImpl ticketService;

    public TicketResource(TicketServiceImpl ticketService) {

        this.ticketService = ticketService;
    }

    @GetMapping
    public List<Ticket> findAll() {
        return ticketService.findAll();
    }

    @PostMapping
    public Ticket save(@RequestBody Ticket ticket) {
        Date date = new Date();
        ticket.setCreatedAt(date);
        ticket.setUpdateAt(date);
        ticket.setStatus(1);
        return this.ticketService.save(ticket);
    }

    @PutMapping
    public ResponseEntity<Void> update(@RequestBody Ticket ticket) {
        this.ticketService.update(ticket);
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping({"/{id}"})
    public ResponseEntity findOne(@PathVariable Long id) {
        return (ResponseEntity)this.ticketService.get(id).map((ticket) -> {
            return new ResponseEntity(ticket, HttpStatus.OK);
        }).orElse(new ResponseEntity(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping({"/{id}"})
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        this.ticketService.delete(id);
        return new ResponseEntity(HttpStatus.OK);
    }
}
