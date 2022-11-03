package com.projeto.restapi.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.QAbstractAuditable;
import org.springframework.stereotype.Service;

import com.projeto.restapi.database.RepositorioPessoa;
import com.projeto.restapi.entidade.Pessoa;

@Service
public class PessoaService {

  @Autowired
  private RepositorioPessoa repositorio;

  public Pessoa findById(Long id) {
    Optional<Pessoa> pessoa = repositorio.findById(id);
    return pessoa.orElse(null);
  }

  public void removerPessoa(Long id) {
    repositorio.deleteById(id);
  }

}
