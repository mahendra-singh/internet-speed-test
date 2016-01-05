$(document).ready(function(){
  // $( "#checkPage" ).on( "click", function() {
  //   $(".checkPageSpeed").fadeIn();
  //   chrome.tabs.getSelected(null, function(tab){
  //     d = document;
  //     var f = d.createElement('form');
  //     f.action = 'http://gtmetrix.com/analyze.html?bm';
  //     f.method = 'post';
  //     var i = d.createElement('input');
  //     i.type = 'hidden';
  //     i.name = 'url';
  //     i.value = tab.url;
  //     f.appendChild(i);
  //     d.body.appendChild(f);
  //     f.submit();
  //     console.log(tab.url);
  //   });
  // });
  // $( "#checkInternet" ).on( "click", function() {
  //   $(".checkInternetConnection").fadeIn();
  //   chrome.tabs.getSelected(null, function(tab) {
  //     d = document;
  //     var f = d.createElement('form');
  //     f.action = 'http://mahendra.com.au/misc/internet/checkInternet.html';
  //     f.method = 'post';
  //     var i = d.createElement('input');
  //     i.type = 'hidden';
  //     i.name = 'url';
  //     i.value = tab.url;
  //     f.appendChild(i);
  //     d.body.appendChild(f);
  //     f.submit();
  //   });
  // });

  $(".checkInternetConnection").fadeIn();
    chrome.tabs.getSelected(null, function(tab) {
      d = document;
      var f = d.createElement('form');
      f.action = 'http://mahendra.com.au/misc/internet/checkInternet.html';
      f.method = 'post';
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'url';
      i.value = tab.url;
      f.appendChild(i);
      d.body.appendChild(f);
      f.submit();
    });

});
