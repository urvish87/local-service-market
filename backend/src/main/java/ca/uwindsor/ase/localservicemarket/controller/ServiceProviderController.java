package ca.uwindsor.ase.localservicemarket.controller;

import ca.uwindsor.ase.localservicemarket.entity.RequestServiceProvider;
import ca.uwindsor.ase.localservicemarket.entity.ServiceProvider;
import ca.uwindsor.ase.localservicemarket.repository.ServiceProviderRepository;
import ca.uwindsor.ase.localservicemarket.service.ProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("/")
public class ServiceProviderController {

    @Autowired
    public ProviderService providerService;

    @GetMapping("getProviderServices")
    public ResponseEntity<ServiceProvider> getAllServices(@RequestParam("name") String providerName){
        System.out.println(providerName);

        return new ResponseEntity<>(providerService.getProviderByName(providerName), HttpStatus.OK);


    }

   @PostMapping("addProviderServices")
    public ResponseEntity<ServiceProvider> addProvider(@RequestBody() RequestServiceProvider service){
           ServiceProvider serviceProvider = new ServiceProvider(service.getName(),service.getTitle(),service.getDescription(),service.getVolunteer(),service.getSkill());
        providerService.addServiceProvider(serviceProvider);
           return new ResponseEntity<>(serviceProvider,HttpStatus.OK);
    }

}
