const colorPicker = document.getElementById("color-picker");
const saveColorBtn = document.getElementById("save-color-btn");

saveColorBtn.addEventListener("click", () => {
  chrome.storage.local.set({ selectedColor: colorPicker.value }, () => {
    console.log("Color saved!");
  });
});
