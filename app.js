console.log('Welcome to the Guess the Number Game!')

const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  getGuess(){
    let input=0
    while (input < this.smallestNum || input>this.biggestNum || Number.isNaN(input)){
      input = parseInt(prompt(` Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
      } 
    return input
  },
  render(guess){
    if (guess===this.secretNum){window.alert(`Congrats! You guessed the number in ${this.prevGuesses.length} turns!`)
    } else {
    let highLow = ''
      if (guess>this.secretNum){highLow = 'high'}
      else {highLow = 'low'}
      window.alert(`Your guess is too ${highLow} Previous guesses: ${this.prevGuesses.join(', ')}`)
    }
  },
  play: function() {
    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    let input;
    console.log(this.secretNum)
    while (input!==this.secretNum){
      
      input = this.getGuess()
      
      this.prevGuesses.push(input)
      this.render(input)
  }
    }
}

game.play()

// if (input>this.smallestNum && input<this.smallestNum){
//   return input
// } else{
//   parseInt(input = prompt(` Your entry was out of range.\nEnter a guess between ${this.smallestNum} and ${this.biggestNum}`))}