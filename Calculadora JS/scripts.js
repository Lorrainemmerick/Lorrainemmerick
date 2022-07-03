$(document).ready(function)(){

	$(".valor").on('click', function(){

        var valorBotao = $(this).val();
        var valorDisplay = $(".display").val();
        var valorConcatenado = valorDisplay.concat(valorBotao);

        $(".display").val(valorConcatenado);
    });

    $(".backspace").on('click',function(){

        var valorDisplay = $(".display").val();
        var valorCampo =  valorDisplay.length;
        var backspace = valorDisplay.substring(0,valorCampo -1);
        $(".display").val(backspace);
    });

    $(".excluir").on('click', function(){
        $(".display").val("");
    });

    $(".resultado").on('click', function(){

        var valorDisplay = $(".display").val();
        
        if ($(".display").val().match('%')){

            var posicao = valorDisplay.substring(valorDisplay.length - 1);
                
            if( posicao == '%'){
                var valorCampo =  valorDisplay.length;
                var operacao = valorDisplay.substring(0,valorCampo -1);

                if ($(".display").val().indexOf('+') >= -1 || $(".display").val().indexOf('-') >= -1 || $(".display").val().indexOf('*') >= -1 || $(".display").val().indexOf('/') >= -1) {

                    var resultado = operacao/100;
                }
                if ($(".display").val().indexOf('*') > -1) {
                    var separacao = operacao.split("*");
                    var divisao = separacao[1]/100;
                    var resultado = separacao[0]*divisao;
                }
                if ($(".display").val().indexOf('/') > -1) {
                    var separacao = operacao.split("/");
                    var divisao = separacao[1]/100;
                    var resultado = separacao[0]/divisao;
                }
                if ($(".display").val().indexOf('+') > -1) {
                    var separacao = operacao.split("+");                       
                    var multiplicacao = (separacao[0]*separacao[1])/100;
                    var formatacaoSeparacao = parseFloat(multiplicacao);
                    var formatacao = parseFloat(separacao[0]);
                    var resultado = formatacao + formatacaoSeparacao;
                }
                if ($(".display").val().indexOf('-') > -1) {
                    var separacao = operacao.split("-");
                    var multiplicacao = (separacao[0]*separacao[1])/100;
                    var resultado = separacao[0]-multiplicacao;
                }
            }else{
                var valorReal = valorDisplay.replace('%', '/100 *');
                var resultado = eval(valorReal);
            }                
        }else{
            var resultado = eval(valorDisplay);
        }
        $(".display").val(resultado);
    });

	document.body.addEventListener('keydown', function (e) {

        const tecla = e.key;
        var nomeTeclaPressionada = `Key: ${tecla}`;

        if (nomeTeclaPressionada == 'Key: Delete') {

            $(".display").val("");
        }
        if (nomeTeclaPressionada == 'Key: Enter') {
            
           $(".igual").click();
        }
    });
});