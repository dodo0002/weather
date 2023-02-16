const express = require("express");
const app = express();
const sls = require("serverless-http");
const fetch = require("node-fetch");
const path = require("path");

process.env.TZ = "Asia/Taipei";

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
  try {
  } catch (error) {
    console.log(error);
  }
});

app.get("/:city", (req, res) => {
  let { city } = req.params;
  let url =
    "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-E5F5004D-3F60-45A5-A267-34A4228B2CF9";
  fetch(url)
    .then((d) => d.json())
    .then((djs) => {
      if (city == "嘉義縣") {
        res.sendFile(path.join(__dirname, "Chiayi Country.html"));
      } else if (city == "新北市") {
        res.sendFile(path.join(__dirname, "New Taipei.html"));
      } else if (city == "嘉義市") {
        res.sendFile(path.join(__dirname, "Chiayi City.html"));
      } else if (city == "新竹縣") {
        res.sendFile(path.join(__dirname, "Hsinchu Country.html"));
      } else if (city == "新竹市") {
        res.sendFile(path.join(__dirname, "Hsinchu City.html"));
      } else if (city == "台北市") {
        res.sendFile(path.join(__dirname, "Taipei.html"));
      } else if (city == "台南市") {
        res.sendFile(path.join(__dirname, "Tainan.html"));
      } else if (city == "宜蘭縣") {
        res.sendFile(path.join(__dirname, "Yilan.html"));
      } else if (city == "苗栗縣") {
        res.sendFile(path.join(__dirname, "Miaoli Country.html"));
      } else if (city == "雲林縣") {
        res.sendFile(path.join(__dirname, "Yunlin.html"));
      } else if (city == "花蓮縣") {
        res.sendFile(path.join(__dirname, "Hualian.html"));
      } else if (city == "台中市") {
        res.sendFile(path.join(__dirname, "Taichung.html"));
      } else if (city == "台東縣") {
        res.sendFile(path.join(__dirname, "Taitung.html"));
      } else if (city == "桃園市") {
        res.sendFile(path.join(__dirname, "Taoyuan.html"));
      } else if (city == "南投縣") {
        res.sendFile(path.join(__dirname, "Nantou.html"));
      } else if (city == "高雄市") {
        res.sendFile(path.join(__dirname, "Kaohsiung.html"));
      } else if (city == "金門縣") {
        res.sendFile(path.join(__dirname, "Kinmen.html"));
      } else if (city == "屏東縣") {
        res.sendFile(path.join(__dirname, "Pingtung.html"));
      } else if (city == "基隆市") {
        res.sendFile(path.join(__dirname, "Keelung.html"));
      } else if (city == "澎湖縣") {
        res.sendFile(path.join(__dirname, "Penghu.html"));
      } else if (city == "彰化縣") {
        res.sendFile(path.join(__dirname, "Changhua.html"));
      } else if (city == "連江縣") {
        res.sendFile(path.join(__dirname, "Lienchiang.html"));
      } else {
        res.send("請輸入正確的縣市名稱");
      }
    });
});

module.exports.handler = sls(app);
