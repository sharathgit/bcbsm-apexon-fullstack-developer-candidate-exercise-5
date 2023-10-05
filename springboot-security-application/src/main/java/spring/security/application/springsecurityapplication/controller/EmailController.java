package spring.security.application.springsecurityapplication.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import spring.security.application.springsecurityapplication.bean.Email;
import spring.security.application.springsecurityapplication.jpa.EmailRepository;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/emails")
public class EmailController {

    @Autowired
    private EmailRepository emailRepository;

    @PostMapping("/send")
    public ResponseEntity<String> sendEmail(@RequestBody Email email) {
        // Logic for sending email
        email.setUploadDate(new Date());
        emailRepository.save(email);
        return ResponseEntity.ok("Email sent and details stored successfully!");
    }
}
