// Check for first run and set default options
if(localStorage["domains"] == undefined) {
    localStorage["domains"] = "facebook.com\ntwitter.com";

    //open up options page for initial configuration
    chrome.tabs.create({url: chrome.extension.getURL("options.html")});
}

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

    if (changeInfo.url != null) {
        var domains = localStorage["domains"];
        var blocked_domains = domains.split("\n");
        if (blocked_domains.length != 0) {
            for (i = 0; i < blocked_domains.length; i++) {
                domain = blocked_domains[i].trim().replace("*", ".*");
                if (domain.length != 0) {
                    var re = new RegExp(domain, ["i"]);
                    if (re.test(changeInfo.url)) {
                        var url = "http://www.makesomethingpeoplewant.org/";
                        chrome.tabs.update(tabId, {url:url});
                        break;
                    }
                }
            }
        }
    }
});
