import React, { useState } from "react";
import { useHistory } from "react-router";
import { mask } from "remask";

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
    try {
      event.preventDefault();
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
        console.log("chegou aqui");

        return;
      }
      console.log("chegou aqui");
      await fetch("https://restapisgi.herokuapp.com/enterprises", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          corporateName: corporateName,
          commercialName: commercialName,
          cnpj: cnpj,
          emailCompany: emailCompany,
          zipCode: zipCode,
          adress: adress,
          adressNumber: adressNumber,
          district: district,
          city: city,
          uf: uf,
          complement: complement,
          coordinates: [latitude, longitude],
        }),
      });

      alert("Empresa cadastrada com sucesso!");
      history.push("/map");
    } catch (error) {
      alert(
        "Não foi possivel concluir a sua solicitação! Por favor tente novamente."
      );
    }
    console.log("chegou aqui");
  };

  return (
    <div className="body">
      <form className="container-form" onSubmit={handleSubmit}>
        <div className="menu-container">
          <h1 id="register-h1">Cadastro de Empresas</h1>
        </div>
        <hr />
        <div className="container-form-register">
          <div className="form-line">
            <label id="label-input">
              Razão Social
              <br />
              <input
                className="input-box"
                type="text"
                name="corporateName"
                placeholder="Ex.: Compre Mais Ltda"
                value={corporateName}
                onChange={(e) => setCorporateName(e.target.value)}
                required
              />
            </label>

            <label id="label-input">
              Nome Fantasia
              <br />
              <input
                className="input-box"
                type="text"
                name="commercialName"
                placeholder="Ex.: Super Pão Hipermercados"
                value={commercialName}
                onChange={(e) => setCommercialName(e.target.value)}
                required
              />
            </label>
          </div>

          <div className="form-line">
            <label id="label-input">
              CNPJ
              <br />
              <input
                className="input-box"
                type="text"
                name="cnpj"
                placeholder="Ex.: 99.999.999/9999-99"
                value={cnpj}
                onChange={(e) =>
                  setCnpj(mask(e.target.value, ["99.999.999/9999-99"]))
                }
                required
              />
            </label>

            <label id="label-input">
              Email
              <br />
              <input
                className="input-box"
                type="email"
                name="emailCompany"
                placeholder="Ex.: example@company.com"
                value={emailCompany}
                onChange={(e) => setEmailCompany(e.target.value)}
                required
              />
            </label>
          </div>

          <div className="form-line">
            <label id="label-input">
              CEP
              <br />
              <input
                className="input-box"
                type="text"
                name="zipCode"
                placeholder="Ex.: 99.999-999"
                value={zipCode}
                onChange={(e) =>
                  setZipCode(mask(e.target.value, ["99.999-999"]))
                }
                required
              />
            </label>

            <label id="label-input">
              Endereço
              <br />
              <input
                className="input-box"
                type="text"
                name="adress"
                placeholder="Ex.: Avenida Brasil"
                value={adress}
                onChange={(e) => setAdress(e.target.value)}
                required
              />
            </label>
          </div>

          <div className="form-line">
            <label id="label-input">
              Número
              <br />
              <input
                className="input-box"
                type="number"
                name="adressNumber"
                placeholder="Ex.: 000"
                value={adressNumber}
                onChange={(e) => setAdressNumber(e.target.value)}
                required
              />
            </label>

            <label id="label-input">
              Bairro
              <br />
              <input
                className="input-box"
                type="text"
                name="district"
                placeholder="Ex.: Centro"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                required
              />
            </label>
          </div>

          <div className="form-line">
            <label id="label-input">
              Cidade
              <br />
              <input
                className="input-box"
                type="text"
                name="city"
                placeholder="Ex.: Florianópolis"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </label>

            <label id="label-input">
              Estado
              <br />
              <input
                className="input-box"
                type="text"
                name="uf"
                placeholder="Ex.: Santa Catarina"
                value={uf}
                onChange={(e) => setUf(e.target.value)}
                required
              />
            </label>
          </div>

          <div className="form-line">
            <label id="label-input">
              Complemento
              <br />
              <input
                className="input-box"
                type="text"
                name="complement"
                placeholder=""
                value={complement}
                onChange={(e) => setComplement(e.target.value)}
              />
            </label>
          </div>

          <div className="form-line">
            <label id="label-input">
              Latitude
              <br />
              <input
                className="input-box"
                type="number"
                name="latitude"
                placeholder="Ex.: 00.000"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                required
              />
            </label>

            <label id="label-input">
              Longitude
              <br />
              <input
                className="input-box"
                type="number"
                name="longitude"
                placeholder="Ex.: 00.000"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                required
              />
            </label>
          </div>
        </div>
        <div className="footer-form">
          <button className="buttonAction" type="submit">
            Salvar
          </button>
          <button className="buttonAction" onClick={() => history.push("/map")}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
