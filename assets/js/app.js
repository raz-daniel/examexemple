function collectData() {
    const firstName = document.getElementById(`firstName`).value;
    const lastName = document.getElementById(`lastName`).value;
    const gender = document.querySelector(`input[name="gender"]:checked`).value;
    const age = document.getElementById(`age`).value;
    const phone = document.getElementById(`phone`).value
    const email = document.getElementById(`email`).value
    const color = document.getElementById(`color`).value
    const character = document.getElementById(`character`).value
    const continent = document.getElementById(`continent`).value
    const birthDate = document.getElementById(`birthDate`).value
    const sports = [];
    document.querySelectorAll(`input[name="sport"]:checked`).array.forEach(checkbox => {
        sports.push(checkbox.value);
    });
    const password = document.getElementById(`pass`).value
    const comments = document.getElementById(`textArea`).value
    const group = Math.floor(Math.random() * 4) + 1;

    return {
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        age: age,
        phone: phone,
        email: email,
        color: color,
        character: character,
        continent: continent,
        birthDate: birthDate,
        sports: sports,
        password: password,
        comments: comments,
        group: group,
    }
}

function generateHTML(studentData) {
    const newHTML = `
    <tr style="background-color: ${studentData.color};">
                        <td>${studentData.firstName}</td>
                        <td>${studentData.lastName}</td>
                        <td>${studentData.gender}</td>
                        <td>${studentData.age}</td>
                        <td>${studentData.phone}</td>
                        <td>${studentData.email}</td>
                        <td><img src="${studentData.character}"></td>
                        <td>${studentData.continent}</td>
                        <td>${studentData.birthDate}</td>
                        <td>${studentData.sports}</td>
                        <td>${studentData.password}</td>
                        <td>${students.comments}</td>
                        <td>${studentData.group}</td>
                    </tr>
    `
    return newHTML;
}

function renderHTML(newHTML) {
    const newTable = document.getElementById(`studentsTable`);
    newTable.innerHTML += newHTML;
}

function addToStorage(studentData) {
    const oldStorage = localStorage.getItem(`students`);
    let temporary;
    if (!Array.isArray(oldStorage)) {
        temporary = [];
    } else {
        temporary.push(oldStorage);
    }
    temporary.push(studentData)
    localStorage.setItem(`students`, temporary);
}

function clearForm() {
    const form = document.getElementById(`studentsForm`);
    form.reset();
}

function addStudent(event) {
    event.preventDefault();
    const studentData = collectData();
    const newHTML = generateHTML(studentData);
    renderHTML(newHTML);
    addToStorage(studentData);
    clearForm();
    window.location.href = "outcome.html"
}

function importFromStorage() {
    const imports = localStorage.getItem(`students`);
    if (Array.isArray(imports)) {
        const newHTML = generateHTML(imports);
        renderHTML(newHTML);
    }
}

importFromStorage();