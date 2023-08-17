import { useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../css/Especializacao.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Especializacao() {

  document.title = "Curriculo Virtual - Especialização";

  useEffect(() => {
    AOS.init({
      
    });
  }, []);

  return (
    <div>
      <main className="especializacao_route">
        <section className="content_especializacao">
          <h3>Especialização</h3>

          <p>
            Como um profissional da área de Tecnologia da Informação (TI),
            sempre busquei me especializar em diferentes áreas do conhecimento,
            a fim de ampliar minha visão sobre o mercado e aprimorar minhas
            habilidades técnicas. Ao longo de minha trajetória, tive a
            oportunidade de me aprofundar em diversas áreas, como front-end,
            back-end, NoSQL, Big Data, Excel, containers e Agile.
          </p>
          <p>
            Meu foco principal em termos de linguagem de programação é o
            JavaScript, a qual considero uma das mais importantes linguagens da
            atualidade. Com ela, posso desenvolver soluções de alta qualidade,
            compatíveis com diversos navegadores e dispositivos, além de
            garantir a otimização do código e a escalabilidade das aplicações.
          </p>
          <p>
            No que diz respeito ao desenvolvimento de sistemas, possuo ampla
            experiência na construção de soluções front-end, com habilidades
            avançadas em frameworks como React, Angular e Vue.js, e também no
            desenvolvimento back-end, com a criação de APIs RESTful em Node.js,
            Python e Java.
          </p>
          <p>
            Ademais, tenho experiência na manipulação de grandes quantidades de
            dados, com o uso de tecnologias NoSQL, como o MongoDB e o Cassandra,
            e em ferramentas de Big Data, como Hadoop e Spark, permitindo a
            análise e tratamento de grandes volumes de informações.
          </p>
          <p>
            No que diz respeito ao Excel, possuo habilidades avançadas em
            planilhas eletrônicas, com o conhecimento de fórmulas e funções
            avançadas, além da criação de dashboards e relatórios gerenciais,
            que permitem a tomada de decisões estratégicas em empresas e
            organizações.
          </p>
          <p>
            Outro ponto importante da minha formação é o conhecimento em
            containers, como o Docker, o que permite a criação de ambientes
            isolados e escaláveis, que garantem a segurança e a eficiência dos
            sistemas.
          </p>
          <p>
            Por fim, possuo habilidades em metodologias ágeis, como o Scrum, o
            que me permite trabalhar de forma colaborativa, com entregas
            contínuas e adaptativas, em sintonia com as necessidades do cliente
            e do mercado.
          </p>
          <p>
            Minha especialização em TI me permite desenvolver soluções de alta
            qualidade, escaláveis e seguras, em diferentes áreas do
            conhecimento, com o uso de ferramentas e tecnologias avançadas.
            Estou preparado para enfrentar os desafios do mercado de trabalho e
            contribuir para o desenvolvimento de projetos de sucesso em empresas
            e organizações.
          </p>
        </section>

        <section className="progress-lang">

            <h3>Linguagens de Programação</h3>

            <p>Separei esse topico para colocar algumas das linguagens e modelos de Banco de dados que eu acredito que tenho maior afinidade</p>

            <div className="progress-bar-single" data-aos="zoom-in-right" data-aos-duration="1000">
             <ProgressBar striped variant="warning" now={90} label="Javascript" />
            </div>

            <div className="progress-bar-single" data-aos="zoom-in-left" data-aos-duration="1000">
             <ProgressBar striped variant="info" now={60} label="PHP" />
            </div>

            <div className="progress-bar-single" data-aos="zoom-in-right" data-aos-duration="1000">
             <ProgressBar striped variant="dark" now={55} label="C e C++" />
            </div>

            <div className="progress-bar-single" data-aos="zoom-in-left" data-aos-duration="1000">
             <ProgressBar striped variant="primary" now={75} label="Python" />
            </div>

            <div className="progress-bar-single">
             <ProgressBar striped variant="success" now={70} label="MySQL e NoSQL" />
            </div>

        </section>
      </main>
    </div>
  );
}
