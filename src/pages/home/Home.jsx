import {
  SectionWrapper,
  Container,
  Left,
  Center,
  Right,
  Tags,

} from "./Home.styles";
// ? ant
// import React, { useState } from 'react';
// import { Modal } from 'antd';


import { Button, ModalBackground, Title } from "../../style/StyleComponent";

import img from "../../assets/hero.png"; // o‘zingni rasmingni qo‘y
import { useNavigate } from "react-router-dom";
import ModalKons from "../../components/modals/modalKonsultatsia/ModalKons";
import { useState } from "react";

const Home = () => {
  // ? for modal from ant
  //  const [modal2Open, setModal2Open] = useState(false);
  const [show, setShow] = useState(false)

  //  ? go kourse

  const Navigate = useNavigate()


  const goCourse = () => {
    Navigate('course')
  }

  return (
    <SectionWrapper>
      <div className="max-width">

        <Title>
          Innovatsiya va Texnoligiya olamida buyuklardan biri bo'lishga IT TAT sizga ko'makdosh
        </Title>
      </div>
      <Container className="max-width">


        {/* LEFT */}
        <Left>
          <img src={img} alt="img" />
        </Left>

        {/* CENTER */}
        <Center>
          <Tags>
            <span onClick={goCourse} >Backend</span>
            <span onClick={goCourse} >Frontend</span>
            <span onClick={goCourse} >Robotexnika</span>
            <span onClick={goCourse} >Foundation</span>
            <span onClick={goCourse} >Grafik dizayn</span>
            <span onClick={goCourse} >SMM</span>
            <span onClick={goCourse} >Kompyuter savodxonligi</span>
          </Tags>
        </Center>

        {/* RIGHT */}
        <Right>
          <p>

            O‘z qadriyatlariga ega va eng kuchli mutaxasislar jamlangan zamonaviy kasblar o‘quv markazi

          </p>

          {/* <Button onClick={() => Navigate("/modalKons")}>Bepul konsultatsiya olish</Button> */}

          <Button onClick={() => setShow(true)}>Bepul konsultatsiya olish</Button>
        </Right>
        {/* ?modal */}
        {/* <Modal
        title="Vertically centered modal dialog"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal> */}


      {show && (
  <ModalBackground onClick={() => setShow(false)}>
    <div onClick={(e) => e.stopPropagation()}>
      <ModalKons onClose={() => setShow(false)} />
    </div>
  </ModalBackground>
)}

      </Container>
    </SectionWrapper>

  );
};

export default Home;