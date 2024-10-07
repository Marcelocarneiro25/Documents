$(document).ready(function(){
    $('#caroucel-imagens').slick({
        autoplay:true,
        arrows:false
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle()
    });

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules:{
            nome:{
                required:true
            },
            telefone:{
                required:true
            },
            email:{
                required:true,
                email:true
            },
            mensagem:{
                required:true
            },
            veiculoInteresse:{
                required:false
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome.',
            telefone: 'Por favor, insira seu telefone.',
            email: 'Por favor, insira um e-mail válido.',
            mensagem: 'Por favor, insira sua mensagem.'
        },
        submitHandler:function(form){
            console.log(form);
        },
        invalidHandler:function(evento, validador){
            let camposIcorretos= validador.numberOfInvalids();
            if(camposIcorretos){
                alert(`Exitem ${camposIcorretos} campos incorretos.`);
            }
        }
    })

    $('.lista-veiculos button').click(function(){
        const destino= $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text()

        $('#veiculoInteresse').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        },1000)
    })
})
