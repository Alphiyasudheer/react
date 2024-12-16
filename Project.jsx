import React, { useRef, useState } from 'react';
import './Project.css';
import circle_icon from '../Assets/circle.png'; // Access the Assets folder
import cross_icon from '../Assets/cross.png';

const Project = () => {
  const [data, setData] = useState(['', '', '', '', '', '', '', '', '']); // State for board data
  const [count, setCount] = useState(0); // Track the move count
  const [lock, setLock] = useState(false); // Lock the board on win
  const titleRef = useRef(null); // Ref for updating the game title

  const toggle = (e, num) => {
    if (lock || data[num] !== '') {
      return; // Prevent moves if the game is locked or the cell is already filled
    }

    const newData = [...data]; // Create a copy of the current board
    if (count % 2 === 0) {
      newData[num] = 'x'; // Player X move
    } else {
      newData[num] = 'o'; // Player O move
    }

    setData(newData); // Update the board state
    setCount(count + 1); // Increment the move count
    checkWin(newData); // Check for win condition
  };

  const checkWin = (board) => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6], // Diagonals
    ];

    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a] === board[b] && board[b] === board[c] && board[a] !== '') {
        won(board[a]);
        return;
      }
    }

    // If all cells are filled and no one won, it's a draw
    if (board.every(cell => cell !== '')) {
      titleRef.current.innerHTML = "It's a Draw!";
    }
  };

  const won = (winner) => {
    setLock(true); // Lock the board
    if (winner === 'x') {
      titleRef.current.innerHTML = `Congratulations: <img src=${cross_icon} /> Wins!`;
    } else {
      titleRef.current.innerHTML = `Congratulations: <img src=${circle_icon} /> Wins!`;
    }
  };

  const reset = () => {
    setLock(false); // Unlock the board
    setData(['', '', '', '', '', '', '', '', '']); // Clear the board
    setCount(0); // Reset move count
    titleRef.current.innerHTML = 'Tic Tac Toe Game In <span>React</span>'; // Reset title
  };

  return (
    <div className="container">
      <h1 className="title" ref={titleRef}>
        Tic Tac Toe Game In <span>React</span>
      </h1>
      <div className="board">
        <div className="row1">
          <div className="boxes" onClick={(e) => toggle(e, 0)}>
            {data[0] && <img src={data[0] === 'x' ? cross_icon : circle_icon} alt="icon" />}
          </div>
          <div className="boxes" onClick={(e) => toggle(e, 1)}>
            {data[1] && <img src={data[1] === 'x' ? cross_icon : circle_icon} alt="icon" />}
          </div>
          <div className="boxes" onClick={(e) => toggle(e, 2)}>
            {data[2] && <img src={data[2] === 'x' ? cross_icon : circle_icon} alt="icon" />}
          </div>
        </div>
        <div className="row2">
          <div className="boxes" onClick={(e) => toggle(e, 3)}>
            {data[3] && <img src={data[3] === 'x' ? cross_icon : circle_icon} alt="icon" />}
          </div>
          <div className="boxes" onClick={(e) => toggle(e, 4)}>
            {data[4] && <img src={data[4] === 'x' ? cross_icon : circle_icon} alt="icon" />}
          </div>
          <div className="boxes" onClick={(e) => toggle(e, 5)}>
            {data[5] && <img src={data[5] === 'x' ? cross_icon : circle_icon} alt="icon" />}
          </div>
        </div>
        <div className="row3">
          <div className="boxes" onClick={(e) => toggle(e, 6)}>
            {data[6] && <img src={data[6] === 'x' ? cross_icon : circle_icon} alt="icon" />}
          </div>
          <div className="boxes" onClick={(e) => toggle(e, 7)}>
            {data[7] && <img src={data[7] === 'x' ? cross_icon : circle_icon} alt="icon" />}
          </div>
          <div className="boxes" onClick={(e) => toggle(e, 8)}>
            {data[8] && <img src={data[8] === 'x' ? cross_icon : circle_icon} alt="icon" />}
          </div>
        </div>
      </div>
      <button className="reset" onClick={reset}>Reset</button>
    </div>
  );
};

export default Project;
