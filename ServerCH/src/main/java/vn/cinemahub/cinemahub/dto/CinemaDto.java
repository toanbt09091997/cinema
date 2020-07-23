package vn.cinemahub.cinemahub.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CinemaDto {
    private Long cinemaCode;
    private String cinemaName;
    private String address;
    private Double description;
    private Double status;
}
