import React from 'react'
import {
  Link
} from "react-router-dom";

 function HomeFooter(props) {
  return (
  
    <div className='footer_container_left'>

<Link to={'/form'} style={{
                 textDecoration: 'none', 
                 color: '#fdea25',
                 }}  className={'footer'}>share your own story</Link>


           
    </div>
  )
}

HomeFooter.propTypes = {}

export default HomeFooter