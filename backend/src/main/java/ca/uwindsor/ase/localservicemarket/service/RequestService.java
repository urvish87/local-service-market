package ca.uwindsor.ase.localservicemarket.service;

import ca.uwindsor.ase.localservicemarket.entity.Request;
import ca.uwindsor.ase.localservicemarket.entity.ServiceSeeker;
import ca.uwindsor.ase.localservicemarket.repository.RequestsRepository;
import ca.uwindsor.ase.localservicemarket.repository.ServiceSeekerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RequestService {
    @Autowired
    RequestsRepository requestsRepository;

    public boolean addServiceRequest(Request requestObj) {
        requestsRepository.save(requestObj);
        return true;
    }
}

