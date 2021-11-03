let currentTee = 0
let currentCourse = 18300
let playerCount = 0
let players = []
class Player {
    constructor(name, scores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) {
        this.name = name;
        this.id = Util.newGuid('player');
        this.scores = scores;
    }
}
function getAvailableCourses(cb) {
    fetch('https://golf-courses-api.herokuapp.com/courses/')
        .then(response => response.json())
        .then(data => cb(data.courses))
}
function getCourseInfo(cb) {
    fetch(`https://golf-courses-api.herokuapp.com/courses/${currentCourse}`)
        .then(response => response.json())
        .then(data => cb(data));
}
getCourseInfo(render)
function changeTeeBox(box) {
    currentTee = box
    getCourseInfo(render)
}
function changeCourse(courseID) {
    currentCourse = courseID
    getCourseInfo(render)
}
function addPlayer(name) {
    playerCount += 1
    name = document.getElementById('playerName').value
    players.push(new Player(name))
    document.getElementById('playerName').value = ''
    getCourseInfo(render)
    validatePlayerCount()
}
function validatePlayerCount() {
    if (playerCount > 4) {
        alert("Maximum player count has been met")
    }
}
addPlayer()
getScores()
