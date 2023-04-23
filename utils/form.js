function getData() {
    const name = document.getElementById('nameUser').value;
    const lastName = document.getElementById('lastName').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('civilStates').value;
    const instagram = document.getElementById('instagram').value;
    const gender = document.getElementById('gender').value;
    const resut = "O seu nome é " + name + " seu sobre nome é" + lastName +
        "sua cidade é " + city + " seu estado civil é " + state + " seu instagram é @" + instagram +
        "e voce  é " + gender;
    document.getElementById('result').innerHTML = resut

   // TODO AJUSTAR DEPOIS NOMES
}

