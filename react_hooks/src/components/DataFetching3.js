import React, {useState, useEffect} from "react"
import axios from "axios"

function DataFetching3(){
  const [id, setId] = useState(1)
  const [post, setPost] = useState({})
  const [idFromButtonClick, setIdFromButtonClick] = useState(1)

  const handleClick = () =>{
    setIdFromButtonClick(id)
  }

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
          .then(res=>{
            console.log(res)
            setPost(res.data)
          })
          .catch(err=>{console.log(err)})
  }, [idFromButtonClick])

  return(
    <div>
      <h1>Display post</h1>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button onClick={handleClick} >Click</button>
      <p>{post.title}</p>
    </div>
  )
}

export default DataFetching3
