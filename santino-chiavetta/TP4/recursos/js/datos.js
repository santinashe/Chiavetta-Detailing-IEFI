// Los productos se cargan desde un JSON local que simula una API REST.
// Se memoriza la promesa para no repetir solicitudes en cada pantalla.
let solicitudProductos;

export async function obtenerProductos() {
    if (!solicitudProductos) {
        solicitudProductos = fetch(new URL('../productos.json', import.meta.url))
            .then((respuesta) => {
                if (!respuesta.ok) throw new Error(`Error HTTP ${respuesta.status} al cargar los productos`);
                return respuesta.json();
            })
            .then((productos) => {
                if (!Array.isArray(productos) || !productos.every((p) =>
                    typeof p.id === 'string' && typeof p.nombre === 'string' &&
                    Number.isFinite(p.precio) && p.precio >= 0)) {
                    throw new Error('Formato inválido del catálogo JSON');
                }
                return productos;
            })
            .catch((error) => { solicitudProductos = undefined; throw error; });
    }
    return solicitudProductos;
}
