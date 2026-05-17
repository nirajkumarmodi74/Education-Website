const bars = document.querySelector("#headerbars");
const navlinks = document.querySelector("#navlinksmob");
const secondlinks = document.querySelector(".secondlinks");
const footer = document.querySelector(".footer");
const allContent = document.querySelector("#allcontents");
bars.addEventListener("click", () => {
  navlinks.classList.toggle("second");
  secondlinks.classList.toggle("secondactive");
  allContent.classList.toggle("allcontents");
});

// const expLearning = [
//   {
//     img: "https://images.openai.com/static-rsc-4/4JuNIDlDts-zs1VwP_3imYZvWzSsBrSKC9tsC4tf6z0D9D20sjDweRE17pbXpvz4gtz5VmY4d1S8C4SCpRUnk_HUAaEiqwgr6EwGnpLk4WpqRLw01cm0C6TTB9aRBe3Y4ZUltneHWEaYslKhPJRku_sPtUURYSisoajl5wLbaKE?purpose=inline",
//     head: "Global Study Trek",
//     descp:
//       "Gain international exposure through immersive study tours, company visits, and meaningful interactions with global supply chain leaders, industry experts, and business professionals across different countries and international markets. Explore diverse business environments, understand cross-cultural management practices, and learn how global organizations manage operations, logistics, and innovation in competitive international industries.",
//     button: "Explore Global Study Treks",
//   },
//   {
//     img: "https://images.openai.com/static-rsc-4/xKcdXtFVp6DAuLJP12RysrB_HQDXR1x60w-wM82xqdbqxBqOdYzaQ70EWgFCEPqDXek0l_zWZDOue8gA5KOCIvRdZSZRhnbtIpFBo9XQZBfgtpCuj6lfq8GizKv8X-DYI-4H0ZjNRuS0kYox06e6307nRBB0kd6M5aTWB3FJytFxuHM3VthDDpPpO4Ll7E7x?purpose=fullsize",
//     head: "Industry Projects",
//     descp:
//       "Work on real business challenges with industry partners and apply classroom concepts to practical supply chain problems.",
//     button: "View Industry Projects",
//   },
//   {
//     img: "https://images.openai.com/static-rsc-4/XCFj921sY1-2katZ7jbkj3fJb4wOHrpAa9Wd3xgQnAO-TKupTn3Po-WoKmlErtkuCTpEN_dkM6zRW17zzY0uhBvFwyoJY2keXu7mszCOvbHG3ZRUjY46hns8XSMZ_U_e2yhwy0lzkkS-5eclAG2T44Eg29JWffdnc9wYfgTYWVdjg651Rx18pxPiLEVY5z1y?purpose=fullsize",
//     head: "Corporate Site Visits",
//     descp:
//       "Experience real-world operations by visiting manufacturing plants, warehouses, and logistics facilities.",
//     button: "Learn About Site Visits",
//   },
//   {
//     img: "https://images.openai.com/static-rsc-4/wbqoPuGmA21tDO7mV0NzzEUp2FCPvnNolviH07iolcDfc0blwAE327BZ0cwdNFveZKcesYG6OoGyk01lcQU44ChEGyf5YW6RdH8K4qvec8ASPNKbvfFLdM4Ug-uj0H591YasT4gKYKZU-Ig9lEXuWQDz1jyUOAPEC_WpGjE-uTxY0hHXCndr2mYwYmBc4rks?purpose=fullsize",
//     head: "Leadership Workshops",
//     descp:
//       "Develop leadership and decision-making skills through expert-led workshops, networking sessions, and interactive discussions.",
//     button: "Discover Workshops",
//   }
// ];
const expLearning = [
  {
    img: "https://images.openai.com/static-rsc-4/4JuNIDlDts-zs1VwP_3imYZvWzSsBrSKC9tsC4tf6z0D9D20sjDweRE17pbXpvz4gtz5VmY4d1S8C4SCpRUnk_HUAaEiqwgr6EwGnpLk4WpqRLw01cm0C6TTB9aRBe3Y4ZUltneHWEaYslKhPJRku_sPtUURYSisoajl5wLbaKE?purpose=inline",
    head: "Global Study Trek",
    descp:
      "Gain international exposure through immersive study tours, company visits, and meaningful interactions with global supply chain leaders, industry experts, and business professionals across different countries and international markets. Explore diverse business environments, understand cross-cultural management practices, and learn how global organizations manage operations, logistics, and innovation in competitive international industries.",
    button: "Explore Global Study Treks",
  },
  {
    img: "https://images.openai.com/static-rsc-4/xKcdXtFVp6DAuLJP12RysrB_HQDXR1x60w-wM82xqdbqxBqOdYzaQ70EWgFCEPqDXek0l_zWZDOue8gA5KOCIvRdZSZRhnbtIpFBo9XQZBfgtpCuj6lfq8GizKv8X-DYI-4H0ZjNRuS0kYox06e6307nRBB0kd6M5aTWB3FJytFxuHM3VthDDpPpO4Ll7E7x?purpose=fullsize",
    head: "Industry Projects",
    descp:
      "Work on real business challenges with industry partners and apply classroom concepts to practical supply chain problems while gaining hands-on experience, teamwork skills, and exposure to real-time corporate operations. Collaborate with professionals, analyze business case studies, develop innovative solutions, and strengthen your problem-solving abilities through industry-oriented project execution and strategic planning activities.",
    button: "View Industry Projects",
  },
  {
    img: "https://images.openai.com/static-rsc-4/XCFj921sY1-2katZ7jbkj3fJb4wOHrpAa9Wd3xgQnAO-TKupTn3Po-WoKmlErtkuCTpEN_dkM6zRW17zzY0uhBvFwyoJY2keXu7mszCOvbHG3ZRUjY46hns8XSMZ_U_e2yhwy0lzkkS-5eclAG2T44Eg29JWffdnc9wYfgTYWVdjg651Rx18pxPiLEVY5z1y?purpose=fullsize",
    head: "Corporate Site Visits",
    descp:
      "Experience real-world operations by visiting manufacturing plants, warehouses, and logistics facilities to understand supply chain workflows, operational efficiency, and modern industrial management practices in detail. Observe live production processes, interact with operational managers, and gain practical insights into quality control, inventory systems, transportation networks, and advanced industrial technologies.",
    button: "Learn About Site Visits",
  },
  {
    img: "https://images.openai.com/static-rsc-4/wbqoPuGmA21tDO7mV0NzzEUp2FCPvnNolviH07iolcDfc0blwAE327BZ0cwdNFveZKcesYG6OoGyk01lcQU44ChEGyf5YW6RdH8K4qvec8ASPNKbvfFLdM4Ug-uj0H591YasT4gKYKZU-Ig9lEXuWQDz1jyUOAPEC_WpGjE-uTxY0hHXCndr2mYwYmBc4rks?purpose=fullsize",
    head: "Leadership Workshops",
    descp:
      "Develop leadership and decision-making skills through expert-led workshops, networking sessions, interactive discussions, and collaborative activities designed to enhance communication, confidence, and professional growth. Participate in engaging training sessions, leadership simulations, and mentorship opportunities that prepare you to manage teams effectively and excel in dynamic corporate environments.",
    button: "Discover Workshops",
  }
];
const expContent = document.querySelector(".exp-main-content");
function displayExp(){
  const allData = expLearning.map((item, index)=>{
    const isActive = index===0?"active":"";
    return `
      <div class="exp-content ${isActive} " id="exp-container-${index}" >
        <div class="exp-contents" >
            <div class="exp-img">
              <img
                src="${item.img}"
                alt=""
              />
            </div>
            <div class="exp-text">
              <h2>${item.head}</h2>
              <p>
                ${item.descp}
              </p>
            </div>
          </div>
          <div class="exp-button">
            <button><a href="">${item.button}</a></button>
          </div>
        </div>
      </div>
    `
  }).join("");
  expContent.innerHTML = allData;
}

displayExp();

let currentExpIndex = 0;
const allExpContent = document.querySelectorAll(".exp-content");
// console.log(allExpContent);

function showExp(){
  const current = allExpContent[currentExpIndex];
  current.classList.remove("active");
  current.classList.add("exit");
  current.offsetHeight;
  currentExpIndex = (currentExpIndex+1)%expLearning.length;
  allExpContent[currentExpIndex].classList.add("active");
  setTimeout(()=>{
    current.classList.remove("exit");
  },3000);

}


setInterval(showExp,3000);
