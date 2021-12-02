import React, {useState} from "react";
import Button from '../../components/micro/Button/Button'
import { useHistory } from "react-router-dom"
import axios from 'axios'



const initialValue = {

    cpf: '',
    complete_name: '',
    email: '',
    tel: 0,
    motivo: '',
    pd_numero: 0,
    msg: ''
   }

   const URL = 'http://localhost:8080/'


function Contact(props){


    const [ values, setValues ] = useState(initialValue);

    function onChange(ev){
      const { name, value } = ev.target;

      setValues({ ...values, [name]: value })
    }
  const history = useHistory();
   


    function onSubmit(event){
      event.preventDefault();

      axios.post(URL+'contato', values)
      .then((response) => {
        
        alert("Mensagem enviada com sucesso!")

        history.push('/home');
      });
    

    }




    return (
        <>
        <main className="container my-5">
        <div className="row">
            <h1 className="mb-3">Fale Conosco</h1>
            {/* <!-- BARRA LATERAL/SUPERIOR INICIO  --> */}
            <div className="col-12 col-lg-4 d-flex flex-column">
                <div className="atendimento-telefone mb-3">
                    <h3><span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="#860E1C"/>
                            </svg>                            
                    </span> Atendimento por telefone</h3>
                    <p>Segunda à Sexta-feira das 8:00 às 23:00</p>
                    <p><strong> (11) 4003-5555 <br/> (11) 4003-6666 <br/> (11) 4003-7777</strong></p>
                </div>
                <div className="atendimento-email mb-3">
                    <h3><span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                            <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" fill="#860E1C"/>
                            </svg>
                    </span> Atendimento por email</h3>
                    <p>Seu canal direto para informações, elogios, sugestões e resgistros de insatisfações</p>
                </div>
            </div>
            {/* <!-- BARRA LATERAL/SUPERIOR FIM  --> */}
            {/* <!-- FORM INICIO  --> */}
            <div className="form-container col-12 col-lg-8 mb-5">
                <form onSubmit={onSubmit}>
                    <div className="row">
                        {/* <!-- CPF inicio  --> */}
                        <div className="col-12 col-md-6 mb-3">
                            <label for="cpf" className="form-label custom-label">CPF<span className="obrigatorio">*</span></label>
                            <input name="cpf" onChange={onChange} type="text" id="cpf" className="form-control" placeholder="Digite seu CPF"/>
                        </div>
                        {/* <!-- CPF fim --> */}
                        {/* <!-- NOME inicio  --> */}
                        <div className="col-12 col-md-6 mb-3">
                            <label for="nome" className="form-label custom-label">Nome completo<span className="obrigatorio">*</span></label>
                            <input name="complete_name" onChange={onChange} type="text" id="nome" className="form-control" placeholder="Digite seu nome"/>
                        </div>
                        {/* <!-- NOME fim  --> */}
                    </div>
                     <div className="row">
                        {/* <!-- Email inicio  --> */}
                        <div className="col-12 col-md-6 mb-3">
                            <label for="email" className="form-label custom-label">Email<span className="obrigatorio">*</span></label>
                            <input name="email" onChange={onChange} type="email" id="email" className="form-control" placeholder="Digite seu email"/>
                        </div>
                        {/* <!-- Email fim  --> */}
                        {/* <!-- TELEFONE inicio  --> */}
                        <div className="col-12 col-md-6 mb-3">
                            <label for="telefone" className="form-label custom-label">Telefone<span className="obrigatorio">*</span></label>
                            <input name="tel" onChange={onChange} type="text" id="telefone" className="form-control" placeholder="(XX) XXXXX-XXXX" required/>
                        </div>
                        {/* <!-- TELEFONE fim  --> */}
                    </div>

                        <div className="row">
                            {/* <!-- motivo inicio  --> */}
                            <div className="col-12 col-md-6 mb-3">
                                <label for="motivo" className="form-label custom-label">Motivo do contato<span className="obrigatorio">*</span></label>
                                <select name="motivo" id="motivo" className="form-select" onChange={onChange}>
                                    <option value="" selected disabled>Selecione</option>
                                    <option onChange={onChange} value="sugestao">Sugestão</option>
                                    <option onChange={onChange} value="duvida">Trabalhe conosco</option>
                                    <option onChange={onChange} value="duvida">Dúvida</option>
                                    <option onChange={onChange} value="problema">Problema</option>
                                    <option onChange={onChange} value="outro">Outros</option>
                                </select>
                            </div>
                            {/* <!-- motivo fim  --> */}
                            {/* <!-- numero do pedido inicio  --> */}
                            <div className="col-12 col-md-6 mb-3">
                                <label for="n-pedido" className="form-label custom-label">Número do pedido</label>
                                <input name="pd_numero" onChange={onChange} type="text" id="n-pedido" className="form-control" placeholder="Digite o numero do pedido"/>
                            </div>
                            {/* <!-- numero do pedido fim  --> */}
                        </div>
                        
                       <div className="row mb-3">
                        <div className="col-12">
                            <label for="mensagem" className="form-label custom-label">Mensagem</label>
                            <textarea name="msg" onChange={onChange} className="form-control" placeholder="Deixe sua mensagem" id="mensagem"></textarea>
                          </div>
                       </div>
                        {/* <!-- checkbox inicio  --> */}
                        <div className="row">
                            <div className="col-12">
                                <p className="mt-3"><span className="obrigatorio">*</span>Campos obrigatórios</p>
                            </div>
                        </div>
                        {/* <!-- checkbox fim  --> */}
                        {/* <!-- BOTÕES inicio  --> */}
                        <div className="row my-3">
                            <div className="col-12 d-flex justify-content-end">
                                <Button type="reset" class="btn-cancelar mx-2" label="Cancelar" />
                                <Button type="submit" class="btn-principal" label="Enviar" />
                            </div>
                        </div>
                     {/* <!-- BOTÕES fim  --> */}
                    
                </form>
                
            </div>
            {/* // <!-- FORM FIM  --> */}
        </div>

    </main>
        </>
    )
}

export default Contact




   
  
