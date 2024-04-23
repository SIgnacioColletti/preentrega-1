
 const Persona=[]
Persona.push(prompt("ingrese su nombre"));

  alert(`hola ¿como estas ${Persona}? bienvenido a Atenas gym`)

   let ingreso = prompt("si eres nuevo pon:1 si ya eres cliente pon:2");

   if(ingreso==1){
    alert("vamos a registrarte");
    (prompt("ingresa tu nombre y apellido"));
    parseInt( prompt("ingresa tu dni"));
    alert(" ya estas registrado, a partir de mañana solo deberas ingresar tu dni para poder pasar")
   } else{
    parseInt(prompt("ingresa tu dni"))
    alert("podes pasar a entrenar ")
}




