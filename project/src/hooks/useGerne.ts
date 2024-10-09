
import useData from "./UseData"

export interface Gerne{
    id:number,
    name:string,
    image_background:string
}


const useGerne=()=>useData<Gerne>('/genres')

export default useGerne