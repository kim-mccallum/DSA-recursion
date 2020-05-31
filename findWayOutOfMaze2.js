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

// Solution from Nicholas Hazel - https://github.com/sinsys/dsa-recursion/blob/master/drills/find-way-out-of-maze.js
const findWayOutOfMaze2 = (maze, validPaths, winningPaths) => {
  // Setup defaults
  validPaths = validPaths || [
    { path: [], location: [0, 0], prevLocations: [] },
  ];
  winningPaths = winningPaths || [];

  // Base Case
  if (winningPaths.length > 0) {
    return winningPaths
      .map((path) => "Path to the exit: " + path.path.join(""))
      .join("\n");
  }

  // Helper function to determine if location was visited
  const checkPrevMoves = (prevLocations, newLocation) => {
    let valid = true;
    prevLocations.map((loc) => {
      if (loc[0] === newLocation[0] && loc[1] === newLocation[1]) valid = false;
    });
    return valid;
  };

  // Helper function to determine a win
  const checkWin = (location, winLocation) => {
    return location[0] === winLocation[0] && location[1] === winLocation[1];
  };

  // Collect new valid paths
  const newValidPaths = [];

  validPaths.map((path) => {
    let locRow = path.location[0];
    let locCol = path.location[1];
    if (checkWin(path.location, [maze.length - 1, maze[0].length - 1])) {
      winningPaths.push(path);
    } else {
      // Handle right cases
      if (
        locCol + 1 < maze[0].length &&
        maze[locRow][locCol + 1] !== "*" &&
        checkPrevMoves(path.prevLocations, [locRow, locCol + 1])
      ) {
        newValidPaths.push({
          path: [...path.path, "R"],
          location: [locRow, locCol + 1],
          prevLocations: [...path.prevLocations, path.location],
        });
      }
      // Handle down cases
      if (
        locRow + 1 < maze.length &&
        maze[locRow + 1][locCol] !== "*" &&
        checkPrevMoves(path.prevLocations, [locRow + 1, locCol])
      ) {
        newValidPaths.push({
          path: [...path.path, "D"],
          location: [locRow + 1, locCol],
          prevLocations: [...path.prevLocations, path.location],
        });
      }
      // Handle left cases
      if (
        locCol - 1 >= 0 &&
        maze[locRow][locCol - 1] !== "*" &&
        checkPrevMoves(path.prevLocations, [locRow, locCol - 1])
      ) {
        newValidPaths.push({
          path: [...path.path, "L"],
          location: [locRow, locCol - 1],
          prevLocations: [...path.prevLocations, path.location],
        });
      }
      // Handle up cases
      if (
        locRow - 1 >= 0 &&
        maze[locRow - 1][locCol] !== "*" &&
        checkPrevMoves(path.prevLocations, [locRow - 1, locCol])
      ) {
        newValidPaths.push({
          path: [...path.path, "U"],
          location: [locRow - 1, locCol],
          prevLocations: [...path.prevLocations, path.location],
        });
      }
    }
  });
  return findWayOutOfMaze2(maze, newValidPaths, winningPaths);
};

console.log(findWayOutOfMaze2(maze));
