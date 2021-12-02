package br.com.rd.MestreDasFacas.repository.contract;


import org.springframework.data.jpa.repository.JpaRepository;
import br.com.rd.MestreDasFacas.model.entity.Contact;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {
}

