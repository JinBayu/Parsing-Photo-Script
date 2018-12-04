chrome.storage.sync.get(['key'], function(result) {
  var 오시멤 =result.key;
  var lis=document.querySelectorAll("div[class=WB_detail]");
  console.log(lis.length);
  var i=0;
  var list=new Array(lis.length);

  while(i<lis.length){
    list[i]=new Array(2)
    list[i][0]=lis[i].querySelectorAll("div[node-type=feed_list_content]");
    var str=list[i][0][0].innerText;
    if(str.indexOf(오시멤)!=-1){
      list[i][1]=1;
    }
    else{
      list[i][1]=0;
    }
    i++;
  }
  i=0;
  while(i<lis.length){
    if(list[i][1]!=0){
      var list2=lis[i].querySelector("div[class=media_box]").querySelectorAll("li[class^=WB_pic]");
      var j=0;
      while(j<list2.length){
        var Image=list2[j].querySelector("img");
        var ImageUrl=Image.src;
        ImageUrl=ImageUrl.replace('thumb150','large');
        ImageUrl=ImageUrl.replace('orj360','large');
        ImageUrl=ImageUrl.replace('mw690','large');
        window.open(ImageUrl,"_blank");
        j++;
      }
    }
    i++;
  }
});
