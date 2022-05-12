// Error Handling Exercise 

class invalidNumberError extends Error {
    name = "InvalidNumberError";
}

function getUserInput() {
    let input = parseInt(prompt("Provide an even number:")); 

    try {
        if (isNaN(input) || input % 2) {
            throw new invalidNumberError("You didn't provide an even number.");
        } else {
            alert("You passed the test.");
        }
    } catch (error) {
        if (error.name == "InvalidNumberError") {

        } else {
            alert("Internal Error. Come back and try again later.");
        }
    }
}