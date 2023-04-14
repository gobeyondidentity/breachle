const input = document.getElementById("userGuess");
input.addEventListener("input", autocomplete);

let currentBreach;
let breachIndex = 0;
let clueIndex = 0;

function startGame() {
    // Shuffle the breaches array
    for (let i = breaches.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [breaches[i], breaches[j]] = [breaches[j], breaches[i]];
    }

    currentBreach = breaches[breachIndex];
    displayClue();
}

function displayClue() {
    const clueList = document.getElementById("clueList");
    if (clueIndex < currentBreach.clues.length) {
        const listItem = document.createElement("li");
        listItem.textContent = `Clue ${clueIndex + 1}: ${currentBreach.clues[clueIndex]}`;
        clueList.insertBefore(listItem, clueList.firstChild); // Add item to beginning of list
        clueIndex++;
    } else {
        const listItem = document.createElement("li");
        listItem.textContent = `No more clues. You lost! The correct answer is ${currentBreach.name}.`;
        clueList.insertBefore(listItem, clueList.firstChild); // Add item to beginning of list
        showRestartButton();
    }
}


function checkGuess() {
    const userGuess = document.getElementById("userGuess").value.trim().toLowerCase();
    const companyList = document.getElementById("companyList");
    companyList.innerHTML = ""; // Clear the datalist
    if (userGuess === currentBreach.name.toLowerCase()) {
        showRestartButton();
        document.getElementById("userGuess").classList.add("correct-guess"); // Add CSS class
        setTimeout(() => {
            document.getElementById("userGuess").classList.remove("correct-guess"); // Remove CSS class after 200ms
        }, 200);
        const clueList = document.getElementById("clueList");
        const listItem = document.createElement("li");
        listItem.textContent = `You won! The correct answer is "${currentBreach.name}".`;
        listItem.classList.add("win-message");
        clueList.insertBefore(listItem, clueList.firstChild);
    } else {
        if (clueIndex === currentBreach.clues.length) {
            displayClue();
            showRestartButton();
            document.getElementById("userGuess").value = ""; // Clear input contents
        } else if (clueIndex < currentBreach.clues.length) {
            displayClue();
            document.getElementById("userGuess").classList.add("wrong-guess"); // Add CSS class
            setTimeout(() => {
                document.getElementById("userGuess").classList.remove("wrong-guess"); // Remove CSS class after 200ms
            }, 200);
        }
    }
    document.getElementById("userGuess").value = ""; // Clear input contents
}


function autocomplete() {
    const input = document.getElementById("userGuess");
    const inputValue = input.value.trim();
    if (inputValue.length < 3) {
        return; // Don't show autocomplete options if there are less than 3 letters
    }
    const filter = inputValue.toLowerCase().substring(0, 3); // Only match first 3 letters
    const matches = breaches.filter((breach) =>
        breach.name.toLowerCase().includes(filter)
    );
    const datalist = document.getElementById("companyList");
    datalist.innerHTML = "";
    matches.forEach((breach) => {
        const option = document.createElement("option");
        option.value = breach.name;
        datalist.appendChild(option);
    });
}



function showRestartButton() {
    document.getElementById("restartButton").style.display = "block";
    document.querySelector("button[onclick='checkGuess()']").disabled = true; // Add this line
}
function hideRestartButton() {
    document.getElementById("restartButton").style.display = "none";
    document.querySelector("button[onclick='checkGuess()']").disabled = false; // Add this line
}


function restartGame() {
    hideRestartButton();
    currentBreach = breaches[breachIndex];
    breachIndex++;
    const companyList = document.getElementById("companyList");
    companyList.innerHTML = ""; // Clear the datalist
    const clueList = document.getElementById("clueList");
    clueList.innerHTML = ""; // Clear the clueList
    clueIndex = 0
    displayClue();
}

document.getElementById("userGuess").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});

startGame();

