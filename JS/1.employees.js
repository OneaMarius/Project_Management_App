let empArr = [];
let empNameArr = [];
let empStr = '';
empStr = localStorage.getItem('empStr');
empArr = JSON.parse(empStr);
let test1 = false;
let test2 = false;
let test3 = false;
let test4 = false;
let test5 = false;

function showFormAdd() {

    document.getElementById('newEmpDiv').style.display = 'none';
    document.getElementById('formDivAdd').style.display = 'block'; 
    document.getElementById('formDivEdit').style.display = 'none'; 
    document.getElementById('table').style.display = 'none'; 
    document.getElementById('noEmplyees').style.display = 'none'; 
}

function showFormEdit() {

    document.getElementById('newEmpDiv').style.display = 'none';
    document.getElementById('formDivAdd').style.display = 'none'; 
    document.getElementById('formDivEdit').style.display = 'block'; 
    document.getElementById('table').style.display = 'none'; 
    editCheck();
}

function resetTable() {

    if (confirm('Are you sure you want to reset table?')) {
        localStorage.removeItem('tableStr');
        localStorage.removeItem('empStr');
        empArr=[];
        document.getElementById('table').innerHTML = '';
        noEmplyees();
    }
}

function noEmplyees() {

    if (empArr !== [] && empArr && empArr.length != 0) {
        document.getElementById('noEmplyees').style.display = 'none'; 
    } else {
        document.getElementById('noEmplyees').style.display = 'block'; 
        document.getElementById('table').style.display = 'none'; 
    }
}

function changeTable () {

    let tableStr = '<tr><th>Nr</th><th>Name</th><th>Project</th><th>Phone</th><th>Email</th><th>Hired</th><th>Options</th></tr>';
    empArr.forEach((employee,i) =>{
        tableStr += newRow(employee,i);
    });
    localStorage.setItem('tableStr',tableStr);
    document.getElementById('table').innerHTML = tableStr;  
}

function showTable () {

    let tableStr = localStorage.getItem('tableStr');
    document.getElementById('table').innerHTML = tableStr;
}

function newRow (employee,i) {

    const index = i+1;
    let tableRow ='<tr><td>'+index+'</td>';
    tableRow += '<td><a href="3.employeeData.html?index:'+index+'" class="nameLink" >'+employee.name+'</a></td>';
    tableRow += '<td>'+ employee.project +'</td>';
    tableRow += '<td><a id="phoneLink" href="tel:'+ employee.phone +'">'+ employee.phone +'</a></td>';
    tableRow += '<td><a id="emailLink" href="mailto:'+ employee.email +'">'+ employee.email +'</a></td>';
    tableRow += '<td>'+ employee.hired + '</td>';
    tableRow += '<td><button class="edit" onclick="editE('+index+')">EDIT</button><button class="delete" onclick="deleteE('+index+')">DELETE</button></td></tr>';
    
    return tableRow;
}

function newEmp() {

    const newDate = new Date();
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const monthToAdd = (month < 10) ? '0' + month : month;
    const day = newDate.getDate();

    const newEmployee = {
        name : document.getElementById('name').value,
        project: '-',
        phone : document.getElementById('phone').value,
        email : document.getElementById('email').value,
        birthdate : document.getElementById('birthdate').value,
        sex : document.getElementById('sex').value,
        hired: year + '-' + monthToAdd + '-' + day,
    }
    if (empArr === null) {
        empArr = [];
    }
    empArr.push(newEmployee);
    localStorage.setItem('empStr', JSON.stringify(empArr));
    changeTable ();
}

function deleteE(i) {

    if (confirm('Are you sure you want to delete ' + empArr[i-1].name + '?')) {
        empArr.splice(i-1,1); 
        localStorage.setItem('empStr', JSON.stringify(empArr)); 
        changeTable();
        noEmplyees();
    }
}

function editE(i) {
    
    document.getElementById('name1').value=empArr[i-1].name;
    document.getElementById('phone1').value=empArr[i-1].phone;
    document.getElementById('email1').value=empArr[i-1].email;
    document.getElementById('birthdate1').value=empArr[i-1].birthdate;
    document.getElementById('sex1').value=empArr[i-1].sex;
    showFormEdit();
    localStorage.setItem('editedIndex',i-1);
}

function editEmp() {

    let i = localStorage.getItem('editedIndex');
    console.log(i);
    empArr[i].name = document.getElementById('name1').value;
    empArr[i].phone = document.getElementById('phone1').value;
    empArr[i].email = document.getElementById('email1').value;
    empArr[i].birthdate = document.getElementById('birthdate1').value;
    empArr[i].sex = document.getElementById('sex1').value;
    localStorage.setItem('empStr', JSON.stringify(empArr));

}

function employeesNameArr () {

    empArr.forEach(emp => {
        empNameArr.push(emp.name);
    });
    localStorage.setItem('empNameArr', JSON.stringify(empNameArr)); 
} 


// FORMULAR

function checkName(element,err) {
    value = document.getElementById(element).value;
    regex = /^[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+$/;
    test1 = regex.test(value);
    test1? document.getElementById(err).style.display ='none' : document.getElementById(err).style.display = 'inline-block';
    checkForm()
}

function checkPhone(element,err) {
    value = document.getElementById(element).value;
    regex = /^07\d{8}$/;
    test2 = regex.test(value);
    test2? document.getElementById(err).style.display ='none' : document.getElementById(err).style.display = 'inline-block';
    checkForm()
}

function checkEmail(element,err) {
    value = document.getElementById(element).value;
    regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    test3 = regex.test(value);
    test3? document.getElementById(err).style.display ='none' : document.getElementById(err).style.display = 'inline-block';
    checkForm()
}

function checkBirthdate(element,err) {
    value = document.getElementById(element).value;
    birthday = value.split('-');
    year = birthday[0];
    month = birthday[1];
    day = birthday[2];
    today = new Date;
  
    if((today.getFullYear()-year)<=80) {
        if ((today.getFullYear()-year)>18) {
            test4 = true;
        } else if ((today.getFullYear()-year)==18) {
            if ((today.getMonth()+1)>month) {
                    test4 = true; 
            } else if ((today.getMonth()+1) == month) {
                if (today.getDate()>=day) {
                    test4 = true;
                } else {
                    test4 = false; 
                }
            } else {
                    test4 = false; 
            }
        } else {
            test4 = false;
        }
    } else {
        test4 = false;
    }

    test4? document.getElementById(err).style.display ='none' : document.getElementById(err).style.display = 'inline-block';
    checkForm()
}

function checkSex(element,err) {
    value = document.getElementById(element).value;
    test5 = (value == 'M')||(value == 'F');
    test5? document.getElementById(err).style.display ='none' : document.getElementById(err).style.display = 'inline-block';
    checkForm()
}


function checkForm() {
    (test1&&test2&&test3&&test4&&test5)? document.getElementById('addButton').disabled = false : document.getElementById('addButton').disabled = true ; 
    (test1&&test2&&test3&&test4&&test5)? document.getElementById('editButton').disabled = false : document.getElementById('editButton').disabled = true;
}

function editCheck () {
    checkName('name1','error1E');
    checkPhone('phone1','error2E');
    checkEmail('email1','error3E');
    checkBirthdate('birthdate1','error4E');
    checkSex('sex1','error5E');
}