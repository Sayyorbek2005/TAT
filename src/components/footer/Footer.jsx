import {
  FooterWrapper,
  Container,
  Left,
  Logo,
  Description,
  Column,
  Title,
  LinkItem,
  Socials
} from "./Footer.styles";
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";




import logo from "../../assets/footer_logo.png";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container className="max-width">

        {/* LEFT */}
        <Left>
          <Logo src={logo} alt="logo" />
          <Description>
            Innovatsiya va texnologiya orqali O‘zbekiston yoshlarini dunyoga tanitish
          </Description>
        </Left>

        {/* NAVIGATION */}
        <Column>
          <Title>Navigatsiya</Title>
          <LinkItem>Bosh sahifa</LinkItem>
          <LinkItem>Kurslar va narxlar</LinkItem>
          <LinkItem>Guruhga yozilish</LinkItem>
        </Column>

        {/* COURSES */}
        <Column>
          <Title>Kurslar</Title>
          <LinkItem>Frontend dasturchi</LinkItem>
          <LinkItem>Python dasturchi</LinkItem>
          <LinkItem>Mobilografiya va SMM</LinkItem>
          <LinkItem>Grafik dizayn</LinkItem>
          <LinkItem>Foundation</LinkItem>
        </Column>

        {/* CONTACT */}
        <Column>
          <Title>Aloqa</Title>
          <LinkItem href="tel:+998886110440">+998 (88) 611-04-40</LinkItem>

          <Socials>
            {/* <SocialIcon className="bx bxl-twitter" />
            <SocialIcon className="bx bxl-facebook" /> */}
           
            <FaTelegramPlane />
                <FaInstagram />

          </Socials>
        </Column>

      </Container>
    </FooterWrapper>
  );
};

export default Footer;