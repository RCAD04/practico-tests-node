// Regla: 10% de descuento si el total es de $50.000 o más
   export function aplicarDescuento(total) {
     if (total >= 50000) { // Recordá corregir el operador >= si venía incompleto
       return total * 0.9;
     }
     return total;
   }