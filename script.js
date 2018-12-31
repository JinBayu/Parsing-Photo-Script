function indexing(keyword, mode) { // mode:1 로그 출력 || mode:0 로그 미 출력
  var j = 0;
  if (mode) { console.log("검색 단어 : " + keyword.key); }
  var documentList = new Array();
  documentList = document.querySelectorAll("div[class=WB_detail]");
  if (mode) { console.log("검색된 글의 개수 : " + documentList.length); }
  var list = new Array();
  for (i = 0; i < documentList.length; i++) {
    var str = documentList[i].querySelectorAll("div[node-type=feed_list_content]")[0].innerText;
    if (str.indexOf(keyword.key) != -1) {
      list[j++] = documentList[i];
    }
  }
  if (mode) { console.log(keyword.key + "가 들어간 글의 개수 : " + list.length); }
  var k = 0; var ImageUrlList = new Array();
  for (i = 0; i < list.length; i++) {
    var arr = list[i].querySelector("div[class=media_box]").querySelectorAll("li[class^=WB_pic]");
    for (j = 0; j < arr.length; j++) {
      var Image = arr[j].querySelector("img");
      var ImageUrl = Image.src;
      ImageUrl = ImageUrl.replace('thumb150', 'large');
      ImageUrl = ImageUrl.replace('orj360', 'large');
      ImageUrl = ImageUrl.replace('mw690', 'large');
      ImageUrlList[k++] = ImageUrl;
    }
  }
  if(mode){console.log("사진 개수 : "+ImageUrlList.length);}
  return ImageUrlList;
}


chrome.storage.sync.get(['key'], function (result) {
  chrome.runtime.sendMessage(indexing(result, 1), function () {
  });
});
