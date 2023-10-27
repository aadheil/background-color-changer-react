import React, { useState } from 'react'
import './App.css'
function App() {
  const [dark,setdark]=useState(false)
  const [light,setlight]=useState(true)
  const [green,setgreen]=useState(false)
  const [red,setred]=useState(false)
  const [blue,setblue]=useState(false)
  const [yellow,setyellow]=useState(false)
const [lighttodark,setlighttodark]=useState(false)
const[darktolight,setdarktolight]=useState(false)


  const handledark=()=>{
    setlighttodark(true)
    setlight(false)
   
      setdark(true)
    
    setyellow(false)
    setred(false)
setgreen(false)
setblue(false)
    
    
  }
   
  const handlelight=()=>{
    setlighttodark(true)
    setdark(false)
    
      setlight(true)
   
    setyellow(false)
    setred(false)
setgreen(false)
setblue(false)

    
  }

  const handlegreen=()=>{
  setgreen(true)
  setred(false)
  setblue(false)
  setyellow(false)
  
  }
  const handlered=()=>{
    setred(true)
    setgreen(false)
  setblue(false)
  setyellow(false)
    
    }

    const handleblue=()=>{
      setblue(true)
      setred(false)
    setgreen(false)
  setyellow(false)
      
      }
      const handleyellow=()=>{
        setyellow(true)
        setred(false)
    setgreen(false)
  setblue(false)
        
        }
  return (
    <>
   {light &&
    <div className='text-center' style={{height:'100vh',backgroundColor:green?'green':red?'red':blue?'blue':yellow?'yellow':'white'}}>


   <div className='d-flex justify-content-center align-items-center flex-column'style={{height:'100%'}} >



   <div className='mb-5'>
<button className='btn border-dark' style={{width:'70px',height:'70px',borderRadius:'50%'}} onClick={handledark}><i className="fa-solid fa-moon fa-2x text-dark"></i></button>

</div>






<div className='d-flex justify-content-evenly w-50 mt-5'>
<button className='btn btn-light text-success shadow' onClick={handlegreen} style={{width:'70px',height:'70px',borderRadius:'50%'}}>Green</button>
<button className='btn btn-light text-danger shadow' onClick={handlered} style={{width:'70px',height:'70px',borderRadius:'50%'}}>Red</button>
<button className='btn btn-light text-primary shadow' onClick={handleblue} style={{width:'70px',height:'70px',borderRadius:'50%'}}>Blue</button>
<button className='btn btn-light text-warning shadow' onClick={handleyellow} style={{width:'70px',height:'70px',borderRadius:'50%'}}>Yellow</button>

</div>
</div>
</div>}



{/* {lighttodark &&
    <div className='' style={{width:'100%',height:'100vh'}}>

<img style={{height:'100%',width:'100%'}} src="https://i1.wp.com/www.learnaboutdid.com/wp-content/uploads/2019/11/1-6-1.gif?fit=850%2C478&ssl=1" alt="" />
  
</div>} */}

{/* {darktolight &&
    <div className='' style={{width:'100%',height:'100vh'}}>

<img style={{height:'100%',width:'100%'}} src="https://i1.wp.com/www.learnaboutdid.com/wp-content/uploads/2019/11/1-6-1.gif?fit=850%2C478&ssl=1" alt="" />
  
</div>} */}





{dark&&
<div className='text-center' style={{height:'100vh',backgroundColor:green?'green':red?'red':blue?'blue':yellow?'yellow':'black'}}>


   <div className='d-flex justify-content-center align-items-center flex-column'style={{height:'100%'}} >
   <div className='mb-5'>
<button className='btn border' onClick={handlelight} style={{width:'70px',height:'70px',borderRadius:'50%'}}><i className="fa-regular fa-lightbulb fa-2x text-light"></i></button>

</div>
<div className='d-flex justify-content-evenly w-50 mt-5'>
<button className='btn btn-dark text-success shadow' onClick={handlegreen} style={{width:'70px',height:'70px',borderRadius:'50%'}}>Green</button>
<button className='btn btn-dark text-danger shadow' onClick={handlered} style={{width:'70px',height:'70px',borderRadius:'50%'}}>Red</button>
<button className='btn btn-dark text-primary shadow' onClick={handleblue} style={{width:'70px',height:'70px',borderRadius:'50%'}}>Blue</button>
<button className='btn btn-dark text-warning shadow' onClick={handleyellow} style={{width:'70px',height:'70px',borderRadius:'50%'}}>Yellow</button>

</div>
</div>
</div>}
</>

  )
}

export default App