package vn.cinemahub.cinemahub.entities;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "REFUNDTICKET")
@EntityListeners(AuditingEntityListener.class)
public class RefundTicket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "RT_SEQ")
    @SequenceGenerator(sequenceName = "REFUND_SEQ", allocationSize = 1, name = "RT_SEQ")
    @Column(name = "ID")
    private Long id;

    @Column(name = "USERNAME")
    private String userName;

    @Column(name = "TOTAL")
    private long tong;

    @Column(name = "TIENPHAT")
    private long tienphat;

    @Column(name = "HOANTIEN")
    private long hoantien;

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

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public long getTong() {
        return tong;
    }

    public void setTong(long tong) {
        this.tong = tong;
    }

    public long getTienphat() {
        return tienphat;
    }

    public void setTienphat(long tienphat) {
        this.tienphat = tienphat;
    }

    public long getHoantien() {
        return hoantien;
    }

    public void setHoantien(long hoantien) {
        this.hoantien = hoantien;
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
