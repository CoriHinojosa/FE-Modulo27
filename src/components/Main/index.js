import FetchPokemon from "../FetchPokemon";
import PokeWall from "../../assets/PokeWall.jpg";
import { MainStyled, MainH1 } from './styles';
  
const Main = () => {  
    return (
            <>
            <MainStyled>
                <div style={{backgroundImage: `url(${PokeWall})`, backgroundRepeat: 'repeat', width: '100%', height: '100%', color: 'black'}}>
                    <MainH1 primary>POKEMON API</MainH1>
                    <FetchPokemon />                        
                </div>            
            </MainStyled>
            </>
    )
}

export default Main;