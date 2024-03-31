#! /usr/bin/env node
// This is ATM Machine Project
// First we import iquirer and chalk
// Second we provide our account information and call the await function.
import inquirer from "inquirer";
import chalk from "chalk";
let myBal = 9000; // Rs
let myPin = 1234;
let accName = "SAQIB SAMAR";
let pinAnswer = await inquirer.prompt({
    type: "number",
    name: "pinCode",
    message: chalk.blue.bold("ENTER PIN CODE"),
});
if (pinAnswer.pinCode === myPin) {
    console.log(chalk.bgBlue(`WELCOME ${accName}`));
    let optAnswer = await inquirer.prompt([
        {
            name: "option",
            type: "list",
            message: chalk.blue.bold("PLEASE SELECT OPTION"),
            choices: ["WITHDRAW", "TRANSFER", "BALANCE"],
        },
    ]);
    if (optAnswer.option === "WITHDRAW") {
        console.log(chalk.yellow.bold("OTHER AMOUNT OR FAST CASH"));
        let amtAnswer = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                message: chalk.yellow.bold("PLEASE SELECT ONE AND PRESS ENTER"),
                choices: ["OTHER AMOUNT", "FAST CASH"],
            },
        ]);
        if (amtAnswer.amount === "OTHER AMOUNT") {
            console.log(chalk.green.bold("PLEASE ENTER YOUR AMOUNT"));
            let othAmtAnswer = await inquirer.prompt([
                {
                    name: "otheramount",
                    type: "number",
                    message: chalk.white.bold("ENTER AMOUNT"),
                },
            ]);
            if (othAmtAnswer.otheramount <= myBal) {
                myBal -= othAmtAnswer.otheramount;
                console.log(chalk.green.bold.underline("\t\n THANK YOU FOR THIS TRANSACTION \t\n"), chalk.white.bold.underline(`YOUR REMAINING BALANCE IS Rs.${myBal}`));
            }
            else {
                console.log(chalk.bgRed("YOU HAVE INSUFFICIENT BALANCE"));
            }
        }
        else if (amtAnswer.amount === "FAST CASH") {
            let fastCashAnswer = await inquirer.prompt([
                {
                    name: "fastcashamount",
                    type: "list",
                    message: chalk.green.bold("PLEASE SELECT ONE AND PRESS ENTER"),
                    choices: ["1000", "2000", "5000", "10000"],
                },
            ]);
            if (fastCashAnswer.fastcashamount <= myBal) {
                myBal -= fastCashAnswer.fastcashamount;
                console.log(chalk.green.bold.underline("\t\n THANK YOU FOR THIS TRANSACTION \t\n"), chalk.white.bold.underline(`YOUR REMAINING BALANCE IS Rs.${myBal}`));
            }
            else {
                console.log(chalk.bgRed("YOU HAVE INSUFFICIENT BALANCE"));
            }
        }
        else {
            console.log(chalk.bgRed("YOUR TIME IS OVER"));
        }
    }
    else if (optAnswer.option === "TRANSFER") {
        console.log(chalk.blue.bold("PLEASE SELECT YOUR BANK"));
        let transferAnswer = await inquirer.prompt([
            {
                name: "bankname",
                type: "list",
                message: chalk.yellow.bold("PLEASE ENTER BANK"),
                choices: ["UBL", "MCB", "HBL", "ABL", "BAHL", "BAFL"],
            },
            {
                name: "transferamount",
                type: "number",
                message: chalk.white.bold("PLEASE ENTER AMOUNT"),
            },
        ]);
        if (transferAnswer.transferamount <= myBal) {
            myBal -= transferAnswer.transferamount;
            console.log(chalk.green.bold("\t\n THANK YOU FOR THIS TRANSACTION \t\n"), chalk.white.bold.underline(`YOUR REMANING BALANCE IS Rs.${myBal}`));
        }
        else {
            console.log(chalk.bgRed("YOU HAVE INSUFFICIENT BALANCE"));
        }
    }
    else if (optAnswer.option === "BALANCE") {
        console.log(chalk.yellow.bold.underline(`YOUR BALANCE IS Rs.${myBal}`));
    }
    else {
        console.log(chalk.bgRed("YOUR TIME IS OVER"));
    }
}
else {
    console.log(chalk.bgRed("INVALID PIN CODE"));
}
