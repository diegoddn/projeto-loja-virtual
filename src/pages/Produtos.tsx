import { Footer } from "../components/Footer/Footer"
import { Produtos } from "../components/Produtos/Produtos"
import { Links } from "../components/Link/Links"
import { listaDeProdutos } from "../listaprodutos"
import { useState, type ChangeEvent, type FormEvent } from "react";



export function Produto() {
    const [filtrar, setFiltrar] = useState("");
    const [produtosFiltrados, setProdutosFiltrados] = useState(listaDeProdutos);

    function handleFiltrarProdutos(event: ChangeEvent<HTMLInputElement>) {
        setFiltrar(event.target.value);
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const filtroProdutos = listaDeProdutos.filter((produto) =>
            produto.titulo?.toLowerCase().includes(filtrar.toLowerCase())
        );

        setProdutosFiltrados(filtroProdutos);
    }



    return (
        <>     
        <h2>Produtos em Destaque</h2>

        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Filtrar produtos" 
            value={filtrar}
            onChange={handleFiltrarProdutos}
            />
            <button type="submit">Filtrar</button>
        </form>

        {produtosFiltrados.map((produto) => 
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