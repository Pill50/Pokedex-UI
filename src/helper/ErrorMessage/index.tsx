import * as C from './style';
import imgSrc from '../../assets/images/img-pikachu-sad-min.png';

export const ErrorMessage = () => {
    return (
        <C.Container>
            <C.ErrorMessage>
                <img src={imgSrc} width="32" height="32" alt="Pikachu" />
                <span>Ops, pokémon não encontrado!</span>
            </C.ErrorMessage>
        </C.Container>
    );
};
