var move = function(enemy){
	var top = getBossTop(enemy.id);
	var left = getBossLeft(enemy.id);
	var diftop = top - getTop("ponteiro");
	var difleft = left - getLeft("ponteiro");
	
	if(diftop == 0){
		$("#"+enemy.id).attr("data-last", "");
	}
	if(difleft == 0){
		$("#"+enemy.id).attr("data-last", "");
	}
	
	if(Math.abs(difleft) >= Math.abs(diftop)){
	//if(diftop > difleft){
		if(difleft < 0){
			if(diftop >0){
				if(col[getBossTop(enemy.id)][getBossLeft(enemy.id)].right && $("#"+enemy.id).attr("data-last") != "left"){
					bossMoveRight(enemy);
				}
				else if(col[getBossTop(enemy.id)][getBossLeft(enemy.id)].up && $("#"+enemy.id).attr("data-last") != "down"){
					bossMoveUp(enemy);
				}
				else if(col[getBossTop(enemy.id)][getBossLeft(enemy.id)].down && $("#"+enemy.id).attr("data-last") != "up"){
					bossMoveDown(enemy);
				}
				else if(col[getBossTop(enemy.id)][getBossLeft(enemy.id)].left && $("#"+enemy.id).attr("data-last") != "right"){
					bossMoveLeft(enemy);
				}else{
					$("#"+enemy.id).attr("data-last", "");
				}
			}else{
				if(col[getBossTop(enemy.id)][getBossLeft(enemy.id)].right && $("#"+enemy.id).attr("data-last") != "left"){
					bossMoveRight(enemy);
				}
				else if(col[getBossTop(enemy.id)][getBossLeft(enemy.id)].down && $("#"+enemy.id).attr("data-last") != "up"){
					bossMoveDown(enemy);
				}
				else if(col[getBossTop(enemy.id)][getBossLeft(enemy.id)].up && $("#"+enemy.id).attr("data-last") != "down"){
					bossMoveUp(enemy);
				}	
				else if(col[getBossTop(enemy.id)][getBossLeft(enemy.id)].left && $("#"+enemy.id).attr("data-last") != "right"){
					bossMoveLeft(enemy);
				}else{
					$("#"+enemy.id).attr("data-last", "");
				}
			}
		}else{
			if(diftop >0){
				if(col[getBossTop(enemy.id)][getBossLeft(enemy.id)].left && $("#"+enemy.id).attr("data-last") != "right"){
					bossMoveLeft(enemy);
				}else if(col[getBossTop(enemy.id)][getBossLeft(enemy.id)].up && $("#"+enemy.id).attr("data-last") != "down"){
					bossMoveUp(enemy);
				} 
				else if(col[getBossTop(enemy.id)][getBossLeft(enemy.id)].down && $("#"+enemy.id).attr("data-last") != "up"){
					bossMoveDown(enemy);
				}
				else if(col[getBossTop(enemy.id)][getBossLeft(enemy.id)].right && $("#"+enemy.id).attr("data-last") != "left"){
					bossMoveRight(enemy);
				}else{
					$("#"+enemy.id).attr("data-last", "");
				}
			}else{
				if(col[getBossTop(enemy.id)][getBossLeft(enemy.id)].left && $("#"+enemy.id).attr("data-last") != "right"){
					bossMoveLeft(enemy);
				}
				else if(col[getBossTop(enemy.id)][getBossLeft(enemy.id)].down && $("#"+enemy.id).attr("data-last") != "up"){
					bossMoveDown(enemy);
				}
				else if(col[getBossTop(enemy.id)][getBossLeft(enemy.id)].up && $("#"+enemy.id).attr("data-last") != "down"){
					bossMoveUp(enemy);
				}	
				else if(col[getBossTop(enemy.id)][getBossLeft(enemy.id)].right && $("#"+enemy.id).attr("data-last") != "left"){
					bossMoveRight(enemy);
				}else{
					$("#"+enemy.id).attr("data-last", "");
				}
			}
		}
	}else if(Math.abs(difleft) < Math.abs(diftop)){
		if(diftop > 0){
			if(difleft >0){
				if(col[getBossTop(enemy.id)][getBossLeft(enemy.id)].up  && $("#"+enemy.id).attr("data-last") != "down"){
					bossMoveUp(enemy);
				}else if(col[getBossTop(enemy.id)][getBossLeft(enemy.id)].right && $("#"+enemy.id).attr("data-last") != "left"){
					bossMoveRight(enemy);
				}else if(col[getBossTop(enemy.id)][getBossLeft(enemy.id)].left && $("#"+enemy.id).attr("data-last") != "right"){
					bossMoveLeft(enemy);
				}else if(col[getBossTop(enemy.id)][getBossLeft(enemy.id)].down && $("#"+enemy.id).attr("data-last") != "up"){
					bossMoveDown(enemy);
				}else{
					$("#"+enemy.id).attr("data-last", "");
				}
			}else{
				if(col[getBossTop(enemy.id)][getBossLeft(enemy.id)].up && $("#"+enemy.id).attr("data-last") != "down"){
					bossMoveUp(enemy);
				}else if(col[getBossTop(enemy.id)][getBossLeft(enemy.id)].right && $("#"+enemy.id).attr("data-last") != "left"){
					bossMoveRight(enemy);
				}else if(col[getBossTop(enemy.id)][getBossLeft(enemy.id)].left && $("#"+enemy.id).attr("data-last") != "right"){
					bossMoveLeft(enemy);
				}else if(col[getBossTop(enemy.id)][getBossLeft(enemy.id)].down && $("#"+enemy.id).attr("data-last") != "up"){
					bossMoveDown(enemy);
				}else{
					$("#"+enemy.id).attr("data-last", "");
				}
			}
		}else{
			if(difleft >0){
				if(col[getBossTop(enemy.id)][getBossLeft(enemy.id)].down && $("#"+enemy.id).attr("data-last") != "up"){
					bossMoveDown(enemy);
				}else if(col[getBossTop(enemy.id)][getBossLeft(enemy.id)].right && $("#"+enemy.id).attr("data-last") != "left"){
					bossMoveRight(enemy);
				}else if(col[getBossTop(enemy.id)][getBossLeft(enemy.id)].left && $("#"+enemy.id).attr("data-last") != "right"){
					bossMoveLeft(enemy);
				}else if(col[getBossTop(enemy.id)][getBossLeft(enemy.id)].up && $("#"+enemy.id).attr("data-last") != "down"){
					bossMoveUp(enemy);
				}else{
					$("#"+enemy.id).attr("data-last", "");
				}
			}else{
				if(col[getBossTop(enemy.id)][getBossLeft(enemy.id)].down && $("#"+enemy.id).attr("data-last") != "up"){
					bossMoveDown(enemy);
				}else if(col[getBossTop(enemy.id)][getBossLeft(enemy.id)].right && $("#"+enemy.id).attr("data-last") != "left"){
					bossMoveRight(enemy);
				}else if(col[getBossTop(enemy.id)][getBossLeft(enemy.id)].left && $("#"+enemy.id).attr("data-last") != "right"){
					bossMoveLeft(enemy);
				}else if(col[getBossTop(enemy.id)][getBossLeft(enemy.id)].up && $("#"+enemy.id).attr("data-last") != "down"){
					bossMoveUp(enemy);
				}else{
					$("#"+enemy.id).attr("data-last", "");
				}
			}
		}
	}
}
/* Configura inteligencia aos inimigos*/
setInterval(function(){
	$(".enemy").each(function(index, element) {
		move(this);
		verificaMorte();
	});
}, dificuldade);

var getBossTop = function(obj){
	return ((parseInt($("#"+obj).css("top"))+4)/18)-1 || 0;
}
var getBossLeft = function(obj){
	return ((parseInt($("#"+obj).css("left"))-2)/18)-1 || 0;
}

/** Boss moves */
var bossMoveUp = function(enemy){
	$("#"+enemy.id).css({'background-position-y' : '-72px'});
				
	$("#"+enemy.id).animate({"top":"-=9px"}, "fast");
	
	$("#"+enemy.id).css({'background-position-x' : '0px'}).delay(0)
	  .queue(function(next){ 
		$(this).css({'background-position-x' : '-19px'}) 
		next(); 
	});
	$("#"+enemy.id).animate({"top":"-=9px"}, "fast");
	
	$("#"+enemy.id).delay(0).queue(function(next){ 
		$(this).css({'background-position-x' : '-38px'}); 
		next(); 
	});
	$("#"+enemy.id).attr("data-last","up");
}
var bossMoveDown = function(enemy){
	$("#"+enemy.id).css({'background-position-y' : '-47px'});
				
	$("#"+enemy.id).animate({"top":"+=9px"}, "fast");
	
	$("#"+enemy.id).css({'background-position-x' : '0px'}).delay(0)
	  .queue(function(next){ 
		$(this).css({'background-position-x' : '-19px'}) 
		next(); 
	});
	$("#"+enemy.id).animate({"top":"+=9px"}, "fast");
	
	$("#"+enemy.id).delay(0).queue(function(next){ 
		$(this).css({'background-position-x' : '-38px'}); 
		next(); 
	});
	$("#"+enemy.id).attr("data-last","down");
}
var bossMoveLeft = function(enemy){
	$("#"+enemy.id).css({'background-position-y' : '-24px'});
				
	$("#"+enemy.id).animate({"left":"-=9px"}, "fast");
	
	$("#"+enemy.id).css({'background-position-x' : '0px'}).delay(0)
	  .queue(function(next){ 
		$(this).css({'background-position-x' : '-19px'}) 
		next(); 
	});
	$("#"+enemy.id).animate({"left":"-=9px"}, "fast");
	
	$("#"+enemy.id).delay(0).queue(function(next){ 
		$(this).css({'background-position-x' : '-38px'}); 
		next(); 
	});
	$("#"+enemy.id).attr("data-last","left");
}

var bossMoveRight = function(enemy){
	$("#"+enemy.id).css({'background-position-y' : '-2px'});
				
	$("#"+enemy.id).animate({"left":"+=9px"}, "fast");
	
	$("#"+enemy.id).css({'background-position-x' : '0px'}).delay(0)
	  .queue(function(next){ 
		$(this).css({'background-position-x' : '-19px'}) 
		next(); 
	});
	$("#"+enemy.id).animate({"left":"+=9px"}, "fast");
	
	$("#"+enemy.id).delay(0).queue(function(next){ 
		$(this).css({'background-position-x' : '-38px'}); 
		next(); 
	});
	$("#"+enemy.id).attr("data-last","right");
}
var resetaenemyes = function(){
	$(".enemy").each(function(){
		$(this).removeAttr("top");
		$(this).removeAttr("left");
	});
}

var verificaMorte = function(){
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
}
/*
var changeDirection = function(position){
	var retorna;
	if(position == "up"){
		retorna = "down";
	}else if(position == "down"){
		retorna = "up";
	}else if(position == "left"){
		retorna = "right";
	}else if(position == "right"){
		retorna = "left";
	}
	return retorna;
}*/