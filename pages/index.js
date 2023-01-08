import NavItem from "../components/NavItem";
import Logo from "../components/Logo";
import SectionHead from "../components/SectionHead";
import Item from "../components/Item";
import Icon from "../components/Icon";
import GameItem from "../components/GameItem";
import { useState } from "react";
import ContactItem from "../components/ContactItem";

const games = [
  {
    gameImageSrc: "gameImage/DodgedSquare.png",
    gameName: "Dodged Square",
    gameDescription:
      "This game you will be a white square.\
    You need to doege black square as long as you can.",
    gameGithubLink: "https://github.com/minza55113151/Dodge-Square",
    gameLink: "https://dodge-square.vercel.app",
  },
  {
    gameImageSrc: "gameImage/Pong.png",
    gameName: "Pong",
    gameDescription:
      "This game you will be a board\
    You have to pong the ball to the enemy and defence ball from enemy.",
    gameGithubLink: "https://github.com/minza55113151/Pong",
    gameLink: "https://pong-one-psi.vercel.app",
  },
  {
    gameImageSrc: "gameImage/Melon.png",
    gameName: "Melon",
    gameDescription:
      "This game you will be dropper.\
    You have to drop the different of ball.\
    It will merge if it collide with other same and will be bigger ball.",
    gameGithubLink: "https://github.com/minza55113151/Melon",
    gameLink: "https://melon-gilt.vercel.app",
  },
  {
    gameImageSrc: "gameImage/DodgeBall.png",
    gameName: "Dodge ball",
    gameDescription:
      "This game you will be square.\
    You have to dodge the fire ball as long as you can.",
    gameGithubLink: "https://github.com/minza55113151/Dodge-Ball",
    gameLink: "https://dodge-ball.vercel.app",
  },
  {
    gameImageSrc: "gameImage/ResourceClicker.png",
    gameName: "Resource Clicker",
    gameDescription:
      "This game just clicking resource to get resource then unlock the upgrade and other.",
    gameGithubLink: "https://github.com/minza55113151/Resource-Clicker",
    gameLink: "https://resource-clicker.vercel.app",
  },
  {
    gameImageSrc: "gameImage/FlappyBird.png",
    gameName: "Flappy Bird",
    gameDescription: "This game is like normally Flappy Bird. But 3D.",
    gameGithubLink: "https://github.com/minza55113151/Flappy-Bird",
    gameLink: "https://flappy-bird-two-rust.vercel.app",
  },
  {
    gameImageSrc: "gameImage/Minesweeper.png",
    gameName: "Minesweeper",
    gameDescription: "This game is like normally Minesweeper. But 3D.",
    gameGithubLink: "https://github.com/minza55113151/Minesweeper",
    gameLink: "https://minesweeper-alpha-two.vercel.app",
  },
];

export default function Index() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="text-white">
      <section id="home" className="bg-black text-white">
        <nav className="flex flex-col md:flex-row px-20 py-5">
          <div className="flex flex-row">
            <Logo />
            <button
              onClick={() => setNavOpen(!navOpen)}
              type="button"
              className="ml-auto p-2 text-sm text-gray-400 md:hidden"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={"w-full md:block md:w-auto" + (navOpen ? "" : " hidden")}
            id="navbar-default"
          >
            <ul className="ml-auto flex flex-col md:flex-row mt-4 md:mt-0 space-y-5 md:hidden">
              <NavItem href="#home">Home</NavItem>
              <NavItem href="#about">About Me</NavItem>
              <NavItem href="#skill&experience&education">Skill</NavItem>
              <NavItem href="#skill&experience&education">Experience</NavItem>
              <NavItem href="#skill&experience&education">Education</NavItem>
              <NavItem href="#game">Game</NavItem>
              <NavItem href="#contact">Contact</NavItem>
            </ul>
          </div>

          <ul className="ml-auto hidden md:flex flex-row space-x-5">
            <NavItem href="#home">Home</NavItem>
            <NavItem href="#about">About Me</NavItem>
            <NavItem href="#skill&experience&education">Skill</NavItem>
            <NavItem href="#skill&experience&education">Experience</NavItem>
            <NavItem href="#skill&experience&education">Education</NavItem>
            <NavItem href="#game">Game</NavItem>
            <NavItem href="#contact">Contact</NavItem>
          </ul>
        </nav>
        <div className="grid grid-rows-1 md:grid-cols-2 gap-5 py-72 px-6">
          <div className="flex flex-col space-y-5 m-auto">
            <h1 className="text-xl sm:text-3xl">Hello, my name is</h1>
            <h1 className="text-5xl sm:text-7xl">
              Chatupon <span className="text-red-500">Badkaew</span>
            </h1>
            <h1 className="text-xl sm:text-3xl">
              {"I'm a student whose hobby is making "}
              <span className="text-red-500">Games!</span>.
            </h1>
          </div>
          <div className="m-auto ">
            <img
              src="Me.jpg"
              className="rounded-full w-72 h-72 sm:w-96 sm:h-96"
              alt="profile image"
            ></img>
          </div>
        </div>
      </section>

      <section id="about" className="bg-stone-900 py-24">
        <h1 className="text-5xl sm:text-7xl text-center mb-12">About Me</h1>
        <p className="text-xl sm:text-3xl mx-auto w-3/4 sm:w-1/2">
          {"I'm a student who has a passion for creating a game as a hobby."}
          <br></br>
          {
            "So I will turn a hobby into a larger, more targeted project and\
          challenge"
          }
          <br></br>
          {"and always be open to learning and improving my skills."}
        </p>
      </section>

      <section
        id="skill&experience&education"
        className="bg-black py-24 grid lg:grid-cols-3 grid-cols-1"
      >
        <div className="mx-auto my-5 space-y-5">
          <div className="flex mb-12 justify-center">
            <h1 className="text-3xl sm:text-5xl text-center align-middle mx-5">
              Skill
            </h1>
            <Icon src="fist.png" size={60}></Icon>
          </div>
          <Item text="Unity" src="unity.png"></Item>
          <Item text="C#" src="c-sharp.png"></Item>
          <Item text="Python" src="python.png"></Item>
        </div>
        <div className="mx-auto my-5 space-y-5">
          <div className="flex mb-12 justify-center">
            <h1 className="text-3xl sm:text-5xl text-center align-middle mx-5">
              Experience
            </h1>
            <Icon src="bottle.png" size={60}></Icon>
          </div>

          <Item text="Unity" src="unity.png"></Item>
          <Item text="Pygame" src="python.png"></Item>
        </div>
        {/* {tes} */}
        <div className="mx-auto my-5 space-y-5">
          <div className="flex mb-12 justify-center">
            <h1 className="text-3xl sm:text-5xl text-center align-middle mx-5">
              Education
            </h1>
            <Icon src="spellbook.png" size={60}></Icon>
          </div>
          <Item
            text="Computer Engineering Kasetsart University"
            src="ancient-scroll.png"
          ></Item>
        </div>
      </section>

      <section id="game" className="bg-stone-900 px-8 sm:px-24 py-24">
        <h1 className="text-5xl sm:text-7xl text-center mb-12">My Games</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-20">
          {games.map((game) => (
            <GameItem
              key={game.gameName}
              gameImageSrc={game.gameImageSrc}
              gameName={game.gameName}
              gameDescription={game.gameDescription}
              gameGithubLink={game.gameGithubLink}
              gameLink={game.gameLink}
            />
          ))}
        </div>
      </section>

      <section id="contact" className="bg-black py-24">
        <div className="mx-auto w-1/2">
          <h1 className="text-3xl sm:text-5xl text-center mb-12">
            Chatupon Badkaew
          </h1>
          <div className="flex flex-col space-y-5">
            <ContactItem logoSrc="outlook.png">
              minza1131@outlook.com
            </ContactItem>
            <ContactItem
              logoSrc="facebook.png"
              linkSrc="https://www.facebook.com/Minza55113151"
            >
              Min Chatupon Badkaew
            </ContactItem>
            <ContactItem
              logoSrc="github.png"
              linkSrc="https://github.com/minza55113151"
            >
              MinZung
            </ContactItem>
          </div>
        </div>
      </section>
      <footer className="bg-black text-sm sm:text-xl py-4 text-center">
        <p>© 2022 Chatupon Badkaew</p>
      </footer>
    </div>
  );
}

{
  /* <!-- 
          facebook
          github
          email
       --> */
}
