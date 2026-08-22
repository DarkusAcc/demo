const API_URL = "http://localhost:8080/api/libros";

const form = document.getElementById("form-libro");
const cuerpoTabla = document.getElementById("cuerpo-tabla");
const inputNombre = document.getElementById("nombre");
const inputAutor = document.getElementById("autor");
const inputVentas = document.getElementById("ventas");

// Guarda el id del libro que se está editando
let idEditando = null;

async function cargarLibros() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Error al obtener los libros");
    const libros = await res.json();
    pintarTabla(libros);
  } catch (error) {
    console.error(error);
    alert("No se pudieron cargar los libros.");
  }
}

function pintarTabla(libros) {
  cuerpoTabla.innerHTML = "";

  if (libros.length === 0) {
    cuerpoTabla.innerHTML = `<tr><td colspan="4">No hay libros registrados aún.</td></tr>`;
    return;
  }

  libros.forEach((libro) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${libro.nombre}</td>
      <td>${libro.autor}</td>
      <td>${libro.ventas}</td>
      <td>
        <button class="btn-editar" data-id="${libro.id}">Editar</button>
        <button class="btn-eliminar" data-id="${libro.id}">Eliminar</button>
      </td>
    `;
    cuerpoTabla.appendChild(fila);
  });

  document.querySelectorAll(".btn-editar").forEach((btn) => {
    btn.addEventListener("click", () => cargarParaEditar(btn.dataset.id, libros));
  });
  document.querySelectorAll(".btn-eliminar").forEach((btn) => {
    btn.addEventListener("click", () => eliminarLibro(btn.dataset.id));
  });
}

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // evita que la página se recargue al enviar el form

  const libro = {
    nombre: inputNombre.value,
    autor: inputAutor.value,
    ventas: Number(inputVentas.value),
  };

  try {
    let res;
    if (idEditando) {
      // Servicio de Actualizacion
      res = await fetch(`${API_URL}/${idEditando}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(libro),
      });
    } else {
      // Servicio de Creación
      res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(libro),
      });
    }

    if (!res.ok) throw new Error("Error al guardar el libro");

    resetFormulario();
    cargarLibros(); // refresca la tabla
  } catch (error) {
    console.error(error);
    alert("No se pudo guardar el libro.");
  }
});


function cargarParaEditar(id, libros) {
  const libro = libros.find((l) => l.id == id);
  if (!libro) return;

  inputNombre.value = libro.nombre;
  inputAutor.value = libro.autor;
  inputVentas.value = libro.ventas;
  idEditando = libro.id;

  // cambia el texto del botón para que el usuario sepa que está editando
  form.querySelector("button[type=submit]").textContent = "Actualizar Libro";
}

function resetFormulario() {
  form.reset();
  idEditando = null;
  form.querySelector("button[type=submit]").textContent = "Guardar Libro";
}

// Servicio de eliminación
async function eliminarLibro(id) {
  const confirmar = confirm("¿Seguro que quieres eliminar este libro?");
  if (!confirmar) return;

  try {
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Error al eliminar el libro");
    cargarLibros();
  } catch (error) {
    console.error(error);
    alert("No se pudo eliminar el libro.");
  }
}

//Cargue de datos
cargarLibros();