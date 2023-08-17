import { Route, Routes } from "react-router-dom";
import Contato from "../routes/Contato";
import Erro from "../routes/Erro";
import Especializacao from "../routes/Especializacao";
import Feedback from "../routes/Feedback";
import FormacaoAcademica from "../routes/FormacaoAcademica";
import Home from "../routes/Home";
import Repositorios from "../routes/Repositorios";
import Sitemap from "../routes/Sitemap";
import Ad from "../routes/Ad";

export default function SolidPage() {



    return (
        <div>

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="*" element={<Erro/>}/>
                <Route path="/contato" element={<Contato />} />
                <Route path="/formacao-academica" element={<FormacaoAcademica/>}/>
                <Route path="/especializacao" element={<Especializacao/>}/>
                <Route path="/repositorios" element={<Repositorios/>}/>
                <Route path="/feedback" element={<Feedback/>}/>
                <Route path="/sitemap" element={<Sitemap/>}/>
                <Route path="/ad" element={<Ad/>}/>
            </Routes>

        </div>
    );
}