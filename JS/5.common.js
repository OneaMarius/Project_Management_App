function checkLogin () {

    let loged = sessionStorage.getItem('loged');
    if (loged === null || loged === 'false' ) {
        window.location.replace('0.login.html');
    }
}

function logout() {

    sessionStorage.setItem('loged','false');
    window.location.reload();
}

function cancelEmp() {
    
    if (confirm('Are you sure you want to Cancel?')) {
        window.location.replace('1.employees.html');
    } 
}

function cancelProj() {

    if (confirm('Are you sure you want to Cancel?')) {
        window.location.replace('2.projects.html');
    }
}

