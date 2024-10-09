import React from 'react'
import bullsEye from '../assets/bulls-eye.webp'
import thumbsUp from '../assets/thumbs-up.webp'
import meh from '../assets/meh.webp'
import { Image, ImageProps } from '@chakra-ui/react'
interface prop {
    rating: number
}
const Emoji = ({ rating }: prop) => {
    if (rating < 3) return null
    const Emojimap :{[key:number]:ImageProps} ={
        3: { src: meh, alt: "meh",boxSize:"25px" },
        4: { src: thumbsUp, alt: "recommended",boxSize:"25px" },
        5: { src: bullsEye, alt: "expetional",boxSize:"35px" }
    }
    return (
<Image marginTop={1} {...Emojimap[rating]}/>

)
}

export default Emoji