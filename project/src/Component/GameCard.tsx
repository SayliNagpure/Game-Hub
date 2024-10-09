import React from 'react'
import { Games } from '../hooks/useGame'
import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import PlatFormIconList from './PlatFormIconList'
import CritiScore from './CritiScore'
import GetCropUrl from '../Services/GetCropUrl'
import Emoji from './Emoji'

interface props {
    game: Games
}

const GameCard = ({ game }: props) => {
    return (
        <Card width='100%' borderRadius={10} overflow='hidden'>
            <Image src={GetCropUrl(game.background_image)} />
            <CardBody>
                <HStack marginBottom={3} justifyContent='space-between'>
                    <PlatFormIconList platforms={game.parent_platforms.map(p => p.platform)} />
                    <CritiScore score={game.metacritic} />
                </HStack>
                <Heading fontSize='2xl'>{game.name}<Emoji rating={game.rating_top}/></Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard