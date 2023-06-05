let Catold={
    imgurl: "https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
    name: "cat",
    Description: "Cat is an Animal"
}

let catyoung={
    imgurl: "https://th.bing.com/th/id/OIP.3ASJSRy03PAtNYOTM-RQwgHaFj?pid=ImgDet&rs=1",
    name: "cats",
    Description: "little cats"
}

let iscat=true;
let displayobject;
let flipdata=function(){
    if (iscat==true){
        displayobject=catyoung;
        iscat=false;
    }
    else{
        displayobject=Catold;
        iscat=true;
    }
    document.getElementById("cat-img").src=displayobject.imgurl;
    document.getElementById("cat-name").innerHTML=displayobject.name;
    document.getElementById("para").innerHTML=displayobject.Description;
}