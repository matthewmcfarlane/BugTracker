package com.bugtracker.codeclan.bugtracker.components;

import com.bugtracker.codeclan.bugtracker.models.Bug;
import com.bugtracker.codeclan.bugtracker.models.User;
import com.bugtracker.codeclan.bugtracker.repositories.BugRepository;
import com.bugtracker.codeclan.bugtracker.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    UserRepository userRepository;

    @Autowired
    BugRepository bugRepository;

    public DataLoader(){

    }

    public void run(ApplicationArguments args){
        User adam = new User("auth0|621627c01548de006813e14f", "Adam Kidd", "aKidd", "adamkidd3@gmail.com", "admin");
        userRepository.save(adam);

        User guilherme = new User("456def", "Guilherme Nunes", "gNunes", "gn@example.com", "admin");
        userRepository.save(guilherme);

        User matthew = new User("auth0|621414a817a9a800711359ad","Matthew McFarlane", "matthewmcfarlane1", "matthewmcfarlane1@outlook.com", "admin");
        userRepository.save(matthew);

        User scott = new User("auth0|6215372917a9a800711391c3","Scott Reoch", "sReoch", "sr@example.com", "admin");
        userRepository.save(scott);

        User clark = new User("111mno","Clark Kent", "cKent", "ck@example.com", "user");
        userRepository.save(clark);

        User bruce = new User("121pqr", "Bruce Wayne", "bWayne", "bw@example.com", "user");
        userRepository.save(bruce);

        User barry = new User("131stu","Barry Allen", "bAllen", "ba@example.com", "user");
        userRepository.save(barry);

        User oliver = new User("141vxz","Oliver Queen", "oQueen", "oq@example.com", "user");
        userRepository.save(oliver);


        Bug bug1 = new Bug("Cannot check the naughty list", "high", adam);
        bug1.addAssignee(adam);
        bug1.addAssignee(guilherme);
        bug1.setDateReported(LocalDate.of(2021, 12, 25));
        bugRepository.save(bug1);

        Bug bug2 = new Bug("Logo does not show", "low", matthew);
        bug2.addAssignee(matthew);
        bug2.setDateReported(LocalDate.of(2020, 10, 12));
        bugRepository.save(bug2);

        Bug bug3 = new Bug("NavBar is not responsive", "medium", scott);
        bug3.addAssignee(clark);
        bug3.setDateReported(LocalDate.of(2020, 8, 7));
        bugRepository.save(bug3);

        Bug bug4 = new Bug("Sign-up form does not work", "high", guilherme);
        bug4.addAssignee(bruce);
        bug4.setDateReported(LocalDate.of(2021, 2, 5));
        bugRepository.save(bug4);

        Bug bug5 = new Bug("User does not stay logged in", "low", guilherme);
        bug5.addAssignee(barry);
        bug5.setDateReported((LocalDate.of(2021, 1, 26)));
        bugRepository.save(bug5);

        Bug bug6 = new Bug("Footer does not render", "high", matthew);
        bug6.addAssignee(oliver);
        bug6.setDateReported(LocalDate.of(2020, 12, 28));
        bugRepository.save(bug6);

        Bug bug7 = new Bug("Careers page does not render content", "low", clark);
        bug7.addAssignee(guilherme);
        bugRepository.save(bug7);

        Bug bug8 = new Bug("Notifications are intermittent", "medium", bruce);
        bug8.addAssignee(matthew);
        bugRepository.save(bug8);

    }
}
