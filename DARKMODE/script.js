function doDemo(button) {
  var body = document.getElementById("body");

  // Verifique se a classe "dark-mode" já está aplicada ao corpo
  if (body.classList.contains("dark-mode")) {
    // Se estiver no modo escuro, volte para o modo claro
    body.classList.remove("dark-mode");
    button.innerText = "Dark Mode";
  } else {
    // Caso contrário, mude para o modo escuro
    body.classList.add("dark-mode");
    button.innerText = "Light Mode";
  }

  var interface = document.getElementById("interface");

  // Verifique se a classe "dark-mode" já está aplicada ao corpo
  if (interface.classList.contains("dark-mode")) {
    // Se estiver no modo escuro, volte para o modo claro
    interface.classList.remove("dark-mode");
    button.innerText = "Dark Mode";
  } else {
    // Caso contrário, mude para o modo escuro
    interface.classList.add("dark-mode");
    button.innerText = "Light Mode";
  }

}