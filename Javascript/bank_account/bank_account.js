class BankAccount {
    constructor(name, intRate, balance) {
        this.name = name;
        this.intRate = intRate;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        return this;
    }
    withdraw(amount) {
        this.balance -= amount;
        return this;
    }
    displayAccountInfo() {
        console.log('User:', this.name, 'Interest rate:', this.intRate, 'Balance:', this.balance);
        return this;
    }
    yieldInterest() {
        this.balance += (this.balance * this.intRate);
        return this;
    }
}

// const reagan = new BankAccount('Reagan Crosby', '0.05', 100);
// const elon = new BankAccount('Elon Musk', '0.04', 5000);

// reagan.deposit(100).deposit(200).deposit(300).withdraw(150).yieldInterest().displayAccountInfo();
// elon.deposit(5000).deposit(10000).withdraw(1750).withdraw(1750).withdraw(1750).withdraw(1750).yieldInterest().displayAccountInfo();

