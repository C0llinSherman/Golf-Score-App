let courseInfo
let currentTee = 0
let currentCourse = 18300
function getAvailableCourses(cb) {
    fetch('https://golf-courses-api.herokuapp.com/courses/')
        .then(response => response.json())
        .then(data => cb(data.courses))
}

/* getAvailableCourses(populateCourses) */


function getCourseInfo(cb) {
    fetch(`https://golf-courses-api.herokuapp.com/courses/${currentCourse}`)
        .then(response => response.json())
        .then(data => cb(data));
}
getCourseInfo(render)

// console.log(getCourseInfo())
function displayCourseInfo() {
    //Yardage
    let yardageHTML
    document.getElementById('yardage')
}

async function courseVariable(data) {
    await console.log(data)
    courseInfo = data
    console.log(courseInfo)
}
/* async function populateCourses(data) {
    let courseOptionsHtml = '';
    await console.log(data)
    await data.forEach((course) => {
        courseOptionsHtml += `<option value="${course.id}" onclick="changeCourse(${course.id})">${course.name}</option>`;
    });
    document.getElementById('course-select').innerHTML = courseOptionsHtml;
}
 */
function render(data) {
    console.log(currentTee)
    //Yardage
    console.log(data)
    let yardageHTML = '<th scope="row" class="col border">Yardage</td>'
    let yardageOutScore = 0
    let yardageInScore = 0
    for (let i = 0; i < 9; i++) {
        yardageHTML += `<td class="col border">${data.data.holes[i].teeBoxes[currentTee].yards}</td>`
        yardageOutScore += data.data.holes[i].teeBoxes[currentTee].yards
    }
    yardageHTML += `<td class="col border">${yardageOutScore}</td>`
    for (let i = 9; i < 18; i++) {
        yardageHTML += `<td class="col border">${data.data.holes[i].teeBoxes[currentTee].yards}</td>`
        yardageInScore += data.data.holes[i].teeBoxes[currentTee].yards
    }
    yardageHTML += `<td class="col border">${yardageInScore}</td><td class="col border">${yardageOutScore + yardageInScore}</td>`
    document.getElementById('yardage').innerHTML = yardageHTML
    console.log(yardageHTML)
    //Par
    let parHTML = '<th scope="row" class="col border">Par</td>'
    let parOutScore = 0
    let parInScore = 0
    for (let i = 0; i < 9; i++) {
        parHTML += `<td class="col border">${data.data.holes[i].teeBoxes[currentTee].par}</td>`
        parOutScore += data.data.holes[i].teeBoxes[currentTee].par
    }
    parHTML += `<td class="col border">${parOutScore}</td>`
    for (let i = 9; i < 18; i++) {
        parHTML += `<td class="col border">${data.data.holes[i].teeBoxes[currentTee].par}</td>`
        parInScore += data.data.holes[i].teeBoxes[currentTee].par
    }
    parHTML += `<td class="col border">${parInScore}</td><td class="col border">${parOutScore + parInScore}</td>`
    document.getElementById('par').innerHTML = parHTML
    //Handicap
    let handicapHTML = '<th scope="row" class="col border">Handicap</td>'
    let handicapOutScore = 0
    let handicapInScore = 0
    for (let i = 0; i < 9; i++) {
        handicapHTML += `<td class="col border">${data.data.holes[i].teeBoxes[currentTee].hcp}</td>`
        handicapOutScore += data.data.holes[i].teeBoxes[currentTee].hcp
    }
    handicapHTML += `<td class="col border">${handicapOutScore}</td>`
    for (let i = 9; i < 18; i++) {
        handicapHTML += `<td class="col border">${data.data.holes[i].teeBoxes[currentTee].hcp}</td>`
        handicapInScore += data.data.holes[i].teeBoxes[currentTee].hcp
    }
    handicapHTML += `<td class="col border">${handicapInScore}</td><td class="col border">${handicapOutScore + handicapInScore}</td>`
    document.getElementById('handicap').innerHTML = handicapHTML
}

function changeTeeBox(box) {
    currentTee = box
    if (box = 0) {
        console.log("active")
        document.getElementById("teeBox").innerHTML = `
        <a class="btn btn-primary-active" aria-current="page" onclick="changeTeeBox(0)">Pro</a>
        <a class="btn btn-primary" onclick="changeTeeBox(1)">Champion</a>
        <a class="btn btn-primary" onclick="changeTeeBox(2)">Men's</a>
        <a class="btn btn-primary" onclick="changeTeeBox(3)">Women's</a>
    `
    }
    console.log(currentTee)
    getCourseInfo(render)
}
function changeCourse(courseID) {
    currentCourse = courseID
    console.log(currentCourse)
    getCourseInfo(render)
}