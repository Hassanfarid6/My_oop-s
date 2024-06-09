#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
let person = new Person();
let programStart = async (person) => {
    console.log(chalk.bold.red("<<<   WelCome in My Oop's Project    >>>"));
    do {
        const { select } = await inquirer.prompt([{
                type: "list",
                name: "select",
                message: "Select your choice",
                choices: ["Add Student", "Show Student", "Exit"]
            }]);
        if (select === "Add Student") {
            const { name } = await inquirer.prompt([{
                    type: "input",
                    name: "name",
                    message: "Enter your name"
                }]);
            person.addStudent(new Student(name));
        }
        else if (select === "Show Student") {
            console.table(person.students);
        }
        else {
            break;
        }
    } while (true);
};
programStart(person);
