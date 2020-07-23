package vn.cinemahub.cinemahub.entities;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.io.Serializable;
import java.util.*;

@Entity
@Table(name = "MOVIE")
@EntityListeners(AuditingEntityListener.class)
public class Movie implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "MV_SEQ")
    @SequenceGenerator(sequenceName = "MOVIE_SEQ", allocationSize = 1, name = "MV_SEQ")
    @Column(name = "ID")
    private Long id;

    @Column(name = "MAPHIM")
    private int maphim;

    @Column(name = "TENPHIM")
    private String tenphim;

    @Column(name = "LOAIPHIM")
    private String loaiphim;

    @Column(name = "THELOAI")
    private String theloai;

    @Column(name = "MINUTES")
    private int minutes;

    @Column(name = "NAMSX")
    private int namsx;

    @Column(name = "IMAGE")
    private String image;

//    @Column(name = "TRAILER")
//    private String trailer;

    @Column(name = "DES", length = 500)
    private String mota;

    @Column(name = "STATUS")
    private int status;

    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private Date createdAt;

    @LastModifiedDate
    @Column(name = "update_at")
    private Date updateAt;

    @ManyToOne
    @JoinColumn(name = "cinema_id", referencedColumnName = "id")
    private Cinema cinema;

    public Cinema getCinema() {
        return cinema;
    }

    public void setCinema(Cinema cinema) {
        this.cinema = cinema;
    }

    public Movie() {
    }

    public Movie(int maphim, String tenphim, String loaiphim, String theloai, int minutes, int namsx, String image, String trailer, String mota, int status, Cinema cinema) {
        this.maphim = maphim;
        this.tenphim = tenphim;
        this.loaiphim = loaiphim;
        this.theloai = theloai;
        this.minutes = minutes;
        this.namsx = namsx;
        this.image = image;
//        this.trailer = trailer;
        this.mota = mota;
        this.status = status;
        this.cinema = cinema;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getMaphim() {
        return maphim;
    }

    public void setMaphim(int maphim) {
        this.maphim = maphim;
    }

    public String getTenphim() {
        return tenphim;
    }

    public void setTenphim(String tenphim) {
        this.tenphim = tenphim;
    }

    public String getLoaiphim() {
        return loaiphim;
    }

    public void setLoaiphim(String loaiphim) {
        this.loaiphim = loaiphim;
    }

    public String getTheloai() {
        return theloai;
    }

    public void setTheloai(String theloai) {
        this.theloai = theloai;
    }

    public int getMinutes() {
        return minutes;
    }

    public void setMinutes(int minutes) {
        this.minutes = minutes;
    }

    public int getNamsx() {
        return namsx;
    }

    public void setNamsx(int namsx) {
        this.namsx = namsx;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

//    public String getTrailer() {
//        return trailer;
//    }
//
//    public void setTrailer(String trailer) {
//        this.trailer = trailer;
//    }

    public String getMota() {
        return mota;
    }

    public void setMota(String mota) {
        this.mota = mota;
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
