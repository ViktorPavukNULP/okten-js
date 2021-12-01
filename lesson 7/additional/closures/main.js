const userCard = (n) => {
    let card = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: n
    }
    const getDate = () => {
        let today = new Date();
        let date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear() + ', ' +
            today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return date;
    }
    const historyLog = (type, credits) => {
        card.historyLogs.push({
            operationType: type,
            credits: credits,
            operationTime: getDate()
        });
    }
    let Card = {
        getCardOptions: () => card,
        putCredits: (credits) => {
            card.balance += credits;
            historyLog('Received credits', credits);
        },
        takeCredits: (credits) => {
            if (credits <= card.balance) {
                if (credits <= card.transactionLimit) {
                    card.balance -= credits;
                    historyLog('Withdrawal of credits', credits);
                } else {
                    console.error('Перевищено ліміт');
                }
            } else {
                console.error('Недостатньо коштів');
            }
        },
        setTransactionLimit: (credits) => {
            card.transactionLimit = credits;
            historyLog('Transaction limit change', credits);
        },
        transferCredits: (credits, receiver) => {
            let creditsWithFee = credits * 1.005;
            if (creditsWithFee <= card.balance) {
                if (creditsWithFee <= card.transactionLimit) {
                    Card.takeCredits(credits);
                    receiver.putCredits(credits);

                } else {
                    console.error('Перевищено ліміт');
                }
            } else {
                console.error('Недостатньо коштів');
            }
        }
    }
    return Card;
}

// const card3 = userCard(2);
// const card1 = userCard(1);
// card3.putCredits(150);
// card3.setTransactionLimit(500);
// card3.takeCredits(10);
// card3.transferCredits(200, card1);
// console.log(card3.getCardOptions());
// console.log(card1.getCardOptions());

// 2) UserAccount

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }
    addCard(){
        if (this.cards.length<3){
            this.cards.push(userCard(this.cards.length+1));
        }else {
            console.error('Перевищено ліміт карт');
        }
    }
    getCardByKey(key){
        if (key>0 & key<this.cards.length+1){
            return this.cards[key-1];
        }
        console.error('Невірний номер карти');
    }
}

bob = new UserAccount('Bob');
bob.addCard();
bob.addCard();

let card1 = bob.getCardByKey(1);
let card2 = bob.getCardByKey(2);

card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300,card2);

card2.takeCredits(50);

console.log(card1.getCardOptions());
console.log(card2.getCardOptions());

