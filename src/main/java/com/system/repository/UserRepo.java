package com.system.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.system.entity.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {

	 User findByEmail(String email);
	
}
