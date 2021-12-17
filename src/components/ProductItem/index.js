import React, { useEffect, useState } from "react";


const Item = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() =>{
        async function getProducts(){ //"assync" transforma a função em uma função assincrona. Retorna uma promisse ao invés de um valor.
            // estabelece a variavel que receber um await(aguarda a resposta da requisção) e depois um fetch, para pegar os dados da api.
            const productsResult = await fetch("https://restapisgi.herokuapp.com/products");
            // estabelece a variavel que receber o resposta da requisição em forma de json.
            const productsData = await productsResult.json();
            //altera o valor de "produtos" com o resultado do json.
            setProdutos(productsData);
        }
        getProducts();
    }, []);
    

    return(
        <>
        <div className="list-body">
        <h1 className="product-h1-list" >Lista de Produtos</h1>
        <ul className="container-list-products">
            {produtos.map((item) =>(
              <li className="item-list">
                  <img className="image-view" src={item.urlImage} alt="imagem" />
                  <div className="item-details">
                  <h4>{item.name}</h4>
                  <p><strong>R$ {item.unitValue}</strong></p>
                  {/* <p>{item.description}</p> */}
                  <p>{item.supplier}</p>
                  <p>{item.group}</p>
                  </div>

              </li>  
            ))}
        </ul>
        </div>
        
        </>
    );
};

export default Item;