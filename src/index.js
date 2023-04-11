import React from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.css"
import Pedido from "./Pedido"
import Cartao from "./Cartao"
import Feedback from "./Feedback"

const App = () => {
    const textoOk = "Já Chegou"
    const textoNOk = "Não Chegou"
    const funcaoOk = () => alert("Agradecemos a confirmação")
    const funcaoNOk = () => alert("Verificaremos o ocorrido")

    const componenteFeedback = <Feedback textoOk = {textoOk} funcaoOk = {funcaoOk} textoNOk = {textoNOk} funcaoNOk = {funcaoNOk}/>

    return(
        //container principal
        <div className="container border rounded mt-2">
            {/*linha para o título*/}
            <div className="row border-bottom m-2">
                <h1 className="display-5 text-center">Seus pedidos</h1>
            </div>
            {/*linha para o primeiro pedido*/}
            <div className="row">
                {/*controle de colunas para responsividade*/}
                <div className="col-sm-8 col-md-6 m-2">
                    <Cartao cabecalho = "22/04/2021">
                        <Pedido data="22/04/2021" icone="fas fa-hdd fa-2x" titulo="SSD" descricao="SSD Kingston A400 - SATA"/>
                        {componenteFeedback}
                    </Cartao>
                </div>
            </div>
            {/*linha para o segundo pedido*/}
            <div className="row">
                {/*controle de colunas para responsividade*/}
                <div className="col-sm-8 col-md-6 m-2">
                    <Cartao cabecalho="20/04/2021">
                        <Pedido data="20/04/2021" icone="fas fa-book fa-2x" titulo="Livro" descricao="Concrete Mathematics - Donald Knuth"/> 
                        {componenteFeedback}
                    </Cartao>
                </div>
            </div>
            {/*linha para o terceiro pedido*/}
            <div className="row">
                {/*controle de colunas para responsividade*/}
                <div className="col-sm-8 col-md-6 m-2">
                    {/*cartão*/}
                    <Cartao cabecalho="21/01/2021">
                        <Pedido data="21/01/2021" icone="fas fa-laptop fa-2x" titulo="Laptop" descricao="Notebook Dell - 8Gb - i5"/> 
                        {componenteFeedback}
                    </Cartao>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App/>,document.querySelector('#root')
)