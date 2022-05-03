package ca.uwindsor.ase.localservicemarket.controller;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    @RequestMapping
    public String index() {
        return "<h1>Welcome Test!</h1>";
    }
}
