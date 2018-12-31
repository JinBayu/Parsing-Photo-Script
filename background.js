chrome.runtime.onMessage.addListener(
  function (Message, Sender, SendResponse) {
    for(i=0;i<Message.length;i++){
      chrome.downloads.download({url:Message[i]});
    }
  }
);
