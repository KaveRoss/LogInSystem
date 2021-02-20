function logIn() {
  alert("test");
  let data = { name: "kave", password: 8754 };
  console.log(data);
  fetch("http://localhost:1337/login", {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, /",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "kave", password: 8754 }),
  })
    .then((response) => response.json())
    .then((response) => response.log(res));
}
