
var account = {
    owner: "한동석",
    code: "1234",
    balance: 15000,
    deposit: function(money){this.balance += money;},
    withdraw: function(money){this.balance -= money;},
    showBalance: function(){return this.balance;}
};

account.number = "110-111-111111"; //이렇게 객체에 추가해줄수 있다. 그러므로 프로펄티가 총 7개가 된다.

with(console){ //with문 사용으로 console을 안써도된다.
    log(account);
    log(account.owner);
    log(account["owner"]);
    log(account.balance);
}

account.deposit(50000);
console.log(account.showBalance());