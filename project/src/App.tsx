import { useState } from 'react'
import './App.css'
import { Button, ButtonGroup, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './Component/NavBar'
import GameGrid from './Component/GameGrid'
import GerneList from './Component/GerneList'
import { Gerne } from './hooks/useGerne'
import PlatformSelector from './Component/PlatformSelector'
import { platform } from './hooks/useGame'
import SortSelector from './Component/SortSelector'
import GameHeading from './Component/GameHeading'

export interface GameQuery {
  gerne: Gerne | null,
  platform: platform | null,
  sortOrder:string,
  searchText:string
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (

    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(searchText)=>setGameQuery({...gameQuery,searchText})}/>
      </GridItem>
      <Show above='lg'>
        <GridItem area="aside" padding={2}>
          <GerneList selectedGerne={gameQuery.gerne} onSelectGenre={(gerne) => setGameQuery({ ...gameQuery, gerne })} />
        </GridItem>
      </Show>
      <GridItem area="main" >
        <GameHeading gameQuery={gameQuery}/>
       <HStack spacing={5} paddingLeft={2} marginBottom={5}>
       <PlatformSelector selectedPlatform={gameQuery.platform} onselectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
       <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder)=>setGameQuery({...gameQuery,sortOrder})}/>
       </HStack>
        <GameGrid gamequery={gameQuery} />
      </GridItem>
    </Grid>
  )
}

export default App
