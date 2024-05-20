import { FetchH2 } from './styles';
import Pokemon from "./Pokemon";
import useAxios from "../../hooks/useAxios";

const FetchPokemon = () => {   
    const { response, loading, error } = useAxios("https://pokeapi.co/api/v2/pokemon/?limit=25");

    return (
        <>
        <FetchH2 primary>LISTA DE POKEMONES DEL 1 AL 25</FetchH2>
        {
            response !== null &&
            response.map(pokemon => {
                const { name } = pokemon;
                return <Pokemon name={name} key={name}/>;
            })
        }
        </>
    )
}

export default FetchPokemon;
