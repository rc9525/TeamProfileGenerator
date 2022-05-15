

const addManager = function (manager) {
    return `
<div class="col-4 mt-4">
    <div class= "card h-100">
        <div class = "card-header">
            <h3> ${manager.name} </h3>
         <h4> Manager </h4>
         <i> <span class="iconify" id="posit" data-icon="foundation:torso-business"></span>
         </i>
        </div>
    <div class ="card-body">
        <p class="id"> ID: ${manager.id} </p>
        <p class="email"> 
            <a href="mailto: ${manager.email}">
                <span class="iconify" id="email" data-icon="dashicons:email"></span>
                 ${manager.email}
            </a>
        </p>
        <p class="officenum"> Office Number: ${manager.officeNumber} </p>
    </div>
    </div>
    </div>`;
};



const addEngineer = function (engineer) {
    return `
  <div class="col-4 mt-4">
    <div class= "card h-100">
    <div class = "card-header">
        <h3> ${engineer.name} </h3>
        <h4> Engineer </h4> 
        <i> <span class="iconify" id="posit" data-icon="ic:twotone-engineering"></span>
        </i>
    </div>
    <div class ="card-body">
        <p class="id"> ID: ${engineer.id} </p>
        <p class="email"> 
            <a href="mailto: ${engineer.email}">
                <span class="iconify" id="email" data-icon="dashicons:email"></span>
               ${engineer.email} 
            </a> 
        </p>
        <p class="github"> GitHub: <a target='blank' href="https://github.com/${engineer.github}">${engineer.github}</a> </p>
    </div>
    </div>
    </div>`;  
};



const addIntern = function(intern){
    return `
    <div class="col-4 mt-4">
    <div class= "card h-100">
    <div class = "card-header">
        <h3> ${intern.name} </h3>
        <h4> Intern </h4> 
        <i> <span class="iconify" id="posit" data-icon="ph:student-bold"></span>
        </i>
    </div>
    <div class ="card-body">
        <p class="id"> ID: ${intern.id} </p>
        <p class="email"> 
            <a href="mailto: ${intern.email}">
                <span class="iconify" id="email" data-icon="dashicons:email"></span>
                ${intern.email}
            </a> 
        </p>
        <p class="school"> School/University: ${intern.school} </p>
    </div>
    </div>
</div> `;
};

    generateHTML = (teamArray) => {
        membArr =[];
    console.log(teamArray)
        for (let i = 0; i <teamArray.length; i++) {
            const employee = teamArray[i];
            const job = employee.getRole();
    
            if (job === "Manager"){
                const mngrInfo = addManager(employee);
                membArr.push(mngrInfo);
            }
            if (job === "Engineer"){
                const engInfo = addEngineer(employee);
                membArr.push(engInfo);
            }
            if (job === "Intern"){
                const intInfo = addIntern(employee);
                membArr.push(intInfo);
            }
        }
    
        const staffInfo = membArr.join('')
        const generateTeam = generateTeamOverview(staffInfo);
        return generateTeam;
    }

    const generateTeamOverview= function (staffInfo){
        return`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset ="UTF-8">
            <meta name ="viewport" content= "width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
            <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
            <link rel ="stylesheet" href="team.css">
            <title> Team Profile Generator </title>
        </head>
        <body>
            <header> 
                <nav class ="navbar" id="navbar">
                    <span class ="navbar=brand mb-0 h1 w-100 text-center" id ="navebar-text">Team Overview </span>
                </nav>
            </header>
            <main>
                <div class = "container">
                <div class="row justify-content-center" id ="team-info">
                    ${staffInfo}
                </div>
                </div>
            </main>
            <script src="./script2.js"></script>
            <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <script src="https://code.iconify.design/2/2.1.1/iconify.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
        </body>
        </html> `;
    }
    
    module.exports= generateHTML;
