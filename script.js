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
console.log(table)

let addRow = document.getElementById('add-row')

addRow.addEventListener('click',makeRow)

table.addEventListener('click', colorize)

function colorize(event) {
   let target = event.target
   if (target.className.length) {
      target.className = ''
   } else {
      target.className = 'red'
   }
}
