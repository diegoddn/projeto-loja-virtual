import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { listaDeProdutos } from "../listaprodutos";
import { Container } from "../components/Produtos/styles";
import { Links } from "../components/Link/Links";

export function ProdutoSelecionado () {
    /* Hooks */
    const { id } = useParams()

    const produto = listaDeProdutos.find(produto => produto.id === Number(id))

    if (!produto) {
        return <p>Produto não encontrado.</p>
    }

    return (
        <>
            <h2>Produto selecionado</h2>

            <section>
                <Container>
                    <div>
                        <img src={produto.imagem} width="200px" alt={produto.titulo} />
                    </div>
                    <div>
                        <h3>{produto.titulo}</h3>
                        <p>{produto.descricao}</p>
                        <button>Adicionar</button>
                        <button>Comprar</button>
                    </div>

                </Container>
            </section>

            <Links/>
            <Footer/>
        </>
    )
}