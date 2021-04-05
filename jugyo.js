// exports.helloWorld = functions.https.onRequest((request, response) => {
// //   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// GoogleBooksAPI
// app.get("/gbooks/:keyword",async(req,res)=>{
//   const response = await getDataFromApi(req.params.keyword);
//   res.send(response);
// });

// エンドポイントの設定 reqをgetで受けたらHello Expressを返す
// app.get('/hello',(req,res)=>{
  // レスポンスの設定
  // res.send('Hello Express!');
// });

// Google Books APIにリクエストを送る関数を定義
// const getDataFromApi = async (keyword) => {
//   // cloud functionsから実行する場合には地域の設定が必要になるため，`country=JP`を追加している
//   const requestUrl =
//     "https://www.googleapis.com/books/v1/volumes?country=JP&q=intitle:";
//     // requestPromise = promiseを返す
//   const result = await requestPromise(`${requestUrl}${keyword}`);
//   return result;
// };

// パラメーターを受け取る＝ :の後に名前をつける
// userID＝文字列　id＝数値になるため、比較のために↓でNumber函数をつける
// app.get("/user/:userId",(req,res)=>{
  // userのデータを配列で
  // const users = [
  //   { id: 1, name: "ジョナサン" },
  //   { id: 2, name: "ジョセフ" },
  //   { id: 3, name: "承太郎" },
  //   { id: 4, name: "仗助" },
  //   { id: 5, name: "ジョルノ" },
  // ];
  // req.params.userIdでURLの後ろにつけた値をとれる．
  // userIDをNumber関数で数値に変換
//   const targetUser = users.find(
//     (user) => user.id === Number(req.params.userId)
//   );
//   // クライアントに戻す
//   res.send(targetUser);
// });

// local 
// http://localhost:5000/functions-5100b/us-central1/helloWorld

// URL
// https://us-central1-functions-5100b.cloudfunctions.net/helloWorld
// https://us-central1-functions-5100b.cloudfunctions.net/api/hello

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
