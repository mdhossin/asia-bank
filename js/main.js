// document.querySelector("#loginButton").addEventListener("click", () => {
//   //   console.log("button is clicked");
//   //   get user email text
//   const emailField = document.querySelector("#userEmail");
//   const userEmail = emailField.value;

//   //   console.log(userEmail);
//   //   get user password text
//   const passwordField = document.querySelector("#userPassword");
//   const userPassword = passwordField.value;
//   //   console.log(userPassword);

//   if (userEmail == "test@gmail.com" && userPassword == 123456) {
//     // console.log("you can login");
//     window.location.href = "../bank.html";
//   } else {
//     console.log("please enter the valid email and password");
//   }
// });

// add eventlistener with button

document.querySelector("#loginButton").addEventListener("click", () => {
  //   console.log("button is clicked");
  //   get input text email when i click the button
  const userEmail = document.querySelector("#userEmail");
  //   console.log(userEmail.value);
  //   get user passwore text when i click button
  const userPassword = document.querySelector("#userPassword");
  //   console.log(userPassword.value);
  //   compaire email and password if true you can log in
  if (userEmail.value == "test@gmail.com" && userPassword.value == 123456) {
    console.log("you can log in");
    window.location.href = "../bank.html";
  } else {
    console.log("Please enter the valid email and password");
  }
});
