function getData() {
    const name = document.getElementById('nameUser').value;
    const lastName = document.getElementById('lastName').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('civilStates').value;
    const instagram = document.getElementById('instagram').value;
    const gender = document.getElementById('gender').value;
    const resut = `Olá  ${name} ${lastName}  <br>
        sua cidade é  ${city} <br> seu estado civil é ${state}<br>  seu instagram é @ ${instagram}<br> 
        e voce  é  ${gender} <br><br> obrigado por visitar o meu cadasdtro XD`;
    document.getElementById('result').innerHTML = resut
}

