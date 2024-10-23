import readline from "readline/promises";
// define readline interface
const { stdin: input, stdout: output } = process


export async function createUserInput(displayArray) {

    Object.entries(displayArray).forEach(([key, value]) => {
        console.log(value)
    })
    const rl = readline.createInterface(
        {
            input,
            output,
        }
    );
    const answer = await rl.question("what do you want to buy? <sep with a comma> Yam, Beans ...: \n");
    // let choices = answer.split("");

    rl.close()
    return answer;
};
