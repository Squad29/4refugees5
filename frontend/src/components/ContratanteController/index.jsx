import React, { Component } from "react";
import PubSub from "pubsub-js";

import "./styles.css";

class FormContratante extends Component {
  state = {
    model: {
      id: 0,
      nomeContratante: "",
      cpfContratante: "",
      cnpjContratante: "",
      enderecoContratante: "",
      bairroContratante: "",
      cidadeContratante: "",
      estadoContratante: "",
      seguimentoContratante: "",
      telefoneContratante: "",
      emailContratante: "",
      valorHoraContratante: 0,
      bioContratante: "",
      dataCadastroContratante: "",
    },
  };

  setValues = (e, field) => {
    const { model } = this.state;
    model[field] = e.target.value;
    this.setState({ model });
    console.log(this.state.model);
  };

  create = (e) => {
    this.setState({
      model: {
        id: 0,
        nomeContratante: "",
        cpfContratante: "",
        cnpjContratante: "",
        enderecoContratante: "",
        bairroContratante: "",
        cidadeContratante: "",
        estadoContratante: "",
        seguimentoContratante: "",
        telefoneContratante: "",
        emailContratante: "",
        valorHoraContratante: 0,
        bioContratante: "",
        dataCadastroContratante: "",
      },
    });
    this.props.contratanteCreate(this.state.model);
  };

  componentWillMount() {
    PubSub.subscribe("edit-contratante", (topic, contratante) => {
      this.setState({ model: contratante });
    });
  }

  render() {
    return (
      <div className="content--form--refugiado row container">
        <h2 className="text-center">Cadastro de Contratantes</h2>
        <div className="form">
          <form className="form-refugiado-action col-sm-12">
            <div className="mb-3">
              <label htmlFor="city" className="form-label">
                Nome
              </label>
              <input
                type="text"
                value={this.state.model.nomeContratante}
                onChange={(e) => this.setValues(e, "nomeContratante")}
                className="form-control"
                id="nome"
                placeholder="Digite o seu nome"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label">
                Cpf
              </label>
              <input
                type="text"
                value={this.state.model.cpfContratante}
                onChange={(e) => this.setValues(e, "cpfContratante")}
                className="form-control"
                id="cpf"
                placeholder="Digite o seu cpf"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pais" className="form-label">
                Cnpj
              </label>
              <input
                type="text"
                value={this.state.model.cpnjContratante}
                onChange={(e) => this.setValues(e, "cpnjContratante")}
                className="form-control"
                id="dataNascimento"
                placeholder="Digite a sua data de nascimento"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="valor" className="form-label">
                Seguimento
              </label>
              <input
                type="text"
                value={this.state.model.seguimentoContratante}
                onChange={(e) => this.setValues(e, "seguimentoContratante")}
                className="form-control"
                id="nacionalidade"
                placeholder="Digite a sua nacionalidade"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="valor" className="form-label">
                Biografia
              </label>
              <input
                type="text"
                value={this.state.model.bioContratante}
                onChange={(e) => this.setValues(e, "bioContratante")}
                className="form-control"
                id="endereco"
                placeholder="Digite o seu Endereço"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="valor" className="form-label">
                Endereço
              </label>
              <input
                type="text"
                value={this.state.model.enderecoContratante}
                onChange={(e) => this.setValues(e, "enderecoContratante")}
                className="form-control"
                id="bairro"
                placeholder="Digite o seu bairro"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="valor" className="form-label">
                Bairro
              </label>
              <input
                type="text"
                value={this.state.model.bairroContratante}
                onChange={(e) => this.setValues(e, "bairroContratante")}
                className="form-control"
                id="cidade"
                placeholder="Digite a sua cidade"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="valor" className="form-label">
                Cidade
              </label>
              <input
                type="text"
                value={this.state.model.cidadeContratante}
                onChange={(e) => this.setValues(e, "cidadeContratante")}
                className="form-control"
                id="estado"
                placeholder="Digite o seu estado"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="valor" className="form-label">
                Estado
              </label>
              <input
                type="text"
                value={this.state.model.estadoContratante}
                onChange={(e) => this.setValues(e, "estadoContratante")}
                className="form-control"
                id="profissao"
                placeholder="Digite a sua profissão"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="valor" className="form-label">
                Telefone
              </label>
              <input
                type="text"
                value={this.state.model.telefoneContratante}
                onChange={(e) => this.setValues(e, "telefoneContratante")}
                className="form-control"
                id="telefone"
                placeholder="Digite o seu telefone"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="valor" className="form-label">
                Email
              </label>
              <input
                type="text"
                value={this.state.model.emailContratante}
                onChange={(e) => this.setValues(e, "emailContratante")}
                className="form-control"
                id="valorHora"
                placeholder="Digite o seu telefone"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="valor" className="form-label">
                Valor por Hora
              </label>
              <input
                type="text"
                value={this.state.model.valorHoraContratante}
                onChange={(e) => this.setValues(e, "valorHoraContratante")}
                className="form-control"
                id="biografia"
                placeholder="Digite o seu valor por hora"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.create}
            >
              Gravar
            </button>
          </form>
        </div>
      </div>
    );
  }
}

class ListContratante extends Component {
  delete = (id) => {
    this.props.deleteContratante(id);
  };

  onEdit = (contratante) => {
    PubSub.publish("edit-contratante", contratante);
  };

  render() {
    const { contratantes } = this.props;

    return (
      <div>
        <h2 className="text-center mb-4">Lista de Contratantes</h2>
        <div className="table-wrapper">
          <table className="fl-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Cpf</th>
                <th>CNPJ</th>
                <th>Seguimento</th>
                <th>Biografia</th>
                <th>Endereço</th>
                <th>Bairro</th>
                <th>Cidade</th>
                <th>Estado</th>
                <th>Telefone</th>
                <th>Email</th>
                <th>Valor por Hora</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {contratantes.map((contratante) => (
                <tr key={contratante.idContratante}>
                  <td>{contratante.nomeContratante}</td>
                  <td>{contratante.cpfContratante}</td>
                  <td>{contratante.cpnjContratante}</td>
                  <td>{contratante.seguimentoContratante}</td>
                  <td>{contratante.bioContratante}</td>
                  <td>{contratante.enderecoContratante}</td>
                  <td>{contratante.bairroContratante}</td>
                  <td>{contratante.cidadeContratante}</td>
                  <td>{contratante.estadoContratante}</td>
                  <td>{contratante.telefoneContratante}</td>
                  <td>{contratante.emailContratante}</td>
                  <td>{`R$ ${contratante.valorHoraContratante}`}</td>
                  <td className="pt-2">
                    <button
                      className="btn btn-info text-white"
                      onClick={(e) => this.onEdit(contratante)}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    <button
                      className="btn btn-danger ms-2"
                      onClick={(e) => this.delete(contratante.id)}
                    >
                      <i className="bi bi-trash3-fill"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default class ProductBox extends Component {
  Url = "https://forrefuges.herokuapp.com/contratante/";

  state = {
    contratantes: [],
  };

  async componentDidMount() {
    const response = await fetch(this.Url);
    const { content } = await response.json();
    this.setState({ contratantes: content });
    console.log(content);
  }

  create = (contratante) => {
    let data = {
      idContratante: parseInt(contratante.idContratante),
      nomeContratante: contratante.nomeContratante,
      cpfContratante: contratante.cpfContratante,
      cpnjContratante: contratante.cpnjContratante,
      seguimentoContratante: contratante.seguimentoContratante,
      bioContratante: contratante.bioContratante,
      enderecoContratante: contratante.enderecoContratante,
      bairroContratante: contratante.bairroContratante,
      cidadeContratante: contratante.cidadeContratante,
      estadoContratante: contratante.estadoContratante,
      telefoneContratante: contratante.telefoneContratante,
      emailContratante: contratante.emailContratante,
      valorHoraContratante: parseFloat(contratante.valorHoraContratante),
    };
    const requestInfo = {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-type": "application/json",
      }),
    };
    if (
      data.nomeContratante !== 0 &&
      data.cpfContratante !== "" &&
      data.cpnjContratante !== "" &&
      data.seguimentoContratante !== "" &&
      data.bioContratante !== "" &&
      data.enderecoContratante !== "" &&
      data.bairroContratante !== "" &&
      data.cidadeContratante !== "" &&
      data.estadoContratante !== "" &&
      data.telefoneContratante !== null &&
      data.emailContratante !== "" &&
      data.valorHoraContratante !== 0
    ) {
      fetch("https://forrefuges.herokuapp.com/contratante/", requestInfo)
        .then((response) => response.json())
        .then((newContratante) => console.log(newContratante))
        .catch((e) => console.log(e));
    } else {
      alert("Favor informar todos os campos!");
      return;
    }
  };

  delete = (id) => {
    fetch(`https://forrefuges.herokuapp.com/contratante/${id}`, {
      method: "DELETE",
    })
      .then((rows) => {
        const contratantes = this.state.contratantes.filter(
          (contratante) => contratante.id !== id
        );
        this.setState({ contratantes });
      })
      .catch((e) => console.log(e));
  };

  render() {
    return (
      <div className="row refugiados-action-container">
        <div className="">
          <FormContratante contratanteCreate={this.create} />
        </div>
        <div className="">
          <ListContratante
            contratantes={this.state.contratantes}
            deleteContratante={this.delete}
          />
        </div>
      </div>
    );
  }
}
