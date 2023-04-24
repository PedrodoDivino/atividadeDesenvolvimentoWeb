function getData(tech) {
    const name = document.getElementById('nameUser').value;
    const lastName = document.getElementById('lastName').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('civilStates').value;
    const instagram = document.getElementById('instagram').value;
    const result =  document.getElementById('result');

    if (document.getElementById('dart').checked) {
        tech = document.getElementById('dart').value;
     }

    if (document.getElementById('react').checked) {
         tech = document.getElementById('react').value;
     }

   result.innerHTML = `Olá  ${name} ${lastName}  <br>
   sua cidade é  ${city} <br> seu estado civil é ${state}<br>  seu instagram é @ ${instagram}<br> 
e você tem interesse em ${tech}<br><br> obrigado por visitar o meu cadasdtro XD`;
}
