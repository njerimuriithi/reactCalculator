import React ,{useState} from 'react'

function NumbersButton() {
    
    const createNumbers = () =>{
    const numbers=[]
      for (let i=1;i<10;i++){
           numbers.push(
               <button key={i}>{i}</button>
           )
      }return numbers
    }
    return (

        <div>
           {createNumbers()}
        </div>
    )
}

export default NumbersButton
