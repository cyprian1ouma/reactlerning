import { useState } from "react"
import './needus.css';
export default function needuselements() {

    const [task,setTask]=useState([
        {id:1, 
            name:"Quality Products", 
            description:"We offer a wide range of high-quality clothing items that are made from premium materials, ensuring durability and comfort."
        },
        {id:2, 
            name:"Fast Shipping", 
            description:"We understand the importance of timely delivery, which is why we offer fast and reliable shipping options to get your orders to you quickly."
        },
        {id:3, 
            name:"24/7 Support", 
            description:"Our dedicated customer support team is available around the clock to assist you with any inquiries or issues you may have."
        }

    ])
  return (
    <div>
          <section className="task">
                <h5>Why Choose Us</h5>
                <h2>We Provide Best Clothing Services</h2>
                <p>At our clothing store, we pride ourselves on offering exceptional services that set us apart from the rest. Here are a few reasons why you should choose us for your fashion needs:</p>
                <div className="tasklist">
                    {task.map((tasks)=>(
                        <div key={tasks.id} className="taskitem">
                            <h3>{tasks.name}</h3>
                            <p>{tasks.description}</p>
                        </div>
                    ))}
                </div>
          </section>
    </div>
  )
}
