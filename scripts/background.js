document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.getSelected(null, function(tab) {
        console.log("tabURL",tab.url);
        // chrome.cookies.remove({"url": tab.url, "name": "cookieName"}, function(deleted_cookie) { console.log(deleted_cookie); });
        // chrome.cookies.getAll({domain: "theland.com.au"}, function(cookies) {
        // for(var i=0; i<cookies.length;i++) {
        //     chrome.cookies.remove({url: "http://domain.com" + cookies[i].path, name: cookies[i].name});
        //     }
        // });
    });

}, false);