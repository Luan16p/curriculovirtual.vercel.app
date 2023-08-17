import '../css/ad.css'
import { Link } from "react-router-dom";

export default function ad() {
    document.title = "Curriculo Virtual - Anuncios";

    return (
        <div>
            <main className="anuncios">
                <section className="content_anuncios">
                    <div className="text_anuncios">
                        <h3>Sem Anuncios no Momento!</h3>
                        <p>Sempre prego por um programa com uma arquitetura limpa e facil de usar, no entanto anuncios mantem o software de pé, logo estou criando essa nova feature para os novos anuncios, anunciantes entrar em <Link to="/contato">Contato</Link></p>
                    </div>

                    <img src="" alt="IMG-DEMONSTR-ANUNCIO" />
                </section>
            </main>
        </div>
    )
}