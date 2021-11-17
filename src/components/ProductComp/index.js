import React from "react";
import { useHistory } from "react-router";

const Product = () => {
    const history = useHistory();

    return(
        <form className="container-form">
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
              required
            />
          </label>
        
          <label>
            Custo unitário
            <br />
            <input
              type="text"
              name="unitValue"
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
              name="unitValue"
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
              name="name"
              required
            />
          </label>
        
          <label>
            Grupo
            <br />
            <input
              type="text"
              name="unitValue"
              required
            />
          </label>
          </div>
      </div>
    </form>
    )
}

export default Product;