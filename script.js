// Your code here
const table = document.getElementById("graph")
function makeRow(){
   let row = document.createElement("tr")
   for (let i = 0; i < 20; i++){
    let td = document.createElement('td')
    row.appendChild(td)
   }
   table.appendChild(row)
}

makeRow()
makeRow()