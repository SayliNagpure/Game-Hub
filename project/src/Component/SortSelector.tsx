import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface prop{
    onSelectSortOrder:(sortOrder:string)=>void,
    sortOrder:string
}

const SortSelector = ({onSelectSortOrder,sortOrder}:prop) => {

    const sortOrders=[
        {value:"",label:"Relevance"},
        {value:"-added",label:"Data added"},
        {value:"name",label:"Name"},
        {value:"-release",label:"Release date"},
        {value:"-metacritic",label:"Popularity"},
        {value:"-rating",label:"Average Rating"},
    ]

    const currentSort=sortOrders.find(o=>o.value===sortOrder)
   return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        order by:{currentSort?.label||"Relevence"}
        </MenuButton>
        <MenuList>
            {sortOrders.map(e=><MenuItem onClick={()=>onSelectSortOrder(e.value)} key={e.value} value={e.label}>{e.label}</MenuItem>)}
        </MenuList>

    </Menu>
)
}

export default SortSelector