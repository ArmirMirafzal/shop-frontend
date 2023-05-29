// api
const RegisterAPI = "http://localhost:8001/api/auth/register";

/* register inputs */
const registerEmail = document.querySelector<HTMLInputElement>(".register-email");
const registerPhone = document.querySelector<HTMLInputElement>(".register-phone");
const registerName = document.querySelector<HTMLInputElement>(".register-name");
const registerPassword = document.querySelector<HTMLInputElement>(".register-password");
const registerConfirmPassword = document.querySelector<HTMLInputElement>(".register-ConfirmPassword");
const register = document.querySelector(".register") as HTMLButtonElement;
const registerForm = document.querySelector(".register-form") as HTMLFormElement;

const DataRegister = async () => {
  try {
    const response = await fetch(RegisterAPI, {
      method: "POST",
      body: JSON.stringify({
        username: registerName?.value,
        email: registerEmail?.value,
        phoneNumber: registerPhone?.value,
        password: registerPassword?.value,
        confirmPassword: registerConfirmPassword?.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    console.log(response.body);
    const data = await response.json();
    console.log(data);
    console.log(response.status);
  } catch (err) {
    console.log(err);
  }
};

register.addEventListener("click", (e) => {
  e.preventDefault();
  DataRegister();
  registerForm.reset();
});
