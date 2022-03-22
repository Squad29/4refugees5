package com.forRefugees.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.forRefugees.model.Refugiados;

@Repository
public interface RefugiadosRepository extends JpaRepository<Refugiados, Long>{

}
