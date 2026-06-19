import { useNavigate } from "react-router-dom"
import { Button } from "./styles"

export function Links() {
    const navigation = useNavigate()

    function handleInicio () {
        navigation("/")
    }

    function handleProdutos () {
        navigation("/produtos")
    }

    function handleContato () {
        navigation("/contato")
    }


    return (
        <>
            <Button onClick={handleInicio} >Inicio</Button>
            <Button onClick={handleProdutos}>Ver Produtos</Button>
            <Button onClick={handleContato}>Contato</Button>
        </>
    )
}