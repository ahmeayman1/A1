const questions = [

/* ===== MCQ (30 سؤال) ===== */
{type:"mcq",q:"Which of the following is considered a \"Cyanotic\" heart defect?",options:[
"Atrial Septal Defect (ASD)",
"Ventricular Septal Defect (VSD)",
"Transposition of the Great Arteries (TGA)",
"Patent Ductus Arteriosus (PDA)"
],a:2},

{type:"mcq",q:"The \"Jones Criteria\" is used for the diagnosis of:",options:[
"Congenital Heart Disease",
"Rheumatic Fever",
"Heart Failure in infants",
"Aortic Stenosis"
],a:1},

{type:"mcq",q:"In Tetralogy of Fallot, the aorta is described as:",options:[
"Narrowed",
"Overriding",
"Absent",
"Connected to the Right Ventricle only"
],a:1},

{type:"mcq",q:"Which medication is used to keep the Ductus Arteriosus open in newborns?",options:[
"Aspirin",
"Digoxin",
"Prostaglandin E1",
"Furosemide"
],a:2},

{type:"mcq",q:"A common clinical sign of heart failure in infants is:",options:[
"Bradycardia",
"Hepatomegaly",
"Chest pain",
"High blood pressure in legs"
],a:1},

{type:"mcq",q:"Which of these is a MAJOR Jones criterion?",options:[
"Fever",
"Arthralgia",
"Chorea",
"Prolonged PR interval"
],a:2},

{type:"mcq",q:"The most common chromosomal abnormality associated with CHD is:",options:[
"Trisomy 13",
"Trisomy 18",
"Trisomy 21 (Down syndrome)",
"Turner syndrome"
],a:2},

{type:"mcq",q:"Coarctation of the aorta is characterized by:",options:[
"Hole in septum",
"Narrowing of the aorta",
"Reversed arteries",
"Fluid around heart"
],a:1},

{type:"mcq",q:"Which valve is most commonly affected in Rheumatic Heart Disease?",options:[
"Tricuspid",
"Pulmonary",
"Mitral",
"Aortic only"
],a:2},

{type:"mcq",q:"Pulse oximetry screening for CHD is best done after:",options:[
"1 hour",
"24 hours",
"1 week",
"1 month"
],a:1},

{type:"mcq",q:"Why do children with Tetralogy of Fallot squat?",options:[
"Rest legs",
"Increase systemic vascular resistance",
"Decrease atrial pressure",
"Slow heart rate"
],a:1},

{type:"mcq",q:"Boot-shaped heart on X-ray is seen in:",options:[
"ASD",
"Heart failure",
"Tetralogy of Fallot",
"Rheumatic Fever"
],a:2},

{type:"mcq",q:"Which drug is an inotropic agent?",options:[
"Captopril",
"Spironolactone",
"Digoxin",
"Penicillin"
],a:2},

{type:"mcq",q:"Sydenham’s chorea affects the:",options:[
"Respiratory system",
"Central nervous system",
"Skin",
"Digestive system"
],a:1},

{type:"mcq",q:"Main long-term risk of left-to-right shunt is:",options:[
"Lung collapse",
"Pulmonary hypertension",
"Low lung flow",
"Viral pneumonia"
],a:1},

{type:"mcq",q:"Erythema marginatum is:",options:[
"Painful rash",
"Painless ring rash",
"Purple spots",
"Yellow skin"
],a:1},

{type:"mcq",q:"Gold standard for heart structure assessment:",options:[
"Chest X-ray",
"ECG",
"Echocardiography",
"Blood culture"
],a:2},

{type:"mcq",q:"Failure to thrive in large VSD occurs due to:",options:[
"Swallowing problem",
"High metabolic demand",
"Stomach compression",
"Salt loss"
],a:1},

{type:"mcq",q:"Rheumatic fever is caused by immune response to:",options:[
"Staph aureus",
"Group A Streptococcus",
"Influenza",
"E. coli"
],a:1},

{type:"mcq",q:"Positive pulse oximetry difference is > ___ %",options:[
"1%",
"2%",
"3%",
"5%"
],a:2},

{type:"mcq",q:"Subcutaneous nodules in RF are found over:",options:[
"Abdomen",
"Bony prominences",
"Face",
"Palms"
],a:1},

{type:"mcq",q:"Eisenmenger syndrome is:",options:[
"Skin rash",
"Reversal of shunt",
"Genetic disorder",
"Surgical technique"
],a:1},

{type:"mcq",q:"Which is a MINOR Jones criterion?",options:[
"Carditis",
"Polyarthritis",
"Elevated ESR/CRP",
"Subcutaneous nodules"
],a:2},

{type:"mcq",q:"In TGA:",options:[
"One ventricle",
"Great arteries swapped",
"Missing mitral valve",
"Heart on right side"
],a:1},

{type:"mcq",q:"Digitalis toxicity is increased with:",options:[
"High calcium",
"Low potassium",
"High glucose",
"Low sodium"
],a:1},

{type:"mcq",q:"Carditis in RF involves:",options:[
"Endocardium only",
"Myocardium only",
"All three layers",
"Pericardium only"
],a:2},

{type:"mcq",q:"Afterload reduction is used to:",options:[
"Increase HR",
"Reduce resistance",
"Increase volume",
"Thicken muscle"
],a:1},

{type:"mcq",q:"Gallop rhythm is seen in:",options:[
"Athletes",
"Heart failure",
"Simple ASD",
"Fever"
],a:1},

{type:"mcq",q:"PDA is vital in TGA because it:",options:[
"Keeps lungs dry",
"Allows blood mixing",
"Increases BP",
"Stops arrest"
],a:1},

{type:"mcq",q:"Percentage developing mitral stenosis later:",options:[
"10%",
"20%",
"40%",
"80%"
],a:3},

/* ===== TRUE / FALSE (20 سؤال) ===== */
{type:"tf",q:"CHD is always symptomatic at birth.",a:false},
{type:"tf",q:"Acyanotic defects usually have left-to-right shunt.",a:true},
{type:"tf",q:"Tetralogy of Fallot includes ASD.",a:false},
{type:"tf",q:"Rheumatic fever is a direct bacterial infection.",a:false},
{type:"tf",q:"Pulse oximetry detects all CHD.",a:false},
{type:"tf",q:"Hepatomegaly can indicate right heart failure.",a:true},
{type:"tf",q:"Arthritis in RF is migratory.",a:true},
{type:"tf",q:"Marfan syndrome involves fibrillin-1 mutation.",a:true},
{type:"tf",q:"Prostaglandin E1 closes PDA.",a:false},
{type:"tf",q:"BP is higher in arms than legs in coarctation.",a:true},
{type:"tf",q:"Prolonged PR is a major Jones criterion.",a:false},
{type:"tf",q:"Cardiomegaly is always present in infant HF.",a:false},
{type:"tf",q:"RF can follow skin infection.",a:false},
{type:"tf",q:"Subcutaneous nodules are painful.",a:false},
{type:"tf",q:"Tet spells cause sudden cyanosis.",a:true},
{type:"tf",q:"Maternal rubella is a CHD risk factor.",a:true},
{type:"tf",q:"Left-to-right shunts cause early cyanosis.",a:false},
{type:"tf",q:"Sydenham chorea may appear months later.",a:true},
{type:"tf",q:"Aspirin treats inflammation in RF.",a:true},
{type:"tf",q:"Pediatric HF presents same as adults.",a:false}

];
/* SHUFFLE */
questions.sort(()=>Math.random()-0.5);

let index=0;
let answers=Array(questions.length).fill(null);

/* ELEMENTS */
const qText=document.getElementById("questionText");
const optionsDiv=document.getElementById("options");
const counter=document.getElementById("counter");
const progress=document.getElementById("progressBar");
const nextBtn=document.getElementById("nextBtn");
const retryBtn=document.getElementById("retryBtn");
const qList=document.getElementById("questionsList");

/* MENU */
function toggleMenu(){
  const m=document.getElementById("sideMenu");
  const o=document.getElementById("overlay");
  if(m.style.right==="0px"){m.style.right="-250px";o.style.display="none";}
  else{m.style.right="0";o.style.display="block";}
}

/* DARK MODE */
function toggleDark(){
  document.body.classList.toggle("dark");
}

/* QUIZ */
function startQuiz(){
  index=0;
  answers.fill(null);
  document.getElementById("home").style.display="none";
  document.getElementById("quiz").style.display="block";
  loadQuestion();
}

function loadQuestion(){
  optionsDiv.innerHTML="";
  nextBtn.style.display="none";

  const q=questions[index];
  qText.innerText=q.q;
  counter.innerText=`Question ${index+1} / ${questions.length}`;
  progress.style.width=((index+1)/questions.length*100)+"%";

  if(q.type==="tf"){
    createOption("True",true);
    createOption("False",false);
  }else{
    q.options.forEach((o,i)=>createOption(o,i));
  }
}

function createOption(text,val){
  const b=document.createElement("button");
  b.innerText=text;
  b.onclick=()=>select(val,b);
  optionsDiv.appendChild(b);
}

function select(val,btn){
  if(answers[index]!==null)return;
  answers[index]=val;

  const q=questions[index];
  [...optionsDiv.children].forEach((b,i)=>{
    const correct=q.type==="tf"?((i===0)===q.a):(i===q.a);
    if(correct)b.style.background="#27ae60";
    else if(b===btn)b.style.background="#e74c3c";
    b.disabled=true;
  });
  nextBtn.style.display="inline-block";
}

function nextQuestion(){
  if(index<questions.length-1){
    index++;
    loadQuestion();
  }else finishQuiz();
}

function finishQuiz(){
  let score = 0;
  questions.forEach((q,i)=>{
    if(answers[i] === q.a) score++;
  });

  let percent = Math.round((score / questions.length) * 100);

  document.getElementById("resultScore").innerText =
    `Score: ${score} / ${questions.length}`;

  document.getElementById("resultPercent").innerText =
    `Percentage: ${percent}%`;

  let message = "";

if(percent >= 85){
  message = " اول دفعه يعععمممم  "  ;
}
else if(percent >= 70){
  message = " شد شويه يعم";
}
else{
  message = " انت اخرك تخش كليه البهايممممم  ";
}

document.getElementById("resultTitle").innerText = message;

  // إظهار شاشة النتيجة
  document.getElementById("result").classList.add("show");

  // كونفيتي لو أكتر من 70%
  if(percent >= 70){
    fireConfetti();
  }
}
function retryQuiz(){
  location.reload();
}

function toggleQuestions(){
  qList.innerHTML="";
  qList.style.display=qList.style.display==="block"?"none":"block";

  answers.forEach((a,i)=>{
    const d=document.createElement("div");
    d.className="q-item "+(a===null?"unanswered":a===questions[i].a?"correct":"wrong");
    d.innerText=i+1;
    d.onclick=()=>{index=i;loadQuestion();qList.style.display="none";}
    qList.appendChild(d);
  });
}
function fireConfetti(){
  confetti({
    particleCount: 120,
    spread: 70,
    origin: { y: 0.6 }
  });
}
function confettiEffect(){
  for(let i=0;i<150;i++){
    const c=document.createElement("div");
    c.style.position="fixed";
    c.style.top="-10px";
    c.style.left=Math.random()*100+"vw";
    c.style.width="8px";
    c.style.height="8px";
    c.style.background=`hsl(${Math.random()*360},100%,50%)`;
    c.style.opacity="0.8";
    c.style.borderRadius="50%";
    c.style.animation=`fall ${2+Math.random()*3}s linear`;
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),5000);
  }
}
function reviewFromResult(){
  const result = document.getElementById("result");

  // اقفل شاشة النتيجة
  result.classList.remove("show");

  // رجّع الكويز
  document.getElementById("quiz").style.display = "block";

  // افتح قائمة الأسئلة
  toggleQuestions();
}