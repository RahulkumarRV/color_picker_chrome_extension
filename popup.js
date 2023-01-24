const colorPicker = document.getElementById("color-picker");
const saveColorBtn = document.getElementById("save-color-btn");

saveColorBtn.addEventListener("click", () => {
  chrome.storage.sync.set({ selectedColor: colorPicker.value }, () => {
    
  });
});

chrome.storage.onChanged.addListener((changes, namespace) => {
  for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
	document.body.style.backgroundColor = newValue;
	document.querySelector("#color-code").innerHTML = "color code " + newValue;
  }
});

window.addEventListener("load", () => {
	console.log("i am loading");
	chrome.storage.sync.get(["selectedColor"], (res) => {
		document.body.style.backgroundColor = res.selectedColor;
		document.querySelector("#color-code").innerHTML = "color code " + res.selectedColor;
	});
});
