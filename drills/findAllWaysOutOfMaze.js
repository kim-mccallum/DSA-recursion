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

function mazePath(maze, row, col, path = [], allPaths = []) {
  const numRows = maze.length;
  const numCols = maze[0].length;
  let pathInProgress;

  // helper function to check if item is in maze - returns true or false
  function indexOf2d(maze, itemtofind) {
    return (
      [].concat.apply([], [].concat.apply([], maze)).indexOf(itemtofind) !== -1
    );
  }
  //  base case for exiting function - keep calling until everything is v or * - ANOTHER RECURSIVE FUNCTION?!?!?
  if (!indexOf2d(maze, " ")) {
    // return the list of valid paths
    return allPaths;
  }
  //  base case for finding one path
  if (maze[row][col] === "e") {
    console.log(`found it! ${maze[row][col]}`);
    console.log(path.join(""));
    allPaths.push(path.join(""));
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
    // suggestion - make variables more clear (e.g., const offLeftSide = row < numRows - 1)
    if (row < numRows - 1) {
      console.log("down");
      path.push("D");
      //  recursively call mazePath to get path
      pathInProgress = mazePath(maze, row + 1, col, path, allPaths);
      //  maybe define a function e.g., function moveLeft
      if (typeof pathInProgress !== "undefined") return pathInProgress;
    }
    // RIGHT
    if (col < numCols - 1) {
      console.log("right");
      path.push("R");
      //  recursively call mazePath to get path
      pathInProgress = mazePath(maze, row, col + 1, path, allPaths);
      if (typeof pathInProgress !== "undefined") return pathInProgress;
    }
    // UP
    if (row > 0) {
      console.log("up");
      path.push("U");
      //  recursively call mazePath to get path
      pathInProgress = mazePath(maze, row - 1, col, path, allPaths);
      if (typeof pathInProgress !== "undefined") return pathInProgress;
    }
    // LEFT
    if (col > 0) {
      console.log("left");
      path.push("L");
      //  recursively call mazePath to get path
      pathInProgress = mazePath(maze, row, col - 1, path, allPaths);
      if (typeof pathInProgress !== "undefined") return pathInProgress;
    }
  }
}
console.log(
  "This one never really worked out... I think I need to figure out differences between depth/breadth search!"
);
console.log(mazePath(maze, 0, 0));
