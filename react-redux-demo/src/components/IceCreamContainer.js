import {useSelector, useDispatch} from 'react-redux'
import { buyIceCream } from '../redux'

function IceCreamContainer(){
  const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
  const dispatch = useDispatch()
  
  return(
    <div>
      <h2>Number of IceCreams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
    </div>
  )
}

export default IceCreamContainer
