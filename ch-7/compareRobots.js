function compareRobots(robot1, memory1, robot2, memory2) {
    let x = 0;
    let y = 0;
    for(let i = 0; i < 100; i++) {
      
      let task = VillageState.random();
      x += runRobot(task, robot1, memory1);
      y += runRobot(task, robot2, memory2);
    }
    console.log(x/100, y/100)
  }
  
  function runRobot(state, robot, memory) {
    for (let turn = 0;; turn++) {
      if (state.parcels.length == 0) {
        return turn
      }
      let action = robot(state, memory);
      state = state.move(action.direction);
      memory = action.memory;
    }
  }
  
  compareRobots(routeRobot, [], goalOrientedRobot, []);