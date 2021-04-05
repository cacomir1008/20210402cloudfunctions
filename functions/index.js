require('dotenv').config()
const functions = require("firebase-functions");
// expressモジュール読み込み
const express = require("express");
// corsモジュール読み込み（外部からのリクエストを許可）
const cors = require("cors"); 
// request-promise-nativeの中にrequestモジュールも入ってる
const requestPromise = require("request-promise-native");
// モジュール実行
const app = express();
app.use(cors());

const getDataFromApi = async (keyword) => {
  // cloud functionsから実行する場合には地域の設定が必要になるため，`country=JP`を追加している
  const requestUrl =
    'https://app.rakuten.co.jp/services/api/Travel/SimpleHotelSearch/20170426?applicationId=';
  const applicationId =process.env.NODE_ID; 
  const format = '&format=json';
  const squeezeCondition = '&squeezeCondition=daiyoku'
  const largeClassCode = '&largeClassCode=japan';
  const middleClassCode='&middleClassCode=kagoshima';
  const smallClassCode='&smallClassCode=';
  const elements ='&elements=hotelName,hotelSpecial,access,reviewCount,reviewAverage'
    // requestPromise = promiseを返す
  const result = await requestPromise(`${requestUrl}${applicationId}${format}${largeClassCode}${middleClassCode}${smallClassCode}${keyword}${squeezeCondition}${elements}`);
  return result;
};

app.get("/travel/:keyword",async(req,res)=>{
  const response = await getDataFromApi(req.params.keyword);
  res.send(response);
});

// 出力 実際にデプロイする関数(毎回使う)
// http://localhost:5000/functions-5100b/us-central1/api/hello
const api = functions.https.onRequest(app);
module.exports = { api };


// ----------------------------------------------------------------
// 没コード（Deploy時エラー）
// Azure Text Analytics
// const { TextAnalyticsClient, AzureKeyCredential } = require("@azure/ai-text-analytics");

// const key = process.env.NODE_KEY; 
// const endpoint = process.env.NODE_ENDPOINT; 

// const textAnalyticsClient = new TextAnalyticsClient(endpoint,  new AzureKeyCredential(key));

// app.get('/text',(req,res)=>{
//   res.send('Hello Express!');
// });
// async function sentimentAnalysis(client){  
//     const sentimentInput = [
//       // W Osakaの口コミ（低評価）
//       "オペレーションが落ち着いておらず、リクエストを入れてもすべて伝わらない状況です。少し時間がたってからの滞在をお勧めします。",
//       "１５時過ぎに行ったのにチェックインに５分と言われてから１時間待たされました、部屋への案内だけでドアを開けたら帰られ部屋の説明はありませんでした、カーテンの開け閉めやミニバーの説明など全くなくサービス面は感じられませんでした。",
//       "私と同じ頃にチェックインをするために並んでいた老夫婦が少しイライラされていたのですが、それに対して1階のホテルウーマンが「皆さん納得してお待ちいただいています」と言い放っていましたが、誰1人として納得はしておらず、嫌々、並んでいたのだと思います。あの言い方はゲストに対して失礼だと思いました。"
//     ];
//     const sentimentResult = await client.analyzeSentiment(sentimentInput);
//     sentimentResult.forEach(document => {
//         console.log(`ID: ${document.id}`);
//         console.log(`\tDocument Sentiment: ${document.sentiment}`);
//         console.log(`\tDocument Scores:`);
//         console.log(`\t\tPositive: ${document.confidenceScores.positive.toFixed(2)} \tNegative: ${document.confidenceScores.negative.toFixed(2)} \tNeutral: ${document.confidenceScores.neutral.toFixed(2)}`);
//         console.log(`\tSentences Sentiment(${document.sentences.length}):`);
//         document.sentences.forEach(sentence => {
//         console.log(`\t\tSentence sentiment: ${sentence.sentiment}`)
//         console.log(`\t\tSentences Scores:`);
//         console.log(`\t\tPositive: ${sentence.confidenceScores.positive.toFixed(2)} \tNegative: ${sentence.confidenceScores.negative.toFixed(2)} \tNeutral: ${sentence.confidenceScores.neutral.toFixed(2)}`);
//         });
//     });
//   }
//   sentimentAnalysis(textAnalyticsClient)
  
// //   

