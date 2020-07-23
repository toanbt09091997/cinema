package vn.cinemahub.cinemahub.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import vn.cinemahub.cinemahub.entities.RoomEntity;
import vn.cinemahub.cinemahub.repository.RoomRepository;
import vn.cinemahub.cinemahub.service.DAO;

import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class RoomServiceImpl implements DAO<RoomEntity> {
    @Autowired
    private RoomRepository roomRepository;

    @Override
    public List<RoomEntity> findAll() {
        return roomRepository.findAll();
    }

    @Override
    public Optional<RoomEntity> get(Long id) {
        return roomRepository.findById(id);
    }

    @Override
    public RoomEntity save(RoomEntity roomEntity) {
        return roomRepository.save(roomEntity);
    }

    @Override
    public void update(RoomEntity roomEntity) {
        roomRepository.save(roomEntity);
    }

    @Override
    public void delete(Long id) {
        roomRepository.deleteById(id);
    }

    public Optional<RoomEntity> findbyMaphong(int maphong) {
        return roomRepository.findbyMaphong(maphong);
    }
}
