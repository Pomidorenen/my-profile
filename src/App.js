import './App.css';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Slide from "./components/slide";
import github from "./image/github-icon.png";
import habr from "./image/habr.png";
import tg from "./image/tg.png";
import Card from "./components/card";
import ListKeys from "./components/listKeys";
import LinkList from "./components/linkList";
function App() {
    useGSAP(()=>{
        gsap.fromTo(".block-info", {y: 200, opacity:0.3},{duration:1,y: 0,opacity:1})
        gsap.fromTo(".avatar", {y: 100},{duration:1.2,y: 50})
        gsap.fromTo(".description", {y: 100},{duration:1.5,y: 50})
        gsap.fromTo('.card', {
                y: 200,
                opacity:0
            }, {
                opacity:1,
                y: 1,
                stagger: 0.4,
                duration: 0.8,
                ease: 'none',
            })
        gsap.fromTo(".contacs-list-item",{opacity:0, x:50},{stagger:0.8,duration:0.5,opacity:1,x:0})
    })
  return (
    <div className="App">
      <div className="block-info">
            <div className='avatar'/>
            <div className="description">
                <p>
                    <b className='description-text'>Dmitriy Zhuravlev</b>
                    <br/>
                    Web-developer
                    <br/>
                    <small>21 years</small>
                </p>
            </div>
          <LinkList data={[
              {src:github,href:"https://github.com/Pomidorenen"},
              {src:tg,href:"https://t.me/pomidorenen"},
              {src:habr,href:"https://freelance.habr.com/freelancers/pomidorenen"}
          ]}/>
      </div>
        <Slide/>
        <Card title="About me">
            Hi! I am a frontend developer. I develop websites and applications using HTML, CSS, JavaScript,
            React (previously I used vue.js) and Tailwind CSS (that's what bootstrap5 used). A little experience
            with the backend (Express,Sequelize, formerly laravel 10).
            <hr/>
            <p><strong> Key Skills</strong></p>
            <ListKeys>
                React,JavaScript,Node.js,CSS,HTML,Vue.js,Tailwind.css,
                GSAP,Express.js,Sequelize
            </ListKeys>
        </Card>
        <Card title='Portfolio'></Card>
        <Card title='Contacts'>
            <ul className="contacs-list">
                <li className='contacs-list-item'>
                    <b>Git-Hub</b>-
                    <a href='https://github.com/Pomidorenen'>
                        https://github.com/Pomidorenen
                    </a>
                </li>
                <li className='contacs-list-item'>
                    <b>Telegram</b>-
                    <a href='https://t.me/pomidorenen'>
                        https://t.me/pomidorenen
                    </a>
                </li>
                <li className='contacs-list-item'>
                    <b>Habr</b>-
                    <a href='https://freelance.habr.com/freelancers/pomidorenen'>
                        https://freelance.habr.com/freelancers/pomidorenen
                    </a>
                </li>
            </ul>
        </Card>
    </div>
  );
}

export default App;
