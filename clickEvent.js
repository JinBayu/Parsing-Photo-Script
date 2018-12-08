let nanase = document.getElementById('nanase');
let nogi = document.getElementById('nogi');
let yoda = document.getElementById('yoda');
let asuka = document.getElementById('asuka');
let kubo = document.getElementById('kubo');
let toggleUpdateInfo=document.getElementById('t1');
/*------------------------------------*/
let member = "default"
nanase.onclick = function(element) {
  chrome.storage.sync.set({
    key: "西野七瀬"
  }, function() {
    console.log('Vaule is set to ' + "西野七瀬");
  })
  chrome.storage.sync.get(['key'], function(result) {
    console.log('Value currently is ' + result.key);
  });
}

nogi.onclick = function(element) {
  chrome.storage.sync.set({
    key: "乃木坂"
  }, function() {
    console.log('Vaule is set to ' + "乃木坂");
  })
  chrome.storage.sync.get(['key'], function(result) {
    console.log('Value currently is ' + result.key);
  });
}

yoda.onclick = function(element) {
  chrome.storage.sync.set({
    key: "与田祐希"
  }, function() {
    console.log('Vaule is set to ' + "与田祐希");
  })
  chrome.storage.sync.get(['key'], function(result) {
    console.log('Value currently is ' + result.key);
  });
}

asuka.onclick = function(element) {
  chrome.storage.sync.set({
    key: "齋藤飛鳥"
  }, function() {
    console.log('Vaule is set to ' + "齋藤飛鳥");
  })
  chrome.storage.sync.get(['key'], function(result) {
    console.log('Value currently is ' + result.key);
  });
}

kubo.onclick = function(element) {
  chrome.storage.sync.set({
    key: "久保史绪里"
  }, function() {
    console.log('Vaule is set to ' + "久保史绪里");
  })
  chrome.storage.sync.get(['key'], function(result) {
    console.log('Value currently is ' + result.key);
  });
}
toggleUpdateInfo.onclick=function() {
  var target=document.getElementById("updateInfo");
  if(target.style.display=="none"){
    target.style.display="block";
    document.getElementById("t1").innerHTML="가리기"
  }
  else{
    target.style.display="none";
    document.getElementById("t1").innerHTML="업데이트 내역 보기"
  }
}
