var request = new XMLHttpRequest();
var apiUrl = "https://api.github.com/users/youngbolivia";
var test;

request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
        var myArr = JSON.parse(request.responseText);
        test = myArr;
    }
}

request.open("GET", apiUrl, false);
request.send();

var testUrlString = test.avatar_url;
alert(testUrlString);

var avatarElement = document.getElementById("github_avatar");
alert("This works!");

var avatarElementSource = document.getElementById("github_avatar").src;
alert("But this doesn't");

avatarElement.src = "https://avatars.githubusercontent.com/u/3960282?v=3";
alert("just set the source");

document.getElementById("github_avatar") = avatarElement;
alert("set element back");
