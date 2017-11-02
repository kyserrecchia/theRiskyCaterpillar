window.onload = function () {
    var friendArr = ["John", "Dagny", "Hank", "Ragnar", "Francisco", "Howard", "Gail", "Dominique"]
    var appBody = document.querySelector('.appBody')

    //load up friends
    for (var i = 0; i < friendArr.length; i++) {
        var friendButton = document.createElement('a')
        friendButton.href = `/friend/${friendArr[i]}`
        friendButton.innerHTML = friendArr[i]
        appBody.appendChild(friendButton)
    }
}
