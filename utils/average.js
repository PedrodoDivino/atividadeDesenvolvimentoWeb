function media() { 
    const mediaOne = Number(document.getElementById('mediaOne').value);
    const mediaTwo = Number(document.getElementById('mediaTwo').value);
    const mediaThree = Number(document.getElementById('mediaTheree').value);
    const mediaFour = Number(document.getElementById('mediaFour').value);
    let result = (mediaOne + mediaTwo + mediaThree + mediaFour) / 4;

    document.getElementById('result').innerHTML = result  
    
    if (result >= 6) { 
        document.getElementById('result').innerHTML = result.innerHTML = "aprovado"  
        document.getElementById('result').style.backgroundColor = "green";
    }
    if (result >2 && result <6) { 
        document.getElementById('result').innerHTML = result.innerHTML = "recuperação"  
         document.getElementById('result').style.backgroundColor = "blue";
    } if (result <=2) { 
        document.getElementById('result').innerHTML = result.innerHTML = "Paranbéns REPROVADO"  
         document.getElementById('result').style.backgroundColor = "red";
    }
}
