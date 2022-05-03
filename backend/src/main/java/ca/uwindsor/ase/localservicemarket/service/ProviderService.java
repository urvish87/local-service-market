package ca.uwindsor.ase.localservicemarket.service;

import ca.uwindsor.ase.localservicemarket.entity.ServiceProvider;
import ca.uwindsor.ase.localservicemarket.repository.ServiceProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class ProviderService {
    @Autowired
    ServiceProviderRepository serviceProviderRepository;
    public ServiceProvider getProviderByName(String providerName){
        ServiceProvider serviceProvider= serviceProviderRepository.findByName(providerName);
        if(!Objects.isNull(serviceProvider)) {
            return serviceProvider;
        }
        else{
            return new ServiceProvider();
        }

    }
    public boolean addServiceProvider( ServiceProvider serviceProvider) {

        serviceProviderRepository.save(serviceProvider);
    return true;
    }
}

