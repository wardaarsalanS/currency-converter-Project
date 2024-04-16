#!/usr/bin/env node
import inquirer from 'inquirer';
let currency = {
    USD: 1, // base currency
    EUR: 0.91,
    GBP: 0.76,
    IND: 74.57,
    PKR: 280
};
async function convertCurrency() {
    let user_answer = await inquirer.prompt([
        {
            name: "from",
            message: "Enter from Currency",
            type: "list",
            choices: ["USD", "EUR", "GBP", "IND", "PKR"]
        },
        {
            name: "to",
            message: "Enter to Currency",
            type: "list",
            choices: ["USD", "EUR", "GBP", "IND", "PKR"]
        },
        {
            name: "amount",
            message: "Enter your amount",
            type: "input"
        }
    ]);
    let userFromCurrency = user_answer.from; // using the type assertion as keyof CurrencyRates
    let userToCurrency = user_answer.to; //  This assertion tells TypeScript that you are confident that the values will be valid keys of the CurrencyRates object
    let fromRate = currency[userFromCurrency]; // exchange rate from
    let toRate = currency[userToCurrency]; // exchange rate to
    let amount = parseFloat(user_answer.amount); // Parse the amount to a number
    let baseAmount = amount / fromRate; // Convert to base currency (USD)
    let convertedAmount = baseAmount * toRate; // Convert to target currency
    console.log(`Converted amount: ${convertedAmount}`);
}
convertCurrency();
