window.onload = function () {
    var friendArr = []
    var appBody
    //var friendArr = ["John", "Dagny", "Hank", "Ragnar", "Francisco", "Howard", "Gail", "Dominique"]
    //var appbody = document.querySelector('.appbody')

    //load up friends
    //for (var i = 0; i < friendArr.length; i++) {
    //    var friendbutton = document.createElement('a')
    //    friendbutton.href = `/friend/${friendarr[i]}`
    //    friendbutton.innerhtml = friendarr[i]
    //    appbody.appendchild(friendbutton)
    //}

    $.get("/api/friends", function (data) {
        console.log(data)
        loadData(data)
    })

    function loadData(data) {
        friendArr = data
        appBody = document.querySelector('.appBody')

        //load up friends
        for (var i = 0; i < friendArr.length; i++) {
            var friendbutton = document.createElement('a')
            friendbutton.href = `/friend/${friendArr[i].name}`
            friendbutton.innerHTML = friendArr[i].name
            appBody.appendChild(friendbutton)
        }
    }

    //$.get("/api/friends", function (data) {
    //        console.log(data);
    //        //var rowsToAdd = [];
    //        //for (var i = 0; i < data.length; i++) {
    //        //    rowsToAdd.push(createAuthorRow(data[i]));
    //        //}
    //        //renderAuthorList(rowsToAdd);
    //        //nameInput.val("");
    // });
    
}
