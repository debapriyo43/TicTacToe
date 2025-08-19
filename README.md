# React Tic-Tac-Toe

A modern, interactive Tic-Tac-Toe game built with React. This project demonstrates best practices in React development, including functional components, hooks, state management, and component composition. The game features editable player names, move logging, win/draw detection, and a responsive, visually appealing UI.

## Features

- **Two-Player Gameplay:** Classic Tic-Tac-Toe for two players.
- **Editable Player Names:** Click "Edit" to change player names at any time.
- **Move Logging:** See a history of all moves made during the game.
- **Win/Draw Detection:** Automatic detection of game outcome with clear UI feedback.
- **Rematch Button:** Instantly reset the board for a new game.
- **Responsive Design:** Looks great on desktop and mobile devices.
- **Clean, Modular Code:** Built with functional components and React hooks.

## Demo

![Tic-Tac-Toe Screenshot](./screenshot.png)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/react-tic-tac-toe.git
   cd react-tic-tac-toe
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to play.

## Project Structure

```
src/
  components/
    GameBoard.jsx
    GameOver.jsx
    Log.jsx
    Player.jsx
  winning-combinations.js
  App.jsx
  index.jsx
  index.css
public/
  game-logo.png
  bg-pattern-dark.png
```

## Customization

- **Player Names:** Click "Edit" next to a player to change their name.
- **Rematch:** Click "Rematch!" after a game ends to reset the board.
- **Styling:** Modify `index.css` for custom themes or layouts.

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).

---

**Enjoy playing and learning with React Tic-
