const ques = [
    {
        Q: 'The "function" and "var" are known as:',
        options: ['Datatypes', 'keywords', 'Declaration statements', 'Prototypes']
    },
    {
        Q: 'Which is the javascript framework?',
        options: ['HTML', 'React.js', 'SASS', 'CSS']
    },
    {
        Q: 'When interpreter encounters an empty statement, what will it do:',
        options: ['Shows a warning', 'Prompts to complete the statement', 'Throws an error', 'Ignores the statements']
    },
    {
        Q: 'Which is the Front-end language?',
        options: ['redux', 'Python', 'Node.js', 'HTML']
    },
    {
        Q: 'Which one of the following is the correct way for calling the JavaScript code?',
        options: ['Preprocessor', 'Triggering Event', 'RMI', 'Function/Method']
    },
    {
        Q: 'Which of the following type of a variable is volatile?',
        options: ['Mutable variable', 'Dynamic variable', 'Volatile variable', 'Immutable variable']
    },
    {
        Q: 'In JavaScript, which one of the following is not considered as an error:',
        options: ['Syntax error', 'Mistakes of semicolon', 'Division by zero', 'Missing of bracket']
    },
    {
        Q: 'Which of the following number object functions returns the value of the number?',
        options: ['toStringof()', 'valueOf()', 'toLocalString()', 'toPrecision()']
    },
    {
        Q: 'Choose the correct snippet from the following to check if the variable "a" is not equal to "NULL":',
        options: ['if(a!==null)', 'if (a!)', 'if(a!null)', 'if(a!=null)']
    },
    {
        Q: 'You have completed successfully',
        options: []
    }
];

const ans = ['Declaration statements', 'React.js', 'Ignores the statements', 'HTML', 'Function/Method', 'Mutable variable', 'Division by zero', 'valueOf()', 'if(a!==null)'];

const question = document.querySelector('#ques');
const next = document.querySelector('#nxt');
const opt = document.querySelectorAll('.box2');
const tryagn = document.querySelector('.btn');

let m = 0;
next.addEventListener('click', () => {
    m += 1;
    quiz();
    if (m === ques.length - 1) {
        document.querySelector('.ans').style.display = 'none';
        next.style.display = 'none';
        document.querySelector('.hding').style.display = 'none';
    }
});

function quiz() {
    question.innerHTML = ques[m].Q;

    for (let i = 0; i < opt.length; i++) {
        // Make sure there are enough options for the current question
        if (ques[m].options[i]) {
            opt[i].innerHTML = ques[m].options[i];
            opt[i].parentElement.style.backgroundColor = 'gray';
        } else {
            opt[i].innerHTML = '';
            opt[i].parentElement.style.backgroundColor = 'transparent';
        }
        next.style.display = 'none';
    }

    for (item of opt) {
        item.addEventListener('click', (e) => {
            let value = e.target.innerText;

            if (value === ans[m]) {
                e.target.parentElement.style.backgroundColor = 'green';
                next.style.display = 'flex';
            } else {
                document.querySelector('.box').style.display = 'none';
                e.target.parentElement.style.backgroundColor = 'red';
                document.querySelector('.win').style.display = 'block';
                document.querySelector('.btn').style.display = 'flex';
            }
        });
    }
}

tryagn.addEventListener('click', () => {
    location.reload(true);
});

quiz();
