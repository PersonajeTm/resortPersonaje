var beachPhotos = [`<img class="gimg" src="images/3.png">`, `<img class="gimg" src="images/4.png">`, `<img class="gimg" src="images/5.jpg">`, `<img class="gimg" src="images/6.png">`, `<img class="gimg" src="images/7.png">`, `<img class="gimg" src="images/8.png">`, `<img class="gimg" src="images/9.png">`, `<img class="gimg" src="images/10.jpg">`, `<img class="gimg" src="images/11.png">`, `<img class="gimg" src="images/12.png">`, `<img class="gimg" src="images/13.jpeg">`, `<img class="gimg" src="images/14.png">`, `<img class="gimg" src="images/15.jpg">`, `<img class="gimg" src="images/16.jpg">`, `<img class="gimg" src="images/17.JPG">`, `<img class="gimg" src="images/18.jpg">`, `<img class="gimg" src="images/19.jfif">`];
const bArtists = ["colonybees", "ezeikian", "blackcat_draws", "00kumahoshi00", "arvl.o", "yoyos.dreamz", "royal__doodlez", "blessed_jael", "magicalgirlobsessed", "magicalgirlobsessed", "sevodxam", "xenovirusuniverseart", "Awkwardbunnyarts", "meilosu", "Chwerrii", "yolksocc", "spark_0rg",];
var carnivalPhotos = [`<img class="gimg" src="images/21.png">`, `<img class="gimg" src="images/22.jpg">`, `<img class="gimg" src="images/23.png">`];
const cArtists = ["Awkwardbunnyarts", "faemimis", "yoyos.dreamz"];
var naturePhotos = [`<img class="gimg" src="images/1.jpg">`, `<img class="gimg" src="images/2.png">`];
const nArtists = ["lleafytea", "vmiiart"];
var foodPhoto = [`<img class="gimg" src="images/20.png">`];
const fArtists = ["royal__doodlez"];
const igLink = "https://instagram.com/";
$(document).ready(function(){
  $("#galleryHolder").hide();
  $("#X").hide();
  adjustGallery();
});

function giveLinks(array, artists){
  array.forEach((item, i) => {
      array[i] = "<a href='" + igLink + artists[i] + "' target='blank'>" + array[i] + "</a>"
  });

}

giveLinks(beachPhotos, bArtists);
giveLinks(naturePhotos, nArtists);
giveLinks(foodPhoto, fArtists);
giveLinks(carnivalPhotos, cArtists);


$("#X").click(function(){
  // $("#on").toggle();
  $("body").css("background-image", "url('images/bg.png')");
  $("#galleryHolder").toggle();
  $("#centerer").toggle();
  $("#X").toggle();
  $("#gallery").html("");
  $("#Holder").css("overflow-x", "scroll");
  $("Holder").css("width", "fit-content");
});

function openGallery(array){

  var i = 0;
  while (i < array.length) {
      // console.log(array[i]);
      $("#gallery").append(array[i])
      i++;
    }
    $("body").css("background-image", "url('images/bgBlurred.png')");
    adjustGallery();
}

function adjustGallery(){
  if ($(window).width() > $(window).height()){
    $("#gallery").css("flex-direction", "row")
    $("#gallery").css("height", "100%");
    $(".gimg").css("width", "unset");
    if ($(window).height() < 500){
      $("#centerer").css("align-items", "flex-start");
    }
    else {
      $("#centerer").css("align-items", "center");
    }
    if ($(window).width()/$(window).height() >= 1.77777778){
      $("body").css("background-size", "cover");
    }
    else {
      $("body").css("background-size", "auto");
    }


  }
  // else if ((($(window).width() == 820) &&($(window).height() == 1180)) || (($(window).width() == 1180) &&($(window).height() == 820))) {
  //   $("#gallery").css("flex-direction", "column")
  //   $("body").css("background-size", "fit");
  //   $("#centerer").css("align-items", "center");
  // }
  else {
    $("#gallery").css("flex-direction", "column")
    $("body").css("background-size", "auto");
    $("#centerer").css("align-items", "center");
    $("#gallery").css("height", "auto");
    $(".gimg").css("width", "100%");
  }
}

$("#1").click(function(){
  openGallery(naturePhotos);
  $("#centerer").toggle();
  $("#galleryHolder").toggle();
  $("#X").toggle();
});

$("#2").click(function(){
  openGallery(beachPhotos);
  $("#centerer").toggle();
  $("#galleryHolder").toggle();
  $("#X").toggle();
  // $("#Holder").css("overflow-x", "unset");
  $("#Holder").css("overflow-x", "scroll");
});

$("#3").click(function(){
  openGallery(foodPhoto);
  $("#centerer").toggle();
  $("#galleryHolder").toggle();
  $("#X").toggle();
});

$("#4").click(function(){
  openGallery(carnivalPhotos);
  $("#centerer").toggle();
  $("#galleryHolder").toggle();
  $("#X").toggle();
});

$(window).resize(function(){
  adjustGallery();
});
