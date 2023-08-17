import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";

export default function Erro(props: any) {

  document.title = "Curriculo Virtual - Erro 404";

    function randomColor() {
        const validVariants = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
        return validVariants[Math.floor(Math.random() * validVariants.length)];
      }
      

  return (
    <Container className="my-5">
      <Row>
        <Col>
            <div className="center d-flex w-100 justify-content-center">

                <img src="https://firebasestorage.googleapis.com/v0/b/curriculo-1b801.appspot.com/o/Oops!%20404%20Error%20with%20a%20broken%20robot-rafiki.png?alt=media&token=ec8da3b6-8738-4b8e-beaa-f2565ae49b5a" alt="" className="img-404" />

            </div>
            <h1 className="text-center mb-5">Erro 404</h1>
            <p className="text-center mb-5">
            Desculpe, a página que você está procurando não foi encontrada.
          </p>


          <p className="text-center mb-5">
          A página que você está tentando acessar não pôde ser encontrada. Isso pode ter ocorrido por várias razões, incluindo um link quebrado, uma digitação incorreta do URL ou uma página removida.

Por favor, verifique se o URL está correto e tente novamente. Se você chegou aqui clicando em um link, por favor, entre em contato conosco para que possamos corrigir o problema. Enquanto isso, você pode retornar à página inicial do site clicando no botão abaixo.
          </p>
          <div className="text-center">
            <Link to="/">
              <Button variant={randomColor()}>Voltar para a página inicial</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
