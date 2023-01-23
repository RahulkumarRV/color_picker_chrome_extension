const colorPicker = document.getElementById("color-picker");
const saveColorBtn = document.getElementById("save-color-btn");

saveColorBtn.addEventListener("click", () => {
  chrome.storage.sync.set({ selectedColor: colorPicker.value }, () => {
    if(chrome.runtime.lastError){
	console.error("error is : ", chrome.runtime.lastError.message);
    }
    console.log("-> ");
  });
});

chrome.storage.onChanged.addListener((changes, namespace) => {
  for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
    console.log(
      `Storage key "${key}" in namespace "${namespace}" changed.`,
      `Old value was "${oldValue}", new value is "${newValue}".`
    );
	document.body.style.backgroundColor = newValue;
  }
});
