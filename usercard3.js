let Catold={
    imgurl: "https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
    name: "cat",
    Description: "Cat is an Animal"
}



let displayobject={
    name:"",
    imgurl:"",
    description:""
};
let getRandomUser=function(){
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data =>{
        displayobject.name = data.results[0].name.first+" "+data.results[0].name.last
        //displayobject.name = "mouni"
        displayobject.imageurl=data.results[0].picture.large
        displayobject.description=data.results[0].gender
        document.getElementById("cat-img").src=displayobject.imgurl;
        document.getElementById("cat-name").innerHTML=displayobject.name;
        document.getElementById("para").innerHTML=displayobject.Description;
      
    })
    
}