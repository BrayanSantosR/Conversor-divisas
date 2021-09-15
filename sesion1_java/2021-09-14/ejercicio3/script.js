let nombre=prompt("Ingrese nombre del empleado");
let salario=Number(prompt("Ingrese sueldo base"));
let venta1=Number(prompt("Ingrese venta1"));
let venta2=Number(prompt("Ingrese venta2"));
let venta3=Number(prompt("Ingrese venta3"));
alert(` Los datos ingresados son: 
Nombre${nombre}
tiene un sueldo de ${salario} 
tiene una venta 1 de ${venta1}
tiene una venta 2 de ${venta2}
tiene una venta 3 de ${venta3}
`)

let sueldoTotal, comisionVentas;
comisionVentas=(venta1+venta2+venta3)*0.10;
sueldoTotal=salario+comisionVentas;

console.log(`El empleado ${nombre}
tiene un sueldo de ${salario} 
tiene una venta 1 de ${venta1}
tiene una venta 2 de ${venta2}
tiene una venta 3 de ${venta3}
Su comision es de ${comisionVentas}
Su sueldo total sera de ${sueldoTotal}`)

