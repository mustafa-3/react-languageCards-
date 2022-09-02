import React, {useState} from 'react';
import './Card.css'

const Card = ({name,img,options}) => {
const [info, setInfo] = useState(true);

  return (
    <main>

    
    <div className='cards' onClick={() => setInfo(!info)}>
    {info ? (
        <div className='card'>
        <img className='image' src={img} alt={name} />
        <h4 className='head'>{name}</h4>
        </div>  
    )
     : (<p className='cardpara'>{options.map((e)=>{
        return(
            <ul>
                <li>{e}</li>
            </ul>
        )
     })}</p>)
    }
       
    </div>
    </main>
  )
}

export default Card