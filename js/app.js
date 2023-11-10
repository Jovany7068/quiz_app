// create a dummy data representing the questions, options and answer
// creat a html syntax to display the data
// select the quizet
// map through the data to display each on th webpage
// add an event listener to each data option, so that user can select an optiton
// display the selected option
// display the selected answer
// display if selection is correct or wrong 
// sum up the total after the entire selection

let quizData = [
    {
        
        question: "How much blood is inside the human body?",
        options: ["5.6_litres", "6.9_litres", "4.0_litres"],
        answer: "5.6_litres",
    },
     {
        
        question:"The human brain is divided into how many parts?",
        options: ["6_parts","10_parts", "3_parts"],
        answer: "3_parts",
    },
    {
        
        question: "what is the largest organ of the human body?",
        options: ["the_teeth","the_skin","the_lungs"],
        answer: "the_skin"
    },
    {
        
        question:"The skin consists of how many layers?",
        options: ["15_layers","5_layers","3_layers" ],
        answer: "3_layers"
    },
    {
        
        question:"How many organs are in the human body?",
        options: ["73_organs", "58_organs", "78_organs"],
        answer: "78_organs"
    },
    {
       
        question:"which is the smallest bone in the human body?",
        options:["stapes","femur","clavicle"],
        answer: "stapes"
    },
    {
        
        question:"How many bones does a baby have?",
        options: ["206_bones", "500_bones", "300_bones"],
        answer: "300_bones"
    },
    {
        
        question:"what is the birth scar that signifies the cutting of the unblical cord?",
        options:["lips","fingers","navel"],
        answer: "navel"
    },
];
let quizPop = document.querySelector(".quizet");

console.log(quizData);
function quizApp() {
    let point = 50;
    let Beautiful = 50;
    let wrong = 0;
    let result = 0;
let quizArray = quizData.map((app, index) => {
    return ` 
    <div class="c0l d-flex my-3 gap-2" style="justify-content: center";>
    <div class="card mx-2"style="width:30%" height="50px; border: 0;" >
    <div class="right mt-5 bg-light text-primary col-9 py-4 mx-5 my-5 text-center" >
    <p> ${index + 1}</p>
    <p class="question text-primary  ">${app.question}</p>
    <select name="" id="" style="width:70%; ;">
        <option value=""select-disabled class="text-primary" > select an answer</option>
        {
            ${app.options.map((option) =>{
                return`<option value=${option}> ${option}</option>`
            })}
        }
    </select>
    </div>
    </div>
    <div class="card "style="width:30%; height:7%;">
    <div class="left mt-5 text-primary bg-light col-10 py-4 mx-4 my-5" >
    <p class="selectedAnswer">selected answer: </p>
    <p class="correctAnswer">correct answer:</p>
    <p class="status">status: </p>
</div>
</div>
    </div>`;
    
    
} ); 
    quizPop.innerHTML = quizArray.join('  ');

    let select = document.querySelectorAll('select')
    select.forEach((sel, index)=>{
     sel.addEventListener('change', (event) => {
      let selValue = event.target.value;
      document.querySelectorAll('.selectedAnswer')[index].innerHTML = `selected answer: ${selValue}`;
     let correct = document.querySelectorAll('.correctAnswer') [index];
        correct.innerHTML = `correct answer: ${quizData [index].answer}`;

        if (quizData[index].answer === selValue) {
            document.querySelectorAll(".status")[index].innerHTML = `status: Beautiful`;
            result += Beautiful;
            document.querySelectorAll('.result')[index].innerHTML = `${result}/400`;
             
        } 
        else {
            document.querySelectorAll(".status")[index].innerHTML = `status: wrong`;
            result += wrong;
            document.querySelectorAll('.result')[index].innerHTML = `${result}/400`;
        }
     });
    });
}
quizApp();

function selMe(event){
    event.target.value
}


