$(".togglebutton").hover(function(){
  $(this).addClass("highlight");
},function(){
  $(this).removeClass("highlight");
});
function update(){
  $("iframe").contents().find("html").html("<!DOCTYPE html><html><head><style>"+$("#csspanel").val()+"</style></head>"+"<body>"+$("#htmlpanel").val()+"</body></html>");
  document.getElementById("oppanel").contentWindow.eval($("#jspanel").val());
}
$(".togglebutton").click(function(){
  $(this).toggleClass("active");
  $(this).removeClass("highlight");
  var pan=$(this).attr("id")+"panel";
  $("#"+pan).toggleClass("hidden");
  var numofpan= 4 - $(".hidden").length;
  $(".pn").width(($(window).width() / numofpan)-10);
});
$(".pn").height($(window).height()-$("#header").height()-15);
$(".pn").width(($(window).width()/2)-10);
update();
$("textarea").on("change keyup paste", function(){
  update();});
function getRandom(){
  var letters="ABCDEF0123456789";
  var colors="#";
  for(var i=0;i<6;i++){
  colors+=letters[Math.floor(Math.random()*16)];
}
return colors;
}
var hed=document.querySelector("#logo");
function changecolor(){
  colorinput=getRandom();
  hed.style.color=colorinput;
}
hed.addEventListener('mouseover',function(){changecolor();});
hed.addEventListener('mouseout',function(){changecolor();});
