import React, { useState } from "react";
import { useHistory } from "react-router";
import SERVER from "../../utils/constants";

const Product = () => {
    const history = useHistory();

    const [urlImage, setUrlImage] = useState("");
    const [name, setName] = useState("");
    const [unitValue, setUnitValue] = useState("");
    const [description, setDescription] = useState("");
    const [supplier, setSupplier] = useState("");
    const [group, setGroup] = useState("");

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
        await fetch(SERVER + "/products", {
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
        alert("Não foi possivel concluir a sua solicitação! Por favor tente novamente.");
      }
    }
  
    return(
        <form className="container-form" onSubmit={handleSubmit}>
      <div className="menu-container">
        <h1>Cadastro de Produtos</h1>
        <button type="submit">Salvar</button>
        <button onClick={() => history.push("/map")}>Cancelar</button>
      </div>
      <div className="container-form-product">
        <div className="form-line">
          <label>
            URL da imagem
            <br />
            <input
              type="url"
              name="urlImage"
              onChange={(e) => setUrlImage(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="form-line">
          <label>
            Nome
            <br />
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        
          <label>
            Custo unitário
            <br />
            <input
              type="text"
              name="unitValue"
              onChange={(e) => setUnitValue(e.target.value)}
              required
            />
          </label>
          </div>
        <div className="form-line">
          <label>
            Descrição
            <br />
            <textarea
              type="text"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-line">
          <label>
            Fornecedor
            <br />
            <input
              type="text"
              name="supplier"
              onChange={(e) => setSupplier(e.target.value)}
              required
            />
          </label>
        
          <label>
            Grupo
            <br />
            <input
              type="text"
              name="group"
              onChange={(e) => setGroup(e.target.value)}
              required
            />
          </label>
          </div>
      </div>
    </form>
    )
};
export default Product;