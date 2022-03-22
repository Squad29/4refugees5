package com.forRefugees.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.forRefugees.Repository.RefugiadosRepository;
import com.forRefugees.model.Refugiados;

@Service
public class RefugiadosService {
	
	@Autowired
	RefugiadosRepository repository;
	
	@Transactional(readOnly=true)
	public Page<Refugiados> findRefugi(Pageable pageable) {
		Page<Refugiados> ref = repository.findAll(pageable);
		return ref;
	}

}
