document.getElementById('resultado').addEventListener('click', function() {
    var nota1 = parseFloat(document.getElementById('nota_1').value) || 0;
    var nota2 = parseFloat(document.getElementById('nota_2').value) || 0;
    var nota3 = parseFloat(document.getElementById('nota_3').value) || 0;

    var media = (nota1 + nota2 + nota3) / 3;
    document.getElementById('média').textContent = media.toFixed(2);

    var status = media >= 7 ? 'Aprovado' : 'Reprovado';
    document.getElementById('status').textContent = status;

    var porcentagem = (notaTotal / notaMaximatotal) * 100;
    document.getElementById('porcentagem').textContent = porcentagem.toFixed(2);

    var status = porcentagem >= 75 ? 'O aluno foi aprovado' : 'O aluno está de recuperação';
   document.getElementById('status').textContent = status;
});