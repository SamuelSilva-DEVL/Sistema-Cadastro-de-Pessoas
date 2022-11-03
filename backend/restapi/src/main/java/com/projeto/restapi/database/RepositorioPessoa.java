package com.projeto.restapi.database;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.projeto.restapi.entidade.Pessoa;

public interface RepositorioPessoa extends CrudRepository<Pessoa, Long> {

}
