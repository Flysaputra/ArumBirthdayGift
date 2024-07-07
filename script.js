let currentQuestion = 0;
const questions = [
    { question: "What is the square root of 144?", answer: "12" },
    { question: "What element does 'O' represent on the periodic table?", answer: "oxygen" },
    { question: "What is the capital city of Japan?", answer: "tokyo" },
    { question: "Who wrote 'To Kill a Mockingbird'?", answer: "harper lee" },
    { question: "What is the largest planet in our solar system?", answer: "jupiter" },
    { question: "What year did World War II end?", answer: "1945" },
    { question: "Who painted the Mona Lisa?", answer: "leonardo da vinci" },
    { question: "What is the chemical formula for water?", answer: "h2o" },
    { question: "What is the powerhouse of the cell?", answer: "mitochondria" },
    { question: "What is the longest river in the world?", answer: "nile" }
];

const incorrectMessages = [
    "C'mon, you really don't know this?",
    "Ayo Arum, masa gatau?",
    "Hayolo salah, jangan searching ya!"
];

const birthdayWish = `
    Happy birthday yaaa semoga di umur yang sekarang kamu bisa terus lebih sukses lebih pinter dan lebih tinggi lagi HAHA,
    bisa terus banggain bunda sama ayah kamuu juga. Ga lupa juga buat sukses skripsinya dan cepet lulus biar wisuda bareng WKWKW.
    I know you are so strong and capable of mostly everything except MAIN KARTU, so i doubt you will ask for my help in the future
    but seriously please include me in your problem or anything even small thing like 'should i eat with spoon or a fork, or maybe i shouldnt eat'.
    Lastly i wanna say thank you for live your life till this day may Allah protect your smile and your heart.
    I am a person who loves to see you well and go far in life. I wish you could recognize that life is not centered around having only one thing.
    Life is about so much more. Your worth extends far beyond. You deserve love and fulfillment in various aspects of life.
    Live in a broader way. Life is too rich to be limited to just seeking one thing. It's about pursuing your dream job, striving to become the person you aspire to be,
    reaching your full potential, delving deeper into your interests, reading more books! and watching more series!
    Trying new things, engaging in meaningful conversations with diverse individuals, and getting to know yourself.
    Life offers countless opportunities and I hope you realize your worth and embrace all that life has to offer.
`;

function getRandomIncorrectMessage() {
    const randomIndex = Math.floor(Math.random() * incorrectMessages.length);
    return incorrectMessages[randomIndex];
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    if (userAnswer === questions[currentQuestion].answer) {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            document.getElementById("question").innerText = questions[currentQuestion].question;
            document.getElementById("answer").value = "";
            document.getElementById("result").innerText = "";
        } else {
            document.getElementById("game").style.display = "none";
            document.getElementById("result").innerText = "Congratulations! You've answered all questions correctly.\n\n" + birthdayWish;
        }
    } else {
        document.getElementById("result").innerText = getRandomIncorrectMessage();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("question").innerText = questions[currentQuestion].question;
});
