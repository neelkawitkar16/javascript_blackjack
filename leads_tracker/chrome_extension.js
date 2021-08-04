const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const tabBtn = document.getElementById("tab-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const deleteBtn = document.getElementById("delete-btn")

let myLeads = []

function render(leads) {
	let listItems = ""
	for (let i = 0; i < leads.length; i++) {
		//listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "<a/></li>"
		listItems += `
			<li>
				<a target='_blank' href='${leads[i]}'>
					${leads[i]}
				</a>
			</li>
		`
	}
	ulEl.innerHTML = listItems
}

if (leadsFromLocalStorage != null) {
	myLeads = leadsFromLocalStorage
	render(myLeads)
	console.log("something is fetched...")
} else {
	console.log("Nothing to fetch!")
}

deleteBtn.addEventListener("dblclick" , function() {
	localStorage.clear()
	console.log("dblclick triggered")
	myLeads = []	
	render(myLeads)
})

inputBtn.addEventListener("click", function() {
	myLeads.push(inputEl.value)
	inputEl.value = ""
	localStorage.setItem("myLeads", JSON.stringify(myLeads));
	render(myLeads)
})

tabBtn.addEventListener("click", function() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	myLeads.push(tab[0].url)
	localStorage.setItem("myLeads", JSON.stringify(myLeads))
	render(myLeads)
	})
})