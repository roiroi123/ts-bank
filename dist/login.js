class BankLoginAccount {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    getUsername() {
        return this.username;
    }
    getPassword() {
        return this.password;
    }
}
const NewBankAccount = new BankLoginAccount("royshalom", "royroy#123");
function validate() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    if (username.value == NewBankAccount.getUsername() && password.value == NewBankAccount.getPassword()) {
        alert("Login successfully");
        this.window.location = "../index.html";
        return false;
    }
    else {
        alert("Wrong UserName Or Password");
        return false;
    }
}
