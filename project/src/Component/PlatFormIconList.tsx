import { HStack, Icon, Text } from '@chakra-ui/react'
import { platform } from '../hooks/useGame'
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { IconType } from 'react-icons'

interface props {
    platforms: platform[]
}

const PlatFormIconList = ({ platforms }: props) => {

    const iconmap:{[key:string]:IconType} = {
        pc: FaWindows,
        playStaion: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
        android:FaAndroid
    }

    return (
        <HStack marginY={1}>
            {platforms.map((platform) => <Icon key={platform.id} as={iconmap[platform.slug]} color='gray.500'/>)}
        </HStack>
    )
}

export default PlatFormIconList