var token = "";
function User(name, email, password, username, mobile, description) {
  (this.name = name),
    (this.email = email),
    (this.password = password),
    (this.username = username),
    (this.mobile = mobile),
    (this.description = description);
}

function getInput() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var username = document.getElementById("username");
  var mobile = document.getElementById("mobile");
  var description = document.getElementById("description");
  apiRequest(
    new User(
      name.value,
      email.value,
      password.value,
      username.value,
      mobile.value,
      description.value
    )
  );
}

function getProfile() {
  var usname = document.getElementById("usname");
  var xhr = new XMLHttpRequest();
  var url = "http://localhost:8080/user/" + usname.value;
  xhr.open("GET", url);
  xhr.setRequestHeader("Authorization", "Bearer " + token);
  xhr.send();
  xhr.onload = function () {
    if (xhr.status == 200) {
      console.log(JSON.parse(xhr.response));
    }
  };
}

function apiRequest(user) {
  var xhr = new XMLHttpRequest();
  var url = "http://localhost:8080/auth/register";
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.send(JSON.stringify(user));
  xhr.onload = function () {
    if (xhr.status == 200) {
      console.log(JSON.parse(xhr.response));
    }
  };
}

function login() {
  var uname = document.getElementById("login_name");
  var pass = document.getElementById("login_pass");
  var xhr = new XMLHttpRequest();
  var url = "http://localhost:8080/auth/login";
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.send(JSON.stringify({ password: pass.value, username: uname.value }));
  xhr.onload = function () {
    if (xhr.status == 200) {
      var res = JSON.parse(xhr.response);
      token = res.token;
      console.log(token);
    }
  };
}
