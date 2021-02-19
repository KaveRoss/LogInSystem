function logIn() {
  let data = { name: "kave", password: 8754 };
  console.log(data);
  fetch("http://localhost:1337/login", {
    method: "POST",
    // headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => console.log(response))
    .catch((error) => {
      console.error("Error:", error);
    });
}
