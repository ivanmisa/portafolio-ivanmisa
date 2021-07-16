import React, { Component } from 'react'
import './home.css';
import userIcon from '../assets/user.png';
import folderIcon from '../assets/folder-icon.png';
import gamesIcon from '../assets/juegos-icon.png';
import image1 from '../assets/projectwasstory.png';
import image2 from '../assets/projectmetro.png';
import image3 from '../assets/projectmiblog.jpg';
import image4 from '../assets/projectapp.png';
import cv from '../assets/cv-ivan.pdf';
import Draggable, {DraggableCore} from 'react-draggable'; 
import { faEnvelope, faPhone, faDatabase, faServer, faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons";
import { faAngular, faNode, faBootstrap, faStripe, faReact, faAndroid, faDigitalOcean } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./Card";

class Home extends Component {
    constructor(props) {
        super(props)
        this.timeElement = React.createRef();
        this.state = {
            activeDrags: 2,
            deltaPosition: {
            x: 0, y: 0
            },
            controlledPositionCv: {
            x: -200, y: 200
            },
            controlledPositionFolder: {
                x: -750, y: 240
            },
            controlledPositionGame: {
                x: -1200, y: 300
            },

            IconsCards: ['icon1.png','icon2.png','icon3.png','icon4.png','icon5.png'],
            duplicatedIconsCards: [],
            randomizedIconsCards: [],
            finalizedIconsCards: [],
            openedIconsCards: [],         
        };
        this.start()
    }

    componentDidMount = () => {
        setInterval(this.setTime, 1000);
    }

    setTime = () => {
        let date = new Date();
        this.timeElement.current.innerText = `${date.getHours()}:${('0' + date.getMinutes()).slice(-2)}:${('0' + date.getSeconds()).slice(-2)}`;
      }

    power(){
        let body = document.getElementById("wrapper");
        body.className = (body.className == "on") ? "off" : "on";
    }

    removeStart(){
        let start = document.getElementById("sectionStart");
        start.className = "mouseLeave";         
    }

    clickStart(){
        let start = document.getElementById("sectionStart");
        start.className = "ac-small";   
    }

    handleClick(name,index){
        if(this.state.openedIconsCards.length >= 2){
            setTimeout(() => {
                
            },750)
        }else {
            let iconNew = {
                name,
                index
            }
            let finalizedIconsCards = this.state.finalizedIconsCards
            let IconsCards = this.state.openedIconsCards
            finalizedIconsCards[index].close = false
            IconsCards.push(iconNew)
            this.setState({
                openedIconsCards: IconsCards,
                finalizedIconsCards: finalizedIconsCards
            })
            if(this.state.openedIconsCards.length == 2){
                setTimeout(() => {
                this.check()
                },750)
            }
        }
    } 

    check(){
        let finalizedIconsCards = this.state.finalizedIconsCards;
        if((this.state.openedIconsCards[0].name == this.state.openedIconsCards[1].name) && (this.state.openedIconsCards[0].index != this.state.openedIconsCards[1].index)){
          finalizedIconsCards[this.state.openedIconsCards[0].index].complete = true
          finalizedIconsCards[this.state.openedIconsCards[1].index].complete = true
        }else {
          finalizedIconsCards[this.state.openedIconsCards[0].index].close = true
          finalizedIconsCards[this.state.openedIconsCards[1].index].close = true
        }
        this.setState({
          finalizedIconsCards,
          openedIconsCards: []
        })
    }

    start(){
        let finalizedIconsCards = [];
        this.state.duplicatedIconsCards = this.state.IconsCards.concat(this.state.IconsCards)
        this.state.randomizedIconsCards = this.shuffle(this.state.duplicatedIconsCards)
        this.state.randomizedIconsCards.map((name,index) => {
          finalizedIconsCards.push({
            name,
            close: true,
            complete: false,
            fail: false
          })
        })
        this.state.finalizedIconsCards = finalizedIconsCards
    }

    shuffle(array){
        let currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array
    }

    windowUser = () => {
        var x = document.getElementById("window-cv");
        x.className = "show";
    }

    windowUserClose = () => {
        var x = document.getElementById("window-cv");
        x.className = "hidden";
    }

    windowProyects = () => {
        var x = document.getElementById("window-proyects");
        x.className = "show";
    }

    windowProyectsClose = () => {
        var x = document.getElementById("window-proyects");
        x.className = "hidden";
    }

    windowGame = () => {
        var x = document.getElementById("window-games");
        x.className = "show";
    }

    windowGameClose = () => {
        var x = document.getElementById("window-games");
        x.className = "hidden";
    }

    //Close window on device
    windowUserCloseDevice = () => {
        var x = document.getElementById("window-cv");
        x.className = "hidden";
    }

    windowProyectsCloseDevice = () => {
        var x = document.getElementById("window-proyects");
        x.className = "hidden";
    }

    windowGameCloseDevice = () => {
        var x = document.getElementById("window-games");
        x.className = "hidden";
    }


    onControlledDragCv = (e, position) => {
        const {x, y} = position;
        this.setState({controlledPositionCv: {x, y}});
    };

    onControlledDragFolder = (e, position) => {
        const {x, y} = position;
        this.setState({controlledPositionFolder: {x, y}});
    };

    onControlledDragGame = (e, position) => {
        const {x, y} = position;
        this.setState({controlledPositionGame: {x, y}});
    };

    render() {
        return (
            <body id="wrapper" class="on">
                <div id="content-holder">
                    <div id="content">
                        <div className="body d-flex">
                            <div className="user" onClick={this.windowUser}>          
                                <img src={userIcon} alt=""/>
                                <div className="user-title">
                                    <span>Ivan_</span>
                                </div>        
                            </div>

                            <div className="user" onClick={this.windowProyects}>          
                                <img src={folderIcon} alt=""/>
                                <div className="user-title">
                                    <span>Proyectos</span>
                                </div>        
                            </div>

                            <div className="user" onClick={this.windowGame}>          
                                <img src={gamesIcon} alt=""/>
                                <div className="user-title">
                                    <span>Juegos</span>
                                </div>        
                            </div>

                            <div className="d-flex">         
                                <Draggable handle="strong" position={this.state.controlledPositionCv} onDrag={this.onControlledDragCv}>             
                                        <div className="box" style={{display: 'flex', flexDirection: 'column', visibility: 'hidden'}}>
                                        <div id="window-cv">
                                            <strong className="justify-content-between d-flex"><div className="window-name">Curriculum Vitae</div><div className="close" onClick={this.windowUserClose} onTouchEnd={this.windowUserCloseDevice}>X</div></strong>                                          
                                                <div className="body-window">
                                                    <div className="row">
                                                        <div className="col-5">
                                                            <h4 className="name-user">Ivan Misael Reyes Sandoval</h4>
                                                            <div className="photo-user justify-content-center d-flex">
                                                                <img src={userIcon} alt=""/>
                                                            </div>
                                                            <div className="contact-user">            
                                                                <div>
                                                                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                                                                <h6>ivan_m_rst@hotmail.com</h6>
                                                                </div>                              
                                                                <div className="contact-phone">
                                                                    <FontAwesomeIcon icon={faPhone} className="icon" />
                                                                    <h6>33 34 03 79 14</h6>
                                                                </div>                                           
                                                            </div>
                                                            <div className="address-user">
                                                                <h6>Domicilio</h6>
                                                                <p>Col. Toluquilla, Tlaquepaque, Jalisco</p>
                                                                <h6>Fecha de nacimiento</h6>
                                                                <p>29-05-1995</p>
                                                            </div>                                          
                                                        </div>
                                                        <div className="col data-user">
                                                            <div className="topic-description">
                                                                <span>FORMACION ACADEMICA</span>
                                                            </div>
                                                            <div className="data-description">
                                                                <ul>
                                                                    <li>
                                                                        Técnico en electrónica – CECyTEC / 2011 - 2014
                                                                    </li>
                                                                    <li>
                                                                        Ingeniería en energía – UdeG - Centro universitario de Tonalá 
                                                                        agosto 2014 – enero 2019
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="topic-description">
                                                                <span>CONOCIMIENTOS</span>
                                                            </div>
                                                            <div className="data-description">
                                                                <ul>
                                                                    <li>
                                                                        Conocimientos lenguajes de programación JavaScript, Python y Typescript.
                                                                    </li>
                                                                    <li>
                                                                        Uso de distribuciones de Linux como Ubuntu.
                                                                    </li>
                                                                    <li>
                                                                        Herramientas de office.
                                                                    </li>
                                                                    <li>
                                                                        Inglés: Básico-Intermedio.
                                                                    </li>
                                                                </ul>
                                                            </div>                                       
                                                        </div>
                                                    </div>
                                                
                                                    <div>
                                                        <div className="topic-description">
                                                            <span>EXPERIENCIA LABORAL</span>
                                                        </div>
                                                        <div className="data-description">
                                                            <div className="job">
                                                                <span>Instalador de sistemas fotovoltaicos residenciales y empresariales en “Energía Libre” / febrero 2019 – marzo 2020</span>
                                                            </div>
                                                            <div className="description-job">
                                                                <span>Responsabilidades</span>
                                                                <ul>
                                                                    <li>
                                                                        Visitas con el cliente.
                                                                    </li>
                                                                    <li>
                                                                        Armado de estructura.
                                                                    </li>
                                                                    <li>
                                                                        Montado de paneles fotovoltaicos.
                                                                    </li>
                                                                    <li>
                                                                        Cableado eléctrico.
                                                                    </li>
                                                                    <li>
                                                                        Tubería y conexión a la red eléctrica.
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <br />                                                      
                                                            <div className="job">
                                                                <span>Ingeniero de pruebas (Test analyzer) en IBM / abril 2020 – enero 2021</span>
                                                            </div>                                           
                                                            <div className="description-job">
                                                                <span>Responsabilidades</span>
                                                                <ul>
                                                                    <li>
                                                                        Estar correctamente capacitado en los sistemas internos que administra IBM.
                                                                    </li>
                                                                    <li>
                                                                        Efectuar pruebas funcionales, diagnóstico y reparación a los sistemas, haciendo cumplir las normas de calidad.
                                                                    </li>
                                                                    <li>
                                                                        Realizar pruebas a los sistemas requeridos por el departamento de ingeniería.
                                                                    </li>
                                                                    <li>
                                                                        Reparación express de fallas en los equipos y aseguramiento del flujo del producto al siguiente proceso.
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <br />
                                                            <div className="job">
                                                                <span>Enero 2021 – Actualidad</span>
                                                            </div> 
                                                            <div className="description-job" style={{textAlign:'center'}}>
                                                                <span>Actualmente me encuentro tomando cursos e integrándome más en el área del de las TI’s, enfocándome en el desarrollo 
                                                                    de software tanto en el frontend especialmente en fremeworks como angular y react, así como en el backend en librerías 
                                                                    como nodejs apoyándome en base de datos NoSQL (MongoDB) y SQL (MySQL).
                                                                </span>                                   
                                                            </div> 
                                                        </div>
                                                        <div className="topic-description">
                                                            <span>APTITUDES Y HABILIDADES</span>
                                                        </div>
                                                        <div className="user-points">
                                                            <ul>
                                                                <li>
                                                                    Responsable
                                                                </li>
                                                                <li>
                                                                    Trabajo bajo presión
                                                                </li>
                                                                <li>
                                                                    Facilidad de aprendizaje
                                                                </li>
                                                                <li>
                                                                    Autodidacta
                                                                </li>
                                                                <li>
                                                                    Facilidad de trabajo en equipo
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="topic-description">
                                                            <span>OBJETIVO  PROFESIONAL </span>
                                                        </div>
                                                        <div className="description-job" style={{textAlign:'center', fontSize: '14px'}}>
                                                            <span>Mi objetivo profesional va orientado a conseguir más conocimientos y experiencia laboral y así ser más productivo y 
                                                                eficaz en una empresa que me permita crecer personal y profesionalmente, al mismo tiempo construir un ambiente de 
                                                                trabajo agradable para mí y mis compañeros de trabajo.
                                                            </span>                                   
                                                        </div> 
                                                    </div>
                                                    <div className="conainer-cv">
                                                        <div className="button-download">
                                                            <a href={cv} target="_blank">Ver/Descargar CV</a>
                                                        </div>
                                                    </div>
                                                </div>                                     
                                        </div>
                                    </div>                           
                                </Draggable>

                                <Draggable handle="strong" position={this.state.controlledPositionFolder} onDrag={this.onControlledDragFolder}>             
                                        <div className="box" style={{display: 'flex', flexDirection: 'column', visibility: 'hidden'}}>
                                        <div id="window-proyects">
                                            <strong className="justify-content-between d-flex"><div className="window-name"> Portafolio de proyectos</div><div className="close" onClick={this.windowProyectsClose} onTouchEnd={this.windowProyectsCloseDevice}>X</div></strong>                                          
                                                <div className="body-window">
                                                    <div className="topic">
                                                        <h2>Proyectos realizados</h2>
                                                    </div>
                                                    <div className="project">
                                                        <div className="name-project">
                                                            <h4>WasStory</h4>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col project-image">
                                                                <a target="_blank" href="https://wasstory.com" >
                                                                    <img src={image1} alt=""/>
                                                                </a>
                                                            </div>
                                                            <div className="col">
                                                                <div className="tecnology">
                                                                    <FontAwesomeIcon icon={faAngular} className="icon" />
                                                                    <span>Angular 8</span>
                                                                </div>
                                                                <div className="tecnology">
                                                                    <FontAwesomeIcon icon={faNode} className="icon" />
                                                                    <span>NodeJs</span>
                                                                </div>
                                                                <div className="tecnology">
                                                                    <FontAwesomeIcon icon={faServer} className="icon" />
                                                                    <span>Express</span>
                                                                </div>
                                                                <div className="tecnology">
                                                                    <FontAwesomeIcon icon={faDatabase} className="icon" />
                                                                    <span>MongoDB</span>
                                                                </div>
                                                                <div className="tecnology">
                                                                    <FontAwesomeIcon icon={faBootstrap} className="icon" />
                                                                    <span>Bootstrap</span>
                                                                </div>                              
                                                                <div className="tecnology">
                                                                    <FontAwesomeIcon icon={faMapMarkedAlt} className="icon" />
                                                                    <span>Leaflet</span>
                                                                </div>   
                                                                <div className="tecnology">
                                                                    <FontAwesomeIcon icon={faDigitalOcean} className="icon" />
                                                                    <span>Digital Ocean</span>
                                                                </div>                                                  
                                                            </div>                       
                                                        </div>
                                                        <div className="description-project">
                                                            <span>
                                                                WasStory es una plataforma en la que puedes publicar historias o anecdotas "anonimamente", puedes crear
                                                                un usuario y reaccionar a las historias publicadas por otros usuarios, a las publicaciones les puedes 
                                                                agregar una ubicacion donde podras verla en la ruta de '/map'.
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="project">
                                                        <div className="name-project">
                                                            <h4>Metropolis</h4>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col project-image">
                                                                <a target="_blank" href="https://portafolio-metropolis.herokuapp.com/" >
                                                                    <img src={image2} alt=""/>
                                                                </a>
                                                            </div>
                                                            <div className="col">
                                                                <div className="tecnology">
                                                                    <FontAwesomeIcon icon={faAngular} className="icon" />
                                                                    <span>Angular 8</span>
                                                                </div>
                                                                <div className="tecnology">
                                                                    <FontAwesomeIcon icon={faNode} className="icon" />
                                                                    <span>NodeJs</span>
                                                                </div>
                                                                <div className="tecnology">
                                                                    <FontAwesomeIcon icon={faServer} className="icon" />
                                                                    <span>Express</span>
                                                                </div>
                                                                <div className="tecnology">
                                                                    <FontAwesomeIcon icon={faDatabase} className="icon" />
                                                                    <span>MongoDB</span>
                                                                </div>
                                                                <div className="tecnology">
                                                                    <FontAwesomeIcon icon={faBootstrap} className="icon" />
                                                                    <span>Bootstrap</span>
                                                                </div>
                                                                <div className="tecnology">
                                                                    <FontAwesomeIcon icon={faStripe} className="icon" />
                                                                    <span>Stripe Billing</span>
                                                                </div>
                                                                <div className="tecnology">
                                                                    <FontAwesomeIcon icon={faMapMarkedAlt} className="icon" />
                                                                    <span>Leaflet</span>
                                                                </div>  
                                                                <div className="tecnology">
                                                                    <FontAwesomeIcon icon={faEnvelope} className="icon" />
                                                                    <span>NodeMailer</span>
                                                                </div>  
                                                            </div>
                                                        </div>
                                                        <div className="description-project">
                                                            <span>
                                                                Metropolis es una plataforma donde puedes publicar propiedades en venta o renta, agrega imagenes y las caracteristicas de tu
                                                                propiedad (casa, terreno, departamento, bodega, etc) y agrega la ubicacion de esta para que 
                                                                otras personas puedan verlas y darle like, si eres agente de bienes raices contrata un plan mensual para aumentar el 
                                                                limite de propiedades publicadas.
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="project">
                                                        <div className="name-project">
                                                            <h4>Mi blog</h4>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col project-image">
                                                                <a target="_blank" href="https://github.com/ivanmisa/project-social-react-nodejs-mysql" >
                                                                    <img src={image3} alt=""/>
                                                                </a>                                        
                                                            </div>
                                                            <div className="col">
                                                                <div className="tecnology">
                                                                    <FontAwesomeIcon icon={faReact} className="icon" />
                                                                    <span>React</span>
                                                                </div>
                                                                <div className="tecnology">
                                                                    <FontAwesomeIcon icon={faNode} className="icon" />
                                                                    <span>NodeJs</span>
                                                                </div>
                                                                <div className="tecnology">
                                                                    <FontAwesomeIcon icon={faServer} className="icon" />
                                                                    <span>Express</span>
                                                                </div>
                                                                <div className="tecnology">
                                                                    <FontAwesomeIcon icon={faDatabase} className="icon" />
                                                                    <span>MySql</span>
                                                                </div>
                                                                <div className="tecnology">
                                                                    <FontAwesomeIcon icon={faBootstrap} className="icon" />
                                                                    <span>Bootstrap</span>
                                                                </div>                                                                           
                                                            </div>                       
                                                        </div>
                                                        <div className="description-project">
                                                            <span>
                                                                MiBlog es una plataforma donde despues de crear un usuario puedes subir una publicacion con una imagen, los demas 
                                                                usuarios pueden darle like a la publicacion y puedes darle follow o unfollow a los demas usuarios,
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="project">
                                                        <div className="name-project">
                                                            <h4>WasStory App </h4>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col project-image">
                                                                <a target="_blank" href=" https://play.google.com/store/apps/details?id=com.wasstory.wasstoryapp&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" >
                                                                    <img src={image4} alt=""/>
                                                                </a>   
                                                            </div>
                                                            <div className="col">
                                                                <div className="tecnology">
                                                                    <FontAwesomeIcon icon={faAndroid} className="icon" />
                                                                    <span>Ionic/Angular</span>
                                                                </div>
                                                                <div className="tecnology">
                                                                    <FontAwesomeIcon icon={faMapMarkedAlt} className="icon" />
                                                                    <span>Leaflet</span>
                                                                </div>                                                                        
                                                            </div>                       
                                                        </div>
                                                        <div className="description-project">
                                                            <span>
                                                                WasSory App para android version para movil.
                                                            </span>
                                                        </div>
                                                    </div>                                                                                                 
                                                </div>                     
                                        </div>
                                    </div>                           
                                </Draggable>

                                <Draggable handle="strong" position={this.state.controlledPositionGame} onDrag={this.onControlledDragGame}>             
                                    <div className="box no-cursor" style={{display: 'flex', flexDirection: 'column', visibility: 'hidden'}}>
                                        <div id="window-games">
                                            <strong className="cursor justify-content-between d-flex"><div className="window-name"> Portafolio de proyectos</div><div className="close" onClick={this.windowGameClose} onTouchEnd={this.windowGameCloseDevice}>X</div></strong>
                                            
                                            <div className="body-window">
                                                <div className="topic">
                                                    <h2>Juego de cartas</h2>
                                                </div>
                                                <div id="app">
                                                    <div className="playground">
                                                        {
                                                        this.state.finalizedIconsCards.map((framework, index) => {
                                                            return <Card framework={framework.name} click={() => {this.handleClick(framework.name,index)}} close={framework.close} complete={framework.complete}/>
                                                        })
                                                        }
                                                    </div>
                                                </div>     
                                            </div>                     
                                        </div>
                                    </div>                          
                                </Draggable>

                            </div>                      
                            <div className="grid-wrapper no-overflow">
                                <div className="m-grid.is-animating"></div>
                            </div>  
                            <div className="taskbar">
                                <div className="ac-container" onClick={this.clickStart}>
                                    <label htmlFor="ac-1" class="buttom-filters">START</label>
                                    <input type="checkbox" id="ac-1" name="ac"/>                                         
                                    <section class="ac-small" id="sectionStart" onMouseLeave={this.removeStart}>
                                        <div className="topic-menu">
                                           Ivan Menu
                                        </div>
                                        <div className="menu-item" onClick={this.windowUser}>
                                            <div className="icon-menu"><img src={userIcon} alt=""/></div>
                                            <div className="text-menu">Curriculum Vitae</div>
                                        </div>
                                        <div className="menu-item" onClick={this.windowProyects}>
                                            <div className="icon-menu"><img src={folderIcon} alt=""/></div>
                                            <div className="text-menu">Portafolio</div>
                                        </div>
                                        <div className="menu-item" onClick={this.windowGame}>
                                            <div className="icon-menu"><img src={gamesIcon} alt=""/></div>
                                            <div className="text-menu">Game</div>
                                        </div>                                                                                                           
                                    </section>                                     
                                </div>
                                <div className="time">
                                    <div ref={this.timeElement} className="clock"> 

                                    </div>                                  
                                </div>
                            </div> 
                        </div>                
                    </div>
                    </div>
                <div id="power" onClick={this.power}></div>
            </body>
        )
    }
}

export default Home;
