

chrome.tabs.onUpdated.addListener(function() {
    onWindowLoad();
    });
    
    setInterval(function() { 
      alert(1)
        var a = JSON.parse(localStorage.getItem("link"));
        print(a);
        for (let index = 0, len = a.length; index < len; ++index) {
           if (a[index].status==0){
                a[index].status = check(a[index].url); 
           }       
        }
    },10000);   
     
    function onWindowLoad() {
        chrome.storage.sync.get(['foo', 'bar'], function(items) {
            // alert('Settings retrieved', items);
          });
    chrome.tabs.executeScript(null, {
    file: "getPagesSource.js"
    }, function() {
    if (chrome.extension.lastError) {
    htmlcontent = 'There was an error injecting script : \n' +     chrome.extension.lastError.message;
    }
    });
    }
    


    chrome.extension.onMessage.addListener(function(request, sender) {
    if (request.action == "getSource") {
    htmlcontent = request.source;
    // alert(htmlcontent)
    //call whatever function from here on so that htmlcontent will have the selected tab's content.
    }
    
    });

