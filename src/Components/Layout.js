
import React ,{ useState} from 'react'
import './Layout.css'

function Layout() {
    const numbers =[9 ,8,7,6,5,4,3,2,1]
    const calcNumbers =numbers.map(number =>{
        return(
            <button key={number.toString()}>{number}</button>
        )
    })
    const [firstNumber, sefirstNumber] = useState("0")

   
    function handleClick(){
     
    return (
        <div>
            
          
            <div className="number" onClick={handleClick}>{calcNumbers}</div>
            <div className="specialNumbers">
                <button>0</button>
                <button>00</button>
                <button>.</button>
                <button>=</button>
                
            </div>

            
            <div className="operators">
                <button >+</button>
                <button>-</button>
                <button>*</button>
                <button>/</button>
           
            </div>
            
           
          
        </div>
    )
}

export default Layout

