/**
 * TODO NO PROJETO:
 * Verificação a cada movimento e segundo para ver mortes ou outras coisas
 */

/*Variaveis*/
var player,
    mobs = [],

    scrollL = null,
    scrollT = null,
    $hb = null;

/*funções*/
var key = function(e){
    if(player.animacao == false){
        switch(e.which){
            case 37:
            case 65:
                if(player.move('left')){
                    scrollL -= 18;
                    $hb.animate({ scrollLeft: scrollL }, "normal");
                }
                break;
            case 38:
            case 87:
                if(player.move('up')){
                    scrollT -= 18;
                    $hb.animate({ scrollTop: scrollT }, "normal");
                }
                break;
            case 39:
            case 68:
                if(player.move('right')){
                    scrollL += 18;
                    $hb.animate({ scrollLeft: scrollL }, "normal");
                }
                break;
            case 40:
            case 83:
                if(player.move('down')){
                    scrollT += 18;
                    $hb.animate({ scrollTop: scrollT }, "normal");
                }
                break;
            case 32:
            case 96:
            case 70:
                player.action();
                break;
        }
    }
};

$(document).ready(function(){
    scrollL = $(window).scrollLeft();
    scrollT = $(window).scrollTop();
    $hb = $('html, body');

    player = new Player($("#player"));
    var i = 0;
    $('.mob').each(function(){
        mobs.push(new Mob($('#'+this.id), Math.random()*500, player));
        mobs[i].ligarAi();
        i++;
    });



    $("body").keydown(key);
});