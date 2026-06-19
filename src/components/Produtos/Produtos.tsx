import { useState, type ReactNode } from "react";
import { Adicionar, Container } from "./styles"
import { Link } from "react-router-dom";

interface CardProps {
    id: number;
    titulo: string;
    imagem: string;
    descricao: string;
    children?: ReactNode;
}

function handleAdd(titulo: string) {
    alert(`${titulo} adicionado ao carrinho`)
}

export function Produtos({
    id,
    titulo, 
    imagem, 
    descricao,
    children
}: CardProps) {

    const [count, setCount] = useState<number>(0);

    const handleMais = () => {
        if (count < 10) {
            setCount(count + 1)
        }
    }

    const handleMenos = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (

        <section>
                <Container>
                    <div>
                        <img src={imagem} width="200px" alt={titulo} />
                    </div>
                    <div>
                        <h3><Link to={`/produtos/${id}`}>{titulo}</Link></h3>
                        <p>{descricao}</p>
                        <Adicionar>
                        <button onClick={() => handleAdd(titulo)}>Adicionar</button>
                        <button onClick={handleMenos}>-</button>
                        <p>{count}</p>
                        <button onClick={handleMais}>+</button>
                        </Adicionar>
                        <button>Comprar</button>
                        {children}
                    </div>
                </Container>
        </section>
    )
}