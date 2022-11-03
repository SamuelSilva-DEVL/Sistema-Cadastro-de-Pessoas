package com.projeto.restapi;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.fasterxml.jackson.datatype.jdk8.OptionalDoubleSerializer;
import com.projeto.restapi.database.RepositorioPessoa;
import com.projeto.restapi.entidade.Pessoa;
import com.projeto.restapi.service.PessoaService;

@RestController
@CrossOrigin("*")
@RequestMapping
public class PessoaREST {
  @Autowired
  private RepositorioPessoa repositorio;

  @GetMapping("/pessoas")
  public List<Pessoa> listar() {
    return (List<Pessoa>) repositorio.findAll();
  }

  @GetMapping("/{id}")
  public ResponseEntity<Optional<Pessoa>> findById(@PathVariable Long id) {
    Optional<Pessoa> pessoa = repositorio.findById(id);
    return ResponseEntity.ok().body(pessoa);
  }

  @PostMapping("/cadastrar")
  public void salvar(@RequestBody Pessoa pessoa) {
    repositorio.save(pessoa);
  }

  @DeleteMapping("/{id}")
  public void remover(@PathVariable long id) {
    repositorio.deleteById(id);
  }
}
