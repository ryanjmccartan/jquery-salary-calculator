let employees =[];

$(document).ready(onReady);

function onReady(){
    $('#submitBtn').on('click', addEmployee);
    $('#deleteBtn').on('click', delEmployee);
}

function addEmployee(){
    let firstNameVal = $('#firstName').val();
    let lastNameVal = $('#lastName').val();
    let idNumVal = $('#idNumber').val();
    let jobTitleVal = $('#jobTitle').val();
    let annSalVal = $('#salary').val();

    let newEmployee = {
     firstName: firstNameVal,
     lastName: lastNameVal,
     idNumber: idNumVal,
     jobTitle: jobTitleVal,
     annualSal: annSalVal   
    }
    employees.push(newEmployee);
    console.log('employees: ', employees);


    // empty out inputs
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#salary').val('');
}

function delEmployee(){
    
}

