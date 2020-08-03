class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
        this.accountBalance = 0;
    }
    makeDeposit(amount){
        this.accountBalance += amount;
    }
    makeWithdrawal(amount){
        this.accountBalance -= amount;
    }
    displayBalance(){
        console.log('User:', this.name, '- Balance:', this.accountBalance);
    }
    makeTransfer(amount, name){
        this.accountBalance -= amount;
        name.accountBalance += amount;
    }
}

const reagan = new User('Reagan Crosby', 'johnreagancrosby@gmail.com');
const elon = new User('Elon Musk', 'elonmusk@gmail.com');
const jeff = new User('Jeff Bezos', 'jeffbezos@gmail.com');

// console.log(reagan.name);
// console.log(elon.name);
// console.log(jeff.name);

reagan.makeDeposit(100);
reagan.makeDeposit(100);
reagan.makeDeposit(100);
reagan.makeWithdrawal(200);

elon.makeDeposit(1000);
elon.makeDeposit(2000);
elon.makeWithdrawal(500);
elon.makeWithdrawal(200);

jeff.makeDeposit(10000);
jeff.makeWithdrawal(500);
jeff.makeWithdrawal(500);
jeff.makeWithdrawal(500);

reagan.displayBalance();
elon.displayBalance();
jeff.displayBalance();

console.log('After money transfer from Reagan to Jeff...')

reagan.makeTransfer(1, jeff);

reagan.displayBalance();
jeff.displayBalance();