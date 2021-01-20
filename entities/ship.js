class Ship {
  constructor(xArr, yArr) {
    this.coordinatesL = xArr;
    this.coordinatesN = yArr;
    getHit(); {
      if([this.coordinatesL].includes(attack) || [this.coordinatesN].includes(attack))
    }
  }
}

class Battleship extends Ship {
  constructor() {
    super();
    this.length = 4;
  }
}

class Carrier extends Ship {
  constructor() {
    super();
    this.length = 5;
  }
}

class Cruiser extends Ship {
  constructor() {
    super();
    this.length = 3;
  }
}

class Destroyer extends Ship {
  constructor() {
    super();
    this.length = 2;
  }
}

class Submarine extends Ship {
  constructor() {
    super();
    this.length = 3;
  }
}
