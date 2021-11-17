import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

const Register = () => {
  const history = useHistory();

  const [corporateName, setCorporateName] = useState("");
  const [commercialName, setCommercialName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [emailCompany, setEmailCompany] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [adress, setAdress] = useState("");
  const [adressNumber, setAdressNumber] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const [complement, setComplement] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleSubmit = async (event) => {
      event.preventDefault();
    try {
      if (!corporateName) {
        alert("Por favor preencha a Razão social.");
        return;
      } else if (!commercialName) {
        alert("Por favor preencha o Nome Fantasia.");
        return;
      } else if (!cnpj) {
        alert("Por favor preencha o CNPJ.");
        return;
      } else if (!emailCompany) {
        alert("Por favor preencha o Email.");
        return;
      } else if (
        !emailCompany.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
      ) {
        alert("O email inserido é inválido.");
        return;
      } else if (!zipCode) {
        alert("Por favor preencha o Cep.");
        return;
      } else if (!adress) {
        alert("Por favor preencha o endereço.");
        return;
      } else if (!adressNumber) {
        alert("Por favor preencha o Número.");
        return;
      } else if (!district) {
        alert("Por favor preencha o Bairro.");
        return;
      } else if (!city) {
        alert("Por favor preencha a Cidade.");
        return;
      } else if (!uf) {
        alert("Por favor escolha o Estado.");
        return;
      } else if (!latitude) {
        alert("Por favor preencha a Latitude.");
        return;
      } else if (!longitude) {
        alert("Por favor preencha a Longitude.");
        return;
      }
      alert("Empresa cadastrada com sucesso!");
      history.push("/map");
    } catch (error) {
      alert(
        "Não foi possivel concluir a sua solicitação! Por favor tente novamente."
      );
    }
  };
  


  return (
    <form className="container-form">
      <div className="menu-container">
        <h1>Cadastro de Empresas</h1>
        <button type="submit">Salvar</button>
        <button onClick={() => history.push("/map")}>Cancelar</button>
      </div>
      <div className="container-form-register">
        <div className="form-line">
          <label>
            Razão Social
            <br />
            <input
              type="text"
              name="corporateName"
              placeholder="Ex.: Hyper Involves Ltda"
              value={corporateName}
              onChange=""
              required
            />
          </label>

          <label>
            Nome Fantasia
            <br />
            <input
              type="text"
              name="commercialName"
              placeholder="Ex.: Hyper Involves"
              value={commercialName}
              onChange=""
              required
            />
          </label>
        </div>

        <div className="form-line">
          <label>
            CNPJ
            <br />
            <input
              type="text"
              name="cnpj"
              placeholder="Ex.: 99.999.999/9999-99"
              value={cnpj}
              onChange=""
              required
            />
          </label>

          <label>
            Email
            <br />
            <input
              type="email"
              name="emailCompany"
              placeholder="Ex.: example@company.com"
              value={emailCompany}
              onChange=""
              required
            />
          </label>
        </div>
        <hr />
        <div className="form-line">
          <label>
            CEP
            <br />
            <input
              type="text"
              name="zipCode"
              placeholder="Ex.: 99.999-999"
              value={zipCode}
              onChange=""
              required
            />
          </label>

          <label>
            Endereço
            <br />
            <input
              type="text"
              name="adress"
              placeholder="Ex.: Rua dos Involvidos"
              value={adress}
              onChange=""
              required
            />
          </label>
        </div>

        <div className="form-line">
          <label>
            Número
            <br />
            <input
              type="number"
              name="adressNumber"
              placeholder="Ex.: 000"
              value={adressNumber}
              onChange=""
              required
            />
          </label>

          <label>
            Bairro
            <br />
            <input
              type="text"
              name="district"
              placeholder="Ex.: Centro"
              value={district}
              onChange=""
              required
            />
          </label>
        </div>

        <div className="form-line">
          <label>
            Cidade
            <br />
            <input
              type="text"
              name="city"
              placeholder="Ex.: Florianópolis"
              value={city}
              onChange=""
              required
            />
          </label>

          <label>
            Estado
            <br />
            <input
              type="text"
              name="uf"
              placeholder="Ex.: Santa Catarina"
              value={uf}
              onChange=""
              required
            />
          </label>
        </div>

        <div className="form-line">
          <label>
            Complemento
            <br />
            <input
              type="text"
              name="complement"
              placeholder=""
              value={complement}
              onChange=""
            />
          </label>
        </div>
        <hr />
        <div className="form-line">
          <label>
            Latitude
            <br />
            <input
              type="number"
              name="latitude"
              placeholder="Ex.: 00.000"
              value={latitude}
              onChange=""
              required
            />
          </label>

          <label>
            Longitude
            <br />
            <input
              type="number"
              name="longitude"
              placeholder="Ex.: 00.000"
              value={longitude}
              onChange=""
              required
            />
          </label>
        </div>
      </div>
    </form>
  );
};

export default Register;
