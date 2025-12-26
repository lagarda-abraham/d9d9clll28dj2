const output = document.getElementById("output");

// Obtiene la ruta después del dominio
// ejemplo: /api-usuarios/usuario/juan
const path = window.location.pathname.split("/");

// Busca "usuario" y el nombre
const usuarioIndex = path.indexOf("usuario");
const username = usuarioIndex !== -1 ? path[usuarioIndex + 1] : null;

fetch("usuarios.json")
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
  .catch(err => {
    output.textContent = JSON.stringify(
      { error: "Error cargando datos" },
      null,
      2
    );
  });
