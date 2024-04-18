import { useEffect, useState } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

import { FiGrid } from "react-icons/fi";
import { BsFiletypePdf, BsGithub } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa";
import { MdSchool, MdFeedback } from "react-icons/md";
import { TbCodeDots } from 'react-icons/tb'
import { RiAdvertisementFill } from 'react-icons/ri'

import "../css/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  document.title = "Curriculo Virtual";
  const [imgData, setImgData] = useState("");
  const [namee, setName] = useState("");

  const url_curriculo = "https://firebasestorage.googleapis.com/v0/b/curriculo-1b801.appspot.com/o/tcc_ifms%20(1).pdf?alt=media&token=f6104e1a-8164-4d4f-8997-0d7ebef8be3f"

  function replaceRef(anchor: any) {
    
    if(anchor === url_curriculo) {
      window.location.href=`download/${anchor}`;
    }
    else {
      window.location.href = anchor;
      window.history.replaceState(null, '', window.location.href.split('#')[0]);
    }
  }


  async function fetchGithub() {
    try {
      const f_img = await fetch("https://api.github.com/users/Luan16p")
        .then((res) => res.json())
        .then((data) => data.avatar_url);

      const f_nome = await fetch("https://api.github.com/users/Luan16p")
        .then((res) => res.json())
        .then((data) => data.name);

      setImgData(f_img);
      setName(f_nome);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchGithub();
  }, []);

  useEffect(() => {
    AOS.init({
      
    });
  }, []);

  return (
    <div>
      <main className="main-home">
        <section className="info">
          <div className="txt">
            <h2>Olá,</h2>
            <h4>seja bem vindo(a) ao meu Curriculo!</h4>
            <h5>Aqui voce pode...</h5>

            <div className="btns">
              <button onClick={() => replaceRef('#options')} className="btn btn-dark rounded">
                <FiGrid className="i" />
                Dar uma olhada nas minhas informações
              </button>
              <button className="btn btn-light border border-1 border-dark rounded">
                <BsFiletypePdf />
                <a href={url_curriculo} className="text-dark" download={url_curriculo}>Ver o meu curriculo</a>
              </button>
            </div>

            <div className="down" >
              <button className="border-0" data-aos="zoom-on" data-aos-duration="1000">
                <FaArrowDown className="down-i"  />
              </button>
            </div>
          </div>
          <div className="atributos">
            <img src={imgData} alt="" className="rounded-circle" />
            <h3 className="nome">{namee}</h3>
          </div>
        </section>

        <section className="about">
          <h3 className="titulo-sobre">Sobre Mim</h3>

          <p>
            Meu nome é Luan Freire Alves da Silva. Nasci em Sorriso-MT, mas
            cresci em Naviraí-MS. Sou um desenvolvedor de software apaixonado
            por tecnologia e informação, e trabalhar em equipe é algo que sempre
            me trouxe bons resultados.
          </p>

          <p>
            Sou formado no curso técnico de Informática para Internet e tenho
            uma sólida formação em exatas. A área de ciências que mais me
            fascina é a física, especialmente a mecânica quântica e a
            relatividade. Gosto de entender os mistérios do universo e como as
            leis da física governam tudo ao nosso redor. A curiosidade e a
            paixão pela ciência me levaram a me aprofundar em tópicos complexos
            e desafiadores.
          </p>

          <p>
            Eu me dedico muito para aprimorar minhas habilidades em
            desenvolvimento de software. Sempre busco novas formas de aprimorar
            meu conhecimento técnico e me comprometo em entregar soluções de
            alta qualidade para meus clientes. Acredito que é importante
            trabalhar em equipe e valorizo muito a colaboração em projetos.
          </p>

          <p>
            Além disso, também sou uma pessoa sociável e gosto de me conectar
            com pessoas de diferentes origens. Acredito que a troca de
            experiências pode ser muito enriquecedora e sempre busco estar
            aberto a novas ideias.
          </p>

          <p>
            Em resumo, sou um desenvolvedor de software apaixonado por
            tecnologia e ciência. Minha dedicação ao aprendizado e minha
            habilidade em trabalhar em equipe me tornam um profissional
            valorizado em minha área de atuação.
          </p>
        </section>

        <div className="h2_options">
          <h2 className="h2">O que você deseja ver?</h2>
        </div>

        <section className="options" id="options">


          <Link to="formacao-academica" data-aos="fade-right" data-aos-duration="1000" className="card formacao_academica" title="Formação academica">
            <div className="icons">
              <MdSchool className="icon" />
            </div>

            <div className="text">
              <h3>Formação Academica</h3>

              <p>Aqui voce ler sobre a minha formacao escolar.</p>
            </div>
          </Link>

          <Link to="especializacao"  data-aos="fade-left" data-aos-duration="1000" className="card especializacao" title="Especialização">
            <div className="icons">
              <TbCodeDots className="icon" />
            </div>

            <div className="text">
              <h3>Especialização</h3>

              <p>Veja as areas que eu mais domino dentro da programacao.</p>
            </div>
          </Link>
          <Link to="repositorios" data-aos="fade-right" data-aos-duration="1000" className="card repositorios" title="Projetos, algoritmos e Repositorios (Github)">
            <div className="icons">
              <BsGithub className="icon" />
            </div>

            <div className="text">
              <h3>Projetos & Algoritmos</h3>

              <p>Confira alguns de meus projetos incluindo esse.</p>
            </div>
          </Link>
          <Link to="feedback" data-aos="fade-left" data-aos-duration="1000" className="card feedback" title="Feedback de Usuarios">
            <div className="icons">
              <MdFeedback className="icon" />
            </div>

            <div className="text">
              <h3>Dar Feedback</h3>

              <p>Deixe seu Feedback para o meu curriculo ir melhorando.</p>
            </div>
          </Link>
        </section>
      </main>
    </div>
  );
}
