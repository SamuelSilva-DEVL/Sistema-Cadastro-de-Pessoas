package com.projeto.restapi.entidade;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Pessoa {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;
  @Column(name = "nome", length = 100, nullable = false)
  private String nome;
  @Column(name = "cpf", length = 20, nullable = false)
  private String cpf;
  @Column(name = "rg", length = 30, nullable = false)
  private String rg;
  @Column(name = "dataNascimento", length = 30)
  private String dataNascimento;
  @Column(name = "nomeMae", length = 100)
  private String nomeMae;
  private LocalDate dataCadastro = LocalDate.now();

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getNome() {
    return nome;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public String getCpf() {
    return cpf;
  }

  public void setCpf(String cpf) {
    this.cpf = cpf;
  }

  public String getRg() {
    return rg;
  }

  public void setRg(String rg) {
    this.rg = rg;
  }

  public String getDataNascimento() {
    return dataNascimento;
  }

  public void setDataNascimento(String dataNascimento) {
    this.dataNascimento = dataNascimento;
  }

  public String getNomeMae() {
    return nomeMae;
  }

  public void setNomeMae(String nomeMae) {
    this.nomeMae = nomeMae;
  }
  // public LocalDate getDataNascimento() {
  // return dataNascimento;
  // }

  // public void setDataNascimento(LocalDate dataNascimento) {
  // this.dataNascimento = dataNascimento;
  // }

  // public String getNomeMae() {
  // return nomeMae;
  // }

  // public void setNomeMae(String nomeMae) {
  // this.nomeMae = nomeMae;
  // }

  // public LocalDate getDataCadastro() {
  // return dataCadastro;
  // }

  // public void setDataCadastro(LocalDate dataCadastro) {
  // this.dataCadastro = dataCadastro;
  // }

}
