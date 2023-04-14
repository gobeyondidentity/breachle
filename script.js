const breaches = [
    {
        name: "Equifax",
        clues: [
            "September 2017, United States, $4 billion",
            "Credit reporting agency",
            "Affected approximately 147 million people",
            "Exposed Social Security numbers, birth dates, addresses, and more",
            "Company settled with the Federal Trade Commission for up to $700 million"
        ]
    },
    {
        name: "Yahoo",
        clues: [
            "December 2013, United States, $350 million",
            "Internet services company",
            "Affected 3 billion user accounts",
            "Exposed names, email addresses, phone numbers, and more",
            "Largest known data breach in history"
        ]
    },
    {
        name: "Marriott",
        clues: [
            "November 2018, United States, $124 million",
            "Hotel chain",
            "Affected around 500 million guests",
            "Exposed names, addresses, passport numbers, and more",
            "Starwood Hotels and Resorts database was compromised"
        ]
    },
    {
        name: "First American Financial",
        clues: [
            "May 2019, United States, $487 million",
            "Real estate services company",
            "Exposed around 885 million records",
            "Exposed bank account numbers, Social Security numbers, and more",
            "Data leak due to a website design flaw"
        ]
    },
    {
        name: "Adult FriendFinder",
        clues: [
            "October 2016, United States, Unknown economic impact",
            "Online dating and adult entertainment platform",
            "Affected around 412 million user accounts",
            "Exposed usernames, passwords, and more",
            "Largest known data breach of a dating platform"
        ]
    },
    {
        name: "Anthem",
        clues: [
            "February 2015, United States, $260 million",
            "Health insurance company",
            "Affected around 78.8 million individuals",
            "Exposed Social Security numbers, dates of birth, addresses, and more",
            "Largest known healthcare data breach"
        ]
    },
    {
        name: "Target",
        clues: [
            "December 2013, United States, $252 million",
            "Retail corporation",
            "Affected around 110 million individuals",
            "Exposed credit and debit card information, customer names, and more",
            "Point-of-sale malware attack"
        ]
    },
    {
        name: "Sony Pictures",
        clues: [
            "November 2014, United States, $100 million",
            "Film production company",
            "Exposed unreleased movies, confidential information, and more",
            "Attributed to North Korea, possibly in retaliation for the film 'The Interview'",
            "Resulted in executive resignations and significant damage to the company's reputation"
        ]
    },
    {
        name: "Home Depot",
        clues: [
            "September 2014, United States, $194.5 million",
            "Home improvement retail chain",
            "Affected around 56 million credit and debit cards",
            "Exposed card numbers, names, and more",
            "Point-of-sale malware attack"
        ]
    },
    {
        name: "Ashley Madison",
        clues: [
            "July 2015, Canada, $11.2 million",
            "Online dating service for extramarital affairs",
            "Affected around 32 million user accounts",
            "Exposed names, addresses, credit card information, and more",
            "Hacking group 'The Impact Team' claimed responsibility"
        ]
    },
    {
        name: "Heartland Payment Systems",
        clues: [
            "January 2009, United States, $140 million",
            "Payment processing company",
            "Affected around 130 million credit and debit cards",
            "Exposed card numbers, names, and more",
            "At the time, the largest known data breach involving credit card data"
        ]
    },

];

const input = document.getElementById("userGuess");
input.addEventListener("input", autocomplete);

let currentBreach;
let clueIndex = 0;

function startGame() {
    currentBreach = getRandomBreach();
    displayClue();
}

function getRandomBreach() {
    return breaches[Math.floor(Math.random() * breaches.length)];
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


function restartGame() {
    location.reload();
}

document.getElementById("userGuess").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});

startGame();

