function oldaddPlayer(name) {
    playerCount += 1
    name = document.getElementById('playerName').value
    playerHTML = `<tr>`
    playerHTML += `<th scope="row" class='col border'>${name}</th>`
    for (let i = 0; i < 9; i++) {
        playerHTML += `<td class="col border"><input class="player${playerCount}"></td>`

    }
    playerHTML += `<td class="col border"></td>`
    for (let i = 9; i < 18; i++) {
        playerHTML += `<td class="col border"><input></td>`

    }
    playerHTML += `<td class="col border"></td>
    <td class="col border"></td></tr>`
    console.log(playerHTML)
    document.getElementById(`player${playerCount}`).innerHTML = playerHTML
    document.getElementById('playerName').value = ''
}