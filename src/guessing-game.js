class GuessingGame {
    constructor() {
        this.number;
        this.min;
        this.max;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
                number = Math.floor((this.min + this.max) / 2);
              return number;
    }

    lower() {
       this.max = middle - 1;
    }

    greater() {
        this.min = middle + 1;
    }
}

module.exports = GuessingGame;
