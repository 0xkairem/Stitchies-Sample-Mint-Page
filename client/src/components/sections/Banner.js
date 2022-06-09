import React from 'react'
import styled from 'styled-components'

import img1 from "../../assets/Nfts/bighead.svg";
import img2 from "../../assets/Nfts/bighead-1.svg";
import img3 from "../../assets/Nfts/bighead-2.svg";
import img4 from "../../assets/Nfts/bighead-3.svg";
import img5 from "../../assets/Nfts/bighead-4.svg";
import img6 from "../../assets/Nfts/bighead-5.svg";

const Section = styled.section`
width: 100vw;
height: 25rem;
position: relative;
border-top: 2px solid ${props => props.theme.text};
border-bottom: 2px solid ${props => props.theme.text};

background-color: ${props =>`rgba(${props.theme.textRgba},0.90)`};

display: flex;
justify-content: center;
align-items: center;

overflow: hidden;

@media (max-width: 48em){
  height: 15rem;
  flex-direction: column;

}

`
const ImgContainer = styled.div`

width: 100%;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
display: flex;
justify-content: center;
align-items: center;
opacity: 0.2;


img{
    width: 15rem;
    height: auto;
}

@media (max-width: 48em){
  img{
    width: 10rem;
}
}


`
const Title = styled.h1`
font-size: ${props => props.theme.fontxxxl};
color: ${props => props.theme.body};
padding: 1rem 2rem;
z-index:50;
width: 35%;

text-shadow: 1px 1px 2px ${props => props.theme.text};

@media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};  
width: 40%;
    
}

@media (max-width: 48em) {
width: 100%;
padding: 2rem 0;
text-align:center;
    font-size: ${(props) => props.theme.fontxl};  
}

`
const BtnContainer = styled.div`
width: 35%;
z-index:50;

display: flex;
justify-content: flex-end;

@media (max-width: 48em) {
width: 100%;
justify-content: center;

}
`
const JoinNow = styled.button`
padding:1.5rem 3rem;
font-size: ${props => props.theme.fontlg};
font-weight:600;
border: 1px solid ${props => props.theme.body};
color:${props => props.theme.text};

text-transform:capitalize;
border-radius: 50px;
align-self: center;


@media (max-width: 48em) {
  padding:1rem 2rem;
}
@media (max-width: 30em) {
  font-size: ${props => props.theme.fontsm};
  padding:0.5rem 2rem;
}

cursor: pointer;
transition: all 0.2s ease;
position: relative;

&:after{
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%, -50%) scale(0);
    border: 2px solid ${props => props.theme.body};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
    
}


&:hover:after{
transform: translate(-50%, -50%) scale(1);
padding: 0.3rem;

}
&:hover{
/* background-color: ${props => `rgba(${props.theme.textRgba},0.7)`}; */
transform:scale(0.9);
}

`
const Banner = () => {
  return (
    <Section>
        <ImgContainer>
        <img src={img1} width="500" height="400"  alt="The Weirdos" />
        <img src={img2} width="500" height="400"  alt="The Weirdos" />
        <img src={img3} width="500" height="400"  alt="The Weirdos" />
        <img src={img4} width="500" height="400"  alt="The Weirdos" />
        <img src={img5} width="500" height="400"  alt="The Weirdos" />
        <img src={img6} width="500" height="400"  alt="The Weirdos" />

        </ImgContainer>
        <Title>Join the
        <br/>
        Weirdos Club
        </Title>
        <BtnContainer>
        <JoinNow>
    Join Now
        </JoinNow>
        </BtnContainer>
    </Section>
  )
}

export default Banner