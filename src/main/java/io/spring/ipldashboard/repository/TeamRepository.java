package io.spring.ipldashboard.repository;

import org.springframework.data.repository.CrudRepository;

import io.spring.ipldashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long> {

  Team findByTeamName(String teamName);
}
