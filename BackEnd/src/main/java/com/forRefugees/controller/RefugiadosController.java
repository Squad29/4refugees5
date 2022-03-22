package com.forRefugees.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.forRefugees.dto.RefugiadosDTO;
import com.forRefugees.services.RefugiadosService;

@RestController
@RequestMapping("/refugiados")
@CrossOrigin(origins = "*")
public class RefugiadosController {

	@Autowired
	RefugiadosService services;
	
	@GetMapping
	public Page<RefugiadosDTO> findAllRefuges(Pageable pageable) {
		return services.findRefugi(pageable);
	}
}
