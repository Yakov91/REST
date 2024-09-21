package ru.kata.spring.boot_security.demo.DAO;

import ru.kata.spring.boot_security.demo.models.User;

import java.util.List;

public interface UserDao {
    List<User> findAll();
    void save(User user);
    User findById(Long id);
    User findByEmail(String username);
    void deleteById(Long id);

}
