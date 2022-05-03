package ca.uwindsor.ase.localservicemarket.controller;

import ca.uwindsor.ase.localservicemarket.entity.Request;
import ca.uwindsor.ase.localservicemarket.service.RequestService;
import ca.uwindsor.ase.localservicemarket.service.SeeekerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
public class ServiceSeekerController {
    @Autowired
    SeeekerService seeekerService;

    @Autowired
    RequestService requestService;

    @RequestMapping(value="addServiceRequest",method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity<Request> addProvider(@RequestBody() Request request){
        Request requestObj = new Request(request.getTitle(), request.getYoutubeLink(),
                request.getDescription(), request.getRequestStatusId(), request.getRequestDate(),
                request.getCloseDate(),request.getServiceSeekerId(), request.getServiceProviderId());

        requestService.addServiceRequest(requestObj);
        return new ResponseEntity<Request>(request, HttpStatus.OK);
    }
}
