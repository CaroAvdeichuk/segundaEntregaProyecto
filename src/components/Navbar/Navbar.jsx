import { Categorias } from "./Categorias/Categorias.jsx";
import { CartWidget } from "../CartWidget/CartWisget.jsx";
export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Categorias />
            <CartWidget cantCarrito={0} />
        </nav>
    );
}