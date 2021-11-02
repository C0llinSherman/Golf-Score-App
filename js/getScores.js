function getScores() {
    //Player1
    if (players[0]) {
        let outScore1 = 0
        let inScore1 = 0
        //OutScore
        for (let i = 0; i < 9; i++) {
            score = document.getElementById(`p1h${i}`).value;
            players[0].scores.splice(i, 1, score)
        }
        for (let i = 0; i < 9; i++) {
            if (players[0].scores[i])
                outScore1 += parseInt(players[0].scores[i], 10)
        }
        document.getElementById('outScore1').innerText = outScore1
        //InScore
        for (let i = 9; i < 18; i++) {
            score = document.getElementById(`p1h${i}`).value;
            players[0].scores.splice(i, 1, score)
        }
        for (let i = 9; i < 18; i++) {
            if (players[0].scores[i])
                inScore1 += parseInt(players[0].scores[i], 10)
        }
        document.getElementById('inScore1').innerText = inScore1
        //Total Score
        let totalScore1 = outScore1 + inScore1
        document.getElementById('totalScore1').innerText = totalScore1
    }
    //Player2
    if (players[1]) {
        let outScore2 = 0
        let inScore2 = 0
        //OutScore
        for (let i = 0; i < 9; i++) {
            score = document.getElementById(`p2h${i}`).value;
            players[1].scores.splice(i, 1, score)
        }
        for (let i = 0; i < 9; i++) {
            if (players[1].scores[i])
                outScore2 += parseInt(players[1].scores[i], 10)
        }
        document.getElementById('outScore2').innerText = outScore2
        //InScore
        for (let i = 9; i < 18; i++) {
            score = document.getElementById(`p2h${i}`).value;
            players[0].scores.splice(i, 1, score)
        }
        for (let i = 9; i < 18; i++) {
            if (players[0].scores[i])
                inScore2 += parseInt(players[0].scores[i], 10)
        }
        document.getElementById('inScore2').innerText = inScore2
        //Total Score
        let totalScore2 = outScore2 + inScore2
        document.getElementById('totalScore2').innerText = totalScore2
    }
    //Player3
    if (players[2]) {
        let outScore3 = 0
        let inScore3 = 0
        //OutScore
        for (let i = 0; i < 9; i++) {
            score = document.getElementById(`p3h${i}`).value;
            players[1].scores.splice(i, 1, score)
        }
        for (let i = 0; i < 9; i++) {
            if (players[1].scores[i])
                outScore3 += parseInt(players[1].scores[i], 10)
        }
        document.getElementById('outScore3').innerText = outScore3
        //InScore
        for (let i = 9; i < 18; i++) {
            score = document.getElementById(`p3h${i}`).value;
            players[0].scores.splice(i, 1, score)
        }
        for (let i = 9; i < 18; i++) {
            if (players[0].scores[i])
                inScore3 += parseInt(players[0].scores[i], 10)
        }
        document.getElementById('inScore3').innerText = inScore3
        //Total Score
        let totalScore3 = outScore3 + inScore3
        document.getElementById('totalScore3').innerText = totalScore3
    }
    //Player4
    if (players[3]) {
        let outScore4 = 0
        let inScore4 = 0
        //OutScore
        for (let i = 0; i < 9; i++) {
            score = document.getElementById(`p4h${i}`).value;
            players[1].scores.splice(i, 1, score)
        }
        for (let i = 0; i < 9; i++) {
            if (players[1].scores[i])
                outScore4 += parseInt(players[1].scores[i], 10)
        }
        document.getElementById('outScore4').innerText = outScore4
        //InScore
        for (let i = 9; i < 18; i++) {
            score = document.getElementById(`p4h${i}`).value;
            players[0].scores.splice(i, 1, score)
        }
        for (let i = 9; i < 18; i++) {
            if (players[0].scores[i])
                inScore4 += parseInt(players[0].scores[i], 10)
        }
        document.getElementById('inScore4').innerText = inScore4
        //Total Score
        let totalScore4 = outScore4 + inScore4
        document.getElementById('totalScore4').innerText = totalScore4
    }
}




