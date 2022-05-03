package ca.uwindsor.ase.localservicemarket.repository;

import ca.uwindsor.ase.localservicemarket.entity.ServiceProvider;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceProviderRepository extends JpaRepository<ServiceProvider, Integer> {
    public ServiceProvider findByName (String title);
}