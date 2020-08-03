class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
        this.checking = new BankAccount(this.name, 0, 0, 'Checking');
        this.savings = new BankAccount(this.name, 0.02, 0, 'Savings');
    }
    checkingDeposit(amount){
        this.checking.deposit(amount);
        return this;
    }
    savingsDeposit(amount){
        this.savings.deposit(amount);
        return this;
    }
    checkingWithdrawal(amount){
        this.checking.withdraw(amount);
        return this;
    }
    savingsWithdrawal(amount){
        this.savings.withdraw(amount);
        return this;
    }
    checkingBalance(){
        this.checking.displayBalance();
        return this;
    }
    savingsBalance(){
        this.savings.displayBalance();
        return this;
    }
    displayAccountInfo(){
        console.log('User:', this.name, '-', 'Checking balance:', this.checking.balance, '-', 'Savings balance:', this.savings.balance, '-', 'Savings Interest Rate:', this.savings.intRate)
        return this;
    }
    accountTransfer(amount, account1, account2){
        account1.balance -= amount;
        account2.balance += amount;
        return this;
    }
    // userTransfer(amount, account, user){
    //     this.account.balance -= amount;
    //     user.account.balance += amount;
    // }
}

class BankAccount {
    constructor(name, intRate, balance, account) {
        this.name = name;
        this.intRate = intRate;
        this.balance = balance;
        this.account = account;
    }
    deposit(amount) {
        this.balance += amount;
        return this;
    }
    withdraw(amount) {
        this.balance -= amount;
        return this;
    }
    displayInfo() {
        console.log('User:', this.name, '- Interest Rate:', this.intRate, '- Balance:',this.balance);
        return this;
    }
    displayBalance(){
        console.log('User:', this.name, '-', this.account,`Balance:`, this.balance);
    }
    yieldInterest() {
        this.balance += (this.balance * this.intRate);
        return this;
    }
}

const reagan = new User('Reagan Crosby', 'johnreagancrosby@gmail.com');
const elon = new User('Elon Musk', 'elon@gmail.com')

reagan.checkingDeposit(100).displayAccountInfo();
console.log('After account transfer...');
reagan.accountTransfer(100, checking, savings).displayAccountInfo();