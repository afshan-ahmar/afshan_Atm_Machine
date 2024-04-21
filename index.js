#! /usr/bin/env node
import inquirer from "inquirer";
//import { clearScreenDown } from "readline";
//initalize user balance
let myBalance = 10000; //dollars
let myPin = 1234;
//print welcome message
console.log("WELCOME TO CODE WITH AFSHAN-ATM MACHINE");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "enter your pin",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!,login successfully!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        //console.log(amountAns.Amount)
        if (amountAns.amount > myBalance) {
            console.log("insufficient balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} withdraw successfully`);
            console.log(`your remaining balance is: " ${myBalance}`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your balance is : ${myBalance}`);
    }
}
else {
    console.log("incorrect pin number, try again");
}
