import Characters from "../Characters-Cards/Characters";
import logo from "./img/Rick_and_Morty_logo.png"
import "./Home.css"

function Home(){
  return(
    <div className="Home">
      <div className="headerImg">
      <img  src={logo} alt="Rick and Morty"/>
      </div>
      <Characters></Characters>
    </div>
  )
}

export default Home