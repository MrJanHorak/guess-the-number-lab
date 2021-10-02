console.log('Welcome to the Guess the Number Game!')

const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  getGuess(){
    let input=''
      while (input !=this.secretNum) {
      parseInt(input = prompt(` Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
      return input}
    },
  render(guessed){
    if (guessed){`Congrats! You guessed the number in ${this.prevGuesses.length}!`
    } else {
    let highLow = ''
      if (this.input>this.secretNum){highLow = 'high'}
      else {highLow = 'low'}
      `Your guess is too [high|low] Previous guesses: ${this.prevGuesses.join(', ')}`
    }
  },
  play: function() {
    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    let input = this.getGuess()
    this.prevGuesses.push(input)
    this.render(input)
    console.log(input)
    console.log(this.prevGuesses)
    }
}

game.play()

// const input = prompt("What's your name?");
// alert(`Your name is ${input}`);