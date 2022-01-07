function login() {

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let loged;
    if (username === 'user' && password === '1234') {
        loged = true;
        sessionStorage.setItem('loged','true');
        window.location.replace('1.employees.html');
    } else {
        document.getElementById('infoBox').style.display = 'block';
        loged = false;
        sessionStorage.setItem('loged','false');
    }
}

function loginView() {

    loged = true;
    sessionStorage.setItem('loged','true');
    window.location.replace('1.employees.html');

}

function goHome() {
    location.assign('https://www.mariusonea.ro');
 }
 
// Set Dummy_Data

const projTabStart = '<tr><th>Nr</th><th>Project Name</th><th>Duration</th><th>Employees Needed</th><th>Employees Work</th><th>Added</th><th>Start Date</th><th>Options</th></tr><tr><td>1</td><td><a href="4.projectData.html?index:1" class="nameLink" >Project Snow</td><td>6 month(s)</td><td>3</td><td id="workflow0">2</td><td>2021-11-20</td><td>2021-12-01</td><td><button class="edit" onclick="editP(1)">EDIT</button><button class="delete" onclick="deleteP(1)">DELETE</button></td></tr><tr><td>2</td><td><a href="4.projectData.html?index:2" class="nameLink" >Project Buyback</td><td>2 month(s)</td><td>2</td><td id="workflow1">3</td><td>2021-11-20</td><td>2022-01-13</td><td><button class="edit" onclick="editP(2)">EDIT</button><button class="delete" onclick="deleteP(2)">DELETE</button></td></tr><tr><td>3</td><td><a href="4.projectData.html?index:3" class="nameLink" >Project New Life</td><td>12 month(s)</td><td>5</td><td id="workflow2">4</td><td>2021-11-20</td><td>2022-01-01</td><td><button class="edit" onclick="editP(3)">EDIT</button><button class="delete" onclick="deleteP(3)">DELETE</button></td></tr><tr><td>4</td><td><a href="4.projectData.html?index:4" class="nameLink" >Project Nine</td><td>3 month(s)</td><td>2</td><td id="workflow3">2</td><td>2021-11-20</td><td>2021-12-06</td><td><button class="edit" onclick="editP(4)">EDIT</button><button class="delete" onclick="deleteP(4)">DELETE</button></td></tr>';
const empTabStart = '<tr><th>Nr</th><th>Name</th><th>Project</th><th>Phone</th><th>Email</th><th>Hired</th><th>Options</th></tr><tr><td>1</td><td><a href="3.employeeData.html?index:1" class="nameLink" >Boris Ion</a></td><td>Project Snow</td><td><a id="phoneLink" href="tel:0724537635">0724537635</a></td><td><a id="emailLink" href="mailto:boris@gmail.com">boris@gmail.com</a></td><td>2021-11-20</td><td><button class="edit" onclick="editE(1)">EDIT</button><button class="delete" onclick="deleteE(1)">DELETE</button></td></tr><tr><td>2</td><td><a href="3.employeeData.html?index:2" class="nameLink" >Popescu Mihai</a></td><td>Project Buyback</td><td><a id="phoneLink" href="tel:0724511221">0724511221</a></td><td><a id="emailLink" href="mailto:mihai@gmail.com">mihai@gmail.com</a></td><td>2021-11-20</td><td><button class="edit" onclick="editE(2)">EDIT</button><button class="delete" onclick="deleteE(2)">DELETE</button></td></tr><tr><td>3</td><td><a href="3.employeeData.html?index:3" class="nameLink" >Iacob Elena</a></td><td>Project New Life</td><td><a id="phoneLink" href="tel:0723456763">0723456763</a></td><td><a id="emailLink" href="mailto:elena@gmail.com">elena@gmail.com</a></td><td>2021-11-20</td><td><button class="edit" onclick="editE(3)">EDIT</button><button class="delete" onclick="deleteE(3)">DELETE</button></td></tr><tr><td>4</td><td><a href="3.employeeData.html?index:4" class="nameLink" >Albu Violeta</a></td><td>Project Buyback</td><td><a id="phoneLink" href="tel:0723512512">0723512512</a></td><td><a id="emailLink" href="mailto:violeta@gmail.com">violeta@gmail.com</a></td><td>2021-11-20</td><td><button class="edit" onclick="editE(4)">EDIT</button><button class="delete" onclick="deleteE(4)">DELETE</button></td></tr><tr><td>5</td><td><a href="3.employeeData.html?index:5" class="nameLink" >Grigore Marian</a></td><td>Project New Life</td><td><a id="phoneLink" href="tel:0734817162">0734817162</a></td><td><a id="emailLink" href="mailto:marian@gmail.com">marian@gmail.com</a></td><td>2021-11-20</td><td><button class="edit" onclick="editE(5)">EDIT</button><button class="delete" onclick="deleteE(5)">DELETE</button></td></tr><tr><td>6</td><td><a href="3.employeeData.html?index:6" class="nameLink" >Paul Alexandru</a></td><td>Project Snow</td><td><a id="phoneLink" href="tel:0742625182">0742625182</a></td><td><a id="emailLink" href="mailto:alexandru@gmail.com">alexandru@gmail.com</a></td><td>2021-11-20</td><td><button class="edit" onclick="editE(6)">EDIT</button><button class="delete" onclick="deleteE(6)">DELETE</button></td></tr><tr><td>7</td><td><a href="3.employeeData.html?index:7" class="nameLink" >Dumitrescu Bianca</a></td><td>Project New Life</td><td><a id="phoneLink" href="tel:0725128261">0725128261</a></td><td><a id="emailLink" href="mailto:bianca@yahoo.com">bianca@yahoo.com</a></td><td>2021-11-20</td><td><button class="edit" onclick="editE(7)">EDIT</button><button class="delete" onclick="deleteE(7)">DELETE</button></td></tr><tr><td>8</td><td><a href="3.employeeData.html?index:8" class="nameLink" >Cazacu Miruna</a></td><td>Project New Life</td><td><a id="phoneLink" href="tel:0726253712">0726253712</a></td><td><a id="emailLink" href="mailto:miruna@yahoo.com">miruna@yahoo.com</a></td><td>2021-11-20</td><td><button class="edit" onclick="editE(8)">EDIT</button><button class="delete" onclick="deleteE(8)">DELETE</button></td></tr><tr><td>9</td><td><a href="3.employeeData.html?index:9" class="nameLink" >Nastase Gabriela</a></td><td>Project Nine</td><td><a id="phoneLink" href="tel:0726152541">0726152541</a></td><td><a id="emailLink" href="mailto:gabriela@yahoo.com">gabriela@yahoo.com</a></td><td>2021-11-20</td><td><button class="edit" onclick="editE(9)">EDIT</button><button class="delete" onclick="deleteE(9)">DELETE</button></td></tr><tr><td>10</td><td><a href="3.employeeData.html?index:10" class="nameLink" >Marius Onea</a></td><td>Project Nine</td><td><a id="phoneLink" href="tel:0726152815">0726152815</a></td><td><a id="emailLink" href="mailto:marius@yahoo.com">marius@yahoo.com</a></td><td>2021-11-20</td><td><button class="edit" onclick="editE(10)">EDIT</button><button class="delete" onclick="deleteE(10)">DELETE</button></td></tr><tr><td>11</td><td><a href="3.employeeData.html?index:11" class="nameLink" >Carmen Prislopan</a></td><td>Project Buyback</td><td><a id="phoneLink" href="tel:0721242122">0721242122</a></td><td><a id="emailLink" href="mailto:asuramyx@yahoo.com">asuramyx@yahoo.com</a></td><td>2021-11-20</td><td><button class="edit" onclick="editE(11)">EDIT</button><button class="delete" onclick="deleteE(11)">DELETE</button></td></tr>';
const empVacStart = '<tr><th>No</th><th>Start Date</th><th>End Date</th><th>Days of leave</th><th>option</th></tr><tr><td>1</td><td>2021-11-22</td><td>2021-11-30</td><td>8 day(s)</td><td><button id="deleteB" onclick ="deleteVac(0)">Delete</button></td></tr><tr><td>2</td><td>2021-12-22</td><td>2021-12-24</td><td>2 day(s)</td><td><button id="deleteB" onclick ="deleteVac(1)">Delete</button></td></tr><tr><td class="totalDays" colspan="3">Total number of leave days</td><td class="totalDays">10 days</td><td><button id="resetB" onclick="resetVacationTable()">Reset Table</button> </td></tr>'
const empStrStart = `[
    {
        "name": "Onea Marius",
        "project": "Proiectul 1",
        "phone": "0726252726",
        "email": "marius@gmail.com",
        "birthdate": "1992-04-12",
        "sex": "M",
        "hired": "2021-11-20"
    },
    {
        "name": "Olaru Diana",
        "project": "Proiectul 3",
        "phone": "0726252628",
        "email": "diana@gmail.com",
        "birthdate": "2002-02-02",
        "sex": "F",
        "hired": "2021-11-20"
    },
    {
        "name": "Albu Cristi",
        "project": "Proiectul 1",
        "phone": "0726251261",
        "email": "cristi@yahoo.com",
        "birthdate": "1990-10-31",
        "sex": "M",
        "hired": "2021-11-20"
    },
    {
        "name": "Brasov Teo",
        "project": "Proiectul 2",
        "phone": "0782617282",
        "email": "teo@gmail.com",
        "birthdate": "1997-03-29",
        "sex": "M",
        "hired": "2021-11-20"
    },
    {
        "name": "Macelaru Larisa",
        "project": "Proiectul 3",
        "phone": "0726261826",
        "email": "larisa@yahoo.com",
        "birthdate": "1994-07-20",
        "sex": "F",
        "hired": "2021-11-20"
    },
    {
        "name": "Popescu Ion",
        "project": "Proiectul 3",
        "phone": "0726252829",
        "email": "ion@gmail.com",
        "birthdate": "1997-11-16",
        "sex": "M",
        "hired": "2021-11-20"
    },
    {
        "name": "Iacob Madalina",
        "project": "Proiectul 2",
        "phone": "0762892916",
        "email": "madalina@yahoo.com",
        "birthdate": "2000-11-06",
        "sex": "F",
        "hired": "2021-11-20"
    }
]`;
const empNameArrStart = `[
    "Onea Marius",
    "Olaru Diana",
    "Albu Cristi",
    "Brasov Teo",
    "Macelaru Larisa",
    "Popescu Ion",
    "Iacob Madalina"
]`;
const prStrStart = `[
    {
        "pName": "Proiectul 1",
        "pEmpNeed": "1",
        "pEmpWork": 2,
        "pStartDate": "2021-12-01",
        "pDuration": "3",
        "pAdded": "2021-11-20"
    },
    {
        "pName": "Proiectul 2",
        "pEmpNeed": "4",
        "pEmpWork": 2,
        "pStartDate": "2021-12-15",
        "pDuration": "6",
        "pAdded": "2021-11-20"
    },
    {
        "pName": "Proiectul 3",
        "pEmpNeed": "3",
        "pEmpWork": 3,
        "pStartDate": "2022-01-01",
        "pDuration": "4",
        "pAdded": "2021-11-20"
    }
]`;
const prNameArrStart = `[
    "Proiectul 1",
    "Proiectul 2",
    "Proiectul 3"
]`;
const vacStr0Start = `[
    {
        "sDate": "2021-11-22",
        "eDate": "2021-11-26",
        "nrOfDays": 4
    },
    {
        "sDate": "2021-12-06",
        "eDate": "2021-12-10",
        "nrOfDays": 4
    }
]`;

if (!localStorage.getItem('empNameArr')) {
    console.log('case 1');
    localStorage.setItem('tableStr',`${empTabStart}`);
    localStorage.setItem('tableProjStr',`${projTabStart}`);
    localStorage.setItem('newVacTableStr0',`${empVacStart}`);
    localStorage.setItem('vacStr0',`${vacStr0Start}`);
    localStorage.setItem('prNameArr',`${prNameArrStart}`);
    localStorage.setItem('prStr',`${prStrStart}`);
    localStorage.setItem('empNameArr',`${empNameArrStart}`);
    localStorage.setItem('empStr',`${empStrStart}`);
}
