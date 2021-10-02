console.log('Welcome to the Guess the Number Game!')

const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],

  // prompts the user for thier guess 
  getGuess(){
    let input=0
    while (input < this.smallestNum || input>this.biggestNum || Number.isNaN(input)){
      input = parseInt(prompt(` Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
      } 
    return input
  },

//creates output alert to inform the user if thier vote hit the number or was too high or low
  render(guess){
    if (guess===this.secretNum){window.alert(`Congrats! You guessed the number in ${this.prevGuesses.length} turns!`)
    } else {
    let highLow = ''
      if (guess>this.secretNum){highLow = 'high'}
      else {highLow = 'low'}
      window.alert(`Your guess is too ${highLow} Previous guesses: ${this.prevGuesses.join(', ')}`)
    }
  },

  // function to adjust the min and max numbers while user guesses either to high or too low
  adjustMinMax(guess){
    if (guess<this.secretNum){
      this.smallestNum=guess}
      else if
        (guess>this.secretNum){
          this.biggestNum=guess
        }
    },

  // request user input to set the guessing range
  setRange() {
      this.smallestNum = parseInt(prompt(`Please enter the lowest number you would like to guess: `))
      this.biggestNum = parseInt(prompt(`Please enter the highest number you would like to guess: `))
    },

  // sets the game sequence into motion when called
  play: function() {
    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    let input;
    console.log(this.secretNum)
    while (input!==this.secretNum){
      input = this.getGuess()
      this.adjustMinMax(input)
      this.prevGuesses.push(input)
      this.render(input)
  }
    }
}

// Game setup and game play
game.setRange()
game.play()
