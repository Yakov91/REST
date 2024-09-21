package ru.kata.spring.boot_security.demo.DAO;

import ru.kata.spring.boot_security.demo.models.Role;

import java.util.Set;

public interface RoleDao {
    Set<Role> findAll();
    void save(Role role);
}
