import { Button, Heading, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import useGerne, { Gerne } from '../hooks/useGerne'
import GetCropUrl from '../Services/GetCropUrl'

interface Props {
  onSelectGenre: (gerne: Gerne) => void,
  selectedGerne: Gerne | null
}

const GerneList = ({ onSelectGenre, selectedGerne }: Props) => {
  const { data, isLoading, error } = useGerne()
  if (isLoading) return <Spinner />
  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
      <List>
        {data.map(g => <ListItem key={g.id} paddingY='5px'>
          <HStack>
            <Image objectFit='cover' boxSize='32px' border={8} src={GetCropUrl(g?.image_background)} />
            <Button whiteSpace='normal' textAlign='left' fontWeight={g.id === selectedGerne?.id ? 'bold' : 'normal'} fontSize='lg' variant='link' onClick={() => onSelectGenre(g)}>{g.name}</Button>
          </HStack>
        </ListItem>)}
      </List>
    </>
  )
}

export default GerneList