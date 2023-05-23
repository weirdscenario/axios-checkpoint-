import React from 'react' 
import { useState,useEffect } from 'react'
import axios from 'axios'

const App = () => {
 const [users,setData]=useState('')
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
      console.log(res.data)
      setData(res.data)
    }).catch(err=>{
      console.log(err)
    })
  },[])
  
  return (
    
      <div>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {users.map((el) => (
            <li key={el.id} style={{ margin: '5px 0', fontWeight: 'bold' }}>
              {el.name}
            </li>
          ))}
        </ul>
      </div>
    );
    
}

export default App
