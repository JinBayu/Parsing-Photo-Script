function clickEvent(element){
  chrome.storage.sync.get({ arr: [] }, function (result) {
    var keyArray = result.arr;
    element.onclick = function () {
      if (element.checked == false) {
        keyArray.splice(keyArray.indexOf(element.id), 1);
      }
      else {
        keyArray.push(element.id);
      }
      chrome.storage.sync.set({
        arr: keyArray
      }, function () {
      });
      chrome.storage.sync.get({ arr: [] }, function (result) {
        console.log('Value currently is ' + result.arr);
      });
    }
  });
}

clickEvent(nanase);
clickEvent(nogi);
clickEvent(yoda);
clickEvent(asuka);
clickEvent(kubo);