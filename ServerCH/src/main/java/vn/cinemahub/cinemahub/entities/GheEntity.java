package vn.cinemahub.cinemahub.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "SEAT")
@EntityListeners(AuditingEntityListener.class)
public class GheEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "ST_SEQ")
    @SequenceGenerator(sequenceName = "SEAT_SEQ", allocationSize = 1, name = "ST_SEQ")
    @Column(name = "ID")
    private Long id;

    @Column(name = "TENGHE")
    private String tenghe;

    @Column(name = "LOAIGHE")
    private int loaighe;

    @Column(name = "STATUS")
    private int status;

    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private Date createdAt;

    @LastModifiedDate
    @Column(name = "update_at")
    private Date updateAt;

    public GheEntity(String tenghe, int loaighe, RoomEntity roomEntity) {
        this.tenghe = tenghe;
        this.loaighe = loaighe;
        this.roomEntity = roomEntity;
    }

    public GheEntity() {
    }

    @ManyToOne
    @JoinColumn(name = "room_id")
    private RoomEntity roomEntity;

    public RoomEntity getRoomEntity() {
        return roomEntity;
    }

    public void setRoomEntity(RoomEntity roomEntity) {
        this.roomEntity = roomEntity;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTenghe() {
        return tenghe;
    }

    public void setTenghe(String tenghe) {
        this.tenghe = tenghe;
    }

    public int getLoaighe() {
        return loaighe;
    }

    public void setLoaighe(int loaighe) {
        this.loaighe = loaighe;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
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
