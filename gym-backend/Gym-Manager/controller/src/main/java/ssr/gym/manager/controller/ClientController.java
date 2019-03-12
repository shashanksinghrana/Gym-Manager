package ssr.gym.manager.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ssr.gym.manager.dto.ClientDto;
import ssr.gym.manager.service.ClientService;

@RestController
@RequestMapping("/api")
public class ClientController {
	
	@Autowired
	private ClientService clientService;
	
	@GetMapping(value = "/clients", produces={MediaType.APPLICATION_JSON_VALUE})
	public ClientDto getAllClients(){
		return clientService.getAllClients();
		
	}

}
