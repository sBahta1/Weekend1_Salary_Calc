console.log('JS');
class employee {
    constructor(firstNameIn, lastNameIn, idIn, titleIn, annualSalaryIn) {
        this.firstName = firstNameIn;
        this.lastName = lastNameIn;
        this.id = idIn;
        this.title = titleIn;
        this.annualSalary = annualSalaryIn;
    }
}

const empOne = new employee('Sam', 'Bahta', '001', 'CEO', 70000);
const empTwo = new employee('Dwight', 'Schrute', 729, 'Assnt. to the Rgnl. Mngr.', 30000);
const empThree = new employee('Chandler', 'Bing', 928, 'WENUS Mngr.', 35000);
const empFour = new employee('Elon', 'Musk', 302, 'Coffee Boy', 15000);

let employeeArr = [empOne, empTwo, empThree, empFour];


$(readyNow);
function readyNow() {
    console.log('JQ');
    let tBody = $('<tbody id="calcBody"></tbody>');
    $('#empTable').append(tBody);
    $('#calcBody').on('click', '.delete-btn', removeFunc);
    $('#subberBtn').on('click', submitFunc);
    for (employ of employeeArr) {
        $('#calcBody').append('<tr>' + '<td>' + employ.firstName + '</td>' + '<td>' + employ.lastName + '</td>' + '<td class="arrFindr">' + employ.id + '</td>' + '<td>' + employ.title + '</td>' + '<td class="salary">' + employ.annualSalary + '</td>' + '<td class="bg-danger text-white">' + '<button id="deletebtn" class="btn btn-danger btn-block delete-btn">Delete</button>' + '</td>' + '</tr>');
    }

    expenceFunc();
}
function submitFunc() {
    let newFirst = $('#firstNameInput').val();
    let newLast = $('#lastNameInput').val();
    let newId = $('#idInput').val();
    let newTitle = $('#titleInput').val();
    let newAnSal = $('#annulSalInput').val();
    employeeArr.push(new employee(newFirst, newLast, newId, newTitle, newAnSal));
    $('#calcBody').append('<tr>' + '<td>' + newFirst + '</td>' + '<td>' + newLast + '</td>' + '<td class="arrFindr">' + newId + '</td>' + '<td>' + newTitle + '</td>' + '<td class="salary">' + newAnSal + '</td>' + '<td class="bg-danger text-white">' + '<button class="btn btn-danger btn-block delete-btn">Delete</button>' + '</td>' + '</tr>');
    console.log(employeeArr);
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#annulSalInput').val('');
    expenceFunc()
}
let monthlyWages = 0;
function expenceFunc() {
    for (worker of employeeArr) {
        monthlyWages += Number(worker.annualSalary);
    }
    monthlyWages /= 12;
    if (monthlyWages > 20000) {
        $("#monthlyTotal").css("color", "red");
    }
    updateMonthlyWages();
}

function updateMonthlyWages() {
    $('#monthlyTotal').text(Math.round(Number(monthlyWages)).toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
    console.log(monthlyWages);
}


function removeFunc() {
    console.log('delete clicked');

    let salary = $(this).parent().parent().find('.salary').text();
    monthlyWages -= (salary / 12);
    //attempt to search array for employee by ID number and splice out employee 
    let idFound = $(this).parent().parent().find('.arrFindr').text();
    for (peeps of employeeArr) {
        if (peeps.id == idFound) {
            // found!
            console.log(idFound, employeeArr.indexOf(peeps));
            let indexFound = employeeArr.indexOf(peeps);
            employeeArr.splice(indexFound, indexFound + 1);
            console.log(employeeArr);
        }
    }


    updateMonthlyWages();
    $(this).parent().parent().remove();
}

