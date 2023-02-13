const listQuestion = document.querySelector("#listQuestions")

const questions = [
    {
        id: 1,
        question: "Why is it free?",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo ratione saepe nisi ipsum vel necessitatibus earum pariatur consequatur maxime dolores!"
    },
    {
        id: 2,
        question: "Do I need this if I’ve had my yearly medical check? What is the difference?",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: 3,
        question: "Can I bring another person to the appointment?",
        answer: "Suspendisse non felis fringilla orci ornare sollicitudin consectetur sed turpis. Ut vitae tellus ac arcu pharetra vestibulum vitae pulvinar libero. Vestibulum condimentum mi id quam hendrerit, et maximus urna tincidunt."
    },
    {
        id: 4,
        question: "How long does it take?",
        answer: "In felis erat, tristique vitae magna vel, dictum porttitor lorem. Pellentesque congue quis turpis malesuada lobortis. Sed at metus aliquet,"
    },
    {
        id: 5,
        question: "What if I have to cancel or if I’m not sure I’ll be able to make it?",
        answer: "Aliquam tempor lorem eget aliquet egestas. Nulla volutpat, diam vel maximus consectetur, felis metus sodales lacus, a imperdiet est nisi sit amet felis. Nunc viverra aliquam condimentum."
    },
    {
        id: 6,
        question: "Do I need to bring anything with me?",
        answer: "Quisque elementum, libero eget suscipit vulputate, leo lorem tempus elit, non aliquet dolor eros at urna. Nam gravida lacinia nibh, nec vulputate diam faucibus ut."
    },
    {
        id: 7,
        question: "Do the weight loss programs you offer work?",
        answer: "Pellentesque venenatis nisl ante, non consectetur dui egestas vel. In pellentesque, tellus a laoreet tristique, nisl ante pulvinar mauris, id congue neque risus ac erat."
    },
    {
        id: 8,
        question: "What's the catch?",
        answer: "Morbi eu tellus at purus egestas varius. Vivamus quis tellus malesuada, sagittis massa sed, accumsan libero. Donec sagittis porta est sit amet semper."
    },
    {
        id: 9,
        question: "Will I have to exhaust myself in the gym to make it work?",
        answer: "Maecenas egestas molestie nunc, vitae iaculis ligula luctus vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent dignissim metus ornare lectus molestie tristique. Phasellus eleifend fringilla erat."
    },
    {
        id: 10,
        question: "Where are you located?",
        answer: "Aenean sed gravida sapien. Vivamus arcu risus, efficitur a finibus quis, gravida quis arcu. Pellentesque eu nulla feugiat, malesuada erat faucibus, dignissim libero. Vivamus vitae odio enim."
    }
]

const printingQuestion = () => {
    questions.forEach(question => {
        listQuestion.innerHTML += `
        <div class="question-wrapper">
          <div class="question">
            <p>${question.question}</p>
            <img src="./img/icons/chevron-down.svg" alt="" onclick="toggleDropDown(${question.id})"/>
          </div>
          <p class="answer show-answer">${question.answer}</p>
        </div>
        `
    })
}

printingQuestion();


//*** dropdown questions ***//

const element = document.querySelector(".answer")

let toggleDropDown = () => {
    element.classList.toggle("show-answer");
}

