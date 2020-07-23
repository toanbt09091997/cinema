package vn.cinemahub.cinemahub.entities;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "TICKET")
@EntityListeners(AuditingEntityListener.class)
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "TK_SEQ")
    @SequenceGenerator(sequenceName = "TICKET_SEQ", allocationSize = 1, name = "TK_SEQ")
    @Column(name = "ID")
    private Long id;

    @Column(name = "TENPHIM")
    private String tenphim;

    @Column(name = "IDGHE")
    private long idGhe;

    @Column(name = "MARAP")
    private long marap;


    @Column(name = "LICHCHIEU")
    private long lichchieu;

    @Column(name = "GIAVE")
    private long giave;

    @Column(name = "STATUS")
    private int status;

    @Column(name = "TIMESTART")
    private String timeStart;

    @Column(name = "TIMEEND")
    private String timeEnd;

    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private Date createdAt;

    @LastModifiedDate
    @Column(name = "update_at")
    private Date updateAt;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTenphim() {
        return tenphim;
    }

    public void setTenphim(String tenphim) {
        this.tenphim = tenphim;
    }

    public long getIdGhe() {
        return idGhe;
    }

    public void setIdGhe(long idGhe) {
        this.idGhe = idGhe;
    }

    public long getMarap() {
        return marap;
    }

    public void setMarap(long marap) {
        this.marap = marap;
    }

    public long getGiave() {
        return giave;
    }

    public void setGiave(long giave) {
        this.giave = giave;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getTimeStart() {
        return timeStart;
    }

    public void setTimeStart(String timeStart) {
        this.timeStart = timeStart;
    }

    public String getTimeEnd() {
        return timeEnd;
    }

    public void setTimeEnd(String timeEnd) {
        this.timeEnd = timeEnd;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdateAt() {
        return updateAt;
    }

    public void setUpdateAt(Date updateAt) {
        this.updateAt = updateAt;
    }
}
