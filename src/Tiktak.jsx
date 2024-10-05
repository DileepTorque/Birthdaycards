// import axios from "axios";
import React, { useEffect, useState } from "react";
// const Tiktak = () => {
//     let [state,setState]=useState([]);
//     let[another,useAnother]=useState()
//     function Use(){
//       useEffect(()=>{
//         let api="http://localhost:2050/data";
//         axios.get(api).then((xor)=>setState(xor));
//        })
//     }
 
//   return (
//     <div>
//        <table border={4}>
//         <tr>
//           <button onClick={Use}> <td >x</td></button>
//           <button onClick={Use}> <td >0</td></button>
//           <button onClick={Use}> <td >x</td></button>
//         </tr>
//         <tr>
//         <button onClick={Use}> <td >0</td></button>
//         <button onClick={Use}> <td >x</td></button>
//         <button onClick={Use}> <td >x</td></button>
//         </tr>
//         <tr>
//         <button onClick={Use}> <td >x</td></button>
//         <button onClick={Use}> <td >0</td></button>
//         <button onClick={Use}> <td >x</td></button>
//         </tr>
       
//        </table>
//     </div>
//   )
// }

let TicTacToe = () => {
    let [state, setBoard] = useState(Array(9).fill(null));
    let [Next, setNext] = useState(false); 
    let print = (a) => {
        let noDta = state.slice(0,9); 
        noDta[a] = Next ? 'X' : '0'; 
        setBoard(noDta); 
        setNext(!Next);
    } ;
    // let winnning={
    //   [1,2,3],
    //   [4,5,6],
    //   [7,8,9],
    //   [0,3,6],
    //   [1,4,7],
    //   [2,5,8]
    // }               
    return (
      <table>
      <tbody>
        <tr>
          {state.slice(0, 3).map((x, b) => (
            <td key={b}> <button  onClick={() => print(b)}  > {x} </button>
            </td>  ))}
        </tr>
        <tr>
          {state.slice(3, 6).map((x, b) => ( 
            <td key={b + 3}>
              <button  onClick={() => print(b + 3)}   >  {x} </button>
            </td> ))}
        </tr>
        <tr>
          {state.slice(6, 9).map((x, b) => (
             <td key={b + 6}>
              <button  onClick={() => print(b + 6)} > {x} </button>
            </td>  ))}
        </tr>
      </tbody>
    </table>
    
    );
 
  
}; 
export default TicTacToe;












