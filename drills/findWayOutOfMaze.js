let mySmallMaze = [
  [" ", " ", " "],
  [" ", "*", " "],
  [" ", " ", "e"],
];

let maze = [
  [" ", " ", " ", "*", " ", " ", " "],
  ["*", "*", " ", "*", " ", "*", " "],
  [" ", " ", " ", " ", " ", " ", " "],
  [" ", "*", "*", "*", "*", "*", " "],
  [" ", " ", " ", " ", " ", " ", "e"],
];

function mazePath(maze, row, col, path = []) {
  const numRows = maze.length;
  const numCols = maze[0].length;
  let t;
  //  base case
  if (maze[row][col] === "e") {
    console.log(`found it! ${maze[row][col]}`);

    return path.join("");
  }
  //  if it's blocked or already visited remove letter
  else if (maze[row][col] === "*" || maze[row][col] === "v") {
    path.pop();
    return;
  }
  //  recursive case move through maze
  else if (maze[row][col] === " ") {
    console.log("moving through maze");
    maze[row][col] = "v";
    // DOWN
    if (row < numRows - 1) {
      console.log("down");
      path.push("D");
      //  recursively call mazePath to get path
      t = mazePath(maze, row + 1, col, path);
      if (typeof t !== "undefined") return t;
    }
    // RIGHT
    if (col < numCols - 1) {
      console.log("right");
      path.push("R");
      //  recursively call mazePath to get path
      t = mazePath(maze, row, col + 1, path);
      if (typeof t !== "undefined") return t;
    }
    // UP
    if (row > 0) {
      console.log("up");
      path.push("U");
      //  recursively call mazePath to get path
      t = mazePath(maze, row - 1, col, path);
      if (typeof t !== "undefined") return t;
    }
    // LEFT
    if (col > 0) {
      console.log("left");
      path.push("L");
      //  recursively call mazePath to get path
      t = mazePath(maze, row, col - 1, path);
      if (typeof t !== "undefined") return t;
    }
  }
}

console.log(mazePath(mySmallMaze, 0, 0));
