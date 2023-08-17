import '../css/ad.css'
import { Link } from "react-router-dom";

import { RiHome2Line } from 'react-icons/ri';

export default function ad() {
    document.title = "Curriculo Virtual - Anuncios";

    return (
        <div>
            <main className="anuncios">
                <section className="content_anuncios">
                    <div className="text_anuncios">
                        <h3>Sem Anuncios no Momento!</h3>
                        <p>Sempre prego por um programa com uma arquitetura limpa e facil de usar, no entanto anuncios mantem o software de pé, logo estou criando essa nova feature para os novos anuncios, anunciantes entrar em <Link to="/contato">Contato</Link></p>
                        <Link to="/" className='backto'><RiHome2Line/><span>Voltar a Pagina inicial</span></Link>
                    </div>

                    <img src={'https://firebasestorage.googleapis.com/v0/b/curriculo-1b801.appspot.com/o/anuncio.png?alt=media&token=5827ebfa-dc7e-4dc8-9f9c-2ecc658e84a4'} className="ads-image" alt="IMG-DEMONSTR-ANUNCIO" />
                </section>
            </main>
        </div>
    )
}