package vn.cinemahub.cinemahub.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.cinemahub.cinemahub.entities.RefundTicket;
import vn.cinemahub.cinemahub.serviceImpl.RefundTicketServiceImpl;

import java.util.Date;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping({"/api/refundTicket"})
public class RefundTicketResource {

    @Autowired
    private RefundTicketServiceImpl refundTicketService;

    @GetMapping
    public List<RefundTicket> findAll() {
        return refundTicketService.findAll();
    }

    @PostMapping
    public RefundTicket save(@RequestBody RefundTicket refundTicket) {
        Date date = new Date();
        refundTicket.setCreatedAt(date);
        refundTicket.setUpdateAt(date);
        return this.refundTicketService.save(refundTicket);
    }

    @PutMapping
    public ResponseEntity<Void> update(@RequestBody RefundTicket refundTicket) {
        this.refundTicketService.update(refundTicket);
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping({"/{id}"})
    public ResponseEntity findOne(@PathVariable Long id) {
        return (ResponseEntity)this.refundTicketService.get(id).map((refundTicket) -> {
            return new ResponseEntity(refundTicket, HttpStatus.OK);
        }).orElse(new ResponseEntity(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping({"/{id}"})
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        this.refundTicketService.delete(id);
        return new ResponseEntity(HttpStatus.OK);
    }
}
