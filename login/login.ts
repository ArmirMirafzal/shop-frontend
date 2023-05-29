// api
const LoginAPI = "http://localhost:8001/api/auth/login";

/* login inputs */
const loginEmail = document.querySelector<HTMLInputElement>(".login-email")?.value;
const loginPassword = document.querySelector<HTMLInputElement>(".login-password")?.value;
const loginBtn = document.querySelector(".login") as HTMLButtonElement;
const loginForm = document.querySelector(".login-form") as HTMLFormElement;

const fetchDataLogin = async () => {
  try {
    const response = await fetch(LoginAPI, {
      method: "POST",
      body: JSON.stringify({
        email: loginEmail,
        password: loginPassword,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const json = await response.json();
    console.log(json);
  } catch (err) {
    console.log(err);
  }
};

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchDataLogin();
  loginForm.reset();
});
