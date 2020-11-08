const name = document.getElementById('name');
const date = document.getElementById('date');
const amount = document.getElementById('amount');
const submit = document.getElementById('submit');
const table = document.getElementById('table');

submit.addEventListener('click', function(e) {
    e.preventDefault();

    let row = document.createElement('tr'); // create new table row. 
    let nameData = document.createElement('td'); // create new table data
    let dateData = document.createElement('td'); // create new table data
    let amountData = document.createElement('td'); // create new table data
    let buttonData = document.createElement('td'); // create new table data
    let delBtn = document.createElement('button'); // create delete button

    nameData.innerText = name.value;
    dateData.innerText = date.value;
    amountData.innerText = `£${amount.value}`;
    delBtn.className = 'delBtn';
    delBtn.innerText = 'Delete';

    delBtn.addEventListener('click', function(){
        table.removeChild(row);
    })
    
    table.appendChild(row);
    row.appendChild(nameData);
    row.appendChild(dateData);
    row.appendChild(amountData);
    row.appendChild(buttonData);
    buttonData.appendChild(delBtn);
    
    if(name.value == '' ||
        date.value == '' ||
        amount.value == '') {
            table.removeChild(row);
            alert('Please fill in all details');
        }
    
    if(e.target == submit) {
    name.value = '';
    date.value = '';
    amount.value = '';
    }

});

