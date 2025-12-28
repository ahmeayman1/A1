const questions = [

/* ========= MCQ (30) ========= */

{
  type: "mcq",
  q: "Which of the following is considered a Cyanotic heart defect?",
  options: ["ASD", "VSD", "Transposition of the Great Arteries (TGA)", "PDA"],
  a: 2
},
{
  type: "mcq",
  q: "The Jones Criteria is used for the diagnosis of:",
  options: ["Congenital Heart Disease", "Rheumatic Fever", "Heart Failure in infants", "Aortic Stenosis"],
  a: 1
},
{
  type: "mcq",
  q: "In Tetralogy of Fallot, the aorta is described as:",
  options: ["Narrowed", "Overriding", "Absent", "Connected to the RV only"],
  a: 1
},
{
  type: "mcq",
  q: "Which medication keeps the Ductus Arteriosus open in newborns?",
  options: ["Aspirin", "Digoxin", "Prostaglandin E1", "Furosemide"],
  a: 2
},
{
  type: "mcq",
  q: "A common sign of heart failure in infants is:",
  options: ["Bradycardia", "Hepatomegaly", "Chest pain", "High BP in legs"],
  a: 1
},
{
  type: "mcq",
  q: "Which is a MAJOR Jones criterion?",
  options: ["Fever", "Arthralgia", "Chorea", "Prolonged PR interval"],
  a: 2
},
{
  type: "mcq",
  q: "Most common chromosomal abnormality with CHD:",
  options: ["Trisomy 13", "Trisomy 18", "Trisomy 21", "Turner Syndrome"],
  a: 2
},
{
  type: "mcq",
  q: "Coarctation of the aorta is:",
  options: ["Septal hole", "Narrowing of aorta", "Reversed arteries", "Pericardial fluid"],
  a: 1
},
{
  type: "mcq",
  q: "Valve most affected in Rheumatic Heart Disease:",
  options: ["Tricuspid", "Pulmonary", "Mitral", "Aortic only"],
  a: 2
},
{
  type: "mcq",
  q: "Pulse oximetry screening is best done after:",
  options: ["1 hour", "24 hours", "1 week", "1 month"],
  a: 1
},
{
  type: "mcq",
  q: "Why do children with TOF squat?",
  options: ["Rest legs", "Increase SVR & oxygenation", "Decrease LA pressure", "Slow heart rate"],
  a: 1
},
{
  type: "mcq",
  q: "Boot-shaped heart is seen in:",
  options: ["ASD", "Heart failure", "Tetralogy of Fallot", "Rheumatic fever"],
  a: 2
},
{
  type: "mcq",
  q: "Which is an inotropic agent?",
  options: ["Captopril", "Spironolactone", "Digoxin", "Penicillin"],
  a: 2
},
{
  type: "mcq",
  q: "Sydenham’s chorea affects:",
  options: ["Respiratory", "CNS", "Skin", "Digestive"],
  a: 1
},
{
  type: "mcq",
  q: "Risk of left-to-right shunt over time:",
  options: ["Lung collapse", "Pulmonary HTN", "Low lung flow", "Pneumonia"],
  a: 1
},
{
  type: "mcq",
  q: "Erythema marginatum is:",
  options: ["Painful itchy rash", "Painless ring rash", "Purple foot spots", "Jaundice"],
  a: 1
},
{
  type: "mcq",
  q: "Gold standard for heart structure imaging:",
  options: ["X-ray", "ECG", "Echocardiography", "Blood culture"],
  a: 2
},
{
  type: "mcq",
  q: "Why large VSD causes failure to thrive?",
  options: ["Swallowing issue", "High metabolic demand", "Heart compression", "Salt loss"],
  a: 1
},
{
  type: "mcq",
  q: "Primary cause of Rheumatic Fever:",
  options: ["Staph", "Group A Strep", "Influenza", "E. coli"],
  a: 1
},
{
  type: "mcq",
  q: "Positive pulse oximetry difference > ___ %",
  options: ["1%", "2%", "3%", "5%"],
  a: 2
},
{
  type: "mcq",
  q: "Subcutaneous nodules found over:",
  options: ["Abdomen", "Bony prominences", "Face", "Palms"],
  a: 1
},
{
  type: "mcq",
  q: "Eisenmenger syndrome is:",
  options: ["Skin rash", "Reversal of shunt", "Genetic mutation", "Surgery"],
  a: 1
},
{
  type: "mcq",
  q: "Minor Jones criterion:",
  options: ["Carditis", "Polyarthritis", "Elevated ESR/CRP", "Nodules"],
  a: 2
},
{
  type: "mcq",
  q: "What happens in TGA?",
  options: ["One ventricle", "Swapped great arteries", "Missing mitral valve", "Heart on right"],
  a: 1
},
{
  type: "mcq",
  q: "Digitalis toxicity risk increases with:",
  options: ["High calcium", "Low potassium", "High sugar", "Low sodium"],
  a: 1
},
{
  type: "mcq",
  q: "Carditis in RF involves:",
  options: ["Endocardium only", "Myocardium only", "All layers", "Pericardium only"],
  a: 2
},
{
  type: "mcq",
  q: "Afterload reduction is used to:",
  options: ["Increase HR", "Reduce pumping resistance", "Increase volume", "Thicken muscle"],
  a: 1
},
{
  type: "mcq",
  q: "Gallop rhythm indicates:",
  options: ["Normal athlete", "Heart failure", "ASD", "Fever"],
  a: 1
},
{
  type: "mcq",
  q: "Why PDA is needed in TGA?",
  options: ["Dry lungs", "Blood mixing", "Brain pressure", "Prevent arrest"],
  a: 1
},
{
  type: "mcq",
  q: "Percent developing mitral stenosis after RF:",
  options: ["10%", "20%", "40%", "80%"],
  a: 2
},

/* ========= TRUE / FALSE (20) ========= */

{ type: "tf", q: "CHD is always symptomatic at birth.", a: false },
{ type: "tf", q: "Acyanotic defects involve left-to-right shunts.", a: true },
{ type: "tf", q: "TOF includes an ASD.", a: false },
{ type: "tf", q: "Rheumatic Fever is a direct infection.", a: false },
{ type: "tf", q: "Pulse oximetry detects all CHD.", a: false },
{ type: "tf", q: "Hepatomegaly can indicate right HF.", a: true },
{ type: "tf", q: "RF arthritis is migratory.", a: true },
{ type: "tf", q: "Marfan syndrome affects fibrillin-1.", a: true },
{ type: "tf", q: "PGE1 closes PDA.", a: false },
{ type: "tf", q: "Coarctation causes higher BP in arms.", a: true },
{ type: "tf", q: "Prolonged PR is a major criterion.", a: false },
{ type: "tf", q: "Cardiomegaly is always present in infant HF.", a: false },
{ type: "tf", q: "RF can follow skin infections.", a: false },
{ type: "tf", q: "Subcutaneous nodules are painful.", a: false },
{ type: "tf", q: "Tet spells cause sudden cyanosis.", a: true },
{ type: "tf", q: "Maternal rubella is a CHD risk.", a: true },
{ type: "tf", q: "Left-to-right shunts cause early cyanosis.", a: false },
{ type: "tf", q: "Sydenham chorea may appear months later.", a: true },
{ type: "tf", q: "Aspirin treats RF inflammation.", a: true },
{ type: "tf", q: "Pediatric HF presents like adult HF.", a: false }

];
let index = 0;
let answers = Array(questions.length).fill(null);
let reviewMode = false;
/* ========= ELEMENTS ========= */

const qText = document.getElementById("questionText");
const optionsDiv = document.getElementById("options");
const counter = document.getElementById("counter");
const progress = document.getElementById("progressBar");
const nextBtn = document.getElementById("nextBtn");
const resultBox = document.getElementById("result");
const resultScore = document.getElementById("resultScore");
const resultPercent = document.getElementById("resultPercent");
/* ========= OPTIONS ========= */
function shuffleOptions(arr) {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function createOption(text, isCorrect) {
  const b = document.createElement("button");
  b.innerText = text;
  b.onclick = () => select(isCorrect, b);
  optionsDiv.appendChild(b);
}
function select(isCorrect, btn) {
  if (answers[index] !== null) return;

  answers[index] = isCorrect;

  const q = questions[index];

  [...optionsDiv.children].forEach(b => {
    b.disabled = true;

    // لو MCQ
    if (q.type === "mcq") {
      const correctText = q.options[q.a];

      if (b.innerText === correctText) {
        b.style.background = "#27ae60"; // الصح أخضر
      } else if (b === btn) {
        b.style.background = "#e74c3c"; // الغلط أحمر
      }
    }

    // لو True / False
    if (q.type === "tf") {
      if (
        (b.innerText === "True" && q.a === true) ||
        (b.innerText === "False" && q.a === false)
      ) {
        b.style.background = "#27ae60";
      } else if (b === btn) {
        b.style.background = "#e74c3c";
      }
    }
  });

  nextBtn.style.display = "inline-block";
}
/* ========= QUIZ ========= */
  
function startQuiz() {
  index = 0;
  answers = Array(questions.length).fill(null);
  reviewMode = false;

  // ⭐ خلط الأسئلة كل مرة
  questions.sort(() => Math.random() - 0.5);

  document.getElementById("result").classList.remove("show");
  document.getElementById("home").style.display = "none";
  document.getElementById("quiz").style.display = "block";

  loadQuestion();
}
function loadQuestion() {
  optionsDiv.innerHTML = "";
  nextBtn.style.display = "none";

  const q = questions[index];
  qText.innerText = q.q;
  counter.innerText = `Question ${index + 1} / ${questions.length}`;
  progress.style.width = ((index + 1) / questions.length) * 100 + "%";

  if (q.type === "tf") {
    createOption("True", true);
    createOption("False", false);
  } else {
    const options = q.options.map((text, i) => ({
  text,
  correct: i === q.a
}));

shuffleOptions(options).forEach(opt => {
  createOption(opt.text, opt.correct);
});
  }
}

function nextQuestion() {
  if (index < questions.length - 1) {
    index++;
    loadQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  const score = answers.filter(a => a === true).length;
  const percent = Math.round((score / questions.length) * 100);

  // اخفي الكويز
  document.getElementById("quiz").style.display = "none";

  // النصوص
  resultScore.innerText = `Score: ${score} / ${questions.length}`;
  resultPercent.innerText = `Percentage: ${percent}%`;

  let title = "";
  if (percent >= 85) {
    title = "اول دفعععهه يعمممم";
  } else if (percent >= 70) {
    title = "شد شويه يعممم";
  } else {
    title = "انت اخرك تخش كليه البهاييييمممم";
  }

  document.getElementById("resultTitle").innerText = title;

  // أظهر النتيجة بالأنيميشن
  resultBox.classList.add("show");
}
function restartQuiz() {
  document.getElementById("result").classList.remove("show");
  startQuiz();
}
function toggleQuestions() {
  const list = document.getElementById("questionsList");
  list.classList.toggle("show");
  renderQuestionsList();
  if (i === index) {
  b.style.outline = "3px solid #3498db";
}
}

function renderQuestionsList() {
  const list = document.getElementById("questionsList");
  list.innerHTML = "";

  questions.forEach((q, i) => {
    const b = document.createElement("button");
    b.innerText = i + 1;

    if (answers[i] === null) {
      b.className = "q-unanswered";
    } else if (answers[i] === true) {
      b.className = "q-correct";
    } else {
      b.className = "q-wrong";
    }

    // ⭐ السؤال الحالي
    if (i === index) {
      b.style.outline = "3px solid #3498db";
    }

    b.onclick = () => {
      index = i;
      loadQuestion();
      renderQuestionsList();

      document.querySelector(".card").scrollIntoView({
        behavior: "smooth"
      });
    };

    list.appendChild(b);
  });
}
/* ========= MENU ========= */

const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

function toggleMenu() {
  sideMenu.classList.toggle("show");
  overlay.classList.toggle("show");
}

function closeMenu() {
  sideMenu.classList.remove("show");
  overlay.classList.remove("show");
}

/* ========= DARK MODE ========= */

function toggleDark() {
  document.body.classList.toggle("dark");
}
