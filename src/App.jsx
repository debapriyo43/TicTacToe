import GameBoard from "./components/GameBoard";
import { Player } from "./components/Player";
import { useState } from "react";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";
function computeActivePlayer(gameTurns){
  let currentPlayer = "X";
      if (gameTurns.length > 0 && gameTurns[0].player === "X") {
        currentPlayer = "O";
      }
      return currentPlayer;
}
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];


function App() {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [playerNames,setPlayerNames]=useState({X:"Player 1", O:"Player 2"});
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = computeActivePlayer(gameTurns);
  let winner =null;
  let gameBoard= initialGameBoard.map(row=>[...row]);
    for(const turn of gameTurns){
      const {square,player}=turn;
      const {row,col}=square;
      gameBoard[row][col] = player;
    }
    console.log("gameBoard", gameBoard);
    console.log("gameTurns", gameTurns);
  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol=gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol=gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol=gameBoard[combination[2].row][combination[2].column];
    if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
      console.log("We have a winner", firstSquareSymbol);
      winner = firstSquareSymbol;
      // Here you can add logic to handle the win, like showing a message or resetting the game
      // Exit the function after finding a winner
    }

  }
  function handleSelectSquare(rowIndex, colIndex) {
    // Prevent moves if game is over
    if (winner || gameTurns.length >= 9) {
      return;
    }

    setGameTurns((prevTurn) => {
      const squareAlreadySelected = prevTurn.some(
        (turn) => turn.square.row === rowIndex && turn.square.col === colIndex
      );
      if (squareAlreadySelected) {
        return prevTurn;
      }
      const currentPlayer = computeActivePlayer(prevTurn);
      const updatedTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn,
      ];
      return updatedTurn;
    });
  }
  function clear() {
    setGameTurns([]);
    winner = null;
  }
  function handlePlayerNameChange({symbol,name}){
    console.log("Called from name change");
    setPlayerNames((prevNames)=>{
      return {...prevNames,[symbol]:name};
    })
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            playerName={playerNames.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          ></Player>
          <Player
            playerName={playerNames.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          ></Player>
          {/* <li >
            <span>
              <span className="player-name">Player 2</span>
            <span className="player-symbol">O</span>
            </span>
            <button>Edit</button>
          </li> */}
        </ol>
        <>{
          (winner || gameTurns.length>=9) && <GameOver winner={winner}clear={clear}name={winner==="X"? playerNames.X : playerNames.O}></GameOver> 
        }
        </>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          // turns={gameTurns}
          gameBoard={gameBoard}
        ></GameBoard>
      </div>

      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
