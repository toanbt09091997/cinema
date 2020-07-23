package vn.cinemahub.cinemahub.dao;

import org.springframework.data.repository.CrudRepository;
import vn.cinemahub.cinemahub.entities.User;

public interface UserDao extends CrudRepository<User, Long> {
    User findByUsername(String username);
}
