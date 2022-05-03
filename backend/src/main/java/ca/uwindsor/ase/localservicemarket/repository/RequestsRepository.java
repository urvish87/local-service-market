package ca.uwindsor.ase.localservicemarket.repository;

import ca.uwindsor.ase.localservicemarket.entity.Request;
import ca.uwindsor.ase.localservicemarket.entity.ServiceSeeker;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RequestsRepository extends JpaRepository<Request, Integer> {
    //public ServiceSeeker findById (int serviceSeekerId);

    //public boolean addServiceRequest(Request requestObj);
}