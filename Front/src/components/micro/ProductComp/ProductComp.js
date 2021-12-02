import React from 'react'


import './ProductComp.css'
import iconlix from '../../../assets/icons/checkout/lixeira.png'

function ProductComp(props) {

    return(
        <>

        

        <li className="list-group-item py-3">
                <div className="row g-3">
                    <div className="col-4 col-md-3 col-lg-2">
                        <a href="./pdp.html">

                            <img width="100" src={props.imagem} class="img-thumbnail"/>

                        </a>
                        

                    </div>
                    <div className=" col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
                        <h4><b><a href="./pdp.html" class=" text-produto-nome text-decoration-none text-danger">Nome do Produto</a></b></h4>
                        <h4 className=" textDescription text-produto-desc">
                            <small>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi animi delectus consequatur sed culpa accusamus alias, aliquam officiis totam magni voluptas similique. Officia ab natus neque temporibus rerum distinctio excepturi?
                            </small>
                        </h4>
                    </div>
                    <div className="col-6 offset-6 col-sm-6 offset-sm-6 col-md-4 offset-md-8 col-lg-3           offset-lg-0 col-xl-2 align-self-center mt-3">
                        
                    
                    {props.naoMostraCaixas 
                        ? 
                        ''
                        :
                        <div class="btn-group btn-group-sm" role="group" aria-label="...">

                        <button type="button" class="  btn-custom">-</button>
                            <input style={{textAlign: "center"}} type="text" className="form-add   mx-1 " value="1"/>
                            <button type="button" class="  btn-custom">+</button>
                            <button type="button" class="  mx-4 btn-lix-custom"><img style={{border: "none"}} className="" width="25px" src={iconlix}/></button>
                        </div>

                    }
                    
  
    
                        
                        <div className="text-right mt-2">
                            <small className="text-secondary">Subtotal: R$ 4.700,00</small><br></br>
                            <span className="text-dark">Valor Total: R$ 4.700,00</span>

                        </div>
                

                    </div>
                    

                </div>

                
                

            </li>

        








        </>
    )
}

export default ProductComp