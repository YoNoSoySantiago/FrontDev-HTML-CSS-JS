inicio:
for(let contador = 0; contador <= 10; contador++){
    if( contador % 2 !== 0){
        continue inicio;//ir a la etiqueta inicio
    }
    console.log(contador);
}