package vn.cinemahub.cinemahub.entities;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "CINEMAMOVIE")
@EntityListeners(AuditingEntityListener.class)
public class CinemaMovie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "CM_SEQ")
    @SequenceGenerator(sequenceName = "CINEMAMOVIE_SEQ", allocationSize = 1, name = "CM_SEQ")
    @Column(name = "ID")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "cinema_marap", referencedColumnName = "id")
    private Cinema cinema;

    public Cinema getCinema() {
        return cinema;
    }

    @ManyToOne
    @JoinColumn(name = "movie_maphim", referencedColumnName = "id")
    private Movie movie;

    public Movie getMovie() {
        return movie;
    }

//    @Column(name = "MARAP")
//    private int marap;
//
//    @Column(name = "MAPHIM")
//    private int maphim;

    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private Date createdAt;

    @LastModifiedDate
    @Column(name = "update_at")
    private Date updateAt;

    public CinemaMovie() {
    }

    @Override
    public String toString() {
        return "CinemaMovie{" +
                "id=" + id +
                ", cinema=" + cinema +
                ", movie=" + movie +
                ", createdAt=" + createdAt +
                ", updateAt=" + updateAt +
                '}';
    }

    public CinemaMovie(Long id, Cinema cinema, Movie movie, Date createdAt, Date updateAt) {
        this.id = id;
        this.cinema = cinema;
        this.movie = movie;
        this.createdAt = createdAt;
        this.updateAt = updateAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setCinema(Cinema cinema) {
        this.cinema = cinema;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
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
