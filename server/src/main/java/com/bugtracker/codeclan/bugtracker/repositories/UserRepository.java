package com.bugtracker.codeclan.bugtracker.repositories;

import com.bugtracker.codeclan.bugtracker.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    List<User> findByBugsId(Long id);
    User findByAuth0Sub(String auth0Sub);

}
