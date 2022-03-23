package com.forRefugees.dto;

import java.sql.Date;

import com.forRefugees.model.Refugiados;

public class RefugiadosDTO {
	
	private Long Id;
	private String nomeRefugiado;
	private String cpfRefugiado;
	private Date dataNascimentoRefugiado;
	private String nacionalidadeRefugiado;
	private String enderecoRefugiado;
	private String bairroRefugiado;
	private String cidadeRefugiado;
	private String estadoRefugiado;
	private String profissaoRefugiado;
	private String telefoneRefugiado;
	private int valorHoraRefugiado;
	private String bioRefugiado;
	private Date dataCadastroRefugiados;
	
	public RefugiadosDTO() {
		
	}

	public RefugiadosDTO(Long id, String nomeRefugiado, String cpfRefugiado, Date dataNascimentoRefugiado,
			String nacionalidadeRefugiado, String enderecoRefugiado, String bairroRefugiado, String cidadeRefugiado,
			String estadoRefugiado, String profissaoRefugiado, String telefoneRefugiado, int valorHoraRefugiado,
			String bioRefugiado, Date dataCadastroRefugiados) {

		this.Id = id;
		this.nomeRefugiado = nomeRefugiado;
		this.cpfRefugiado = cpfRefugiado;
		this.dataNascimentoRefugiado = dataNascimentoRefugiado;
		this.nacionalidadeRefugiado = nacionalidadeRefugiado;
		this.enderecoRefugiado = enderecoRefugiado;
		this.bairroRefugiado = bairroRefugiado;
		this.cidadeRefugiado = cidadeRefugiado;
		this.estadoRefugiado = estadoRefugiado;
		this.profissaoRefugiado = profissaoRefugiado;
		this.telefoneRefugiado = telefoneRefugiado;
		this.valorHoraRefugiado = valorHoraRefugiado;
		this.bioRefugiado = bioRefugiado;
		this.dataCadastroRefugiados = dataCadastroRefugiados;
	}
	
	
	public RefugiadosDTO(Refugiados refugi) {
		this.Id = refugi.getId();
		this.nomeRefugiado = refugi.getNomeRefugiado();
		this.cpfRefugiado = refugi.getCpfRefugiado();
		this.dataNascimentoRefugiado = refugi.getDataNascimentoRefugiado();
		this.nacionalidadeRefugiado = refugi.getNacionalidadeRefugiado();
		this.enderecoRefugiado = refugi.getEnderecoRefugiado();
		this.bairroRefugiado = refugi.getBairroRefugiado();
		this.cidadeRefugiado = refugi.getCidadeRefugiado();
		this.estadoRefugiado = refugi.getEstadoRefugiado();
		this.profissaoRefugiado = refugi.getProfissaoRefugiado();
		this.telefoneRefugiado = refugi.getTelefoneRefugiado();
		this.valorHoraRefugiado = refugi.getValorHoraRefugiado();
		this.bioRefugiado = refugi.getBioRefugiado();
		this.dataCadastroRefugiados = refugi.getDataCadastroRefugiados();
	}

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public String getNomeRefugiado() {
		return nomeRefugiado;
	}

	public void setNomeRefugiado(String nomeRefugiado) {
		this.nomeRefugiado = nomeRefugiado;
	}

	public String getCpfRefugiado() {
		return cpfRefugiado;
	}

	public void setCpfRefugiado(String cpfRefugiado) {
		this.cpfRefugiado = cpfRefugiado;
	}

	public Date getDataNascimentoRefugiado() {
		return dataNascimentoRefugiado;
	}

	public void setDataNascimentoRefugiado(Date dataNascimentoRefugiado) {
		this.dataNascimentoRefugiado = dataNascimentoRefugiado;
	}

	public String getNacionalidadeRefugiado() {
		return nacionalidadeRefugiado;
	}

	public void setNacionalidadeRefugiado(String nacionalidadeRefugiado) {
		this.nacionalidadeRefugiado = nacionalidadeRefugiado;
	}

	public String getEnderecoRefugiado() {
		return enderecoRefugiado;
	}

	public void setEnderecoRefugiado(String enderecoRefugiado) {
		this.enderecoRefugiado = enderecoRefugiado;
	}

	public String getBairroRefugiado() {
		return bairroRefugiado;
	}

	public void setBairroRefugiado(String bairroRefugiado) {
		this.bairroRefugiado = bairroRefugiado;
	}

	public String getCidadeRefugiado() {
		return cidadeRefugiado;
	}

	public void setCidadeRefugiado(String cidadeRefugiado) {
		this.cidadeRefugiado = cidadeRefugiado;
	}

	public String getEstadoRefugiado() {
		return estadoRefugiado;
	}

	public void setEstadoRefugiado(String estadoRefugiado) {
		this.estadoRefugiado = estadoRefugiado;
	}

	public String getProfissaoRefugiado() {
		return profissaoRefugiado;
	}

	public void setProfissaoRefugiado(String profissaoRefugiado) {
		this.profissaoRefugiado = profissaoRefugiado;
	}

	public String getTelefoneRefugiado() {
		return telefoneRefugiado;
	}

	public void setTelefoneRefugiado(String telefoneRefugiado) {
		this.telefoneRefugiado = telefoneRefugiado;
	}

	public int getValorHoraRefugiado() {
		return valorHoraRefugiado;
	}

	public void setValorHoraRefugiado(int valorHoraRefugiado) {
		this.valorHoraRefugiado = valorHoraRefugiado;
	}

	public String getBioRefugiado() {
		return bioRefugiado;
	}

	public void setBioRefugiado(String bioRefugiado) {
		this.bioRefugiado = bioRefugiado;
	}

	public Date getDataCadastroRefugiados() {
		return dataCadastroRefugiados;
	}

	public void setDataCadastroRefugiados(Date dataCadastroRefugiados) {
		this.dataCadastroRefugiados = dataCadastroRefugiados;
	}	
}
