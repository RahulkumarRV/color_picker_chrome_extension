chrome.storage.local.get("selectedColor", (data) => {
  if (data.selectedColor) {
    document.body.style.backgroundColor = data.selectedColor;
  }
});
