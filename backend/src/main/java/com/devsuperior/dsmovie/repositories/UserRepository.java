package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.entities.User;

//salva, deleta, busca e altera filmes (movies)
public interface UserRepository extends JpaRepository<User,Long> {
	
	User findByEmail(String email);//faz uma busca por email, implementa automaticamente pelo spring
}
