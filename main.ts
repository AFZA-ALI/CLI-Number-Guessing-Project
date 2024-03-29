#! /usr/bin/env node
import inquirer from "inquirer";

console.log("\n\tWelcome to Afza Ali - CLI Number Guessing Game\n");

const randomNumber = Math.floor(Math.random()) * 5 + 1;

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your Guess Number(Number Limit From 1 To 5):",
    },

]);

if (answer.userGuessedNumber === randomNumber){
    console.log("Congratulations ! You guess a correct number.")
}
else{
   console.log("Sorry, You guess a wrong number")
}
