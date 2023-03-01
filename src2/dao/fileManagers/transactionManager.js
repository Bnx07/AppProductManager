import fs from 'fs';

export default class transactionManager {
    constructor() {
        console.log("transactionManager initialized");
        this.path = "./";
        if (!fs.existsSync(`${this.path}/transactions.json`)) {
            fs.writeFileSync(`${this.path}/transactions.json`, "[]");
        }
    }

    getAll = async() => {
        let transactions = await JSON.parse(fs.readFileSync(`${this.path}/transactions.json`));
        return transactions;
    }

    createOne = async() => {
        let transactions = await JSON.parse(fs.readFileSync(`${this.path}/transactions.json`));
        let lastTransaction = transactions.pop()
        console.log(lastTransaction.id)
        let transaction = {

        }
    }
}