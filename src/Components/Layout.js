
import React ,{ useState} from 'react'
import './Layout.css'

function Layout() {
    const [input, setInput] = useState("");
    const numbers =[9 ,8,7,6,5,4,3,2,1]
    const calcNumbers =numbers.map(number =>{
        return(
            <button
            onClick={(e) => {
                setInput(input + e.target.value);
              }}
              value={number}
             key={number}>
                 
                 {number}</button>
        )
    })
   
   
    
        
     
    return (
       
        <div>
            >
           <div className="display">{input}</div>
            <div className="number">{calcNumbers}</div>
            <div className="specialNumbers">
               
            <button
          onClick={(e) => {
            try {
              setInput(
                String(eval(input)).length > 3 &&
                  String(eval(input)).includes(".")
                  ? String(eval(input).toFixed(4))
                  : String(eval(input))
              );
            } catch (e) {
              console.log(e);
            }
          }}
          value="="
        >
          =
        </button>
                <button onClick={() => setInput(input.substr(0, input.length - 1))}>
          Clear
        </button>
                
            </div>

            
            <div className="operators">
            <button onClick={(e) => setInput(input + e.target.value)} value="+">
          {" "}
          +{" "}
        </button>
                <button onClick={(e) => setInput(input + e.target.value)} value="-">
          {" "}
          -{" "}
        </button>
        <button onClick={(e) => setInput(input + e.target.value)} value="*">
          {" "}
          *{" "}
        </button>
        <button onClick={(e) => setInput(input + e.target.value)} value="/">
          {" "}
          /{" "}
        </button>
           
            </div>
            
           
          </div>
    
    )
}

export default Layout

