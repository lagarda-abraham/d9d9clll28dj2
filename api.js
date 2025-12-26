const output = document.getElementById("output");

const path = window.location.pathname.split("/");

const usuarioIndex = path.indexOf("usuario");
const username = usuarioIndex !== -1 ? path[usuarioIndex + 1] : null;

fetch("/d9d9clll28dj2/usuarios.json")
  .then(res => res.json())
  .then(data => {
    if (!username) {
      output.textContent = JSON.stringify(
        { error: "Usuario no especificado" },
        null,
        2
      );
      return;
    }

    const usuario = data.usuarios.find(
      u => u.username.toLowerCase() === username.toLowerCase()
    );

    if (!usuario) {
      output.textContent = JSON.stringify(
        { error: "Usuario no encontrado" },
        null,
        2
      );
      return;
    }

    output.textContent = JSON.stringify(usuario, null, 2);
  })
  .catch(() => {
    output.textContent = JSON.stringify(
      { error: "Error cargando datos" },
      null,
      2
    );
  });
