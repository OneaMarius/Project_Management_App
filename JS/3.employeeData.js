
empStr = localStorage.getItem('empStr');
empArr = JSON.parse(empStr);
prStr = localStorage.getItem('prStr');
prArr = JSON.parse(prStr);
const searchArr = window.location.search.split('index:');
console.log(searchArr);
console.log(searchArr[1]);
const index = searchArr[1] - 1;
let oldVal = '';
let vacArr = [];
test1 = false;
test2 = false;

function getAge(dateString) {

    let today = new Date();
    let birthDate = new Date(dateString);
    let age0 = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age0--;
    }
    return age0;
}

function EmpData() {

    let empName = empArr[index].name ;
    let empBirthdate = empArr[index].birthdate ;
    let empPhone = empArr[index].phone ;
    let empEmail = empArr[index].email ;
    let empHired = empArr[index].hired ;
    let empSex = empArr[index].sex ;
    let empAge = getAge(empArr[index].birthdate);

    document.getElementById("empName").innerText = empName;
    document.getElementById("empAge").innerText = empAge;
    document.getElementById("empBirthdate").innerText = empBirthdate;
    document.getElementById("empPhone").innerText = empPhone;
    document.getElementById("empEmail").innerText = empEmail;
    document.getElementById("empHired").innerText = empHired;
    document.getElementById("empSex").innerText = empSex;

    sessionStorage.setItem('empSex',empSex)
    ShowProj();
}

function ShowProj() {

    let option = '<option>-</option>' ;
    if (prArr !== null) {
        prArr.forEach((project) => {
            if (project.pName === empArr[index].project) {
                option += '<option selected>'+project.pName+'</option>';    
            } else {
                option += '<option>'+project.pName+'</option>';
            }
        });
    }
    document.getElementById("select").innerHTML = option; 
}

function selectProj() {

    if (prArr !== null) {
        prArr.forEach(project => {
            if ( project.pName === empArr[index].project) {
                oldVal = empArr[index].project;
            };  
        });
    }
    localStorage.setItem('prStr', JSON.stringify(prArr));  
}

function workFlow () {

    empArr[index].project = document.getElementById('select').value ;
    localStorage.setItem('empStr', JSON.stringify(empArr));
    window.location.replace('1.employees.html');
}

function changeAvatar () {

    avatar = document.getElementById('boxA1');
    empSex = sessionStorage.getItem('empSex');
    if (empSex == 'M') {
        avatar.innerHTML = '<div class="boxA11"></div>';
    } else {
        avatar.innerHTML = '<div class="boxA12"></div>';
    } 
}

function addNewLeave() {

    document.getElementById('leaveButtonDiv').style.display = 'none';
    document.getElementById('leaveFormDiv').style.display = 'block'; 
    document.getElementById('vacationTableDiv').style.display = 'none'; 
}

function resetVacationTable() {

    if (confirm('Are you sure you want to reset table?')) {
        localStorage.setItem('vacStr'+index,'[]');
        localStorage.setItem('newVacTableStr'+index,'');
        vacArr=[];
        document.getElementById('vacationTable').innerHTML = '';
    }
}

function newVac() {

    startDate = document.getElementById('sDate').value;
    endDate = document.getElementById('eDate').value;
    diffInMs   = new Date(endDate) - new Date(startDate);
    diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    const newLeave = {
        sDate : startDate,
        eDate : endDate,
        nrOfDays : diffInDays,
    }
    if (vacArr === null) {
        vacArr = [];
    }
    vacArr.push(newLeave);
    localStorage.setItem('vacStr'+index, JSON.stringify(vacArr));
    vacationTable ();
    document.getElementById('leaveButtonDiv').style.display = 'block';
    document.getElementById('leaveFormDiv').style.display = 'none'; 
    document.getElementById('vacationTableDiv').style.display = 'block'; 
}

vacStr = localStorage.getItem('vacStr'+index);
vacArr = JSON.parse(vacStr);
let totalDays = 0;

function vacationTable() {

    let newVacTable = '<tr><th>No</th><th>Start Date</th><th>End Date</th><th>Days of leave</th><th>option</th></tr>';
    vacArr.forEach((vac,i) =>{
        newVacTable += newLeaveRow(vac,i);
        totalDays += vac.nrOfDays ;
    });
    newVacTable += '<tr><td class="totalDays" colspan="3">Total number of leave days</td><td class="totalDays">'+totalDays+' days</td><td><button id="resetB" onclick="resetVacationTable()">Reset Table</button> </td></tr>' ;
    totalDays = 0;
    localStorage.setItem('newVacTableStr'+index, newVacTable);
    document.getElementById('vacationTable').innerHTML = newVacTable;  
}

function newLeaveRow (vac,i) {

    const index = i+1;
    let tableRow ='<tr><td>'+ index +'</td>';
    tableRow += '<td>'+ vac.sDate +'</td>';
    tableRow += '<td>'+ vac.eDate +'</td>';
    tableRow += '<td>'+ vac.nrOfDays + ' day(s)</td>';
    tableRow += '<td><button id="deleteB" onclick ="deleteVac('+i+')">Delete</button></td></tr>';
    return tableRow;
}

function showVacationTable() {

    let newVacTable = localStorage.getItem('newVacTableStr'+index);
    document.getElementById('vacationTable').innerHTML = newVacTable;
}

function deleteVac(i) {
    
    if (confirm('Are you sure you want to delete this?')) {
        vacArr.splice(i,1); 
        console.log(vacArr);
        localStorage.setItem('vacStr'+index, JSON.stringify(vacArr));
        vacationTable();
   };
};



// FORMULAR


function checkProjStartDate(element,err) {
    value = document.getElementById(element).value;
    birthday = value.split('-');
    year = birthday[0];
    month = birthday[1];
    day = birthday[2];
    today = new Date;
  
    if ((today.getFullYear()-year)>0) {
    test1 = false;
    } else if ((today.getFullYear()-year)==0) {
            if ((today.getMonth()+1)>month) {
                test1 = false;
            } else if ((today.getMonth()+1)==month) {
                if (today.getDate()>day) {
                    test1 = false;
                } else {
                    test1 = true;
                }
            } else {
                test1 = true;
            }
    } else {
    test1 = true;
    }
    testA = parseInt(year)*365+parseInt(month)*30+parseInt(day);
    test1? document.getElementById(err).style.display ='none' : document.getElementById(err).style.display = 'inline-block';
    checkForm()
}

function checkProjEndDate(element,err) {
    value = document.getElementById(element).value;
    birthday = value.split('-');
    year = birthday[0];
    month = birthday[1];
    day = birthday[2];
    today = new Date;
  
    if ((today.getFullYear()-year)>0) {
    test2 = false;
    } else if ((today.getFullYear()-year)==0) {
            if ((today.getMonth()+1)>month) {
                test2 = false;
            } else if ((today.getMonth()+1)==month) {
                if (today.getDate()>day) {
                    test2 = false;
                } else {
                    test2 = true;
                }
            } else {
                test2 = true;
            }
    } else {
    test2 = true;
    }
    testB = parseInt(year)*365+parseInt(month)*30+parseInt(day);
    test2? document.getElementById(err).style.display ='none' : document.getElementById(err).style.display = 'inline-block';
    checkForm()
}


function checkForm() {
    ((test1&&test2)&&(0<(testB-testA))&&((testB-testA)<30))? document.getElementById('addLeaveButton').disabled = false : document.getElementById('addLeaveButton').disabled = true ; 
    ((test1&&test2)&&(0<(testB-testA))&&((testB-testA)<30))? document.getElementById('addLeaveButton').disabled = false : document.getElementById('error2').style.display = 'inline-block'; 

}
