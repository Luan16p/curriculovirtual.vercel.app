import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

import { MdCookie } from "react-icons/md";
import { MdContacts } from "react-icons/md";
import { FaTachometerAlt } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";

import "../css/Navbar.css";
import '../css/Responsive.css';

import { useState } from "react";

export default function Header(props: any) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <nav className="navbar m-5 mt-0 mb-0">
        <div className="logo">
          <Link to="/" className="logo_a">
            Curriculo Virtual
          </Link>
        </div>

        <div className="nav-items">
          <li>
            <Link to="/">
              <FaTachometerAlt /> Principal
            </Link>
          </li>

          <li>
            <Link to="/sitemap">
              <FaSitemap /> Sitemap
            </Link>
          </li>

          <li>
            <Link to="/contato">
              <MdContacts /> Contato
            </Link>
          </li>
        </div>

        <div className="cookies">
          <li>
            <Link to="/cookies" onClick={()=> alert("Sem Cookies no Momento!")}>
              <MdCookie /> Cookies
            </Link>
          </li>
        </div>

        <Button className="menu-mobile btn btn-light text-dark border border-dark" onClick={handleShow}>
          Menu
        </Button>

        <Offcanvas show={show} onHide={handleClose} backdrop="static" className="w-90 h-100">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title style={{fontWeight: 'bold'}}>Curriculo Virtual</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="items-menu">
          <div className="nav-items-v">
          <li>
            <Link to="/">
              <FaTachometerAlt /> Principal
            </Link>
          </li>

          <li>
            <Link to="/sitemap">
              <FaSitemap /> Sitemap
            </Link>
          </li>

          <li>
            <Link to="/contato">
              <MdContacts /> Contato
            </Link>
          </li>
        </div>

        <div className="cookies-v">
            <span className="orwell">
                Todos os animais são iguais, mas alguns são mais iguais que outros
            </span>
          <li>
            <Link to="/cookies" onClick={()=> alert("Sem Cookies no Momento!")}>
              <MdCookie /> Cookies
            </Link>

          </li>
        </div>
          </Offcanvas.Body>
        </Offcanvas>
      </nav>
    </div>
  );
}
