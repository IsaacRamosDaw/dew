document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementsByTagName("form")[0];
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const datos = {
      name: document.getElementById('name'),
      lastName: document.getElementById('lastName'),
      dni: document.getElementById('dni'),
      userName: document.getElementById('userName'),
      password: document.getElementById('password'),
      rPassword: document.getElementById('rPassword')
    };

    let isValid = true;
    let errorMessage;

    if (!/^[A-Z]/.test(datos.name)) {
      isValid = false;
    }
    if (!/^[A-Z]/.test(datos.lastName)){
      isValid = false;
    }
  });
});