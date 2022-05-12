package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.entities.Score;
import com.devsuperior.dsmovie.entities.ScorePK;

//salva, deleta, busca e altera filmes (movies)
public interface ScoreRepository extends JpaRepository<Score,ScorePK> {
	
}
