package vn.cinemahub.cinemahub.rest;

import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/user")
public class UserResource {
//    @Autowired
//    private UserService userService;
//
//    @GetMapping
//    public List<User> findAll() {
//        return userService.findAll();
//    }
//    Date date = new Date();
//    @PostMapping
//    public User save(@RequestBody User user) {
//        user.setCreatedAt(date);
//        user.setUpdateAt(date);
//        return  userService.save(user);
//    }
//
//    @PutMapping
//    public ResponseEntity<Void> update(@RequestBody User user) {
//        userService.update(user);
//        return new ResponseEntity<>(HttpStatus.OK);
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<User> findOne(@PathVariable Long id) {
//        return userService.findOne(id).map(user -> new ResponseEntity<>(user, HttpStatus.OK))
//                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> delete(@PathVariable Long id) {
//        userService.delete(id);
//        return new ResponseEntity<>(HttpStatus.OK);
//    }
}
