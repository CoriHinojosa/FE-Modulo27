import { PokeUl, PokeLi } from './styles';

const Pokemon = ({ name }) => {
    return (
        <PokeUl>
            <PokeLi>・{name}・</PokeLi>
        </PokeUl>
    )
}

export default Pokemon;
