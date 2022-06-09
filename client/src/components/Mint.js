import React, { lazy, Suspense, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
// import Carousel from '../Carousel'
import { dark } from "../styles/Themes";
import Loading from "./Loading";
import { Web3Context } from "../context/Web3Context";
// import plus from "../assets/Plus.svg";

const Carousel = lazy(() => import("./Carousel"));

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;
const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  /* background-color: lightblue; */

  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 70em) {
    width: 85%;
  }

  @media (max-width: 64em) {
    width: 100%;
    flex-direction: column;

    & > *:last-child {
      width: 80%;
    }
  }
  @media (max-width: 40em) {
    & > *:last-child {
      width: 90%;
    }
  }
`;
const Box = styled.div`
  width: 50%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    min-height: 50vh;
  }
`;

const Box2 = styled.div`
  width: 70%;
  height: 100%;
  min-height: 40vh;
  max-width: 35vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;

  -webkit-border-radius: 77px;
  border-radius: 77px;
  background: #202020;
  -webkit-box-shadow: 12px 12px 14px #0d0d0d, -12px -12px 14px #333333;
  box-shadow: 12px 12px 14px #0d0d0d, -12px -12px 14px #333333;

  @media (max-width: 64em) {
    min-width: 35px;
  }
  @media (max-width: 40em) {
    min-height: 50vh;
    min-width: 60%;
  }
  @media (max-width: 30em) {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.body};
  text-align: center;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;
const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.body};
  text-align: center;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;
  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;
const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
  text-align: center;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontsm};
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontsm};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;
// const ButtonContainer = styled.div`
//   width: 80%;
//   margin: 1rem auto;
//   display: flex;
//   align-self: flex-start;

//   @media (max-width: 64em) {
//     width: 100%;

//     button {
//       margin: 0 auto;
//     }
//   }
// `;

const MintInput = styled.input`
  width: 50%;
  height: 100%;
  min-height: 5vh;
  min-width: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: white;
  z-index: 2;
  margin: 20px 0;

  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
  }

  ::placeholder {
    text-align: center;
    font-size: 0.8rem;
  }
`;

const MintButton = styled.button`
  display: inline-block;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  outline: none;
  border: none;
  text-align: center;

  font-size: ${(props) => props.theme.fontsm};
  padding: 0.9rem 2.3rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  &:hover {
    transform: scale(0.9);
  }

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    max-width: 70%;
  }

  @media (max-width: 30em) {
    width: 100%;
  }

  &::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${(props) => props.theme.text};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }

  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
`;

const AmountIncrement = styled.button`
  display: inline-block;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  outline: none;
  border: none;
  width: 1rem;
  justify-content: center;
  align-text: center;

  @media (max-width: 48em) {
    max-width: 60%;
  }

  font-size: ${(props) => props.theme.fontsm};
  padding: 0.9rem 2.3rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  &:hover {
    transform: scale(0.9);
  }

  &::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${(props) => props.theme.text};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }
`;

const MintDiv = styled.div`
  width: 70%;
  margin: 0.4rem auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    justify-content: center;
  }
`;

const Mint = () => {
  const {
    mintAmount,
    mintToken,
    handleDecrement,
    handleIncrement,
    isConnected,
  } = useContext(Web3Context);

  return (
    <Section id="mint">
      <Container>
        <Box>
          <Suspense fallback={<Loading />}>
            <Carousel />{" "}
          </Suspense>{" "}
        </Box>
        <Box2>
          {/* Use this text for an <About /> section. */}
          {/* <Title>
            Welcome To The <br /> Weirdos Club.
          </Title>
          <SubText>
            Stichies are a private collection of digital collectibles. The
            Stichies are stored as ERC-721A tokens on the Ethereum blockchain and
            hosted on IPFS/Pinata.
          </SubText>
          <SubTextLight>
            With more than 200+ hand drawn traits, each NFT is unique and comes
            with a membership to an exclusive group of successful investors.
            Join an ambitious ever-growing community with multiple benefits and
            utilities.
          </SubTextLight> */}
          {/* <ButtonContainer> */}
          <Title>Stitchies </Title>
          <SubTextLight>Mint Price: 0.01 ETH</SubTextLight>
          {isConnected ? (
            <ThemeProvider theme={dark}>
              <MintDiv>
                <AmountIncrement onClick={handleIncrement}>+</AmountIncrement>
                <MintInput
                  type="number"
                  defaultvalue={1}
                  max={4}
                  value={mintAmount}
                />
                <AmountIncrement onClick={handleDecrement}>-</AmountIncrement>
              </MintDiv>
              <MintButton onClick={mintToken}>Mint</MintButton>
            </ThemeProvider>
          ) : (
            <SubText>No wallet detected</SubText>
          )}
          {/* </ButtonContainer> */}
        </Box2>
      </Container>
    </Section>
  );
};

export default Mint;
