import React, { useEffect, useState } from 'react'
import apiClient from '../Services/api.client'
import { CanceledError } from 'axios'
import useData from './UseData'
import { Gerne } from './useGerne'
import { GameQuery } from '../App'

export interface Games {
    id: number,
    name: string,
    background_image: string,
    parent_platforms: { platform: platform }[],
    metacritic: number,
    rating_top:number

}

export interface platform {
    id: number,
    name: string,
    slug: string,
}

interface FeatchGameResponce {
    count: number,
    results: Games[],
}

const useGame = (gameQuery: GameQuery) => useData<Games>('/games', {
    params:
    {
        genres: gameQuery.gerne?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search:gameQuery.searchText
    }
},
    [gameQuery])

export default useGame