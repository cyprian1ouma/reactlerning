
import { useState } from 'react';
import { needuselements } from './needuselements.jsx';
import './needus.css';
export default function Neddus() {
const [count,setcount]=useState(0)
  function handleAdd(){
  setcount(count+1)
  }

  function handleSub(){
  setcount(count-1);
  }

  function handleReset(){
    setcount(0)
  }

  function contactus(){
    window.URL="/contactus"
    console.log("contact us clicked");
    
  }


  return (
    <div>
          <section className='needus'>
                <h5>Why Choose Us</h5>
                <h2>We Provide Best Clothing Services</h2>
                <p>At our clothing store, we pride ourselves on offering exceptional services that set us apart from the rest. Here are a few reasons why you should choose us for your fashion needs:</p>
                <button type="button" onClick={contactus}>Contact Us</button>
                <div className="box">
                <p> {count}  </p>

                  <button  onClick={handleAdd} className='add'>ADD</button>
                  <button  onClick={handleSub} className='sub'>SUB</button>
                  <button  onClick={handleReset} className='setcount'>Reset</button>
                </div>
          </section>

          <section>
                <needuselements />
          </section>
    </div>
  )
}
