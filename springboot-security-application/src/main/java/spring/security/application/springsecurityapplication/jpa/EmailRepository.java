package spring.security.application.springsecurityapplication.jpa;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import spring.security.application.springsecurityapplication.bean.Email;

@Repository
public interface EmailRepository extends MongoRepository<Email, String> {

    public void save(Email email);

}
