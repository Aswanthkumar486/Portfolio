import React from 'react'
import NavigationBar from './NavigationBar'
import './Home.css'
export default function App() {
  return (
  <>
  <NavigationBar />
  <div className='container text-sm-text-center-mt-5 containers bg-dark content'>

<h2 className='text-sm-text-center-fs-3 sub-title-1'>Front - End Web Developer</h2>
<h1 className='text-sm-text-center-fs-3 sub-tittle'>
Hi, I'm J <span>Aswanth</span><br/>
Kumar
</h1>
<img src='/Portfolio/images/Profilepic.png' className='img-pic' width={350} height={350} />
 </div>
    </>
  )  
}  
   
