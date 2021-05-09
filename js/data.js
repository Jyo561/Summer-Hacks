const projectData = [
  {
      teamName: "SOA Code Room",
      //give the username and repository name where you have posted your project
      username: "saswatsamal",
      reponame: "snake-game",
  },
  {
      teamName: "SOA Code Room",
      //give the username and repository name where you have posted your project
      username: "soacoderoom",
      reponame: "Summer-Hacks",
  },

  {
      teamName: "Siddhant Sarthak",
      //give the username and repository name where you have posted your project
      username: "sid-mr-im",
      reponame: "summerhacks-siddhantsarthak",
  },

    {
      teamName: "ZCoders",
      //give the username and repository name where you have posted your project
      username: "Vishal409",
      reponame: "SummerHacks-ZCoders",
    },

   {
      teamName: "Farid Ahmed",
      //give the username and repository name where you have posted your project
      username: "fareedahmed00",
      reponame: "summerhacks-FaridAhmed",
   },

  {
      teamName: "Amrit Nayak",
      //give the username and repository name where you have posted your project
      username: "AmritNayak",
      reponame: "summerhacks-myPortfolioSite",
  },

   {
      teamName: "Nishant's site",
      //give the username and repository name where you have posted your project
      username: "Nishant50",
      reponame: "summerhacks-myPortfolio",
  },

   {
      teamName: "PLAY_WITH_BITS",
      //give the username and repository name where you have posted your project
      username: "sambitraj",
      reponame: "COLLEGE-WEB",
  },
  {
      teamName: "ExcessiveMedia",
      //give the username and repository name where you have posted your project
      username: "sanskar85",
      reponame: "summerhacks-excessiveMedia",

  },
];

//------------------------WARNING---------------------------//
//---------------------------------------------------------//
//DON'T CHANGE AFTER THIS LINE
//---------------------------------------------------------//

function projectTemplate(project) {
  return `
  <div class="project">
  
  <img class="project-photo" src="https://github-readme-stats.vercel.app/api/pin/?username=${project.username}&repo=${project.reponame}&theme=highcontrast&show_icons=true&layout=compact">

  <a href="https://github.com/${project.username}/${project.reponame}"><h2 class="project-name">${project.reponame}</h2></a>
  <span class="team-name">(${project.teamName})</span>
  <img class="project-commit" src="https://img.shields.io/github/last-commit/${project.username}/${project.reponame}?style=for-the-badge">

  <img class="project-star" src="https://img.shields.io/github/stars/${project.username}/${project.reponame}?style=social">

  </div>
`;
}

document.getElementById("app").innerHTML = `
<h1 class="app-title">(${projectData.length} projects found)</h1>
${projectData.map(projectTemplate).join("")}
<p class="projects">These ${projectData.length} projects were added recently. Check back soon for updates.</p>
`;
