describe("In Jungle ", function() {

  function expectMove(turnIndexBeforeMove: number, stateBeforeMove: IState, move: IMove, isOk: boolean): void {
    expect(gameLogic.isMoveOk({
      turnIndexBeforeMove: turnIndexBeforeMove,
      turnIndexAfterMove: null,
      stateBeforeMove: stateBeforeMove,
      stateAfterMove: null,
      move: move,
      numberOfPlayers: null})).toBe(isOk);
  }

  function expectMoveOk(turnIndexBeforeMove: number, stateBeforeMove: IState, move: IMove): void {
    expectMove(turnIndexBeforeMove, stateBeforeMove, move, true);
  }

  function expectIllegalMove(turnIndexBeforeMove: number, stateBeforeMove: IState, move: IMove): void {
    expectMove(turnIndexBeforeMove, stateBeforeMove, move, false);
  }

  it("placing BElephant in 5x0 from initial state is legal", function() {
    expectMoveOk(0, <IState>{},
      [{setTurn: {turnIndex : 1}},
        {set: {key: 'board', value:
          [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
          ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
          ['WMouse', 'L', 'WLeopard', 'L', 'WWolf', 'L', 'WElephant'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['BElephant', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
          ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
          ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]}},
        {set: {key: 'deltaFrom', value: {row: 6, col: 0}}},
        {set: {key: 'deltaTo', value: {row: 5, col: 0}}}]);
  });

  it("placing White's chess piece from initial state is illegal", function() {
    expectIllegalMove(0, <IState>{},
      [{setTurn: {turnIndex : 1}},
        {set: {key: 'board', value:
          [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
          ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
          ['L', 'L', 'WLeopard', 'L', 'WWolf', 'L', 'WElephant'],
          ['WMouse', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['BElephant', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
          ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
          ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]}},
        {set: {key: 'deltaFrom', value: {row: 2, col: 0}}},
        {set: {key: 'deltaTo', value: {row: 3, col: 0}}}]);
  });

  it("placing WLeopard in 2*3 after BElephant placed in 5x0 is legal", function() {
    expectMoveOk(1,
      {board:
        [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
        ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
        ['WMouse', 'L', 'WLeopard', 'L', 'WWolf', 'L', 'WElephant'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['BElephant', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
        ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
        ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]},
      [{setTurn: {turnIndex : 0}},
        {set: {key: 'board', value:
          [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
          ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
          ['WMouse', 'L', 'L', 'WLeopard', 'WWolf', 'L', 'WElephant'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['BElephant', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
          ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
          ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]}},
        {set: {key: 'deltaFrom', value: {row: 2, col: 2}}},
        {set: {key: 'deltaTo', value: {row: 2, col: 3}}}]);
  });

  it("placing BElephant in 5*1 (river) is illegal", function() {
    expectIllegalMove(0,
      {board:
        [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
        ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
        ['WMouse', 'L', 'WLeopard', 'L', 'WWolf', 'L', 'WElephant'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['BElephant', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
        ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
        ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]},
      [{setTurn: {turnIndex : 1}},
        {set: {key: 'board', value:
          [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
          ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
          ['WMouse', 'L', 'WLeopard', 'L', 'WWolf', 'L', 'WElephant'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'BElephant', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
          ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
          ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]}},
        {set: {key: 'deltaFrom', value: {row: 5, col: 0}}},
        {set: {key: 'deltaTo', value: {row: 5, col: 1}}}]);
  });

  it("placing BElephant in 4*0 (eat Mouse) is illegal", function() {
    expectIllegalMove(0,
      {board:
        [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
        ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
        ['L', 'L', 'WLeopard', 'L', 'WWolf', 'L', 'WElephant'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['WMouse', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['BElephant', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
        ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
        ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]},
      [{setTurn: {turnIndex : 1}},
        {set: {key: 'board', value:
          [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
          ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
          ['L', 'L', 'WLeopard', 'L', 'WWolf', 'L', 'WElephant'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['BElephant', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
          ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
          ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]}},
        {set: {key: 'deltaFrom', value: {row: 5, col: 0}}},
        {set: {key: 'deltaTo', value: {row: 4, col: 0}}}]);
  });

  it("placing WLion in 4*3 is legal", function() {
    expectMoveOk(1,
      {board:
        [['L', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
        ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
        ['WMouse', 'L', 'WLeopard', 'L', 'WWolf', 'L', 'WElephant'],
        ['L', 'R', 'R', 'WLion', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['BElephant', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
        ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
        ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]},
      [{setTurn: {turnIndex : 0}},
        {set: {key: 'board', value:
          [['L', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
          ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
          ['WMouse', 'L', 'WLeopard', 'L', 'WWolf', 'L', 'WElephant'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'WLion', 'R', 'R', 'L'],
          ['BElephant', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
          ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
          ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]}},
        {set: {key: 'deltaFrom', value: {row: 3, col: 3}}},
        {set: {key: 'deltaTo', value: {row: 4, col: 3}}}]);
  });

  it("placing WLion in 3*0 (fly through river) is legal", function() {
    expectMoveOk(1,
      {board:
        [['L', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
        ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
        ['WMouse', 'L', 'WLeopard', 'L', 'WWolf', 'L', 'WElephant'],
        ['L', 'R', 'R', 'WLion', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['BElephant', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
        ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
        ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]},
      [{setTurn: {turnIndex : 0}},
        {set: {key: 'board', value:
          [['L', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
          ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
          ['WMouse', 'L', 'WLeopard', 'L', 'WWolf', 'L', 'WElephant'],
          ['WLion', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['BElephant', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
          ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
          ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]}},
        {set: {key: 'deltaFrom', value: {row: 3, col: 3}}},
        {set: {key: 'deltaTo', value: {row: 3, col: 0}}}]);
  });

  it("placing WLion in 3*0 (fly but Mouse on the way) is illegal", function() {
    expectIllegalMove(1,
      {board:
        [['L', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
        ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
        ['L', 'L', 'WLeopard', 'L', 'WWolf', 'L', 'WElephant'],
        ['L', 'R', 'WMouse', 'WLion', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['BElephant', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
        ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
        ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]},
      [{setTurn: {turnIndex : 0}},
        {set: {key: 'board', value:
          [['L', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
          ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
          ['L', 'L', 'WLeopard', 'L', 'WWolf', 'L', 'WElephant'],
          ['WLion', 'R', 'WMouse', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['BElephant', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
          ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
          ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]}},
        {set: {key: 'deltaFrom', value: {row: 3, col: 3}}},
        {set: {key: 'deltaTo', value: {row: 3, col: 0}}}]);
  });

  it("placing WLion in 3*0 (fly but Mouse on the way) is illegal", function() {
    expectIllegalMove(1,
      {board:
        [['L', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
        ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
        ['L', 'WLion', 'WLeopard', 'L', 'WWolf', 'L', 'WElephant'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['BElephant', 'WMouse', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
        ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
        ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]},
      [{setTurn: {turnIndex : 0}},
        {set: {key: 'board', value:
          [['L', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
          ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
          ['L', 'L', 'WLeopard', 'L', 'WWolf', 'L', 'WElephant'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['BElephant', 'WMouse', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'WLion', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
          ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
          ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]}},
        {set: {key: 'deltaFrom', value: {row: 2, col: 1}}},
        {set: {key: 'deltaTo', value: {row: 6, col: 1}}}]);
  });

  it("placing BTiger in 4*3 is legal", function() {
    expectMoveOk(0,
      {board:
        [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
        ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
        ['WMouse', 'L', 'WLeopard', 'L', 'WWolf', 'L', 'WElephant'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'BTiger', 'R', 'R', 'L'],
        ['BElephant', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
        ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
        ['L', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]},
      [{setTurn: {turnIndex : 1}},
        {set: {key: 'board', value:
          [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
          ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
          ['WMouse', 'L', 'WLeopard', 'L', 'WWolf', 'L', 'WElephant'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'BTiger', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['BElephant', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
          ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
          ['L', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]}},
        {set: {key: 'deltaFrom', value: {row: 5, col: 3}}},
        {set: {key: 'deltaTo', value: {row: 4, col: 3}}}]);
  });

  it("placing BTiger in 5*0 (fly through river) is legal", function() {
    expectMoveOk(0,
      {board:
        [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
        ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
        ['WMouse', 'L', 'WLeopard', 'L', 'WWolf', 'L', 'WElephant'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'BTiger', 'R', 'R', 'L'],
        ['BElephant', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
        ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
        ['L', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]},
      [{setTurn: {turnIndex : 1}},
        {set: {key: 'board', value:
          [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
          ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
          ['WMouse', 'L', 'WLeopard', 'L', 'WWolf', 'L', 'WElephant'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['BTiger', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['BElephant', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
          ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
          ['L', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]}},
        {set: {key: 'deltaFrom', value: {row: 5, col: 3}}},
        {set: {key: 'deltaTo', value: {row: 5, col: 0}}}]);
  });

  it("placing BTiger in 5*0 (fly through river) is legal", function() {
    expectMoveOk(0,
      {board:
        [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
        ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
        ['WMouse', 'L', 'WLeopard', 'L', 'WWolf', 'L', 'WElephant'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['BElephant', 'L', 'BWolf', 'L', 'BLeopard', 'BTiger', 'BMouse'],
        ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
        ['L', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]},
      [{setTurn: {turnIndex : 1}},
        {set: {key: 'board', value:
          [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
          ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
          ['WMouse', 'L', 'WLeopard', 'L', 'WWolf', 'BTiger', 'WElephant'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['BElephant', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
          ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
          ['L', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]}},
        {set: {key: 'deltaFrom', value: {row: 6, col: 5}}},
        {set: {key: 'deltaTo', value: {row: 2, col: 5}}}]);
  });

  it("placing BTiger in 5*5 (fly but Mouse on the way) is illegal", function() {
    expectIllegalMove(0,
      {board:
        [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
        ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
        ['WMouse', 'L', 'WLeopard', 'L', 'WWolf', 'L', 'WElephant'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'BTiger', 'R', 'BMouse', 'L'],
        ['BElephant', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'L'],
        ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
        ['L', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]},
      [{setTurn: {turnIndex : 1}},
        {set: {key: 'board', value:
          [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
          ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
          ['WMouse', 'L', 'WLeopard', 'L', 'WWolf', 'L', 'WElephant'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'BMouse', 'BTiger'],
          ['BElephant', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'L'],
          ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
          ['L', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]}},
        {set: {key: 'deltaFrom', value: {row: 5, col: 3}}},
        {set: {key: 'deltaTo', value: {row: 5, col: 6}}}]);
  });

  it("placing WLeopard in 2*3 is legal", function() {
    expectMoveOk(1,
      {board:
        [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
        ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
        ['WMouse', 'L', 'WLeopard', 'L', 'WWolf', 'L', 'WElephant'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['BElephant', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
        ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
        ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]},
      [{setTurn: {turnIndex : 0}},
        {set: {key: 'board', value:
          [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
          ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
          ['WMouse', 'L', 'L', 'WLeopard', 'WWolf', 'L', 'WElephant'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['BElephant', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
          ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
          ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]}},
        {set: {key: 'deltaFrom', value: {row: 2, col: 2}}},
        {set: {key: 'deltaTo', value: {row: 2, col: 3}}}]);
  });

  it("placing WLeopard in 3*2 (river) is illegal", function() {
    expectIllegalMove(1,
      {board:
        [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
        ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
        ['WMouse', 'L', 'WLeopard', 'L', 'WWolf', 'L', 'WElephant'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['BElephant', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
        ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
        ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]},
      [{setTurn: {turnIndex : 0}},
        {set: {key: 'board', value:
          [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
          ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
          ['WMouse', 'L', 'L', 'L', 'WWolf', 'L', 'WElephant'],
          ['L', 'R', 'WLeopard', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['BElephant', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
          ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
          ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]}},
        {set: {key: 'deltaFrom', value: {row: 2, col: 2}}},
        {set: {key: 'deltaTo', value: {row: 3, col: 2}}}]);
  });

  it("placing BDog in 6*5 is legal", function() {
    expectMoveOk(0,
      {board:
        [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
        ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
        ['WMouse', 'L', 'WLeopard', 'L', 'WWolf', 'L', 'WElephant'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['BElephant', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
        ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
        ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]},
      [{setTurn: {turnIndex : 1}},
        {set: {key: 'board', value:
          [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
          ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
          ['WMouse', 'L', 'WLeopard', 'L', 'WWolf', 'L', 'WElephant'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['BElephant', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'L', 'BWolf', 'L', 'BLeopard', 'BDog', 'BMouse'],
          ['L', 'BCat', 'L', 'BTrap', 'L', 'L', 'L'],
          ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]}},
        {set: {key: 'deltaFrom', value: {row: 7, col: 5}}},
        {set: {key: 'deltaTo', value: {row: 6, col: 5}}}]);
  });

  it("placing BDog in 5*5 (river) is illegal", function() {
    expectIllegalMove(0,
      {board:
        [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
        ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
        ['WMouse', 'L', 'WLeopard', 'L', 'WWolf', 'L', 'WElephant'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['BElephant', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'L', 'BWolf', 'L', 'BLeopard', 'BDog', 'BMouse'],
        ['L', 'BCat', 'L', 'BTrap', 'L', 'L', 'L'],
        ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]},
      [{setTurn: {turnIndex : 1}},
        {set: {key: 'board', value:
          [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
          ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
          ['WMouse', 'L', 'WLeopard', 'L', 'WWolf', 'L', 'WElephant'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['BElephant', 'R', 'R', 'L', 'R', 'BDog', 'L'],
          ['L', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
          ['L', 'BCat', 'L', 'BTrap', 'L', 'L', 'L'],
          ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]}},
        {set: {key: 'deltaFrom', value: {row: 6, col: 5}}},
        {set: {key: 'deltaTo', value: {row: 5, col: 5}}}]);
  });

  it("placing WWolf in 2*5 is legal", function() {
    expectMoveOk(1,
      {board:
        [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
        ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
        ['WMouse', 'L', 'WLeopard', 'L', 'WWolf', 'L', 'WElephant'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['BElephant', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
        ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
        ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]},
      [{setTurn: {turnIndex : 0}},
        {set: {key: 'board', value:
          [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
          ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
          ['WMouse', 'L', 'WLeopard', 'L', 'L', 'WWolf', 'WElephant'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['BElephant', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
          ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
          ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]}},
        {set: {key: 'deltaFrom', value: {row: 2, col: 4}}},
        {set: {key: 'deltaTo', value: {row: 2, col: 5}}}]);
  });

  it("placing WWolf in 3*4 (river) is illegal", function() {
    expectIllegalMove(1,
      {board:
        [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
        ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
        ['WMouse', 'L', 'WLeopard', 'L', 'WWolf', 'L', 'WElephant'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['BElephant', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
        ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
        ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]},
      [{setTurn: {turnIndex : 0}},
        {set: {key: 'board', value:
          [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
          ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
          ['WMouse', 'L', 'WLeopard', 'L', 'L', 'l', 'WElephant'],
          ['L', 'R', 'R', 'L', 'WWolf', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['BElephant', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
          ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
          ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]}},
        {set: {key: 'deltaFrom', value: {row: 2, col: 4}}},
        {set: {key: 'deltaTo', value: {row: 3, col: 4}}}]);
  });

  it("placing BCat in 6*1 is legal", function() {
    expectMoveOk(0,
      {board:
        [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
        ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
        ['WMouse', 'L', 'WLeopard', 'L', 'WWolf', 'L', 'WElephant'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['BElephant', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
        ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
        ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]},
      [{setTurn: {turnIndex : 1}},
        {set: {key: 'board', value:
          [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
          ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
          ['WMouse', 'L', 'WLeopard', 'L', 'WWolf', 'L', 'WElephant'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['BElephant', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'BCat', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
          ['L', 'L', 'L', 'BTrap', 'L', 'BDog', 'L'],
          ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]}},
        {set: {key: 'deltaFrom', value: {row: 7, col: 1}}},
        {set: {key: 'deltaTo', value: {row: 6, col: 1}}}]);
  });

  it("placing BCat in 5*1 (river) is illegal", function() {
    expectIllegalMove(0,
      {board:
        [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
        ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
        ['WMouse', 'L', 'WLeopard', 'L', 'WWolf', 'L', 'WElephant'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['BElephant', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'BCat', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
        ['L', 'L', 'L', 'BTrap', 'L', 'BDog', 'L'],
        ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]},
      [{setTurn: {turnIndex : 1}},
        {set: {key: 'board', value:
          [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
          ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
          ['WMouse', 'L', 'WLeopard', 'L', 'WWolf', 'L', 'WElephant'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['BElephant', 'BCat', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
          ['L', 'L', 'L', 'BTrap', 'L', 'BDog', 'L'],
          ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]}},
        {set: {key: 'deltaFrom', value: {row: 6, col: 1}}},
        {set: {key: 'deltaTo', value: {row: 5, col: 1}}}]);
  });

  it("placing WMouse in 3*1 (river) is legal", function() {
    expectMoveOk(1,
      {board:
        [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
        ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
        ['L', 'WLeopard', 'L', 'L', 'WWolf', 'L', 'WElephant'],
        ['WMouse', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['BElephant', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
        ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
        ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]},
      [{setTurn: {turnIndex : 0}},
        {set: {key: 'board', value:
          [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
          ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
          ['L', 'WLeopard', 'L', 'L', 'WWolf', 'L', 'WElephant'],
          ['L', 'WMouse', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['BElephant', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
          ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
          ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]}},
        {set: {key: 'deltaFrom', value: {row: 3, col: 0}}},
        {set: {key: 'deltaTo', value: {row: 3, col: 1}}}]);
  });

  it("placing WMouse in 4*0 (Mouse in river cannot eat Elephant) is illegal", function() {
    expectIllegalMove(1,
      {board:
        [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
        ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
        ['L', 'L', 'WLeopard', 'L', 'WWolf', 'L', 'WElephant'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['BElephant', 'WMouse', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
        ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
        ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]},
      [{setTurn: {turnIndex : 0}},
        {set: {key: 'board', value:
          [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
          ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
          ['L', 'L', 'WLeopard', 'L', 'WWolf', 'L', 'WElephant'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['WMouse', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
          ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
          ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]}},
        {set: {key: 'deltaFrom', value: {row: 4, col: 1}}},
        {set: {key: 'deltaTo', value: {row: 4, col: 0}}}]);
  });

  it("cannot move after the game is over", function() {
    expectIllegalMove(1,
      {board:
        [['L', 'L', 'WTrap', 'BDog', 'WTrap', 'L', 'L'],
        ['L', 'L', 'L', 'WTrap', 'L', 'L', 'L'],
        ['L', 'L', 'L', 'L', 'WWolf', 'L', 'WElephant'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'L', 'L', 'L', 'L', 'L', 'L'],
        ['L', 'BCat', 'L', 'BTrap', 'L', '', 'L'],
        ['L', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'L']]},
      [{setTurn: {turnIndex : 0}},
        {set: {key: 'board', value:
          [['L', 'L', 'WTrap', 'BDog', 'WTrap', 'L', 'L'],
          ['L', 'L', 'L', 'WTrap', 'L', 'L', 'L'],
          ['L', 'L', 'L', 'WWolf', 'L', 'L', 'WElephant'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'L', 'L', 'L', 'L', 'L', 'L'],
          ['L', 'BCat', 'L', 'BTrap', 'L', '', 'L'],
          ['L', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'L']]}},
        {set: {key: 'deltaFrom', value: {row: 2, col: 4}}},
        {set: {key: 'deltaTo', value: {row: 2, col: 3}}}]);
  });

  it("Black player wins by move BDog to 0*3 is legal", function() {
    expectIllegalMove(0,
      {board:
        [['L', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'L'],
        ['L', 'L', 'L', 'BDog', 'L', 'L', 'L'],
        ['L', 'L', 'L', 'L', 'WWolf', 'L', 'WElephant'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'L', 'L', 'L', 'L', 'L', 'L'],
        ['L', 'BCat', 'L', 'BTrap', 'L', '', 'L'],
        ['L', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'L']]},
      [{endMatch: {endMatchScores: [1, 0]}},
        {set: {key: 'board', value:
          [['L', 'L', 'WTrap', 'BDog', 'WTrap', 'L', 'L'],
          ['L', 'L', 'L', 'WTrap', 'L', 'L', 'L'],
          ['L', 'L', 'L', 'L', 'WWolf', 'L', 'WElephant'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'L', 'L', 'L', 'L', 'L', 'L'],
          ['L', 'BCat', 'L', 'BTrap', 'L', '', 'L'],
          ['L', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'L']]}},
        {set: {key: 'deltaFrom', value: {row: 1, col: 3}}},
        {set: {key: 'deltaTo', value: {row: 0, col: 3}}}]);
  });

  it("White player wins by move BDog to 0*3 is legal", function() {
    expectIllegalMove(1,
      {board:
        [['L', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'L'],
        ['L', 'L', 'L', 'WTrap', 'L', 'L', 'L'],
        ['L', 'L', 'L', 'L', 'WWolf', 'L', 'WElephant'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'L', 'L', 'L', 'L', 'L', 'L'],
        ['L', 'BCat', 'L', 'WDog', 'L', '', 'L'],
        ['L', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'L']]},
      [{endMatch: {endMatchScores: [0, 1]}},
        {set: {key: 'board', value:
          [['L', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'L'],
          ['L', 'L', 'L', 'WTrap', 'L', 'L', 'L'],
          ['L', 'L', 'L', 'L', 'WWolf', 'L', 'WElephant'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'L', 'L', 'L', 'L', 'L', 'L'],
          ['L', 'BCat', 'L', 'BTrap', 'L', '', 'L'],
          ['L', 'L', 'BTrap', 'WDog', 'BTrap', 'L', 'L']]}},
        {set: {key: 'deltaFrom', value: {row: 7, col: 3}}},
        {set: {key: 'deltaTo', value: {row: 8, col: 3}}}]);
  });

  it("move chese pieces to own Den is illegal", function() {
    expectIllegalMove(1,
      {board:
        [['L', 'L', 'WLion', 'WDen', 'WTrap', 'L', 'L'],
        ['L', 'L', 'L', 'WTrap', 'L', 'L', 'L'],
        ['L', 'L', 'L', 'L', 'WWolf', 'L', 'WElephant'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'L', 'L', 'L', 'L', 'L', 'L'],
        ['L', 'BCat', 'L', 'BTrap', 'L', '', 'L'],
        ['L', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'L']]},
      [{setTurn: {turnIndex : 0}},
        {set: {key: 'board', value:
          [['L', 'L', 'WTrap', 'WLion', 'WTrap', 'L', 'L'],
          ['L', 'L', 'L', 'WTrap', 'L', 'L', 'L'],
          ['L', 'L', 'L', 'L', 'WWolf', 'L', 'WElephant'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'L', 'L', 'L', 'L', 'L', 'L'],
          ['L', 'BCat', 'L', 'BTrap', 'L', '', 'L'],
          ['L', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'L']]}},
        {set: {key: 'deltaFrom', value: {row: 0, col: 2}}},
        {set: {key: 'deltaTo', value: {row: 0, col: 3}}}]);
  });

  it("placing BLeopard in 3*3 to eat WDog (big eat small) is legal", function() {
    expectMoveOk(0,
      {board:
        [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
        ['L', 'L', 'L', 'WTrap', 'L', 'WCat', 'L'],
        ['WMouse', 'WLeopard', 'L', 'L', 'WWolf', 'L', 'WElephant'],
        ['L', 'R', 'R', 'WDog', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'BLeopard', 'R', 'R', 'L'],
        ['BElephant', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'L', 'BWolf', 'L', 'L', 'L', 'BMouse'],
        ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
        ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]},
      [{setTurn: {turnIndex : 1}},
        {set: {key: 'board', value:
          [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
          ['L', 'L', 'L', 'WTrap', 'L', 'WCat', 'L'],
          ['WMouse', 'WLeopard', 'L', 'L', 'WWolf', 'L', 'WElephant'],
          ['L', 'R', 'R', 'BLeopard', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['BElephant', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'L', 'BWolf', 'L', 'L', 'L', 'BMouse'],
          ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
          ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]}},
        {set: {key: 'deltaFrom', value: {row: 4, col: 3}}},
        {set: {key: 'deltaTo', value: {row: 3, col: 3}}}]);
  });

  it("placing WCat in 1*3 to eat BLion(in white trap) is legal", function() {
    expectMoveOk(1,
      {board:
        [['L', 'L', 'WLion', 'WDen', 'WTrap', 'L', 'L'],
        ['L', 'L', 'L', 'BLion', 'L', 'L', 'L'],
        ['L', 'L', 'L', 'WCat', 'WWolf', 'L', 'WElephant'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'L', 'L', 'L', 'L', 'L', 'L'],
        ['L', 'BCat', 'L', 'BTrap', 'L', '', 'L'],
        ['L', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'L']]},
      [{setTurn: {turnIndex : 0}},
        {set: {key: 'board', value:
          [['L', 'L', 'WLion', 'WDen', 'WTrap', 'L', 'L'],
          ['L', 'L', 'L', 'WCat', 'L', 'L', 'L'],
          ['L', 'L', 'L', 'L', 'WWolf', 'L', 'WElephant'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'L', 'L', 'L', 'L', 'L', 'L'],
          ['L', 'BCat', 'L', 'BTrap', 'L', '', 'L'],
          ['L', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'L']]}},
        {set: {key: 'deltaFrom', value: {row: 2, col: 3}}},
        {set: {key: 'deltaTo', value: {row: 1, col: 3}}}]);
  });

  it("placing BCat in 3*3 to eat WDog (big eat small) is legal", function() {
    expectIllegalMove(0,
      {board:
        [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
        ['L', 'L', 'L', 'WTrap', 'L', 'WCat', 'L'],
        ['WMouse', 'WLeopard', 'L', 'L', 'WWolf', 'L', 'WElephant'],
        ['L', 'R', 'R', 'WDog', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'BCat', 'R', 'R', 'L'],
        ['BElephant', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'L', 'BWolf', 'BLeopard', 'L', 'L', 'BMouse'],
        ['L', 'L', 'L', 'BTrap', 'L', 'BDog', 'L'],
        ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]},
      [{setTurn: {turnIndex : 1}},
        {set: {key: 'board', value:
          [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
          ['L', 'L', 'L', 'WTrap', 'L', 'WCat', 'L'],
          ['WMouse', 'WLeopard', 'L', 'L', 'WWolf', 'L', 'WElephant'],
          ['L', 'R', 'R', 'BCat', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['BElephant', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'L', 'BWolf', 'BLeopard', 'L', 'L', 'BMouse'],
          ['L', 'L', 'L', 'BTrap', 'L', 'BDog', 'L'],
          ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]}},
        {set: {key: 'deltaFrom', value: {row: 4, col: 3}}},
        {set: {key: 'deltaTo', value: {row: 3, col: 3}}}]);
  });

  it("the game ties when white player has no chess piece to move", function() {
    expectMoveOk(0,
      {board:
        [['L', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'L'],
        ['L', 'L', 'L', 'WTrap', 'L', 'L', 'L'],
        ['L', 'L', 'L', 'L', 'L', 'L', 'L'],
        ['L', 'R', 'R', 'BTiger', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'WWolf', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'L', 'L', 'BLion', 'L', 'L', 'L'],
        ['L', 'BCat', 'L', 'BTrap', 'L', '', 'L'],
        ['L', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'L']]},
      [{endMatch: {endMatchScores : [0, 0]}},
        {set: {key: 'board', value:
          [['L', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'L'],
          ['L', 'L', 'L', 'WTrap', 'L', 'L', 'L'],
          ['L', 'L', 'L', 'L', 'L', 'L', 'L'],
          ['L', 'R', 'R', 'BTiger', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'WWolf', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'BLion', 'R', 'R', 'L'],
          ['L', 'L', 'L', 'L', 'L', 'L', 'L'],
          ['L', 'BCat', 'L', 'BTrap', 'L', '', 'L'],
          ['L', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'L']]}},
        {set: {key: 'deltaFrom', value: {row: 6, col: 3}}},
        {set: {key: 'deltaTo', value: {row: 5, col: 3}}}]);
  });

  it("the game ties when white player has no chess piece to move", function() {
    expectMoveOk(0,
      {board:
        [['L', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'L'],
        ['L', 'L', 'BTiger', 'WMouse', 'BLion', 'L', 'L'],
        ['L', 'L', 'L', 'L', 'BDog', 'L', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'L', 'L', 'L', 'L', 'L', 'L'],
        ['L', 'L', 'L', 'BTrap', 'L', 'L', 'L'],
        ['L', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'L']]},
      [{endMatch: {endMatchScores : [0, 0]}},
        {set: {key: 'board', value:
          [['L', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'L'],
          ['L', 'L', 'BTiger', 'WMouse', 'BLion', 'L', 'L'],
          ['L', 'L', 'L', 'BDog', 'L', 'L', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'L', 'L', 'L', 'L', 'L', 'L'],
          ['L', 'L', 'L', 'BTrap', 'L', 'L', 'L'],
          ['L', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'L']]}},
        {set: {key: 'deltaFrom', value: {row: 2, col: 4}}},
        {set: {key: 'deltaTo', value: {row: 2, col: 3}}}]);
  });

  it("null move is illegal", function() {
    expectIllegalMove(0, <IState>{}, null);
  });

  it("move without board is illegal", function() {
    expectIllegalMove(0, <IState>{}, [{setTurn: {turnIndex : 1}}]);
  });

  it("move without delta is illegal", function() {
    expectIllegalMove(0, <IState>{},
      [{setTurn: {turnIndex : 1}},
        {set: {key: 'board', value:
        [['L', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'L'],
        ['L', 'L', 'L', 'WTrap', 'L', 'L', 'L'],
        ['L', 'L', 'L', 'L', 'L', 'L', 'L'],
        ['L', 'R', 'R', 'BTiger', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'WWolf', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'BLion', 'R', 'R', 'L'],
        ['L', 'L', 'L', 'L', 'L', 'L', 'L'],
        ['L', 'BCat', 'L', 'BTrap', 'L', '', 'L'],
        ['L', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'L']]}}]);
  });

  it("move chese pieces out of the board is illegal", function() {
    expectIllegalMove(0,
      {board:
        [['L', 'L', 'WLion', 'WDen', 'WTrap', 'L', 'L'],
        ['L', 'L', 'L', 'WTrap', 'L', 'L', 'L'],
        ['L', 'L', 'L', 'L', 'WWolf', 'L', 'WElephant'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'L', 'L', 'L', 'L', 'L', 'L'],
        ['BCat', 'L', 'L', 'BTrap', 'L', '', 'L'],
        ['L', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'L']]},
      [{setTurn: {turnIndex : 1}},
        {set: {key: 'board', value:
          [['L', 'L', 'WLion', 'WDen', 'WTrap', 'L', 'L'],
          ['L', 'L', 'L', 'WTrap', 'L', 'L', 'L'],
          ['L', 'L', 'L', 'L', 'WWolf', 'L', 'WElephant'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'L', 'L', 'L', 'L', 'L', 'L'],
          ['L', 'L', 'L', 'BTrap', 'L', '', 'L'],
          ['L', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'L']]}},
        {set: {key: 'deltaFrom', value: {row: 7, col: 0}}},
        {set: {key: 'deltaTo', value: {row: 7, col: -1}}}]);
  });

  it("move chese pieces through diagonal is illegal", function() {
    expectIllegalMove(0,
      {board:
        [['L', 'L', 'WLion', 'WDen', 'WTrap', 'L', 'L'],
        ['L', 'L', 'L', 'WTrap', 'L', 'L', 'L'],
        ['L', 'L', 'L', 'L', 'WWolf', 'L', 'WElephant'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'L', 'L', 'L', 'L', 'L', 'L'],
        ['BCat', 'L', 'L', 'BTrap', 'L', '', 'L'],
        ['L', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'L']]},
      [{setTurn: {turnIndex : 1}},
        {set: {key: 'board', value:
          [['L', 'L', 'WLion', 'WDen', 'WTrap', 'L', 'L'],
          ['L', 'L', 'L', 'WTrap', 'L', 'L', 'L'],
          ['L', 'L', 'L', 'L', 'WWolf', 'L', 'WElephant'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'BCat', 'L', 'L', 'L', 'L', 'L'],
          ['L', 'L', 'L', 'BTrap', 'L', '', 'L'],
          ['L', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'L']]}},
        {set: {key: 'deltaFrom', value: {row: 7, col: 0}}},
        {set: {key: 'deltaTo', value: {row: 6, col: 1}}}]);
  });

  it("placing BElephant in 5x0 but setTurn to the wrong player is illegal", function() {
    expectIllegalMove(0, <IState>{},
      [{setTurn: {turnIndex : 0}},
        {set: {key: 'board', value:
          [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
          ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
          ['WMouse', 'L', 'WLeopard', 'L', 'WWolf', 'L', 'WElephant'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['BElephant', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'L', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
          ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
          ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]}},
        {set: {key: 'deltaFrom', value: {row: 6, col: 0}}},
        {set: {key: 'deltaTo', value: {row: 5, col: 0}}}]);
  });

  it("placing BElephant in 5x0 but set the board wrong is illegal", function() {
    expectIllegalMove(0, <IState>{},
      [{setTurn: {turnIndex : 0}},
        {set: {key: 'board', value:
          [['WLion', 'L', 'WTrap', 'WDen', 'WTrap', 'L', 'WTiger'],
          ['L', 'WDog', 'L', 'WTrap', 'L', 'WCat', 'L'],
          ['WMouse', 'L', 'WLeopard', 'L', 'WWolf', 'L', 'WElephant'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'BElephant', 'BWolf', 'L', 'BLeopard', 'L', 'BMouse'],
          ['L', 'BCat', 'L', 'BTrap', 'L', 'BDog', 'L'],
          ['BTiger', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'BLion']]}},
        {set: {key: 'deltaFrom', value: {row: 6, col: 0}}},
        {set: {key: 'deltaTo', value: {row: 5, col: 0}}}]);
  });

  it("placing chess piece to the place already has own chess is illegal", function() {
    expectIllegalMove(0,
      {board:
        [['L', 'L', 'WLion', 'WDen', 'WTrap', 'L', 'L'],
        ['L', 'L', 'L', 'WTrap', 'L', 'L', 'L'],
        ['L', 'L', 'L', 'L', 'WWolf', 'L', 'WElephant'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
        ['BCat', 'L', 'L', 'L', 'L', 'L', 'L'],
        ['BLion', 'L', 'L', 'BTrap', 'L', '', 'L'],
        ['L', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'L']]},
      [{setTurn: {turnIndex : 1}},
        {set: {key: 'board', value:
          [['L', 'L', 'WLion', 'WDen', 'WTrap', 'L', 'L'],
          ['L', 'L', 'L', 'WTrap', 'L', 'L', 'L'],
          ['L', 'L', 'L', 'L', 'WWolf', 'L', 'WElephant'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['L', 'R', 'R', 'L', 'R', 'R', 'L'],
          ['BLion', 'L', 'L', 'L', 'L', 'L', 'L'],
          ['L', 'L', 'L', 'BTrap', 'L', '', 'L'],
          ['L', 'L', 'BTrap', 'BDen', 'BTrap', 'L', 'L']]}},
        {set: {key: 'deltaFrom', value: {row: 7, col: 0}}},
        {set: {key: 'deltaTo', value: {row: 6, col: 0}}}]);
  });

});
