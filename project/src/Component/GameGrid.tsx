import { SimpleGrid, Text } from '@chakra-ui/react'
import useGame, { platform } from '../hooks/useGame'
import GameCard from './GameCard'
import GameCardSkelton from './GameCardSkelton'
import { Gerne } from '../hooks/useGerne'
import { GameQuery } from '../App'

interface props{
    gamequery:GameQuery,
   
}

const GameGrid = ({gamequery}:props) => {
    const { data, error,isLoading } = useGame(gamequery)
    const Skeleton=[1,2,3,4,5,6,7,8,9,10]
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding='10px' spacing={6}>
                {isLoading && Skeleton.map(skeleton=><GameCardSkelton key={skeleton}/>)}
                {data?.map((g) => {
                    return (<GameCard key={g.id} game={g} />)
                })}
            </SimpleGrid>
        </>
    )
}

export default GameGrid