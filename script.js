"use strict";

console.log("Welcome to the Bankist app");

// Data
const account1 = {
  owner: "Sibashis Barman",
  movements: [110, 200, -50, 15, -90, 300, -213],
  interestRate: 1.2,
  pin: 1111,
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-07-26T17:01:17.194Z",
    "2020-07-28T23:36:17.929Z",
  ],
  locale: "en-IN",
};

const account2 = {
  owner: "Kanak Gupta",
  movements: [300, -40, -50, 120, -100, 70, -10, -35],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  locale: "en-IN",
};

const account3 = {
  owner: "Neha Kumari",
  movements: [100, -50, 70, 35, -10, -12, 90, 213, -79],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    "2019-11-17T10:31:17.178Z",
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-07-26T17:01:17.194Z",
    "2020-07-28T23:36:17.929Z",
    "2020-08-01T10:51:36.790Z",
  ],
  locale: "en-IN",
};

const account4 = {
  owner: "Pragya Subba",
  movements: [300, -100, 90, 50, -10, -15, -70, 35],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  locale: "en-IN",
};

const account5 = {
  owner: "Debashis Barman",
  movements: [1000, -100, 70, 50, -100, -150, -70, 35],
  interestRate: 1.4,
  pin: 5555,
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-07-26T17:01:17.194Z",
    "2020-07-28T23:36:17.929Z",
    "2020-08-01T10:51:36.790Z",
  ],
  locale: "en-IN",
};

const account6 = {
  owner: "Anya Krishnakumar",
  movements: [400, -100, 100, 50, -70, -15, -70, 35],
  interestRate: 1.3,
  pin: 6666,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  locale: "en-IN",
};

const account7 = {
  owner: "Hasini Priya",
  movements: [200, -100, 300, 50, -110, -15, -70, 35],
  interestRate: 1.7,
  pin: 7777,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  locale: "en-IN",
};

const account8 = {
  owner: "Devajit Barman",
  movements: [3000, -150, 90, -500, -10, -150, -70, 35],
  interestRate: 1.4,
  pin: 8888,
  movementsDates: [
    "2019-10-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  locale: "en-IN",
};

const accounts = [
  account1,
  account2,
  account3,
  account4,
  account5,
  account6,
  account7,
  account8,
];

// Date and time options
const options = {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "numeric",
};

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance_value");
const labelSumIn = document.querySelector(".summary_value-in");
const labelSumOut = document.querySelector(".summary_value-out");
const labelSumInterest = document.querySelector(".summary_value-interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login-btn");
const btnTransfer = document.querySelector(".form_btn-transfer");
const btnLoan = document.querySelector(".form_btn-loan");
const btnClose = document.querySelector(".form_btn-close");
const btnSort = document.querySelector(".btn-sort");
const btnLogOut = document.querySelector(".logout_btn");

const inputLoginUserName = document.querySelector(".login_input-user");
const inputLoginPin = document.querySelector(".login_input-pin");
const inputTransferTo = document.querySelector(".form_input-to");
const inputTransferAmount = document.querySelector(".form_input-amount");
const inputLoanAmount = document.querySelector(".form_input-loan-amount");
const inputCloseUserName = document.querySelector(".form_input-user");
const inputClosePin = document.querySelector(".form_input-pin");

// --- Application ---

// Displaying items
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  movs.forEach((mov, i) => {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const now = new Date(acc.movementsDates[i]);
    // const date = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const minutes = `${now.getMinutes()}`.padStart(2, 0);
    const formattedMov = new Intl.NumberFormat(acc.locale).format(mov);
    const html = `
        <div class="movement_row">
          <div class="movements_type movements_type-${type}">${
      acc.movements.length - i
    } ${type}</div>
    <div class="movements__date">
    ${new Intl.DateTimeFormat(acc.locale, options).format(now)}
    </div>
          <div class="movements_value">&#8377;${formattedMov}</div>
        </div>
        `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcBalance = function (acc) {
  const balance = acc.movements.reduce((accu, current) => accu + current, 0);
  const formattedBalance = new Intl.NumberFormat(acc.locale).format(balance);
  const now = new Date();
  /* 
  labelDate.textContent = `${`${now.getDate()}`.padStart(2, 0)}/${`${
    now.getMonth() + 1
  }`.padStart(
    2,
    0
  )}/${now.getFullYear()}, ${now.getHours()}:${now.getMinutes()}`;
*/
  labelDate.textContent = new Intl.DateTimeFormat(acc.locale, options).format(
    now
  );
  labelBalance.innerHTML = `&#x20B9;${formattedBalance}`;
  acc.balance = balance;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((accu, mov) => accu + mov, 0);
  labelSumIn.innerHTML = `&#8377;${incomes.toFixed(2)}`;
  const expenditure = acc.movements
    .filter((mov) => mov < 0)
    .reduce((accu, mov) => accu + mov, 0);
  labelSumOut.innerHTML = `&#8377;${Math.abs(expenditure.toFixed(2))}`;
  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .reduce((accu, interest) => accu + interest, 0);
  labelSumInterest.innerHTML = `&#8377;${interest.toFixed(2)}`;
};

const displayUI = function (obj) {
  calcBalance(obj);
  // Display movements
  displayMovements(obj);
  // Display summary
  calcDisplaySummary(obj);
};

// Hiding
const hideUi = function () {
  containerApp.style.opacity = 0;
  labelWelcome.textContent = "Login to get started";
  currentAccount = undefined;
};

// Creating users
/*
const createUserNames = function (obj) {
  const currentName = obj.owner.toLowerCase().split(" ");
  let userName = "";
  for (const name of currentName) userName += name[0];
  return userName;
};
*/

const createUserNames = function (arr) {
  arr.forEach(function (obj) {
    obj.userName = obj.owner.toLowerCase().split(" ")[0].slice(0, 3);
  });
};

createUserNames(accounts);

// Logout timer
let logoutTime;
const logOutTimer = function () {
  let time = 60 * 10;
  const tick = () => {
    const min = String(Math.floor(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    labelTimer.textContent = `${min}:${sec}`;
    if (time === 0) {
      clearInterval(logoutTime);
      hideUi();
    }
    time--;
  };
  tick();
  logoutTime = setInterval(tick, 1000);
};

// Login
let currentAccount;

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    (obj) => obj.userName === inputLoginUserName.value
  );
  if (typeof currentAccount === "undefined") {
    console.log("Account doesn't exist!");
    inputLoginUserName.value = inputLoginPin.value = "";
  } else {
    if (currentAccount.pin === Number(inputLoginPin.value)) {
      // Display welcome message
      labelWelcome.textContent = `Welcome back, ${currentAccount.owner}`;
      // Clear input fields and timer
      inputLoginUserName.value = inputLoginPin.value = "";
      if (typeof logoutTime !== "undefined") clearInterval(logoutTime);
      // Display balance and others
      containerApp.style.opacity = 100;
      logOutTimer();
      displayUI(currentAccount);
    } else {
      console.log("Incorrect PIN");
      inputLoginUserName.value = inputLoginPin.value = "";
    }
  }
});

// Transfer
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiver = accounts.find(
    (acc) => acc.userName === inputTransferTo.value
  );
  if (typeof receiver === "undefined") {
    console.log("Account doesn't exist!");
  } else if (receiver.userName === currentAccount.userName) {
    console.log("Invalid transfer!");
  } else {
    if (amount <= 0) console.log("Enter a valid amount");
    else {
      if (amount > currentAccount.balance)
        console.log("Insufficient amount available!");
      else {
        // Clear inputs
        inputTransferAmount.value = "";
        inputTransferTo.value = "";
        setTimeout(() => {
          receiver.movements.push(amount);
          receiver.movementsDates.push(new Date().toISOString());
          currentAccount.movements.push(amount * -1);
          currentAccount.movementsDates.push(new Date().toISOString());
          displayUI(currentAccount);
        }, 3000);
      }
    }
  }
});

// Loan

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Math.floor(Number(inputLoanAmount.value));
  inputLoanAmount.value = "";
  if (amount <= 0) console.log("Enter a valid amount!");
  else {
    if (currentAccount.movements.some((mov) => mov >= amount * 0.1)) {
      setTimeout(() => {
        currentAccount.movementsDates.push(new Date().toISOString());
        currentAccount.movements.push(amount);
        displayUI(currentAccount);
      }, 5000);
    } else console.log("You are not eligible for this loan!");
  }
});

// Account close
btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUserName.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.userName === currentAccount.userName
    );
    console.log(index);
    accounts.splice(index, 1);
    inputCloseUserName.value = inputClosePin.value = "";
    hideUi();
  } else {
    console.log("Invalid credentials!");
    inputCloseUserName.value = inputClosePin.value = "";
  }
});

// Sorting
let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
  btnSort.innerHTML = sorted ? `&darr; SORT` : `&varr; SORT`;
});

// Logging out
btnLogOut.addEventListener("click", (e) => {
  hideUi();
  clearInterval(logoutTime);
});
