function collectData() {
    const firstName=document.getElementById(`firstName`).value;
    const lastName=document.getElementById(`lastName`).value;
    const gender=document.querySelector(`input[name="gender"]:checked`).value;
    const age=document.getElementById(`age`).value;
    const phone=document.getElementById(`phone`).value
    const email=document.getElementById(`email`).value
    const color=document.getElementById(`color`).value
    const character=document.getElementById(`character`).value
    const photo=document.getElementById(`formFile`).value
    const continent=document.getElementById(`continent`).value
    const birthDate=document.getElementById(`birthDate`).value
    const sports = [];
    document.querySelectorAll(`input[name="sport"]:checked`).array.forEach(checkbox => {
        sports.push(checkbox.value);
    });
    const password=document.getElementById(`pass`).value
    const group=Math.floor(Math.random()*4)+1;
    
    return {
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        age: age,
        phone: phone,
        email: email,
        color: color,
        character: character,
        photo: photo,
        continent: continent,
        birthDate: birthDate,
        sports: sports,
        password: password,
        group: group,
    }
}

function generateHTML(studentData) {

}

function renderHTML(newHTML) {

}

function addToStorage(studentData) {

}

function clearForm() {

}

function addStudent(event) {
    event.preventDefault();
    const studentData=collectData();
    const newHTML=generateHTML(studentData);
    renderHTML(newHTML);
    addToStorage(studentData);
    clearForm();
}

function importFromStorage() {

}

importFromStorage();