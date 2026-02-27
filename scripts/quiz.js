// all scripts separated by page for clarity/ease
// asked ChatGPT to remember syntax how to write answers q2 and q6 (Array)

const answers = {
    q1: "2", // remember quotations around answers to target label value
    q2: ["volcanic", "rocky", "icy"],
    q3: "lenticular",
    q4: "dwarf",
    q5: "true",
    q6: ["physical", "angle", "activity"]
};

document.getElementById("quiz").addEventListener("submit", validateQuiz);

function validateQuiz(e) { // e = event object
    e.preventDefault();
    let score = 0; //default, will increment after each q validated
    for (let key in answers) { // key is q1, then q2, etc. (loop)
        const correct = answers[key];
        const selected = Array.from(document.querySelectorAll(`input[name="${key}"]:checked`)) // NodeList - collection of DOM elements -> Array.from converts to use array
        .map(i => i.value); // asked ChatGPT how to create this constant that targets what was selected (never done before) - .map extracts the values
    
        if (Array.isArray(correct)) { // checks whether answer is a checkbox(array) or radio
            if ( //validates checkboxes
                correct.every(val => selected.includes(val)) && selected.length === correct.length
            )
            { score++; }
        }
        else { //validates radios
            if (selected[0] === correct) {
                score++;
            }
        }
    }
    alert(`Score: ${score}/6 correct!`) //alert box!
}