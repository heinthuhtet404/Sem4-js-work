// ကျောင်းသားတွေရဲ့ အချက်အလက်တွေကို array အနေနဲ့ သိမ်းထားတယ်
const students = [
  {
    name: "Myo Myo",         // နာမည်
    age: 31,                 // အသက်
    major: "Computer Science", // ဘာသာရပ်
    imgSrc: "myomyo.jpg"      // ဓာတ်ပုံဖိုင်လမ်းကြောင်း
  },
  {
    name: "Aung Aung",
    age: 22,
    major: "Information Technology",
    imgSrc: "aungaung.jpg"
  },
  {
    name: "Hla Hla",
    age: 25,
    major: "Cyber Security",
    imgSrc: "hlahla.jpg"
  },
  {
    name: "Min Min",
    age: 29,
    major: "Data Science",
    imgSrc: "minmin.jpg"
  },
  {
    name: "Su Su",
    age: 21,
    major: "Software Engineering",
    imgSrc: "hsuhsu.jpg"
  }
];

// စာမျက်နှာ load ပြီးတဲ့အခါ လုပ်ဆောင်မယ့် function
function displayStudents() {
  // student-list id ရှိ div ကိုရွေးပါမယ်
  const container = document.getElementById("student-list");

  // ကျောင်းသားတစ်ဦးချင်းစီအတွက် loop ပတ်ပါမယ်
  students.forEach((student, index) => {
    // student card အတွက် div အသစ်ဖန်တီးပါမယ်
    const card = document.createElement("div");
    card.className = "student-card";  // CSS style သတ်မှတ်ဖို့ class name ပေးထားတယ်

    // ဓာတ်ပုံအတွက် img element ဖန်တီးပါမယ်
    const img = document.createElement("img");
    img.src = student.imgSrc;   // ဓာတ်ပုံလမ်းကြောင်းထည့်ပါမယ်
    img.alt = student.name;     // ဓာတ်ပုံမရှိရင် ပြမယ့်စာသား

    // အချက်အလက်ပြမယ့် button ဖန်တီးပါမယ်
    const button = document.createElement("button");
    button.textContent = "Show Information";  // Button ပေါ်က စာသား
    button.onclick = () => showInformation(index); // ကလစ်လိုက်ရင် showInformation function ကိုခေါ်မယ်

    // အချက်အလက်တွေပြမယ့် div ဖန်တီးပါမယ်
    const infoDiv = document.createElement("div");
    infoDiv.className = "info";  // CSS အတွက် class name
    infoDiv.style.display = "none"; // အစမှာဖျောက်ထားမယ်
    infoDiv.textContent = `${student.name} is ${student.age} years old and studies ${student.major}.`;

    // card ထဲကို element တွေထည့်ပါမယ်
    card.appendChild(img);
    card.appendChild(button);
    card.appendChild(infoDiv);

    // container ထဲကို card ထည့်ပါမယ်
    container.appendChild(card);
  });
}

// အချက်အလက်တွေကိုပြမယ့်/ဖျောက်မယ့် function
function showInformation(index) {
  // ရွေးလိုက်တဲ့ student card ကိုရှာမယ်
  const card = document.getElementsByClassName("student-card")[index];
  
  // အချက်အလက်တွေပြမယ့် div ကိုရှာမယ်
  const infoDiv = card.querySelector(".info");
  
  // button ကိုရှာမယ်
  const button = card.querySelector("button");

  // အခု infoDiv မှာ display none ဖြစ်နေလား စစ်မယ်
  if (infoDiv.style.display === "none") {
    infoDiv.style.display = "block";  // ပြပါမယ်
    button.textContent = "Hide Information";  // button စာသားပြောင်းမယ်
  } else {
    infoDiv.style.display = "none";   // ဖျောက်ပါမယ်
    button.textContent = "Show Information";  // button စာသားပြောင်းမယ်
  }
}

// စာမျက်နှာ load ပြီးတာနဲ့ displayStudents function ကိုခေါ်ပါမယ်
window.onload = displayStudents;