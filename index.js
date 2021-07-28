let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")

player = {
	name: "Neel",
	chips: 26
}

playerEl.textContent = "Name: " + player.name + ", Chips:$" + player.chips

console.log(playerEl)

function getRandomCard() {

	let randomNumber = Math.floor(Math.random() * 13) + 1

	if (randomNumber === 1) {
		return 11
	}
	if (randomNumber === 11 || randomNumber === 12 || randomNumber === 13) {
		return 10
	}
	else {
		return randomNumber
	}
}

function startGame() {
	isAlive = true
	let firstCard = getRandomCard()
	let secondCard = getRandomCard()
	cards = [ firstCard, secondCard]
	sum = firstCard + secondCard

	renderGame()
}

function renderGame() {
	if (sum <=20) {
		message = "Do you want to draw a new card?"
		isAlive = true
	} else if (sum === 21) {
		message = "Wohoo! You've got a blackjack!"
		hasBlackjack = true
		isAlive = true
	} else {
		 message = "You're out of the game"
		 isAlive = false
	}
	messageEl.textContent = message
	sumEl.textContent = "Sum: " + sum 
	cardEl.textContent = "Cards: "

	for (let i = 0; i < cards.length; i++) {
		cardEl.textContent += cards[i] + " "
		console.log(cards[i])
	}
}

function newCard() {
	if ( isAlive === true && hasBlackjack === false) {
	let card = getRandomCard()
	sum += card
	cards.push(card)
	renderGame()
	}
}
