empStr = localStorage.getItem('empStr');
empArr = JSON.parse(empStr);
prStr = localStorage.getItem('prStr');
prArr = JSON.parse(prStr);
const searchArr = window.location.search.split('=');
const index = searchArr[0].slice(-1) - 1;
let oldVal = '';
let no = 0;

function prData() {

    let prName = prArr[index].pName ;
    let prDuration = prArr[index].pDuration ;
    let prAdded = prArr[index].pAdded ;
    let prStartDate = prArr[index].pStartDate ;
    let prEmpNeed = prArr[index].pEmpNeed ;
    let prEmpWork = prArr[index].pEmpWork ;

    document.getElementById("prName").innerText = prName;
    document.getElementById("prDuration").innerText = prDuration;
    document.getElementById("prAdded").innerText = prAdded;
    document.getElementById("prStartDate").innerText = prStartDate;
    document.getElementById("prEmpNeed").innerText = prEmpNeed;
    document.getElementById("prEmpWork").innerText = prEmpWork;

    if ((localStorage.getItem('projLeader'+index)) !== null) {
        document.getElementById("prLeader").innerText = localStorage.getItem('projLeader'+index); 
    } else {
        document.getElementById("prLeader").innerText = 'No Project Leader';
    };

    SelectEmpLeader();

    if (document.getElementById("prSelect").value === 'No Project Leader') {
        document.getElementById("prLeader").innerText = 'No Project Leader'; 
    }
}

function showProjectEmployees () {

    let tableProjEmp = '<tr><th>No</th><th>Employee Name</th><th>Employee Phone</th><th>Employee Email</th></tr>';
    empArr.forEach((employee) =>{
        if (employee.project === prArr[index].pName ) {
            no++;
            tableProjEmp += '<tr><td>'+ no + '</td><td>' + employee.name + '</td><td>'+ employee.phone + '</td><td>'+ employee.email + '</td></tr>';
        }
    });
    document.getElementById('projectTable').innerHTML = tableProjEmp ;
    no = 0;
}

function SelectEmpLeader() {

    let option = '<option>No Project Leader</option>' ;
    if (empArr !== null) {
        empArr.forEach((emp) => {
            if (emp.project === prArr[index].pName && emp.name === localStorage.getItem('projLeader'+index) ) {
                option += '<option selected>'+emp.name+'</option>';    
            } else if (emp.project === prArr[index].pName) {
                option += '<option>'+emp.name+'</option>';
            }
        });
    }
    document.getElementById("prSelect").innerHTML = option; 
}

function SelectEmp() {

    let projLeader = document.getElementById("prSelect").value;
    document.getElementById("prLeader").innerText = projLeader;
    localStorage.setItem('projLeader'+index, projLeader);
}


