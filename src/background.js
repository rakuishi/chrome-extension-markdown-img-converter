chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url && tab.url.includes("github.com")) {
    await convertMarkdown(tab.id);
  }
});

async function convertMarkdown(tabId) {
  return new Promise((resolve) => {
    chrome.tabs.sendMessage(
      tabId,
      { action: "convertMarkdown" },
      (response) => {
        if (chrome.runtime.lastError) {
          resolve(false);
        } else {
          resolve(true);
        }
      }
    );
  });
}
