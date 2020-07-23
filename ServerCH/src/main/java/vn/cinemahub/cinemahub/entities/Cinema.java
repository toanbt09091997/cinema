package vn.cinemahub.cinemahub.entities;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "CINEMA")
@EntityListeners(AuditingEntityListener.class)
public class Cinema implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "CIA_SEQ")
    @SequenceGenerator(sequenceName = "CINEMA_SEQ", allocationSize = 1, name = "CIA_SEQ")
    @Column(name = "ID")
    private Long id;

    @Column(name = "MARAP")
    private int marap;

    @Column(name = "TENRAP")
    private String tenrap;

    @Column(name = "DIACHI")
    private String diachi;

    @Column(name = "GIOITHIEU")
    private String gioithieu;

    @Column(name = "STATUS")
    private int status;

    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private Date createdAt;

    @LastModifiedDate
    @Column(name = "update_at")
    private Date updateAt;

    public Cinema() {
    }

    public Cinema(int marap, String tenrap, String diachi, String gioithieu, int status) {
        this.marap = marap;
        this.tenrap = tenrap;
        this.diachi = diachi;
        this.gioithieu = gioithieu;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getMarap() {
        return marap;
    }

    public void setMarap(int marap) {
        this.marap = marap;
    }

    public String getTenrap() {
        return tenrap;
    }

    public void setTenrap(String tenrap) {
        this.tenrap = tenrap;
    }

    public String getDiachi() {
        return diachi;
    }

    public void setDiachi(String diachi) {
        this.diachi = diachi;
    }

    public String getGioithieu() {
        return gioithieu;
    }

    public void setGioithieu(String gioithieu) {
        this.gioithieu = gioithieu;
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
