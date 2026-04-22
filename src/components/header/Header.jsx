// import { Button } from "../../style/StyleComponent";
import { useState } from "react";
import logo_header from "../../assets/hed_logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { Modal } from "antd";

import {
  HeaderWrapper,
  Container,
  Logo,
  Nav,
  Right,
  MenuIcon,
  MobileMenu,
  Overlay
} from "./Header.styles";

const Header = () => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  

  const handleClick = () => setIsActive(!isActive);
  const closeMenu = () => setIsActive(false);

  return (
    <>
      <HeaderWrapper>
        <Container className="max-width">
          <Logo src={logo_header} onClick={() => navigate("/")} />

          <Nav>
            <li><NavLink to="/">Bosh sahifa</NavLink></li>
            <li><NavLink to="/kurslar">Kurslar</NavLink></li>
            <li><NavLink to="/ustozlar">Ustozlar</NavLink></li>
            <li><NavLink to="/online">Online kurslar</NavLink></li>
          </Nav>

          <MenuIcon className="bx bx-menu" onClick={handleClick} />

          <Right>
            <a href="tel:+998886110440">+998 (88) 611-04-40</a>
            {/* <Button onClick={() => setIsModalOpen(true)}>
              Ro‘yxatdan o‘tish
            </Button> */}
          </Right>
        </Container>
      </HeaderWrapper>

      {isActive && <Overlay onClick={closeMenu} />}

      <MobileMenu active={isActive}>
        <ul>
          <li><NavLink to="/">Bosh sahifa</NavLink></li>
          <li><NavLink to="/kurslar">Kurslar</NavLink></li>
          <li><NavLink to="/ustozlar">Ustozlar</NavLink></li>
          <li><NavLink to="/online">Online kurslar</NavLink></li>

          {/* <Button onClick={() => setIsModalOpen(true)}>
            Ro‘yxatdan o‘tish
          </Button> */}

          <a href="tel:+998886110440">+998 (88) 611-04-40</a>
        </ul>
      </MobileMenu>

      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <h2>Ro‘yxatdan o‘tish tez orada ishga tushiriladi.</h2>
      </Modal>
    </>
  );
};

export default Header;