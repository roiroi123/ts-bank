class BankAccount {
    constructor() {
        this.balance = 0;
    }
    myBalance() {
        return this.balance;
    }
    deposit(amount) {
        return this.balance += amount;
    }
    withdraw(amount) {
        if (amount < this.balance) {
            return this.balance -= amount;
        }
        else {
            alert("You Cant Withdraw This Amount");
        }
    }
}
const account = new BankAccount;
const container = document.getElementById("container");
const balanceBtn = document.getElementById("btnBalance");
const depositBtn = document.getElementById("btnDeposit");
const withdrawBtn = document.getElementById("btnWithDraw");
const inputDeposit = document.getElementById("inputDeposit");
const inputWithdraw = document.getElementById("inputWithdraw");
balanceBtn.addEventListener("click", () => {
    container.innerHTML = `<p>Your Current Balance is : ${account.myBalance()}$</p>`;
});
depositBtn.addEventListener("click", (e) => {
    account.deposit(Number(inputDeposit.value));
    container.innerHTML = `<p>Current Balance After Deposit : ${account.myBalance()}$</p>`;
});
withdrawBtn.addEventListener("click", () => {
    account.withdraw(Number(inputWithdraw.value));
    container.innerHTML = `<p>Current Balance After Widthdraw  : ${account.myBalance()}$</p>`;
});
