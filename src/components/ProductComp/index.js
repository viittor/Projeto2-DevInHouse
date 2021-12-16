import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

const Product = () => {
  const history = useHistory();
 
  const [urlImage, setUrlImage] = useState("");
  const [name, setName] = useState("");
  const [unitValue, setUnitValue] = useState("");
  const [description, setDescription] = useState("");
  const [supplier, setSupplier] = useState("");
  const [provider, setProvider] = useState([]);
  const [group, setGroup] = useState("");
  const [groups, setGroups] = useState([]);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (!name) {
        alert("Por favor preenchao nome do produto");
        return;
      } else if (!unitValue) {
        alert("Por favor preencha o valor unitário");
        return;
      } else if (!supplier) {
        alert("Por favor selecione um fornecedor");
        return;
      } else if (!group) {
        alert("Por favor selecione um grupo");
        return;
      }
      await fetch("https://restapisgi.herokuapp.com/products", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          urlImage: urlImage,
          name: name,
          unitValue: unitValue,
          description: description,
          supplier: supplier,
          group: group,
        }),
      });
      alert("Produto cadastrado com sucesso!");
      history.push("/map");
    } catch (error) {
      alert(
        "Não foi possivel concluir a sua solicitação! Por favor tente novamente."
      );
    }
  };

  useEffect(() => {
    async function getSupplier() {
      const supplierReturn = await fetch("https://restapisgi.herokuapp.com/suppliers");
      const supplierData = await supplierReturn.json();
      setProvider(supplierData);
    }
    async function getGroups() {
      const groupReturn = await fetch("https://restapisgi.herokuapp.com/groups");
      const groupData = await groupReturn.json();
      setGroups(groupData);
    }
    getSupplier();
    getGroups();
  }, []);

  return (
    <div className="body">
      <form className="container-form" onSubmit={handleSubmit}>
        <div className="menu-container">
          <h1 id="product-h1">Cadastro de Produtos</h1>
        </div>
        <hr />
        <div className="container-form-product">
          <div className="form-line">
            <label id="label-input">
              URL da imagem
              <br />
              <input
                className="input-box"
                type="url"
                name="urlImage"
                onChange={(e) => setUrlImage(e.target.value)}
                placeholder="Ex.: http://www.exemplo.com.br"
                required
              />
            </label>
          </div>

          <div className="form-line">
            <label id="label-input">
              Nome
              <br />
              <input
                className="input-box"
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex.: Melão"
                maxlength="100"
                required
              />
            </label>

            <label id="label-input">
              Custo unitário
              <br />
              <input
                className="input-box"
                type="number"
                name="unitValue"
                step="any"
                onChange={(e) => setUnitValue(e.target.value)}
                placeholder="Ex.: R$ 5,20"
                maxlength="6"
                required
              />
            </label>
          </div>
          <div className="form-line">
            <label id="label-input">
              Descrição
              <br />
              <textarea
                className="input-box"
                type="text"
                name="description"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descreva aqui o produto."
                maxLength="100"
                required
              />
            </label>
          </div>
          <div className="form-line">
            <label id="label-input">
              Fornecedor
              <br />
              <select
                className="input-box"
                name="supplier"
                value={supplier}
                onChange={(e) => setSupplier(e.target.value)}
                required
              >
                <option value="" selected disabled>
                  Selecione
                </option>
                {provider.map((supplier) => (
                  <option value={supplier}>{supplier}</option>
                ))}
              </select>
            </label>

            <label id="label-input">
              Grupo
              <br />
              <select
                className="input-box"
                name="groups"
                value={group}
                onChange={(e) => setGroup(e.target.value)}
                required
              >
                <option value="" selected disabled>
                  Selecione
                </option>
                {groups.map((group) => (
                  <option value={group}>{group}</option>
                ))}
              </select>
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
export default Product;
