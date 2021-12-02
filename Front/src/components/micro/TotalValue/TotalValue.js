
import React from 'react'

import Button from '../../micro/Button/Button'


function TotalValue(props) {

    return (
        <>
            <div className="container mb-5">
                <div className="row">
                    
                    


                    <div class="col-12 offset-12 col-sm-center offset-sm-12 col-md-12 offset-md-12 col-lg-6 offset-lg-0 col-xl-4 align-self-center mt-2 ">

                        <h4 style={{fontWeight: 'bold', fontSize: '30px'}} className="text-resumo ">Resumo do pedido </h4>
                        <h5 class="text-total">04 Produtos: R$ 18.000,00</h5>
                        <h5 class="text-total">Frete: R$ 10,90</h5>
                        <h4 class="text-total-bold">Total: R$ 18.010,90</h4>
                    
                    </div>

                    <div class="col-12 col-md-9 col-lg-6 col-xl-8 text-left align-self-center d-flex justify-content-end">

                    <Button class={'mx-1 btn-cancelar align-self-center btn-login'} label={'Continuar comprando'}/>

                    <Button class={'btn-principal align-self-center btn-login'} label={'Finalizar pedido'}/>
                    
                        
                        
                        


                    </div>



                </div>
            </div>








        </>
    )
}

export default TotalValue


