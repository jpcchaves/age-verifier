function verificar(){
    var data = new Date() // pega a data atual do sistema
    var ano = data.getFullYear() // pega os 4 digitos do ano
    var fAno = document.getElementById('txtano') /*var fAno recebe o resultado do formulário "ano de nascimento"*/
    var res = document.querySelector('div#res') /* serve como variável de "resposta" que vai aparecer dentro da div id="res"*/

    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!') /*Se o client não digitar o ano ou o ano inserido for maior do que o ano atual, aparecerá o alerta. */
    } else {
        var fsex = document.getElementsByName('radsex') // foi usado o "name='radsex' porque serve para os dois (mac e fem)"
        var idade = ano - Number(fAno.value) // var idade recebe var ano (adquirida do sistema) subtraída da fAno (inserida no input)
        var gênero = '' // variável genero vazia
        var img = document.createElement('img') // var criada para receber o elemento img
        img.setAttribute('id', 'foto') // atributo para a "var img"

        /* com relação ao fsex[0] abaixo, significa que, se for colocado o primeiro input (masc = 0), será executado este bloco de comandos. E se for fsex[1], será executado o bloco de comandos abaixo desse. */

        if(fsex[0].checked) /* se o gênero inserido no input for masculino. será executado o bloco abaixo:*/ {
            gênero = 'Homem' // a variável gênero criada anteriormente receberá a string "Homem"
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criança-menino-p.jpg') // referente ao atributo inserido anteriormente 'id', 'foto'
            } else if (idade >= 10 && idade < 21){
                //jovem
                img.setAttribute('src', 'adolescente-menino-p.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem-adulto-p.jpeg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-p.jpg')
            }
            
        } else if (fsex[1].checked) /* se o gênero inserido no input for feminino, será executado o bloco abaixo:*/ {
            gênero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                //criança
                img.setAttribute('src', 'criança-menina-p.jpg') // referente ao atributo inserido anteriormente 'id', 'foto'
            } else if (idade >= 10 && idade < 21){
                //jovem
                img.setAttribute('src', 'adolescente-menina-p.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulher-adulta-p.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosa-p.jpg')
            }
        }
        res.style.textAlign = 'center' // centralizará o resultado do bloco executado acima
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.` // aparecerá essa imagem com os valores atribuídos as variáveis gênero e idade
        res.appendChild(img) /* esse comando faz com que a imagem seja adicionada junto a mensagem (innerHTML) acima (sem esse comando, não aparecerá a imagem)*/
    }


}