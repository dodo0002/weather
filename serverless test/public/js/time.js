const timeHandler = document.querySelector(".main .main-time h4");

console.log(timeHandler);

function setTime() {
  const event = new Date().toLocaleString();

  //endpoint透過瀏覽器開啟時可為現在時區
  // event.setUTCHours(event.getHours() + 8);
  // const calculatedTime = event.toUTCString();
  timeHandler.innerText = "現在時間:" + event;
}

function nowTime() {
  setTime();
  setTimeout(nowTime, 1000);
}

window.addEventListener("load", nowTime());
