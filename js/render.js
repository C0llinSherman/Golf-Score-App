function render(data) {
    //Current Tee
    {
        if (currentCourse == 18300) {
            courseName = 'Fox Hollow'
        }
        else if (currentCourse == 11819) {
            courseName = 'Thanksgiving Point'
        }
        else {
            courseName = "Spanish Oaks"
        }
    }
    //Current Course
    {
        if (currentTee == 0) {
            teeName = 'Pro'
        } else if (currentTee == 1) {
            teeName = 'Champion'
        } else if (currentTee == 2) {
            teeName = "Men's"
        } else if (currentTee == 3) {
            teeName = "Women's"
        }
    }

    document.getElementById('current').innerText = "Current Score Card: " + courseName + " " + teeName
    //Yardage
    {
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
    }
    //Par
    {
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
    }
    //Handicap
    {
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
    //Players
    {
        //Player 1
        if (players[0]) {
            let playerHTML1 = ``
            playerHTML1 += `<th scope="row" class='col border'>${players[0].name}</th>`
            for (let i = 0; i < 9; i++) {
                playerHTML1 += `<td class="col border"><input id="p1h${i}"></td>`

            }
            playerHTML1 += `<td class="col border" id="outScore1"></td>`
            for (let i = 9; i < 18; i++) {
                playerHTML1 += `<td class="col border"><input id="p1h${i}"></td>`
            }
            playerHTML1 += `<td class="col border" id="inScore1"></td>
    <td class="col border" id="totalScore1"></td>`
            document.getElementById(`player1`).innerHTML = playerHTML1
            document.getElementById('playerName').value = ''
        }
        //Player 2
        if (players[1]) {
            let playerHTML2 = ``
            playerHTML2 += `<th scope="row" class='col border'>${players[1].name}</th>`
            for (let i = 0; i < 9; i++) {
                playerHTML2 += `<td class="col border"><input id="p2h${i}"></td>`

            }
            playerHTML2 += `<td class="col border" id="outScore2"></td>`
            for (let i = 9; i < 18; i++) {
                playerHTML2 += `<td class="col border"><input id="p2h${i}"></td>`
            }
            playerHTML2 += `<td class="col border" id="inScore2"></td>
    <td class="col border" id="totalScore2"></td>`
            document.getElementById(`player2`).innerHTML = playerHTML2
            document.getElementById('playerName').value = ''
        }
        //Player 3
        if (players[2]) {
            let playerHTML3 = ``
            playerHTML3 += `<th scope="row" class='col border'>${players[2].name}</th>`
            for (let i = 0; i < 9; i++) {
                playerHTML3 += `<td class="col border"><input id="p3h${i}"></td>`

            }
            playerHTML3 += `<td class="col border" id="outScore3"></td>`
            for (let i = 9; i < 18; i++) {
                playerHTML3 += `<td class="col border"><input id="p3h${i}"></td>`
            }
            playerHTML3 += `<td class="col border" id="inScore3"></td>
    <td class="col border" id="totalScore3"></td>`
            document.getElementById(`player3`).innerHTML = playerHTML3
            document.getElementById('playerName').value = ''
        }
        //Player 4
        if (players[3]) {
            let playerHTML4 = ``
            playerHTML4 += `<th scope="row" class='col border'>${players[3].name}</th>`
            for (let i = 0; i < 9; i++) {
                playerHTML4 += `<td class="col border"><input id="p4h${i}"></td>`

            }
            playerHTML4 += `<td class="col border" id="outScore4"></td>`
            for (let i = 9; i < 18; i++) {
                playerHTML4 += `<td class="col border"><input id="p4h${i}"></td>`
            }
            playerHTML4 += `<td class="col border" id="inScore4"></td>
    <td class="col border" id="totalScore4"></td>`
            document.getElementById(`player4`).innerHTML = playerHTML4
            document.getElementById('playerName').value = ''
        }
    }
}


/* //Players
for (let j = 0; j < 4; j++) {
    if (players[j]) {
        let playerHTML = ``
        playerHTML += `<th scope="row" class='col border'>${players[j].name}</th>`
        for (let i = 0; i < 9; i++) {
            playerHTML += `<td class="col border"><input id="pj${j}h${i}"></td>`

        }
        playerHTML += `<td class="col border" id="outScore"></td>`
        for (let i = 9; i < 18; i++) {
            playerHTML += `<td class="col border"><input id="pj${j}h${i}"></td>`
        }
        playerHTML += `<td class="col border" id="inScore"></td>
<td class="col border" id="totalScore"></td>`
        document.getElementById(`player${j}`).innerHTML = playerHTML
        document.getElementById('playerName').value = ''
    }
} */