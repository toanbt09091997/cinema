package vn.cinemahub.cinemahub.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vn.cinemahub.cinemahub.entities.Cinema;
import vn.cinemahub.cinemahub.entities.GheEntity;
import vn.cinemahub.cinemahub.entities.Movie;
import vn.cinemahub.cinemahub.entities.RoomEntity;
import vn.cinemahub.cinemahub.serviceImpl.MovieService;
import vn.cinemahub.cinemahub.serviceImpl.RoomServiceImpl;
import vn.cinemahub.cinemahub.serviceImpl.SeatServiceImpl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/insert")
public class DataResource {

    @Autowired
    private CinemaResource cinemaResource;

    @Autowired
    private MovieService movieService;

    @Autowired
    private RoomServiceImpl roomService;

    @Autowired
    private SeatServiceImpl seatService;

    @GetMapping
    public List<Cinema> Insert() {
        List<Cinema> cinemas = new ArrayList<>();
        Cinema c1 = new Cinema(1,"CGV Vincom Center Bà Triệu",
                "Tầng 6, Toà nhà VinCom Center Hà Nội 191 đường Bà Triệu Quận Hai Bà Trưng Hà Nội","Rạp phim chất lượng cao",1);
        Cinema c2 = new Cinema(2,"CGV Hồ Gươm Plaza",
                "Tầng 3, TTTM Hồ Gươm Plaza, 110 Trần Phú, Phường Mỗ Lao, Quận Hà Đông, Hà Nội","Rạp phim chất lượng cao",1);
        Cinema c3 = new Cinema(3,"CGV Vincom Trần Duy Hưng",
                "Tầng 5 - TTTM VINCOM CENTER TRẦN DUY HUNG, Đường Trần Duy Hưng, P. Trung Hòa, Q. Cầu Giấy, Hà Nội.","Rạp phim chất lượng cao",1);
        Cinema c4 = new Cinema(4,"CGV Aeon Hà Đông",
                "Tầng 3 & 4 – TTTM AEON MALL HÀ ĐÔNG, P. Dương Nội, Q. Hà Đông, Hà Nội","Rạp phim chất lượng cao",1);
        Cinema c5 = new Cinema(5,"CGV Vincom Long Biên",
                "Tầng 5, TTTM Vincom Plaza Long Biên, khu đô thị Vinhomes Riverside, Phường Phúc Lợi, Quận Long Biên, Hà Nội", "Rạp phim chất lượng cao",1);
        cinemas.addAll(Arrays.asList(c1,c2,c3,c4,c5));


        List<Movie> movies = new ArrayList<>();
        Movie m1 = new Movie(1,"SKY TOUR","2D","Hòa nhạc",110,2020,
                "https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/a/r/artboard_1.jpg","https://youtu.be/t7m1iqs_b-U","Lần đầu tiên tại Việt Nam, một nghệ sĩ phát hành bộ phim tài liệu âm nhạc về tour diễn của mình trên màn ảnh rộng. Bộ phim hứa hẹn sẽ đem đến cho khán giả những khoảnh khắc đẹp đẽ nhất về sự kiện âm nhạc đình đám nhất năm 2019, khi Sơn Tùng M-TP “cháy\" hết mình cùng hàng nghìn người hâm mộ trong âm nhạc và cả những cảnh hậu trường ghi lại toàn bộ quá trình chuẩn bị và sản xuất SKY TOUR.",1,c1);
        Movie m2 = new Movie(2,"FUKUSHIMA 50: THẢM HỌA KÉP","2D","Tâm Lý",113,2020,
                "https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/f/u/fukushima_50_-_payoff_poster_12062020_-_fb.jpg","https://youtu.be/zHk6XpKC04U","Fukushima 50 là tác phẩm điện ảnh tái hiện lại trận động đất 9.0 độ richter xảy ra tại Fukushima, kéo theo sau đó là cơn sóng thần với độ cao khủng khiếp, phá hủy nhà máy điện hạt nhân Daiichi. Không còn cách nào khác, 50 công nhân tại nhà máy đã không màng hiểm nguy để ở lại, tìm cách làm nguội các lò phản ứng nhằm ngăn chặn nguy cơ xảy ra một trong những sự cố hạt nhân kinh khủng nhất lịch sử loài người.",1,c1);
        Movie m3 = new Movie(3,"CĂN PHÒNG ĐẪM MÁU","2D","Kinh Dị",127,2020,
                "https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/m/a/main-poster_1_.jpg","https://youtu.be/vLVIH5-JiUg","Những câu chuyện kỳ lạ xung quanh khách sạn Bờ Hồ khiến người ta hóa điên. Tại khách sạn này, có 3 điều tuyệt đối không được làm: không được ngước nhìn lên, không được đi một mình và không được bước vào phòng 405.",1,c1);
        Movie m4 = new Movie(4,"GIẢI CỨU CÂY ƯỚC NGUYỆN","2D","Hoạt Hình",112,2020,
                "https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/d/_/d_main-poster_wt_1_.jpg","https://youtu.be/78gAlE5nVLw","Cô bé chồn túi Kerry đã vô ý làm đóng băng cả thành phố Thiên Đường Muông Thú, và khiến cuộc sống nơi đây hoàn toàn đảo lộn khi hái xuống bông hoa cuối cùng của Cây Ước Nguyện. Để chuộc lại lỗi lầm và bảo vệ thành phố khỏi sự diệt vong, Kerry lên đường đi đến vùng đất Hoang Dã đầy nguy hiểm để cứu lấy Cây Ước Nguyện linh thiêng.",1,c1);
        Movie m5 = new Movie(5,"GIA TÀI TỘI LỖI","2D","Bí ẩn, Kịch tính",124,2020,
                "https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/g/i/gia_tai_toi_loi___poster_1_.jpg","https://youtu.be/lY_1ptUWQFw","Gia Tài Tội Lỗi kể về một tộc trưởng của một gia đình giàu có và quyền lực đột nhiên qua đời, để lại cho vợ và các con của ông khối tài sản kế thừa không lồ. Tuy nhiên, thật kỳ lạ là người con gái yêu quý duy nhất của ông lại chỉ được thừa hưởng một chiếc chìa khóa đầy bí ẩn?",1,c1);
        movies.addAll(Arrays.asList(m1,m2,m3,m4,m5));

        List<RoomEntity> rooms = new ArrayList<>();
        RoomEntity r = new RoomEntity(1, c1);
        RoomEntity r1 = new RoomEntity(2, c1);
        RoomEntity r2 = new RoomEntity(3, c1);
        RoomEntity r3 = new RoomEntity(4, c1);
        RoomEntity r4 = new RoomEntity(5, c1);
        rooms.addAll(Arrays.asList(r,r1,r2,r3,r4));

        Date date = new Date();

        for (Cinema cinema : cinemas) {
            cinema.setCreatedAt(date);
            cinema.setUpdateAt(date);
            cinema.setStatus(1);
            cinemaResource.save(cinema);
        }
        for (Movie movie : movies) {
            movie.setCreatedAt(date);
            movie.setUpdateAt(date);
            movie.setStatus(1);
            movieService.save(movie);
        }
        for (RoomEntity roomEntity : rooms) {
            roomEntity.setCreatedAt(date);
            roomEntity.setUpdateAt(date);
            roomEntity.setStatus(1);
            roomService.save(roomEntity);
        }
        String[] abc = {"A","B","C","E","G","H"};
        for (int i = 0; i < abc.length; i++) {
            for (int j = 1; j < 13; j++) {
                GheEntity g = new GheEntity(abc[i]+j,1,r);
                GheEntity g2 = new GheEntity(abc[i]+j,1,r1);
                GheEntity g3 = new GheEntity(abc[i]+j,1,r2);
                GheEntity g4 = new GheEntity(abc[i]+j,1,r3);
                GheEntity g5 = new GheEntity(abc[i]+j,1,r4);
                if(g.getTenghe().equals("A"+j) ||g.getTenghe().equals("B"+j)) {
                    g.setLoaighe(2);
                }
                else if(g.getTenghe().equals("G"+j) || g.getTenghe().equals("H"+j)) {
                    g.setLoaighe(3);
                }
                g.setCreatedAt(date);
                g.setUpdateAt(date);
                g.setStatus(1);
                g2.setCreatedAt(date);
                g2.setUpdateAt(date);
                g2.setStatus(1);
                g3.setCreatedAt(date);
                g3.setUpdateAt(date);
                g3.setStatus(1);
                g4.setCreatedAt(date);
                g4.setUpdateAt(date);
                g4.setStatus(1);
                g5.setCreatedAt(date);
                g5.setUpdateAt(date);
                g5.setStatus(1);
                seatService.save(g);
                seatService.save(g2);
                seatService.save(g3);
                seatService.save(g4);
                seatService.save(g5);

            }
        }
        return cinemaResource.findAll();
    }
}
