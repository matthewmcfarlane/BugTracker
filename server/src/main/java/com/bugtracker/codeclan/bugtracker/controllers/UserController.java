package com.bugtracker.codeclan.bugtracker.controllers;

import com.bugtracker.codeclan.bugtracker.models.User;
import com.bugtracker.codeclan.bugtracker.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping(value = "/users")
    public ResponseEntity<List<User>> getAllUsers(
            @RequestParam(name = "bug_id", required = false) Long id
    ){
        if(id != null)  {
            return new ResponseEntity(userRepository.findByBugsId(id),HttpStatus.OK);
        }

        return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
    }

//    @GetMapping(value = "/users/{id}")
//    public ResponseEntity getUserById(@PathVariable Long id){
//        return new ResponseEntity(userRepository.findById(id), HttpStatus.OK);
//    }

    @GetMapping(value = "/users/{auth0Sub}")
    public ResponseEntity getUserByAuth0Sub(@PathVariable String auth0Sub){
        return new ResponseEntity(userRepository.findByAuth0Sub(auth0Sub), HttpStatus.OK);
    }

    @PostMapping(value = "/users")
    public ResponseEntity<User> postUser(@RequestBody User user){
        User foundUser = userRepository.findByAuth0Sub(user.getAuth0Sub());
        if (foundUser == null) {
            userRepository.save(user);
            return new ResponseEntity<>(user, HttpStatus.CREATED);
        }
        else {
            foundUser.setName(user.getName());
            foundUser.setNickname(user.getNickname());
            foundUser.setEmail(user.getEmail());
            foundUser.setRole(user.getRole());
            return new ResponseEntity<>(foundUser, HttpStatus.OK);
        }
    }

}
