import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import { useState } from 'react';
import ScoreBoard from './components/ScoreBoard';
import ResetButton from './components/ResetButton';


function App() {
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


  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({xScore:0, oScore:0});
  const [gameOver, setGameOver] = useState(false);
  

  const handleBoxClick = (boxIdx)=>{
      const updateBoard = board.map((value, index)=>{
          if(index == boxIdx){
            return xPlaying === true ? "X" : "O";
          }
          else{
            return value
          }
      })

      const winner = chechWinner(updateBoard);
      if(winner){
        if(winner === "O" ){
          let {oScore} = scores;
          oScore += 1;
          setScores({...scores, oScore})
        }
        else{
          let {xScore} = scores;
          xScore += 1;
          setScores({...scores, xScore})
        }
      }
      setBoard(updateBoard);
      setXPlaying(!xPlaying);
  }

  console.log(scores);

  const chechWinner = (board)=>{
    for(let i=0;i<Win_Conditions.length;i++){
      const [x,y,z] = Win_Conditions[i];

      if(board[x] && board[x] === board[y] && board[y] === board[z]){
        // console.log(board[x]);
        setGameOver(true);
        return board[x];
      }
    }
  }

  const resetBoard = ()=>{
    setGameOver(false);
    setBoard(Array(9).fill(null));
  }

  return (
    <div className="App">
      <h2>
        <span className='tic'>Tic</span>
        <span className='dash'>-</span> 
        <span className='tac'>Tac</span>
        <span className='dash'>-</span>
        <span className='tic'>Toe</span>
      </h2>
      <ScoreBoard scores={scores} xPlaying={xPlaying}/>
      <Board board={board} onClick={ gameOver ? resetBoard : handleBoxClick} />
      <ResetButton resetBoard = {resetBoard}/>
      <h4>Created and developed by - Avinash Kalmegh</h4>
    </div>
  );
}

export default App;
