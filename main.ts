#!/usr/bin/env node

import inquirer from "inquirer";

// Currency conversion rates
let conversion: any = {
    "PKR": { // In PKR
        "USD": 0.0036,
        "GBP": 0.0037,
        "PKR": 1
    },
    "GBP": { // In GBP
        "USD": 1.21,
        "PKR": 350,
        "GBP": 1
    },
    "USD": { // In Dollar
        "PKR": 277.58,
        "GBP": 0.83,
        "USD": 1
    },
};

// Using inquirer
async function convertCurrency() {
    const answer: any = await inquirer.prompt([
        {
            type: "list",
            name: "from",
            choices: ["PKR", "USD", "GBP"],
            message: "Select your currency"
        },
        {
            type: "list",
            name: "to",
            choices: ["PKR", "USD", "GBP"],
            message: "Select your conversion currency"
        },
        {
            type: "input", 
            name: "amount",
            message: "Enter your conversion amount"
        }
    ]);

    // Output
    let { from, to, amount } = answer;

    // Check input in given programs
    if (from && to && amount) {
        let result = conversion[from][to] * parseFloat(amount); 
        console.log(`Your conversion from ${from} to ${to} is ${result}`);
    } else {
        console.log("Invalid input");
    }
}

convertCurrency();