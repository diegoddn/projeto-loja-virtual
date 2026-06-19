import { Footer } from "../components/Footer/Footer"
import { Produtos } from "../components/Produtos/Produtos"
import { Links } from "../components/Link/Links"
import { listaDeProdutos } from "../listaprodutos"
import { useState, type ChangeEvent, type FormEvent } from "react";



export function Produto() {
    const [filtrar, setFiltrar] = useState("");

    let filtrarTexto = "";
    
    // Enquanto digita essa função é executada
    function handleFiltrarProdutos (event: ChangeEvent<HTMLInputElement>) {
        filtrarTexto = event.target.value.toLowerCase()
        setFilrar(`Produto: ${filtrarTexto}`)
    }
    
    // Quando clico em filtrar essa função é executada
    function handleSubmit(event: FormEvent) {
        event.preventDefault()
    
        const filtroProdutos = listaDeProdutos.filter((produto) => produto.titulo?.toLowerCase().includes(filtrarTexto))
        
        setSubmit(filtroProdutos)
    }
    return (
        <>     
        <h2>Produtos em Destaque</h2>

        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Filtrar produtos" 
            onChange={(e) => setFiltrar(e.target.value)}
            />
        </form>
        <button>Filtrar</button>

        {listaDeProdutos.map((produto) => 
        <Produtos
            key = {produto.id}
            id={produto.id}
            titulo = {produto.titulo}
            imagem = {produto.imagem}
            descricao = {produto.descricao}
        >
            <p><strong>Deixe um comentário:</strong></p>
        </Produtos>
        )}

        <Links/>        
        
        <Footer/>
        </>
    )
}