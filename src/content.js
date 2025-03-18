// Convert markdown image syntax to HTML with width attribute
function convertMarkdownToHtml(markdown) {
  const regex = /!\[(.*?)\]\((.*?)\)/g;
  return markdown.replace(regex, '<img src="$2" alt="$1" width="300">');
}

function findTextareas() {
  return document.querySelectorAll("textarea");
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "convertMarkdown") {
    try {
      const textareas = findTextareas();
      let convertedCount = 0;

      textareas.forEach((textarea) => {
        const originalText = textarea.value;
        const convertedText = convertMarkdownToHtml(originalText);

        if (originalText !== convertedText) {
          textarea.value = convertedText;
          textarea.dispatchEvent(new Event("input", { bubbles: true }));
          convertedCount++;
        }
      });

      sendResponse({
        status: "success",
        converted: convertedCount > 0,
        count: convertedCount,
      });
    } catch (error) {
      console.error("Error:", error);
      sendResponse({
        status: "error",
        message: error.message,
      });
    }
    return true;
  }

  return true;
});
