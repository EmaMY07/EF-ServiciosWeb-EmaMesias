package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "varitas", path = "varitas")
public interface VaritaRepository extends CrudRepository<Varita, Long> {

}