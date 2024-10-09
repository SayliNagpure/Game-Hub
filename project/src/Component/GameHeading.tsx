import { Heading } from '@chakra-ui/react'
import React from 'react'
import { GameQuery } from '../App'

interface prop {
    gameQuery: GameQuery
}
const GameHeading = ({ gameQuery }: prop) => {
    const heading = `${gameQuery.platform?.name || ""} ${gameQuery.gerne?.name || ""} Games`
    return (
        <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
    )
}

export default GameHeading