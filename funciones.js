document.addEventListener('DOMContentLoaded',function(){
    const boton=document.getElementById('cambiaBotonDeTexto');
    boton.addEventListener('click',function(){
        const introduccionSeccion=document.getElementById('introID');
        introduccionSeccion.innerHTML='<p>El texto ha cambiado después de hacer dlic en el botón..</p>';
    });
});
