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
                        var url = "http://makesomethingpeoplewant.s3-website-us-east-1.amazonaws.com/";
                        chrome.tabs.update(tabId, {url:url});
                        break;
                    }   
                }
            }
        }
    }
});
