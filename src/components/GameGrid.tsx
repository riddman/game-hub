
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { GameQuery } from '../App';

interface Props {
    gameQuery: GameQuery,
}

export default function GameGrid(props: Props) {
    const { data, isLoading, error } = useGames(props.gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6];

    return (
        <>
            { error && <Text>{ error }</Text> }
            <SimpleGrid
                key={'simple-grid'}
                columns={ {sm: 1, md: 2, lg: 3, xl: 4} }
                padding="10px"
                spacing={ 6 }
            >
                { isLoading && skeletons.map(skeleton => {
                    return (
                        <GameCardContainer key={ 'container-' + skeleton }>
                            <GameCardSkeleton key={ skeleton }/>
                        </GameCardContainer>
                    );
                })}

                { data.map(game => {
                    return (
                        <GameCardContainer key={ 'container-' + game.id }>
                            <GameCard key={ game.id } game={ game }/>
                        </GameCardContainer>
                    );
                })}
            </SimpleGrid>
        </>
    );
}
