let Catold={
    imgurl: "https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
    name: "cat",
    Description: "Cat is an Animal"
}



let displayobject;
let getRandomUser=function(){
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data =>console.log(data))
    document.getElementById("cat-img").src=displayobject.imgurl;
    document.getElementById("cat-name").innerHTML=displayobject.name;
    document.getElementById("para").innerHTML=displayobject.Description;
}