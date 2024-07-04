$(".btn").on("click",function(){
    var color = $(this).attr("id");
    var sourceimage = "./assets/shoe-"+color+".png";
    document.querySelector(".shoeimage").setAttribute("src",sourceimage);
});