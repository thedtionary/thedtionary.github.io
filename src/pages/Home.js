import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import { useHistory } from "react-router-dom";
import Helmet from 'react-helmet';
import TermName from '../components/TermName';
import HomeFooter from '../components/HomeFooter';
import OwnFooter from '../components/OwnFooter';


export default function Home() {

    const [termList,setTermList] = useState([]);

    let history = useHistory();
    function handleClick(slug) {
        history.push("/term/"+ slug);
        //window.location.reload()
      }

useEffect(()=>{
Axios.get('https://the-dicktionary.herokuapp.com/api/distinctname').then((data)=>{
    console.log(data)
    setTermList(data.data)
}).catch(err => console.log(err))
},[])


useEffect(() => {
  return history.listen((location) => { 
     console.log(`You changed the page to: ${location.pathname}`) 
  }) 
},[history])  

const [widths, setWindowWidth] = useState(0)
useEffect(() => { 

  updateDimensions();

  window.addEventListener('resize', updateDimensions);
  return () => 
    window.removeEventListener('resize',updateDimensions);
 }, [])

 const updateDimensions = () => {
   const widths = window.innerWidth
   setWindowWidth(widths)
   console.log(widths);

 }

 const responsive = {
    size_change: widths > 768
    
  }

    return (
        <>
            <div>
            <Helmet bodyAttributes={{style: 'background-color : #ff48b0'}}/>
            {termList.map(txt => 
            <div class="container">
                {responsive.size_change?
 <TermName onClick={() => handleClick(txt)}
 height = "100px" width = "100px" radius = "50%"  size = "80px "children = {txt} ></TermName>
:
            <TermName onClick={() => handleClick(txt)}
             height = "100px" width = "100px" radius = "50%"  size = "20px "children = {txt} ></TermName>}
            </div>
            )}
            </div>
            
            <OwnFooter color = "#F7C5DD" back="#ff48b0"/>
            <HomeFooter color = "#F7C5DD" />
        </>
    );
}