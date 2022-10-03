// Your code here
const table = document.getElementsByTagName('table')[0]
function makeRow(){
   let row = document.createElement("tr")
   for (let i = 0; i < 20; i++){
    let td = document.createElement('td')
    row.appendChild(td)
   }
   table.appendChild(row)
}

let addRow = document.getElementById('add-row')

addRow.addEventListener('click',makeRow)
