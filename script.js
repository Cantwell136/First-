$(document).ready(function () {
    $("fbook").mouseenter(function () {
        $(this).width(55).height(55);
    });
});

let gitHubRequest=new XMLHttpRequest();
gitHubRequest.onreadystatechange = function(){
    if (this.readyState == 4  && this.status == 200){
 let gitObject = JSON.parse(this.responseText);
document.getElementById("git.json").innerHTML = gitObject.bio;
    }
};
gitHubRequest.open("GET", "https://api.github.com/users/Cantwell136/repos", true);
gitHubRequest.send();
