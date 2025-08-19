export default function GameOver({winner, clear,name}) {
            console.log("winner",winner);
    return (
        <div id="game-over">
            <h2>Game Over</h2>
            {winner ? <p>{name} won!</p> : <p>It's a draw</p>}
            <button onClick={clear}>Rematch!</button>
        </div>
    );
}