$(function(){
  var mainHeight = $("main").height();
  console.log(mainHeight);

  var menuButton = $("#button--menu");
  var menuWindow = $("#menuWindow");
  menuButton.on('click', function () {
    menuButton.toggleClass('on');
    menuWindow.toggleClass('on');
  });
});
