import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/Home";
import { Contatos } from "../pages/Contato";
import { Produto } from "../pages/Produtos";
import { ProdutoSelecionado } from "../pages/ProdutoSelecionado";

const routes = createBrowserRouter ([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/produtos/",
        element: <Produto/>
    },
    {
        path: "/produtos/:id",
        element: <ProdutoSelecionado/>
    },
    {
        path: "/contato",
        element: <Contatos/>
    }
])

export function AppRoutes() {
    return (
        <RouterProvider router={routes} />
    )
}