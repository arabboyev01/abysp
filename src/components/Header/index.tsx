import DumbHeader from "./DumbHeader"
import { useContext } from 'react'
import { CreateContext } from '../state'
const Header = () => {

    const { handleSetAsDefault, zoomIn, zoomOut, zoomPer } = useContext(CreateContext)

    return <DumbHeader handleSetAsDefault={handleSetAsDefault} zoomOut={zoomOut} zoomIn={zoomIn} zoomPer={zoomPer}/>
}

export default Header;