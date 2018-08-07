
$(document).ready(function(){
});

/**
 *
 * OBJETO: Personagem
 *
 * */
function Personagem(){}
//Personagem.prototype.jquerySlct = $("body");
Personagem.prototype.posX = '0px';
Personagem.prototype.posY = '0px';
/** GET */
Personagem.prototype.local_x = function(){
    return Math.round((parseInt(this.posX)-10)/18); //(posX -10(do mapa)) /18(do movimento de cada personagem)
};
Personagem.prototype.local_y = function(){
    return Math.round((parseInt(this.posY)-9)/18); //(posY -11(do mapa)) /18(do movimento de cada personagem)
};
/** MOVIMENTAÇÃO DO PERSONAGEM */
Personagem.prototype.Move_up = function(){
    var js = this.jquerySlct;
    js.css({'background-position-y' : '0px'});

    var can = col[this.local_y()][this.local_x()].up;
    if(can){
        js.animate({'top':'-=9px'}, 'fast');
        js.css({'background-position-x' : '-17px'}).delay(0)
            .queue(function(next){
                js.css({'background-position-x' : '-34px'});
                next();
            });
        js.animate({'top':'-=9px'}, 'fast');
        js.delay(50).queue(function(next){
            js.css({'background-position-x' : '0px'});
            next();
        });
        this.posY = (parseInt(this.posY)-18)+'px';
    }
    return can;
};
Personagem.prototype.Move_left = function(){
    var js = this.jquerySlct;
    js.css({'background-position-y' : '-17px'});
    var can = col[this.local_y()][this.local_x()].left;
    if(can){
        js.animate({'left':'-=9px'}, 'fast');
        js.css({'background-position-x' : '-17px'}).delay(0)
            .queue(function(next){
                js.css({'background-position-x' : '-34px'});
                next();
            });
        js.animate({'left':'-=9px'}, 'fast');
        js.delay(50).queue(function(next){
            js.css({'background-position-x' : '0px'});
            next();
        });
        this.posX = (parseInt(this.posX)-18)+'px';
    }
    return can;
};
Personagem.prototype.Move_right = function(){
    var js = this.jquerySlct;
    js.css({'background-position-y' : '-34px'});
    var can = col[this.local_y()][this.local_x()].right;
    if(can){
        js.animate({'left':'+=9px'}, 'fast');
        js.css({'background-position-x' : '-17px'}).delay(0)
            .queue(function(next){
                js.css({'background-position-x' : '-34px'});
                next();
            });
        js.animate({'left':'+=9px'}, 'fast');
        js.delay(50).queue(function(next){
            js.css({'background-position-x' : '0px'});
            next();
        });
        this.posX = (parseInt(this.posX)+18)+'px';
    }
    return can;
};
Personagem.prototype.Move_down = function(){
    var js = this.jquerySlct;
    js.css({'background-position-y' : '-51px'});
    var can = col[this.local_y()][this.local_x()].down;
    if(can){
        js.animate({'top':'+=9px'}, 'fast');
        js.css({'background-position-x' : '-16px'}).delay(0)
            .queue(function(next){
                js.css({'background-position-x' : '-32px'});
                next();
            });
        js.animate({'top':'+=9px'}, 'fast');
        js.delay(50).queue(function(next){
            js.css({'background-position-x' : '0px'});
            next();
        });
        this.posY = (parseInt(this.posY)+18)+'px';
    }
    return can;
};
Personagem.prototype.Move_special = function(){
    //TODO isso
};


/**
 *
 *  OBJETO: Mob
 *
 *  */
function Mob(element, velocidade, alvo){
    this.jquerySlct = element;
    this.posX = element.css('left');
    this.posY = element.css('top');
    this.alvo = alvo;
    this.lastMove = '';
    this.velocidade = velocidade;
    this.ai = null;

    this.move = function(personagem){
        var top = this.local_y();
        var left = this.local_x();
        var difTop = top - personagem.local_y();
        var difLeft = left - personagem.local_x();

        if(difTop == 0)
            this.lastMove = '';
        if(difLeft == 0)
            this.lastMove = '';

        if(Math.abs(difLeft) >= Math.abs(difTop)){
            if(difLeft < 0){
                if(difTop >0){
                    if(col[this.local_y()][this.local_x()].right && this.lastMove != 'left')
                        this.Move_right();
                    else if(col[this.local_y()][this.local_x()].up && this.lastMove != 'down')
                        this.Move_up();
                    else if(col[this.local_y()][this.local_x()].down && this.lastMove != 'up')
                        this.Move_down();
                    else if(col[this.local_y()][this.local_x()].left && this.lastMove != 'right')
                        this.Move_left();
                    else
                        this.lastMove = '';
                }else{
                    if(col[this.local_y()][this.local_x()].right && this.lastMove != 'left')
                        this.Move_right();
                    else if(col[this.local_y()][this.local_x()].down && this.lastMove != 'up')
                        this.Move_down();
                    else if(col[this.local_y()][this.local_x()].up && this.lastMove != 'down')
                        this.Move_up();
                    else if(col[this.local_y()][this.local_x()].left && this.lastMove != 'right')
                        this.Move_left();
                    else
                        this.lastMove = '';
                }
            }else{
                if(difTop >0){
                    if(col[this.local_y()][this.local_x()].left && this.lastMove != 'right')
                        this.Move_left();
                    else if(col[this.local_y()][this.local_x()].up && this.lastMove != 'down')
                        this.Move_up();
                    else if(col[this.local_y()][this.local_x()].down && this.lastMove != 'up')
                        this.Move_down();
                    else if(col[this.local_y()][this.local_x()].right && this.lastMove != 'left')
                        this.Move_right();
                    else
                        this.lastMove = '';
                }else{
                    if(col[this.local_y()][this.local_x()].left && this.lastMove != 'right')
                        this.Move_left();
                    else if(col[this.local_y()][this.local_x()].down && this.lastMove != 'up')
                        this.Move_down();
                    else if(col[this.local_y()][this.local_x()].up && this.lastMove != 'down')
                        this.Move_up();
                    else if(col[this.local_y()][this.local_x()].right && this.lastMove != 'left')
                        this.Move_right();
                    else
                        this.lastMove = '';
                }
            }
        }else if(Math.abs(difLeft) < Math.abs(difTop)){
            if(difTop > 0){
                if(difLeft >0){
                    if(col[this.local_y()][this.local_x()].up  && this.lastMove != 'down')
                        this.Move_up();
                    else if(col[this.local_y()][this.local_x()].right && this.lastMove != 'left')
                        this.Move_right();
                    else if(col[this.local_y()][this.local_x()].left && this.lastMove != 'right')
                        this.Move_left();
                    else if(col[this.local_y()][this.local_x()].down && this.lastMove != 'up')
                        this.Move_down();
                    else
                        this.lastMove = '';
                }else{
                    if(col[this.local_y()][this.local_x()].up && this.lastMove != 'down')
                        this.Move_up();
                    else if(col[this.local_y()][this.local_x()].right && this.lastMove != 'left')
                        this.Move_right();
                    else if(col[this.local_y()][this.local_x()].left && this.lastMove != 'right')
                        this.Move_left();
                    else if(col[this.local_y()][this.local_x()].down && this.lastMove != 'up')
                        this.Move_down();
                    else
                        this.lastMove = '';
                }
            }else{
                if(difLeft >0){
                    if(col[this.local_y()][this.local_x()].down && this.lastMove != 'up')
                        this.Move_down();
                    else if(col[this.local_y()][this.local_x()].right && this.lastMove != 'left')
                        this.Move_right();
                    else if(col[this.local_y()][this.local_x()].left && this.lastMove != 'right')
                        this.Move_left();
                    else if(col[this.local_y()][this.local_x()].up && this.lastMove != 'down')
                        this.Move_up();
                    else
                        this.lastMove = '';
                }else{
                    if(col[this.local_y()][this.local_x()].down && this.lastMove != 'up')
                        this.Move_down();
                    else if(col[this.local_y()][this.local_x()].right && this.lastMove != 'left')
                        this.Move_right();
                    else if(col[this.local_y()][this.local_x()].left && this.lastMove != 'right')
                        this.Move_left();
                    else if(col[this.local_y()][this.local_x()].up && this.lastMove != 'down')
                        this.Move_up();
                    else
                        this.lastMove = '';
                }
            }
        }
    };
    this.die = function(){
        this.jquerySlct.remove();
        delete this;
    };
    //todo verificar morte ao andar

    this.ligarAi = function(){
        var objeto = this;
        this.ai = setInterval(function(){
            objeto.move(objeto.alvo);
            //todo: colocar a verificação de morte
        }, objeto.velocidade);
    };
    this.desligarAi = function(){
        clearInterval(this.ai);
    };
}
Mob.prototype = new Personagem();
Mob.prototype.constructor = Mob;


/**
 *
 * OBJETO: Player
 *
 * */
function Player(element){
    this.jquerySlct = element;
    this.posX = element.css('left');
    this.posY = element.css('top');
    this.animacao = false;
    this.weapon = '';
    this.verificaPosicao = function(){
        //todo: isso
        /*
        count++;
         $("#contador").html("Movimentos : "+count);

         if($("#ponteiro").css("top") >= "470px" && $("#ponteiro").css("top") <= "490px/"){
         if($("#ponteiro").css("left") >= "350px" && $("#ponteiro").css("left") <= "370px"){
         alert("Você Ganhou!");
         location.href="win.php?level=<?php echo $level;?>&passos="+count+"&bombs="+bombs+"&enemy="+countEnemy+"&win";
         }
         }
         verificaMorte();
         */
    };
    this.move = function(args){
        var retorna = false;
        switch(args){
            /*case true:
                this.animacao = true;*/
            case 'up':
                retorna = this.Move_up();
                break;
            case 'left':
                retorna = this.Move_left();
                break;
            case 'right':
                retorna = this.Move_right();
                break;
            case 'down':
                retorna = this.Move_down();
                break;
        }
        //TODO: Aqui vai acontecer as outras coisas depois de tentar mover
        this.animacao = false;
        return retorna;
    };
    this.bomb = function(){
        //TODO: função da bomba
    };
    //TODO: outras mecanicas
    this.action = function(){
        switch(this.weapon){
            case 'bomb':
                this.bomb();
                break;
        }
    };
}
Player.prototype = new Personagem();
Player.prototype.constructor = Player;

/*
 var block = 1;
 $(".enemy").each(function(){
 if(block == 1){
 if(getTop("ponteiro") == getBossTop(this.id) && getLeft("ponteiro") == getBossLeft(this.id)){
 alert("Voce perdeu :/");
 resetaenemyes();
 resetaPosicao();
 block = 0;
 }
 if(getTop("trap") == getBossTop(this.id) && getLeft("trap") == getBossLeft(this.id)){
 trapexplode(this.id);
 block = 0;
 }
 }
 });
 */