import styled, { keyframes } from "styled-components";

/* HEADER */
export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.47);
  backdrop-filter: blur(10px);
  box-shadow: 0 5px 10px rgba(119, 119, 119, 0.1);
  z-index: 1000;
`;

/* CONTAINER */
export const Container = styled.div`
 
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
`;



/* ANIMATION - AVVAL */
const jelloHorizontal = keyframes`
  0% {
    transform: scale3d(1, 1, 1);
  }
  30% {
    transform: scale3d(1.1, 0.9, 1);
  }
  40% {
    transform: scale3d(0.9, 1.1, 1);
  }
  50% {
    transform: scale3d(1.05, 0.95, 1);
  }
  65% {
    transform: scale3d(0.98, 1.02, 1);
  }
  75% {
    transform: scale3d(1.02, 0.98, 1);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
`;

/* LOGO */
export const Logo = styled.img`
  height: 60px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    animation: ${jelloHorizontal} 0.6s both;
  }
`;


/* NAV */
export const Nav = styled.ul`
  display: flex;
  gap: var(--gap-20);
  list-style: none;

  a {
    text-decoration: none;
    color: var(--black);
    transition: 0.3s;
    font-size: var(--font-size-16);
    font-weight: var(--font-weight-600);

    &:hover {
      color: var(--primary) !important;
    }
  }

  .active {
    color: var(--primary);
  }



`;

/* RIGHT SIDE */
export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-20);

  a {
    font-size: var(--font-size-16);
    font-weight: var(--font-weight-600);
    text-decoration: none;
    color: var(--primary);
  }
`;

/* MENU ICON */
export const MenuIcon = styled.i`
  display: none;
  font-size: var(--font-size-30);
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

/* MOBILE MENU */
export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${({ active }) => (active ? "0" : "-100%")};
  width: 70%;
  height: 100vh;
  background: var(--primary);
  transition: 0.3s ease;
  padding: 40px;
  z-index: 999;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--gap-20);
  }

  a {
    color: var(--primary) !;
    text-decoration: none;
  }
`;

/* OVERLAY */
export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  z-index: 998;
`;