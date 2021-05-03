function mensaje() {
    alert('hola mundo');
}

function validarFormulario() {
    var resp = validaRut();
    if (resp == false) {
        return false;
    }
    return true;
}

function validaRut() {
    var rut = document.getElementById('txtRut').value;
    //alert(rut);
    console.log(rut);
    var num = 3;
    var suma = 0;
    for (let index = 0; index < 8; index++) {
        var caracter = rut.slice(index, index + 1);
        console.log(caracter + ' x ' + num);
        suma = suma + (caracter * num);
        num = num - 1;
        if (num == 1) {
            num = 7;
        }
    }
    console.log('suma:' + suma);
    var resto = suma % 11;
    var dv = 11 - resto;
    if (dv > 9) {
        if (dv == 10) {
            dv = 'K';
        } else {
            dv = 0;
        }
    }
    console.log(dv);
    var dv_usuario = rut.slice(-1).toUpperCase();
    if (dv != dv_usuario) {
        alert('Rut no valido o debe tener mas de 3 caracteres');
        return false;
    }
    return true;
}