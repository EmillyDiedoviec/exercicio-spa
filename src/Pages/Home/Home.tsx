import React from "react";
import Banner from "../../Components/BannerStyled";
import Icons from "../../Components/Icons";
import { BsAlarmFill, BsStack, BsCheck2Circle } from 'react-icons/bs'
import BoxStyled from "../../Components/BoxStyled";
import TitleStyled from "../../Components/TitleStyled";
import Content from "../../Components/Content";
import Footer from "../../Components/Footer";

const Home: React.FC = () => {
    return (
    <React.Fragment>

        <Banner height="60vh">
            <TitleStyled fontSize="3rem" color="white">
            Minha primeira página com React
            </TitleStyled>
        </Banner>

        <BoxStyled>
        <Icons 
            icon={<BsAlarmFill />} 
            titulo="Somente para desktop" 
            descricao="Vamos aprender, como utilizar um framework"/>

        <Icons 
            icon={<BsStack />}
            titulo="Criado com componentes" 
            descricao="Utilizamos Styled Components"/>

        <Icons 
            icon={<BsCheck2Circle />}
            titulo="Facíl aproveitamento" 
            descricao="Estamos no caminho"/>
        </BoxStyled>

        <Content title="Tit 1" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab sapiente quas deleniti nam sequi natus in ipsum quo blanditiis voluptatem consequatur cum officiis odio, illum, vitae explicabo neque. Quia, necessitatibus.
Velit, recusandae obcaecati. Modi, suscipit cum atque magni dicta sit asperiores obcaecati corporis consectetur aspernatur accusantium velit dolor, neque mollitia, quis totam delectus nam rerum minus sunt fuga earum. Harum?" srcImage="./assets/images/img1card.jpg"/>

    <Content title="Tit 2" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab sapiente quas deleniti nam sequi natus in ipsum quo blanditiis voluptatem consequatur cum officiis odio, illum, vitae explicabo neque. Quia, necessitatibus.
Velit, recusandae obcaecati. Modi, suscipit cum atque magni dicta sit asperiores obcaecati corporis consectetur aspernatur accusantium velit dolor, neque mollitia, quis totam delectus nam rerum minus sunt fuga earum. Harum?" srcImage="./assets/images/img2card.jpg" rowDirection="row-reverse"/>

    <Content title="Tit 3" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab sapiente quas deleniti nam sequi natus in ipsum quo blanditiis voluptatem consequatur cum officiis odio, illum, vitae explicabo neque. Quia, necessitatibus.
Velit, recusandae obcaecati. Modi, suscipit cum atque magni dicta sit asperiores obcaecati corporis consectetur aspernatur accusantium velit dolor, neque mollitia, quis totam delectus nam rerum minus sunt fuga earum. Harum?" srcImage="./assets/images/img3card.jpg"/>



        <Banner height="30vh">
        <TitleStyled fontSize="2rem" color="white">
            Contato
        </TitleStyled>
        </Banner>

        <Footer />

    </React.Fragment>
    );
};

export default Home;
