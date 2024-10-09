import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatform from '../hooks/usePlatform'
import { platform } from '../hooks/useGame'

interface prop{
    onselectPlatform:(platform:platform)=>void
    selectedPlatform:platform|null
}
const PlatformSelector = ({onselectPlatform,selectedPlatform}:prop) => {
    const { data, error } = usePlatform()
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            {selectedPlatform?.name||"Platforms"}
            </MenuButton>
            <MenuList>
                {data.map(d => <MenuItem onClick={()=>onselectPlatform(d)} key={d.id}>{d.name}</MenuItem>)}
            </MenuList>

        </Menu>
    )
}

export default PlatformSelector