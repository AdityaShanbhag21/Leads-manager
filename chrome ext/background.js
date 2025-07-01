chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "getTab") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      sendResponse({ url: tabs[0].url });
    });
    return true; 
  }
});
