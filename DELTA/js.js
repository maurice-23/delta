document.getElementById("submitBtn").onclick = function(){
    var numA = document.getElementById('numA').value;
    var numB = document.getElementById('numB').value;
    var numC = document.getElementById('numC').value;

    var delta;
    var x1 , x2;
    delta = (numB * numB) - 4 * numA * numC;
    document.getElementById('equation').innerHTML = `${numA}X<sup>2</sup> + ${numB}x + ${numC} = 0 <br><br> `;
    document.getElementById('answer').innerHTML = `${numB} <sup>2</sup> - 4(${numA})(${numC})`;
    document.getElementById('answer2').innerHTML = numB*numB+' - 4('+numA*numC+')'+'<br><br> Delta = '+ delta;
    if(delta<0){
        document.getElementById('root').innerHTML = 'Impossible in real number';
    }
    else{
        x1 = (-(numB) + Math.sqrt(delta)) / (2 * numA);
        x2 = (-numB - Math.sqrt(delta))/ (2 * numA);
        document.getElementById('root').innerHTML = 'Squareroot of Delta = ' + Math.sqrt(delta);
        document.getElementById('x1').innerHTML = 'X1 is equal to: ' + x1;
        document.getElementById('x2').innerHTML = 'X2 is equal to: ' + x2;

    }
    
}


