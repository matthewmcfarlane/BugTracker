package com.bugtracker.codeclan.bugtracker.repositories;

import com.bugtracker.codeclan.bugtracker.models.Bug;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BugRepository extends JpaRepository<Bug, Long> {

    List<Bug> findByAssigneesId(Long id);

}
