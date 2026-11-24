export function calcularTotales(subtotal, promocion = false) {
    const descuento = promocion ? Math.round(subtotal * 0.1) : 0;
    const impuesto = Math.round((subtotal - descuento) * 0.085);
    return { subtotal, descuento, impuesto, total: subtotal - descuento + impuesto };
}


export function cantidadValida(cantidad) {
    return Number.isInteger(cantidad) && cantidad >= 1 && cantidad <= 99;
}
