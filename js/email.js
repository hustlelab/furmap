const firebaseConfig = {
  apiKey: "AIzaSyDDARYOcutrD-D62RkG0qJDY552eGcXH1E",
  authDomain: "woof-26cbd.firebaseapp.com",
  databaseURL: "https://woof-26cbd.firebaseio.com",
  projectId: "woof-26cbd",
  storageBucket: "woof-26cbd.appspot.com",
  messagingSenderId: "1033398042196",
  appId: "1:1033398042196:web:d44fb075f871a3bab637c1",
  measurementId: "G-1LQPSPP9J3",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

$(document).ready(function () {
  const $email = $("#email");
  const $emailSubmit = $("#email-submit");
  const $email2 = $("#email-2");
  const $email2Submit = $("#email-2-submit");
  const submitSuccessTop = $("#done-top");
  const submitFailedTop = $("#failed-top");
  const submitSuccessBot = $("#done-bot");
  const submitFailedBot = $("#failed-bot");

  $emailSubmit.on("click", function () {
    email = $email.val();
    const database = firebase.database();
    if (!email) {
      return;
    }

    let timestamp = Date.now();

    database
      .ref("email/" + timestamp)
      .set({
        email: email,
      })
      .then(function () {
        submitSuccessTop.css('display','block');
      })
      .catch(function () {
        submitFailedTop.css('display','block');
      });
  });

  $email2Submit.on("click", function () {
    email = $email2.val();
    const database = firebase.database();
    if (!email) {
      return;
    }

    let timestamp = Date.now();

    database.ref("email/" + timestamp).set({
      email: email,
    }).then(function () {
        submitSuccessBot.css('display','block');
      })
      .catch(function () {
        submitFailedBot.css('display','block');
      });;
  });
});
