import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import { useParams, useHistory } from "react-router-dom";
import Helmet from 'react-helmet';
import image from '../images/posters.png';
import image2 from '../images/arrow_pink.png';
import {Link} from "react-router-dom";
import OwnFooter from '../components/OwnFooter';

export default function Term() {
  let {slug}  = useParams();

  const [termList,setTermList] = useState([]);

  let history = useHistory();
useEffect(() => {
  return history.listen((location) => { 
     console.log(`You changed the page to: ${location.pathname}`) 
  }) 
},[history])  

useEffect(()=>{
Axios.get('https://the-dicktionary.herokuapp.com/api/termsname',{
  headers: {
    'name': slug
  }}).then((data)=>{
  console.log(data)
  setTermList(data.data)
}).catch(err => console.log(err))
},[])

  return (
    <div > 
     <Helmet bodyAttributes={{style: 'background-color : #fdea25'}}/>
      <h1 className='text_header_pink'>{slug}</h1>
      <Link className="back_image"
to="/home" > 
<img
            src={image2}
            alt="example"
            width="59" height="32"
          />
        </Link>

<div className='posts'>
{termList.map(function(d, idx){
         return (<div className='one_post'>
           <h1 className='date'>{d.date}</h1>
         <h2 >{d.story}</h2>
         </div>
         )
       })}

</div>

<div className='termfoot_container'> 
<Link className="link_image"
to="/form" > 
          <img className="link_image"
            src={image}
            alt="example"
            width="409" height="331"
          />
        </Link> 
         </div>
        <OwnFooter color="#ff48b0" back='#fdea25'/>
    </div>
  
  )
}
