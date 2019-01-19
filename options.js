let nanase = document.getElementById('西野七瀬');
let nogi = document.getElementById('乃木坂');
let yoda = document.getElementById('与田祐希');
let asuka = document.getElementById('齋藤飛鳥');
let kubo = document.getElementById('久保史绪里');
let toggleUpdateInfo = document.getElementById('t1');
/*------------------------------------*/
chrome.storage.sync.get({ arr: [] }, function (result) {
    list = document.getElementsByName('button');
    for (i = 0; i < result.arr.length; i++) {
        for (j = 0; j < list.length; j++) {
            if (list[j].id == result.arr[i]) {
                list[j].checked = true;
            }
        }
    }
});