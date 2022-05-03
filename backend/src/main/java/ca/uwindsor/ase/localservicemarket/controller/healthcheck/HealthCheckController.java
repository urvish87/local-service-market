package ca.uwindsor.ase.localservicemarket.controller.healthcheck;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthCheckController {

    @RequestMapping("health")
    public String healthCheck() {
        return "OK";
    }
}
