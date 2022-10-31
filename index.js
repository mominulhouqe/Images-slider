

let photos = ["image/4.jpg","image/2.jpg","image/3.jpg","image/5.jpg"];

 let ImgTag = document.querySelector("img");

 let count = 0;
function next(){
count++;
if(count>=photos.length){
    count=0;
    ImgTag.src = photos[count];
}else{
    ImgTag.src = photos[count];
}
}
function prev(){
    count--;
    if(count<0){
        count= photos.length -1;
        ImgTag.src = photos[count];
    }else{
        ImgTag.src = photos[count];
    }
}