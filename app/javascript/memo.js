function post (){
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const form = document.getElementById("form")
    const formDate = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("post", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formDate);
  });
};

window.addEventListener('load', post);