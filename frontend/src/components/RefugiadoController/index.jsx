import React, { Component } from "react";
import PubSub from "pubsub-js";

import "./styles.css";

class FormRefugiado extends Component {
  state = {
    model: {
      idRefugiado: 0,
      nomeRefugiado: "",
      cpfRefugiado: "",
      dataNascimentoRefugiado: "",
      nacionalidadeRefugiado: "",
      enderecoRefugiado: "",
      bairroRefugiado: "",
      cidadeRefugiado: "",
      estadoRefugiado: "",
      profissaoRefugiado: "",
      telefoneRefugiado: "",
      valorHoraRefugiado: 0,
      bioRefugiado: "",
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
        idRefugiado: 0,
        nomeRefugiado: "",
        cpfRefugiado: "",
        dataNascimentoRefugiado: "",
        nacionalidadeRefugiado: "",
        enderecoRefugiado: "",
        bairroRefugiado: "",
        cidadeRefugiado: "",
        estadoRefugiado: "",
        profissaoRefugiado: "",
        telefoneRefugiado: "",
        valorHoraRefugiado: 0,
        bioRefugiado: "",
      },
    });
    this.props.refugiadoCreate(this.state.model);
  };

  componentWillMount() {
    PubSub.subscribe("edit-refugiado", (topic, refugiado) => {
      this.setState({ model: refugiado });
    });
  }

  render() {
    return (
      <div className="content--form--refugiado row container">
        <h2 className="text-center">Cadastro de Refugiados</h2>
        <div className="form">
          <form className="form-refugiado-action col-sm-12">
            <div className="mb-3">
              <label htmlFor="city" className="form-label">
                Nome
              </label>
              <input
                type="text"
                value={this.state.model.nomeRefugiado}
                onChange={(e) => this.setValues(e, "nomeRefugiado")}
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
                value={this.state.model.cpfRefugiado}
                onChange={(e) => this.setValues(e, "cpfRefugiado")}
                className="form-control"
                id="cpf"
                placeholder="Digite o seu cpf"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pais" className="form-label">
                Data de Nascimento
              </label>
              <input
                type="date"
                value={this.state.model.dataNascimentoRefugiado}
                onChange={(e) => this.setValues(e, "dataNascimentoRefugiado")}
                className="form-control"
                id="dataNascimento"
                placeholder="Digite a sua data de nascimento"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="valor" className="form-label">
                Nacionalidade
              </label>
              <input
                type="text"
                value={this.state.model.nacionalidadeRefugiado}
                onChange={(e) => this.setValues(e, "nacionalidadeRefugiado")}
                className="form-control"
                id="nacionalidade"
                placeholder="Digite a sua nacionalidade"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="valor" className="form-label">
                Endereço
              </label>
              <input
                type="text"
                value={this.state.model.enderecoRefugiado}
                onChange={(e) => this.setValues(e, "enderecoRefugiado")}
                className="form-control"
                id="endereco"
                placeholder="Digite o seu Endereço"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="valor" className="form-label">
                Bairro
              </label>
              <input
                type="text"
                value={this.state.model.bairroRefugiado}
                onChange={(e) => this.setValues(e, "bairroRefugiado")}
                className="form-control"
                id="bairro"
                placeholder="Digite o seu bairro"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="valor" className="form-label">
                Cidade
              </label>
              <input
                type="text"
                value={this.state.model.cidadeRefugiado}
                onChange={(e) => this.setValues(e, "cidadeRefugiado")}
                className="form-control"
                id="cidade"
                placeholder="Digite a sua cidade"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="valor" className="form-label">
                Estado
              </label>
              <input
                type="text"
                value={this.state.model.estadoRefugiado}
                onChange={(e) => this.setValues(e, "estadoRefugiado")}
                className="form-control"
                id="estado"
                placeholder="Digite o seu estado"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="valor" className="form-label">
                Profissão
              </label>
              <input
                type="text"
                value={this.state.model.profissaoRefugiado}
                onChange={(e) => this.setValues(e, "profissaoRefugiado")}
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
                value={this.state.model.telefoneRefugiado}
                onChange={(e) => this.setValues(e, "telefoneRefugiado")}
                className="form-control"
                id="telefone"
                placeholder="Digite o seu telefone"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="valor" className="form-label">
                Valor Por Hora
              </label>
              <input
                type="text"
                value={this.state.model.valorHoraRefugiado}
                onChange={(e) => this.setValues(e, "valorHoraRefugiado")}
                className="form-control"
                id="valorHora"
                placeholder="Digite o seu telefone"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="valor" className="form-label">
                Biografia
              </label>
              <input
                type="text"
                value={this.state.model.bioRefugiado}
                onChange={(e) => this.setValues(e, "bioRefugiado")}
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

class ListRefugiado extends Component {
  delete = (id) => {
    this.props.deleteRefugiado(id);
  };

  onEdit = (refugiado) => {
    PubSub.publish("edit-refugiado", refugiado);
  };

  render() {
    const { refugiados } = this.props;

    return (
      <div>
        <h2 className="text-center mb-4">Lista de refugiados</h2>
        <div className="table-wrapper">
          <table className="fl-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Cpf</th>
                <th>Data de Nascimento</th>
                <th>Nacionalidade</th>
                <th>Endereço</th>
                <th>Bairro</th>
                <th>Cidade</th>
                <th>Estado</th>
                <th>Profissão</th>
                <th>Telefone</th>
                <th>Valor Por Hora</th>
                <th>Bio</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {refugiados.map((refugiado) => (
                <tr key={refugiado.idRefugiado}>
                  <td>{refugiado.nomeRefugiado}</td>
                  <td>{refugiado.cpfRefugiado}</td>
                  <td>{refugiado.dataNascimentoRefugiado}</td>
                  <td>{refugiado.nacionalidadeRefugiado}</td>
                  <td>{refugiado.enderecoRefugiado}</td>
                  <td>{refugiado.bairroRefugiado}</td>
                  <td>{refugiado.cidadeRefugiado}</td>
                  <td>{refugiado.estadoRefugiado}</td>
                  <td>{refugiado.profissaoRefugiado}</td>
                  <td>{refugiado.telefoneRefugiado}</td>
                  <td>{`R$ ${refugiado.valorHoraRefugiado}`}</td>
                  <td>{refugiado.bioRefugiado}</td>
                  <td className="pt-2">
                    <button
                      className="btn btn-info text-white"
                      onClick={(e) => this.onEdit(refugiado)}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    <button
                      className="btn btn-danger ms-2"
                      onClick={(e) => this.delete(refugiado.id)}
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
  Url = "https://forrefuges.herokuapp.com/refugiados/";

  state = {
    refugiados: [],
  };

  async componentDidMount() {
    const response = await fetch(this.Url);
    const {content} = await response.json();
    this.setState({refugiados: content});
    console.log(content);
  }

  create = (refugiado) => {
    let data = {
      idRefugiado: parseInt(refugiado.idRefugiado),
      nomeRefugiado: refugiado.nomeRefugiado,
      cpfRefugiado: refugiado.cpfRefugiado,
      dataNascimentoRefugiado: refugiado.dataNascimentoRefugiado,
      nacionalidadeRefugiado: refugiado.nacionalidadeRefugiado,
      enderecoRefugiado: refugiado.enderecoRefugiado,
      bairroRefugiado: refugiado.bairroRefugiado,
      cidadeRefugiado: refugiado.cidadeRefugiado,
      estadoRefugiado: refugiado.estadoRefugiado,
      profissaoRefugiado: refugiado.profissaoRefugiado,
      telefoneRefugiado: refugiado.paisRefugiado,
      valorHoraRefugiado: parseFloat(refugiado.valorHoraRefugiado),
      bioRefugiado: refugiado.bioRefugiado,
    };
    const requestInfo = {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-type": "application/json",
      }),
    };
    if (
      data.nomeRefugiado !== 0 &&
      data.cpfRefugiado !== "" &&
      data.dataNascimentoRefugiado !== "" &&
      data.nacionalidadeRefugiado !== "" &&
      data.enderecoRefugiado !== "" &&
      data.bairroRefugiado !== "" &&
      data.cidadeRefugiado !== "" &&
      data.estadoRefugiado !== "" &&
      data.profissaoRefugiado !== "" &&
      data.telefoneRefugiado !== null &&
      data.valorHoraRefugiado !== 0 &&
      data.bioRefugiado !== ""
    ) {
      fetch("https://forrefuges.herokuapp.com/refugiados/", requestInfo)
        .then((response) => response.json())
        .then((newRefugiado) => console.log(newRefugiado))
        .catch((e) => console.log(e));
    } else {
      alert("Favor informar todos os campos!");
      return;
    }
  };

  delete = (id) => {
    fetch(`https://forrefuges.herokuapp.com/refugiados/${id}`, {
      method: "DELETE",
    })
      .then((rows) => {
        const refugiados = this.state.refugiados.filter(
          (refugiado) => refugiado.id !== id
        );
        this.setState({ refugiados });
      })
      .catch((e) => console.log(e));
  };

  render() {
    return (
      <div className="row refugiados-action-container">
        <div className="">
          <FormRefugiado refugiadoCreate={this.create} />
        </div>
        <div className="">
          <ListRefugiado
            refugiados={this.state.refugiados}
            deleteRefugiado={this.delete}
          />
        </div>
      </div>
    );
  }
}
