package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "magos", path = "magos")
public interface MagoRepository extends CrudRepository<Mago, Long> {

}