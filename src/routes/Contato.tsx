import { MdAlternateEmail, MdWhatsapp } from 'react-icons/md';
import { SiDiscord } from 'react-icons/si';
import { useMediaQuery } from 'react-responsive';

import '../css/Contato.css';

export default function Contato () {

    document.title = "Curriculo Virtual - Contato";

    const isMobile = useMediaQuery({ maxWidth: 500 });

    return (
        <div>
            <main className="contato">

                <section className="cont">

                    <h2>Entre em Contato.</h2>

                    <div className={`cont-single d-flex flex-direction-row gap-3 email ${isMobile ? 'email-mobile' : ''}`}>

                        <div className="icontato">
                            <MdAlternateEmail className='i-co'/>
                        </div>

                        <div className="text-contato text-break" >

                            <h4>Via E-mail</h4>
                            <p>{isMobile ? 'luan.silva8@...' : 'luan.silva8@estudante.ifms.edu.br'}</p>

                        </div>            
                        
                    </div>

                    <div className="cont-single d-flex flex-direction-row gap-3 discord">

                        <div className="icontato">
                            <SiDiscord className='i-co'/>
                        </div>

                        <div className="text-contato" >

                            <h4>Via Discord</h4>
                            <p>Luan.#2356</p>

                        </div>            
                        
                    </div>

                    <div className="cont-single d-flex flex-direction-row gap-3 whatsapp">

                        <div className="icontato">
                            <MdWhatsapp className='i-co'/>
                        </div>

                        <div className="text-contato">

                            <h4>Via Whatsapp</h4>
                            <p>+55 (67) 9-8143-6155</p>

                        </div>            
                        
                    </div>

                </section>

            </main>
        </div>
    )
}
