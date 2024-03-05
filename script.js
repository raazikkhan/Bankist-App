`use strict`
//Data for my bankist app
const account1 = {
    owner: "Razik Khan",
    movements: [200,432,-444,349,560,-999,10],
    intrestRate: 1.7,
    pin: 0220
}
const account2 = {
    owner: "Amaira Khan",
    movements: [200,432,-444,4323,-403,232,-543,-903,203,-430],
    intrestRate: 0.9,
    pin: 1111
}
const account3 = {
    owner: "Ahad Khan",
    movements: [200,432,-444,843,-432,-454,300,102,-432,500],
    intrestRate: 1,
    pin: 2222
}
const account4 = {
    owner: "Arsheen Khan",
    movements: [200,432,-444,3044,-321,666,-432,],
    intrestRate: 1.9,
    pin: 3333
}
const account5 = {
    owner: "Yusuf Khan",
    movements: [200,432,-444,],
    intrestRate: 1.7,
    pin: 4444
}

const account6 = {
    owner: "Ahmad Khan",
    movements: [800,492,-441,4332,-454,40,322,-30,-800,-29],
    intrestRate: 2.4,
    pin: 5555
}
const accounts = [account1,account2,account3,account4,account5,account6]

/*const movements_container = document.querySelectorAll('.movements');
accounts.forEach(item => {
    console.log(item.movements)
    item.movements.map(element => {
        console.log(element)
    })
    item.movements
    movements_container.innerHTML += `
    <div class="movements-row">
        <div class="movements-type movements-type-deposit">2 deposit</div>
        <div class="movements-date">3 days ago</div>
        <div class="movements-value">4000₹</div>
    </div>
    `;
})*/

//geting the elements
//Selecting Elem!
const welcome_label = document.querySelectorAll('.welcome')
const login_user = document.querySelectorAll('.login-user')
const login_password = document.querySelectorAll('.login-pin')
const login_btn = document.querySelectorAll('.login-btn')
const date = document.querySelectorAll('.date')
const app_container = document.querySelectorAll('.app')
const balance = document.querySelectorAll('.balance')
const balance_value = document.querySelectorAll('.balance-value')

// const movements_container = document.querySelectorAll('.movements')
const sum_valOut = document.querySelectorAll('.summary-value-out')
const sum_valIn = document.querySelectorAll('.summary-value-in')
const sum_valInerest = document.querySelectorAll('.summary-value-interest')
const sort_btn = document.querySelectorAll('.btn-sort')

const InputTo = document.querySelectorAll('.form-input form-input-to')
const InputAmount = document.querySelectorAll('.form-input form-input-amount')
const transferBtn = document.querySelectorAll('.form-btn form-btn-transfer')
const userInput = document.querySelectorAll('.form-input-user')
const userPin = document.querySelectorAll('.form-input-pin')
const closeBtn = document.querySelectorAll('.form-btn-close')

const timer = document.querySelectorAll('.timer')

const displayMovements = function (movements){
    //movements_container,inner.HTML = '';

     movements.forEach(function (mov , i)  {

        const type = mov > 0 ? 'deposit' : withdrawal;

   var html =  ` 
   <div class="movements-row">
      <div class="movements-type movements-type-${type}">${i + 1} , ${type}</div>
      
      <div class="movements-value">${mov}</div>
    
    </div>` 
    movements_container.insertAdjacentHTML("afterbegin",html) 

    });
    
}
displayMovements(account1,movements);