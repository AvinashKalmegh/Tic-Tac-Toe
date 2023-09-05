import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import { useState } from 'react';


function App() {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);

  const Win_Conditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  const handleBoxClick = (boxIdx)=>{
      const updateBoard = board.map((value, index)=>{
          if(index == boxIdx){
            return xPlaying === true ? "X" : "O";
          }
          else{
            return value
          }
      })

      setBoard(updateBoard);
      setXPlaying(!xPlaying);
  }

  return (
    <div className="App">
      <Board board={board} onClick={handleBoxClick} />
    </div>
  );
}

export default App;
