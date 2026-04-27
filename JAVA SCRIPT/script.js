

const searchicon = document.querySelector(".headersearchicon");
const headerinput = document.querySelector(".headerinput");

searchicon.addEventListener("click", () => {
  if (headerinput.style.display === "flex") {
    headerinput.style.display = "none";
  } else {
    headerinput.style.display = "flex";
  }
  headerinput.querySelector("input").focus();
});

const bars = document.querySelector("#headerbars");
const navlinks = document.querySelector("#navlinksmob");
const secondlinks = document.querySelector(".secondlinks");
const footer = document.querySelector(".footer");
const allContent = document.querySelector("#allcontents");
bars.addEventListener("click", () => {
  navlinks.classList.toggle("second");
  secondlinks.classList.toggle("secondactive");
  allContent.classList.toggle("allcontents")
});

// ------------------HEADER-----------------


const webinarData = [
  {
    img: "IMAGES/Web development webinar.png",
    title: "Upcoming Webinars",
    learn: "Learn AI & Modern Web Development",
    date: "Wednesday, April 15, 2023",
    time: "6:00 PM",
    description:
      "Join us for an exciting webinar on AI and Web Development! Discover the latest trends, tools, and techniques in the world of web development powered by artificial intelligence. Whether you're a student, developer, or tech enthusiast, this webinar is your gateway to mastering the future of web technology.",
    points1: "Learn key strategies",
    points2: "Get expert insights",
    points3: "Practical tips for students",
  },
  {
    img: "https://th.bing.com/th/id/OIP.pdH9MYJr3JF0Bu4ptoBAhQHaEK",
    title: "How to Apply to CMU",
    learn: "Learn College Application Strategies",
    date: "Wednesday, September 20, 2023",
    time: "6:00 PM EDT",
    description:
      "Join us for an informative webinar on the application process for undergraduate admissions to Carnegie Mellon University. Discover key strategies, expert guidance, and actionable tips to build a strong profile. Whether you are a student or parent, this session will help you confidently navigate the complete admission journey.",
    points1: "Understand the complete application process",
    points2: "Tips to build a strong profile",
    points3: "Insights into holistic admission review",
  },
  {
    img: "https://tse3.mm.bing.net/th/id/OIP.eDe1myTbwL7H3nYB85bsegHaE3",
    title: "Financial Aid and Scholarships at CMU",
    learn: "Learn Financial Aid & Scholarship Planning",
    date: "Thursday, October 5, 2023",
    time: "7:00 PM EDT",
    description:
      "Explore financial aid options and scholarship opportunities available at Carnegie Mellon University through this detailed webinar session. Learn key strategies, expert insights, and practical steps to maximize your financial support. This session will help students and families plan funding and make informed education decisions with confidence.",
    points1: "Learn how to apply for financial aid",
    points2: "Types of scholarships explained",
    points3: "Maximize your funding opportunities",
  },
  {
    img: "https://snworksceo.imgix.net/cml/308e722a-0a0a-4e32-8994-be87cbd3cb77.sized-1000x1000.jpg?w=800",
    title: "Student Life at CMU",
    learn: "Explore Campus Life & Student Experience",
    date: "Tuesday, October 17, 2023",
    time: "5:00 PM EDT",
    description:
      "Get a complete overview of student life at Carnegie Mellon University through this engaging and informative webinar session. Discover clubs, communities, and activities while gaining insights from real student experiences. This session helps you understand how to get involved, build connections, and make the most of your campus journey.",
    points1: "Explore clubs and organizations",
    points2: "Hear real student experiences",
    points3: "Get involved in campus life",
  },
];


const webinarConatianer = document.querySelector(".webinar-container");
function displayWebinars(){
  const alldataHTML = webinarData.map((item, index)=>{
    const isActive = index===0?"active":"";
    return `
      <div class="hero-section ${isActive}" id="webinar-${index}">
        <div class="hero-text">
          <h1 class="">
            <i class="fa-solid fa-rocket" style="color: #1e3a8a"></i>${item.title}
          </h1>
          <p>${item.learn}</p>
          <p>
            <i class="fa-regular fa-calendar" style="color: #1e3a8a"></i> ${item.date}
            <i class="fa-solid fa-alarm-clock" style="color: #1e3a8a"></i> ${item.time}
          </p>
          <ul
            class="headbullet flex flex-col gap-[1rem] list-disc pl-5 text-gray-700 m-4"
          >
            <li>${item.points1}</li>
            <li>${item.points2}</li>
            <li>${item.points3}</li>
          </ul>
          <p class="webinarabout items-start">
            ${item.description}
          </p>
          <a href="#" class="cta-btn">Register Now →</a>
        </div>
        <div class="hero-image">
          <img
            src="${item.img}"
            alt="${item.title}"
          />
        </div>
      </div>
    `
  }).join("");
  webinarConatianer.innerHTML = alldataHTML;
}
displayWebinars();

let currentindexwebinar = 0;
const allHeroSections = document.querySelectorAll(".hero-section");

function showNextWebinar(){
  const current = allHeroSections[currentindexwebinar];
  current.classList.remove("active");
  current.classList.add("no-anim");
  current.offsetHeight;

  current.classList.remove("no-anim");
  currentindexwebinar = (currentindexwebinar+1)%webinarData.length;

  allHeroSections[currentindexwebinar].classList.add("active");
}

setInterval(showNextWebinar,2000);
// -----------------------------RANKING SECTION-----------------------------

const Ranking = [
  {
    img: "IMAGES/Global universtiy(MIT).png",
    title: "#1 Global University",
    description: "(QS World University Rankings, 2026)",
  },
  {
    img: "IMAGES/Global universtiy(MIT).png",
    title: "#1 Master's in Computer Science",
    description: "(QS World University Rankings, 2026)",
  },
  {
    img: "IMAGES/Global universtiy(MIT).png",
    title: "#1 Engineering School",
    description: "(QS World University Rankings, 2026)",
  },
];

function displayRanking(e) {
  const rankingContainer = document.querySelector(".ranking-container");
  e.forEach((item) => {
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("main-ranking");
    mainDiv.innerHTML = `
        <div class="main-ranking flex gap-4 items-center">
          <div class="ranking-image">
            <img src="${item.img}" alt="" />
          </div>
          <div class="rankinginfo">
            <h3 class="text-[18px] ">${item.title}</h3>
            <p class="text-[18px] ">${item.description}</p>
          </div>
        </div>
    `;
    rankingContainer.appendChild(mainDiv);
  });
}

displayRanking(Ranking);

// ----------------------------------SCM VS MBA STUDENTS FEEDBACK-------------------
const ScmvsMba_student_details = [
  {
    student_name: "Rahul Mehta",
    student_role: "SCM Student",
    student_desc:
      "SCM ne mujhe real-world problem solving aur supply chain ke practical aspects samajhne me help ki.",
    student_img: "https://i.pravatar.cc/150?img=12",
  },
  {
    student_name: "Ananya Sharma",
    student_role: "MBA Student",
    student_desc:
      "MBA ne mujhe leadership aur business strategy ka broad perspective diya, jo har career me useful hai.",
    student_img:
      "https://i.pinimg.com/1200x/eb/2e/31/eb2e31ea0434e57be18fd64ca20f9cf8.jpg",
  },
  {
    student_name: "Karan Patel",
    student_role: "SCM Student",
    student_desc:
      "SCM is more focused and industry-oriented, jo mujhe operations field me clear direction deta hai.",
    student_img: "https://i.pravatar.cc/150?img=32",
  },
  {
    student_name: "Neha Verma",
    student_role: "MBA Student",
    student_desc:
      "MBA gives flexibility to explore different business domains before choosing a specialization.",
    student_img: "https://i.pravatar.cc/150?img=47",
  },
  {
    student_name: "Amit Singh",
    student_role: "SCM Student",
    student_desc:
      "SCM padhkar mujhe pata chala ki logistics aur supply chain kitna important part hai modern business ka.",
    student_img: "https://i.pravatar.cc/150?img=15",
  },
];

function ScmvsMba_studentFeedback(e,direction) {
  const item = ScmvsMba_student_details[e];
  const studentfeedbackDiv = document.querySelector(".studentsfeedback");
  studentfeedbackDiv.innerHTML = "";
  const card = document.createElement("div");
  card.classList.add("card");
  
  card.innerHTML = `
      <img src="${item.student_img}" alt="student" />
      <div class="text">
        <h2>${item.student_name}</h2>
        <p class="role">${item.student_role}</p>
        <p class="desc">
          “${item.student_desc}”
        </p>
      </div>`;

    card.classList.add(direction=="next"?"enter-right" : "enter-left");

  studentfeedbackDiv.appendChild(card);
  card.offsetHeight;

  card.classList.add("active");
}
let ScmvsMbaindex = 0;
ScmvsMba_studentFeedback(ScmvsMbaindex);
function nextStudentdetails(){
  ScmvsMbaindex++;
  if(ScmvsMbaindex>=ScmvsMba_student_details.length){
    ScmvsMbaindex = 0;
  }
  ScmvsMba_studentFeedback(ScmvsMbaindex, "next");
}

function previousStudentdetails(){
  ScmvsMbaindex--;
  if(ScmvsMbaindex<0){
    ScmvsMbaindex=ScmvsMba_student_details.length-1;
  }
  ScmvsMba_studentFeedback(ScmvsMbaindex, "prev");
}

// ---------------PLACEMENT DETAILS--------------

const placementDetails = [
  {
    img: "https://randomuser.me/api/portraits/men/11.jpg",
    Name: "Aman Gupta",
    role: "SDE at Google",
    amount: "$120,000"
  },
  {
    img: "https://randomuser.me/api/portraits/women/21.jpg",
    Name: "Neha Sharma",
    role: "Frontend Developer",
    amount: "$85,000"
  },
  {
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    Name: "Rahul Verma",
    role: "Backend Engineer",
    amount: "$95,000"
  },
  {
    img: "https://randomuser.me/api/portraits/women/32.jpg",
    Name: "Priya Singh",
    role: "Full Stack Developer",
    amount: "$110,000"
  },
  {
    img: "https://randomuser.me/api/portraits/men/41.jpg",
    Name: "Karan Mehta",
    role: "SDE at Amazon",
    amount: "$130,000"
  },
  {
    img: "https://randomuser.me/api/portraits/women/45.jpg",
    Name: "Sneha Patel",
    role: "UI/UX Designer",
    amount: "$78,000"
  },
  {
    img: "https://randomuser.me/api/portraits/men/52.jpg",
    Name: "Aditya Rao",
    role: "DevOps Engineer",
    amount: "$105,000"
  },
  {
    img: "https://randomuser.me/api/portraits/women/54.jpg",
    Name: "Riya Nair",
    role: "Data Analyst",
    amount: "$88,000"
  },
  {
    img: "https://randomuser.me/api/portraits/men/61.jpg",
    Name: "Vikram Joshi",
    role: "Mobile App Developer",
    amount: "$92,000"
  },
  {
    img: "https://randomuser.me/api/portraits/women/62.jpg",
    Name: "Ananya Kapoor",
    role: "SDE at Microsoft",
    amount: "$140,000"
  },
  {
    img: "https://randomuser.me/api/portraits/men/71.jpg",
    Name: "Sahil Khan",
    role: "Cloud Engineer",
    amount: "$98,000"
  },
  {
    img: "https://randomuser.me/api/portraits/women/72.jpg",
    Name: "Ishita Roy",
    role: "Software Engineer",
    amount: "$90,000"
  },
  {
    img: "https://randomuser.me/api/portraits/men/81.jpg",
    Name: "Nikhil Jain",
    role: "Full Stack Engineer",
    amount: "$115,000"
  },
  {
    img: "https://randomuser.me/api/portraits/women/82.jpg",
    Name: "Meera Desai",
    role: "Frontend Developer",
    amount: "$80,000"
  },
  {
    img: "https://randomuser.me/api/portraits/men/90.jpg",
    Name: "Arjun Sethi",
    role: "SDE at Netflix",
    amount: "$150,000"
  }
];

function placedStudent(e){
  const plcaementSection = document.querySelector(".careerpics");
  e.forEach((item) => {
    const careerpics = document.createElement("div");
    careerpics.classList.add("placementcard");
    careerpics.innerHTML = `
          <img
            src="${item.img}"
            alt=""
            srcset=""
          />
          <div class="placementtext">
            <h2>${item.Name}</h2>
            <p class="placedrole">${item.role}</i></p>
            <p class="placedamount">${item.amount}</p>
          </div>
    `;
    plcaementSection.appendChild(careerpics);
  });
  e.forEach((item) => {
    const careerpics = document.createElement("div");
    careerpics.classList.add("placementcard");
    careerpics.innerHTML = `
          <img
            src="${item.img}"
            alt=""
            srcset=""
          />
          <div class="placementtext">
            <h2>${item.Name}</h2>
            <p class="placedrole">${item.role}</i></p>
            <p class="placedamount">${item.amount}</p>
          </div>
    `;
    plcaementSection.appendChild(careerpics);
  });
};


placedStudent(placementDetails);