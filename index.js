let fruit = ["a", "o", "a", "a", "o"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")


function fruitSort() {
	//let saveFruit = fruit.sort()

	for (let saveFruit = 0; saveFruit < fruit.length; saveFruit++) {

		if(fruit[saveFruit] === "a"){
			appleShelf.textContent += fruit[saveFruit] + " "
		} else {
			orangeShelf.textContent += fruit[saveFruit] + " "
		}
	}
}


fruitSort()
