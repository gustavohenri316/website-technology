import { 
    BrowserRouter as Router, 
    Routes, 
    Route 
} from "react-router-dom";

import { Home } from "./Pages/Home";
import { Contatos } from "./Pages/Contatos";
import { Header } from "./components/Header";
import { Blog } from "./Pages/Blog";
import { Produtos } from "./Pages/Produtos";
import { Servicos } from "./Pages/Servicos";
import { QuemSomos } from "./Pages/QuemSomos";
import { Carreira } from "./Pages/Carreira";

export const Rotas = () => {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Contatos" element={<Contatos/>}/>
                <Route path="/Blog" element={<Blog/>}/>
                <Route path="/Produtos" element={<Produtos/>}/>
                <Route path="/Servicos" element={<Servicos/>}/>
                <Route path="/QuemSomos" element={<QuemSomos/>}/>
                <Route path="/Carreira" element={<Carreira/>}/>
            </Routes>
        </Router>
    )
}