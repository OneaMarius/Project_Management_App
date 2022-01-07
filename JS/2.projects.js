
empStr = localStorage.getItem('empStr');
empArr = JSON.parse(empStr);
let prArr = [];
let prNameArr = [];
let prStr = '';
prStr = localStorage.getItem('prStr');
prArr = JSON.parse(prStr);
let test1 = false;
let test2 = false;
let test3 = false;
let test4 = false;
 
function showFormAddP() {

    document.getElementById('newProjDiv').style.display = 'none';
    document.getElementById('formProjDivAdd').style.display = 'block'; 
    document.getElementById('formProjDivEdit').style.display = 'none'; 
    document.getElementById('table').style.display = 'none'; 
    document.getElementById('noProjects').style.display = 'none'; 
}

function showFormEditP() {

    document.getElementById('newProjDiv').style.display = 'none';
    document.getElementById('formProjDivAdd').style.display = 'none'; 
    document.getElementById('formProjDivEdit').style.display = 'block'; 
    document.getElementById('table').style.display = 'none'; 
    editCheck();
}
 
function resetTable() {

    if (confirm('Are you sure you want to reset table?')) {
        localStorage.removeItem('tableProjStr');
        localStorage.removeItem('prStr');
        prArr=[];
        document.getElementById('table').innerHTML = '';
        noProjects();
    };
}
 
function noProjects() {

    if (prArr !== [] && prArr && prArr.length != 0) {
        document.getElementById('noProjects').style.display = 'none'; 
    } else {
        document.getElementById('noProjects').style.display = 'block'; 
        document.getElementById('table').style.display = 'none'; 
        document.getElementById('legend').style.display = 'none'; 
    }
}

function changeTable () {

    let tableStr = '<tr><th>Nr</th><th>Project Name</th><th>Duration</th><th>Employees Needed</th><th>Employees Work</th><th>Added</th><th>Start Date</th><th>Options</th></tr>';
    prArr.forEach((project,i) =>{
        tableStr += newRow(project,i);
    });
    localStorage.setItem('tableProjStr',tableStr);
    document.getElementById('table').innerHTML = tableStr;  
}

function showTable() {

    let tableStr = localStorage.getItem('tableProjStr');
    document.getElementById('table').innerHTML = tableStr;
}

function newRow (project,i) {

    const index = i+1;
    let tableRow ='<tr><td>'+(i+1)+'</td>';
    tableRow += '<td><a href="4.projectData.html?index:'+index+'" class="nameLink" >'+ project.pName + '</td>';
    tableRow += '<td>'+ project.pDuration + ' month(s)</td>';
    tableRow += '<td>'+ project.pEmpNeed + '</td>';
    tableRow += '<td id="workflow'+i+'">'+ project.pEmpWork + '</td>';
    tableRow += '<td>'+ project.pAdded + '</td>';
    tableRow += '<td>'+ project.pStartDate + '</td>';
    tableRow += '<td><button class="edit" onclick="editP('+index+')">EDIT</button><button class="delete" onclick="deleteP('+index+')">DELETE</button></td></tr>';
    return tableRow;
}

function newProject() {

    const newDate = new Date();
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const monthToAdd = (month < 10) ? '0' + month : month;
    const day = newDate.getDate();

    const newProject = {
        pName : document.getElementById('pName').value,
        pEmpNeed : document.getElementById('pEmpNeed').value,
        pEmpWork : 0,
        pStartDate : document.getElementById('pStartDate').value,
        pDuration : document.getElementById('pDuration').value,
        pAdded : year + '-' + monthToAdd + '-' + day,
    }
    if (prArr === null) {
        prArr = [];
    }
    prArr.push(newProject);
    localStorage.setItem('prStr', JSON.stringify(prArr));
    changeTable ();
}



function colorWorkFlow () {

    let i = -1;
    prArr.forEach(project => {
        i++;
        if ( project.pEmpWork < project.pEmpNeed) {
            document.getElementById('workflow'+i).style.backgroundColor = 'red';
        } else if (project.pEmpWork == project.pEmpNeed) {
            document.getElementById('workflow'+i).style.backgroundColor = 'rgb(42, 169, 243)';
        } else if (project.pEmpWork > project.pEmpNeed){
            document.getElementById('workflow'+i).style.backgroundColor = 'rgb(6, 185, 6)';
        };  
    });
    localStorage.setItem('prStr', JSON.stringify(prArr)); 
}

function deleteP(i) {

    if (confirm('Are you sure you want to delete ' + prArr[i-1].pName + '?')) {
        prArr.splice(i-1,1); 
        localStorage.setItem('prStr', JSON.stringify(prArr)); 
        changeTable();
        noProjects();
    };
}

function editP(i) {
    
    document.getElementById('pName1').value=prArr[i-1].pName;
    document.getElementById('pDuration1').value=prArr[i-1].pDuration;
    document.getElementById('pStartDate1').value=prArr[i-1].pStartDate;
    document.getElementById('pEmpNeed1').value=prArr[i-1].pEmpNeed;
    showFormEditP();
    localStorage.setItem('editedIndex',i-1);
}

function editProject() {

    let i = localStorage.getItem('editedIndex');
    console.log(i);
    prArr[i].pName = document.getElementById('pName1').value;
    prArr[i].pDuration = document.getElementById('pDuration1').value;
    prArr[i].pStartDate = document.getElementById('pStartDate1').value;
    prArr[i].pEmpNeed = document.getElementById('pEmpNeed1').value;
    localStorage.setItem('prStr', JSON.stringify(prArr));
}

function projectNameArr () {

    prArr.forEach(project => {
        prNameArr.push(project.pName);
    });
    localStorage.setItem('prNameArr', JSON.stringify(prNameArr)); 
    countWorkingEmployees ();
} 

function countWorkingEmployees () {

    let countNr = 0;
    prNameArr.forEach((proj,i) =>{
        empArr.forEach((employee)  => {
            if (employee.project === proj ) {
                countNr++;
            }
        });
        prArr[i].pEmpWork = countNr;
        countNr = 0;
        localStorage.setItem('prStr', JSON.stringify(prArr));
    });
    changeTable();
}


// FORMULAR

function checkProjName(element,err) {
    value = document.getElementById(element).value;
    regex = /[a-zA-Z0-9._]/;
    test1 = regex.test(value);
    test1? document.getElementById(err).style.display ='none' : document.getElementById(err).style.display = 'inline-block';
    checkForm()
}

function checkProjDuration(element,err) {
    value = document.getElementById(element).value;
    test2 = (value>0)&&(value<=24);
    test2? document.getElementById(err).style.display ='none' : document.getElementById(err).style.display = 'inline-block';
    checkForm()
}


function checkProjStartDate(element,err) {
    value = document.getElementById(element).value;
    birthday = value.split('-');
    year = birthday[0];
    month = birthday[1];
    day = birthday[2];
    today = new Date;
  
    if ((today.getFullYear()-year)>0) {
    test3 = false;
    } else if ((today.getFullYear()-year)==0) {
            if ((today.getMonth()+1)>month) {
                test3 = false;
            } else if ((today.getMonth()+1)==month) {
                if (today.getDate()>day) {
                    test3 = false;
                } else {
                    test3 = true;
                }
            } else {
                test3 = true;
            }
    } else {
    test3 = true;
    }

    test3? document.getElementById(err).style.display ='none' : document.getElementById(err).style.display = 'inline-block';
    checkForm()
}

function checkProjEmpNeed(element,err) {
    value = document.getElementById(element).value;
    test4 = (value>0);
    test4? document.getElementById(err).style.display ='none' : document.getElementById(err).style.display = 'inline-block';
    checkForm()
}


function checkForm() {
    (test1&&test2&&test3&&test4)? document.getElementById('addButton').disabled = false : document.getElementById('addButton').disabled = true ; 
    (test1&&test2&&test3&&test4)? document.getElementById('editButton').disabled = false : document.getElementById('editButton').disabled = true;
}

function editCheck () {
    checkProjName('pName1','error1E');
    checkProjDuration('pDuration1','error2E');
    checkProjStartDate('pStartDate1','error3E');
    checkProjEmpNeed('pEmpNeed1','error4E');
}