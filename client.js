console.log('JS');
$(readyNow);
function readyNow() {
    console.log('JQ');
    let tBody = $('<tbody id="calcBody"></tbody>');
    $('#empTable').append(tBody);


    class employee {
        constructor(firstNameIn, lastNameIn, idIn, titleIn, annualSalaryIn) {
            this.firstName = firstNameIn;
            this.lastName = lastNameIn;
            this.id = idIn;
            this.title = titleIn;
            this.annualSalary = annualSalaryIn;
        }
    }

    const empOne = new employee('Sam', 'Bahta', '001', 'CEO', 150000);
    const empTwo = new employee('Amalia', 'Ellison', '002', 'Legal Counsel', 60000);
    const empThree = new employee('Dwight', 'Schrute', 729, 'Assnt. to the Rgnl. Mngr.', 30000);
    const empFour = new employee('Chandler', 'Bing', 928, 'WENIS Mgmt.', 35000);
    const empFive = new employee('Elon', 'Musk', 302, 'Coffee Boy', 15000);
    
    const employeeArr = [empOne, empTwo, empThree, empFour, empFive];



    for (employ of employeeArr) {
        $('#calcBody').append('<tr>' + '<td>' + employ.firstName + '</td>' + '<td>' + employ.lastName + '</td>' + '<td>' + employ.id + '</td>' + '<td>' + employ.title + '</td>' + '<td>' + employ.annualSalary + '</td>' + '</tr>');
    }
   $('#subberBtn').on('click', submitFunc)
   function submitFunc() {
       let newFirst = $('#firstNameInput').val();
       let newLast = $('#lastNameInput').val();
       let newId = $('#idInput').val();
       let newTitle = $('#titleInput').val() ;
       let newAnSal = $('#annulSalInput').val() ;
       console.log(newFirst, newLast, newId, newTitle, newAnSal);
       $('#firstNameInput').val('');
       $('#lastNameInput').val('');
       $('#idInput').val('');
       $('#titleInput').val('') ;
       $('#annulSalInput').val('') ;
       $('#calcBody').append('<tr>'+'<td>'+newFirst+'</td>'+'<td>'+newLast+'</td>'+'<td>'+newId+'</td>'+'<td>'+newTitle+'</td>'+'<td>'+newAnSal+'</td>'+'</tr>');
    }



}
