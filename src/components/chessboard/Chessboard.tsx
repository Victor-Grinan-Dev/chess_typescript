import './chessboard.css';

const verticalAxis = new Array(8).fill(1).map((num, i)=> num + i );
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

const Chessboard = () => {
  return (
    <div>Chessboard</div>
  )
}

export default Chessboard;