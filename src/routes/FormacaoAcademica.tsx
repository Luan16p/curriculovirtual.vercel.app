import "../css/Formacao.css";

export default function FormacaoAcademica() {

  document.title = "Curriculo Virtual - Formação academica";

  function replaceRef(anchor: any) {
    window.location.href = anchor;
  }

  return (
    <div>
      <main className="formacaoacademica">
        <section className="text-formacao">
          <div className="content">
            <h3>Formação Academica</h3>

            <p>
              Sou um profissional com ampla formação acadêmica, tendo iniciado
              minha trajetória educacional no Colégio Logos Navirai, onde
              estudei de 2010 até 2013. Em seguida, me transferi para a Escola
              José Martins Flores, onde concluí o ensino fundamental em 2014 e
              continuei meus estudos no Geo Naviraí (Farias Brito), de 2016 a
              2019.
            </p>
            <p>
              Em 2020, dei um grande salto na minha carreira acadêmica ao
              ingressar no Instituto Federal do Mato Grosso do Sul, Campus
              Naviraí, onde concluí o ensino médio e o curso técnico integrado
              em Informática para Internet, Redes, Programação e Eletrônica, em
              2022.
            </p>
            <p>
              Durante o período no Instituto Federal, tive a oportunidade de
              desenvolver habilidades técnicas e conceituais em diversas áreas,
              como programação, eletrônica, redes e informática para internet.
              Além disso, também pude me aprofundar em outras disciplinas
              complementares, como Matemática, Física e Língua Portuguesa.
            </p>
            <p>
              Um dos momentos mais marcantes da minha trajetória acadêmica foi a
              elaboração da minha tese de conclusão de curso, na qual abordei o
              tema da computação quântica. A tese foi aprovada com nota 9/10, o
              que demonstra minha capacidade de pesquisa e inovação na área.
            </p>
            <p>
              Além disso, aproveitei minha passagem pelo Instituto Federal para
              participar de diversos projetos de pesquisa e extensão, como a
              organização de eventos e ações voltadas para a comunidade, o que
              me permitiu ampliar minha visão e contribuir de forma positiva
              para o desenvolvimento social e tecnológico da região.
            </p>
            <p>
              Em suma, minha formação acadêmica me tornou um profissional
              capacitado, com habilidades técnicas e conceituais em áreas
              estratégicas e uma visão ampla sobre a sociedade e seus desafios.
              Estou preparado para enfrentar os desafios do mercado de trabalho
              e contribuir de forma efetiva para o desenvolvimento de projetos
              de sucesso.
            </p>
              <div className="bt-btn">
              <button className="btn btn-dark" onClick={() => replaceRef('https://firebasestorage.googleapis.com/v0/b/curriculo-1b801.appspot.com/o/tcc_ifms%20(1).pdf?alt=media&token=f6104e1a-8164-4d4f-8997-0d7ebef8be3f')}>
                Clique aqui para Ler meu TCC
                </button>
              </div>
          </div>

          <div className="forma-img">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/curriculo-1b801.appspot.com/o/IMG_2361.JPG?alt=media&token=1976d329-04e5-4824-b79a-b9919fc52c5b"
              alt=""
            />
            <p className="descricao">
              Essa é uma foto tirada dia 27/03 durante a minha formatura no
              IFMS.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
