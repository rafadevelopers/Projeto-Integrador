import React from "react";

import './WishList.css'

function WishLists(props) {
  return (
    <>
      <div className="row">
        <div className="col-12 d-flex justify-content-between mb-4">
          <h3>Minhas listas</h3>
          <button className="btn-principal">Criar lista</button>
        </div>

        <div className="card-lista d-flex flex-column">
          <div className="nome-lista">
            <h5>Facas de cozinha</h5>
          </div>
          <div className="infos-lista">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
            eligendi error culpa, neque aut necessitatibus vitae blanditiis
            dolorum simili
          </div>
          <button className="btn-cancelar mt-3 align-self-end btn-ver-lista">
            Ver mais
          </button>
        </div>
        <div className="lista-prod my-2 d-none">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Descrição do produto</th>
                <th scope="col">Preço</th>
                <th scope="col" colspan="2"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">1</td>
                <td>Faqueiro Ginzu Completo</td>
                <td>R$ 1500,00</td>
                <td>
                  <button className="btn-principal">Adicionar ao carrinho</button>
                </td>
                <td>
                  <button className="btn-cancelar">Excluir</button>
                </td>
              </tr>
              <tr>
                <td scope="row">2</td>
                <td>Faca de Legumes Tramontina</td>
                <td>R$ 50,00</td>
                <td>
                  <button className="btn-principal">Adicionar ao carrinho</button>
                </td>
                <td>
                  <button className="btn-cancelar">Excluir</button>
                </td>
              </tr>
              <tr>
                <td scope="row">3</td>
                <td>Cutelo Loko</td>
                <td>R$ 250,00</td>
                <td>
                  <button className="btn-principal">Adicionar ao carrinho</button>
                </td>
                <td>
                  <button className="btn-cancelar">Excluir</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="card-lista d-flex flex-column mt-4">
          <div className="nome-lista">
            <h5>Materiais para churrasco</h5>
          </div>
          <div className="infos-lista">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
            eligendi error culpa, neque aut necessitatibus vitae blanditiis
            dolorum simili
          </div>
          <button className="btn-cancelar mt-3 align-self-end btn-ver-lista">
            Ver mais
          </button>
        </div>
        <div className="lista-prod my-2 d-none">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Descrição do produto</th>
                <th scope="col">Preço</th>
                <th scope="col" colspan="2"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">1</td>
                <td>Faqueiro Ginzu Completo</td>
                <td>R$ 1500,00</td>
                <td>
                  <button className="btn-principal">Adicionar ao carrinho</button>
                </td>
                <td>
                  <button className="btn-cancelar">Excluir</button>
                </td>
              </tr>
              <tr>
                <td scope="row">2</td>
                <td>Faca de Legumes Tramontina</td>
                <td>R$ 50,00</td>
                <td>
                  <button className="btn-principal">Adicionar ao carrinho</button>
                </td>
                <td>
                  <button className="btn-cancelar">Excluir</button>
                </td>
              </tr>
              <tr>
                <td scope="row">3</td>
                <td>Cutelo Loko</td>
                <td>R$ 250,00</td>
                <td>
                  <button className="btn-principal">Adicionar ao carrinho</button>
                </td>
                <td>
                  <button className="btn-cancelar">Excluir</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="card-lista d-flex flex-column mt-4">
          <div className="nome-lista">
            <h5>Espadas legais</h5>
          </div>
          <div className="infos-lista">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
            eligendi error culpa, neque aut necessitatibus vitae blanditiis
            dolorum simili
          </div>
          <button className="btn-cancelar mt-3 align-self-end btn-ver-lista">
            Ver mais
          </button>
        </div>
        <div className="lista-prod my-2 d-none">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Descrição do produto</th>
                <th scope="col">Preço</th>
                <th scope="col" colspan="2"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">1</td>
                <td>Faqueiro Ginzu Completo</td>
                <td>R$ 1500,00</td>
                <td>
                  <button className="btn-principal">Adicionar ao carrinho</button>
                </td>
                <td>
                  <button className="btn-cancelar">Excluir</button>
                </td>
              </tr>
              <tr>
                <td scope="row">2</td>
                <td>Faca de Legumes Tramontina</td>
                <td>R$ 50,00</td>
                <td>
                  <button className="btn-principal">Adicionar ao carrinho</button>
                </td>
                <td>
                  <button className="btn-cancelar">Excluir</button>
                </td>
              </tr>
              <tr>
                <td scope="row">3</td>
                <td>Cutelo Loko</td>
                <td>R$ 250,00</td>
                <td>
                  <button className="btn-principal">Adicionar ao carrinho</button>
                </td>
                <td>
                  <button className="btn-cancelar">Excluir</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default WishLists;
