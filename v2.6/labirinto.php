<?php
$level = @$_GET['level'];

if($level == 4){
    $data = 'data-hp="24"';
}else if($level == 3){
    $data = 'data-hp="12"';
}else if($level == 2){
    $data = 'data-hp="8"';
}else{
    $data = 'data-hp="1"';
}
?>

<!DOCTYPE HTML>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" type="text/css" href="css/estilos.css">
    <link rel="stylesheet" type="text/css" href="css/enemy.css">
	<title>Labirinto :: Level <?php echo $level;?></title>
</head>
<body>
	<div id="labirinto">
		<span id="ponteiro"></span>
        <span id="boss" class="enemy" <?php echo $data;?>></span>
        <span id="boss2" class="enemy" <?php echo $data;?>></span>
        <span id="lesma" class="enemy" <?php echo $data;?>></span>
        <span id="dog" class="enemy" <?php echo $data;?>></span>
       	<span id="kabuto" class="enemy" <?php echo $data;?>></span>
       	<span id="aerodact" class="enemy" <?php echo $data;?>></span>
       	<span id="snake" class="enemy" <?php echo $data;?>></span>
       	<span id="dusk" class="enemy" <?php echo $data;?>></span>
	</div>
	<div id="controle_remoto" style="display:none;">
		<p>Controle remoto</p>
		<button id="para_cima" title="Mova para cima"></button>
		<button id="para_baixo" title="Mova para baixo"></button>
		<button id="para_esquerda" title="Mova para esquerda"></button>
		<button id="para_direita" title="Mova para direita"></button>
		<p>Utilize os botões acima<br />para mover o ponteiro.<br />Ou use as teclas 'W', 'A', 'S', 'D'.</p>
        <p id="tentarNovamente">Tentar Novamente</p>
        <p id="automatico">Modo Automatico</p>
        <p id="contador">Movimentos : 0</p>
	</div>
	<script src="scripts/jquery-1.10.2.min.js"></script>
	<script src="scripts/automatico.js"></script>
	<script src="scripts/colisao.js"></script>
	<script>
<?php
if($level == 4){
    echo "var dificuldade = 500;";
}else if($level == 3){
    echo "var dificuldade = 600;";
}else if($level == 2){
    echo "var dificuldade = 900;";
}else{
    echo "var dificuldade = 1300;";
}
$level = 4;
?>
    var bombs = 0;
    var countEnemy = 0;

	//Cria a função playsound de jquery
	(function($){
	$.extend({
		playSound: function(){
		  return $("<audio autoplay style='display:none;' loop='"+arguments[1]+"' preload='auto' ><source src='"+arguments[0]+"' type=\"audio/mpeg\"></video>").
		  appendTo('body');
		}
	  });
	})(jQuery);
	
		var trap = function(){
            bombs++;
            $("#trap").remove();
            $("<span id='trap' class='trap'></span>").appendTo('#labirinto');
            $("#trap").css({'top':$("#ponteiro").css("top"),'left':$("#ponteiro").css("left")});
		}
		var trapexplode = function(element){
			$("#trap").removeClass("trap");
			$("#trap").addClass("explode");
			$("#trap").delay("fast")
			$(this).css({'background-position-y' : '-39px'}) 
			$(this).css({'background-position-x' : '-5px'}) 
				.queue(function(next){ 
						$(this).css({'background-position-x' : '-52px'}) 
						next(); 
				});
			$("#trap").delay("normal").queue(function(next){ 
					$(this).css({'background-position-y' : '-73px'}); 
					next(); 
			});
			$("#trap").delay("slow").queue(function(next){ 
				$("#trap").remove();
				next();
			});
			console.log($("#"+element).attr("data-hp"));
            $("#"+element).attr("data-hp", ""+($("#"+element).attr("data-hp")-1+$("#"+element).length)-1);
            console.log($("#"+element).attr("data-hp"));

            if($("#"+element).attr("data-hp") < 1){
			    $("#"+element).remove();
                countEnemy++;
            }
		}
		
		var count = 0;
		
		/* Listeners do evento de movimento */
		$(document).ready(function() {
			$.playSound('audio/bmg.mp3', true);
			
			$("#para_cima").on("click", function(){
				up();
			});
			$("#para_baixo").on("click", function(){
				down();
			});
			$("#para_esquerda").on("click", function(){
				left();
			});
			$("#para_direita").on("click", function(){
				right();
			});
			$("#tentarNovamente").on("click", function(){
				resetaPosicao();
			});
			$("body").keyup(key2);
			$(window).keydown(key2);
			/*$(document).keydown(function(e){
				console.log(e);
				if($("#ponteiro:animated").size() == 0){
					console.log(e.keyCode);
					if(e.keyCode == 37 ||e.keyCode == 65){
						left();
					}else if(e.keyCode == 38 ||e.keyCode == 87){
						up();
					}else if(e.keyCode == 39 ||e.keyCode == 68){
						right();
					}else if(e.keyCode == 40 ||e.keyCode == 83){
						down();
					}else if(e.keyCode == 32 ||e.keyCode == 96 || e.keyCode == 70){
						trap();
					}
					//$('#ponteiro').scrollIntoView();
				}
			});	*/		
		});
		var key = function(e){
			console.log(e);
				if($("#ponteiro:animated").size() == 0){
					console.log(e.keyCode);
					if(e.which == 37 ||e.which == 65){
						left();
					}else if(e.which == 38 ||e.which == 87){
						up();
					}else if(e.which == 39 ||e.which == 68){
						right();
					}else if(e.which == 40 ||e.which == 83){
						down();
					}else if(e.which == 32 ||e.which == 96 || e.which == 70){
						trap();
					}
					//$('#ponteiro').scrollIntoView();
				}
		}
		var key2 = function(e){
			console.log(e);
				if($("#ponteiro:animated").size() == 0){
					console.log(e.keyCode);
					if(e.keyCode == 37 ||e.keyCode == 65){
						left();
					}else if(e.keyCode == 38 ||e.keyCode == 87){
						up();
					}else if(e.keyCode == 39 ||e.keyCode == 68){
						right();
					}else if(e.keyCode == 40 ||e.keyCode == 83){
						down();
					}else if(e.keyCode == 32 ||e.keyCode == 96 || e.keyCode == 70){
						trap();
					}
					//$('#ponteiro').scrollIntoView();
				}
		}
		/* aumenta 1 no contador de jogadas e verifica se ganhou */
		var verificaPosicao = function(){
			count++;
			$("#contador").html("Movimentos : "+count);
			
			if($("#ponteiro").css("top") >= "470px" && $("#ponteiro").css("top") <= "490px/"){
				if($("#ponteiro").css("left") >= "350px" && $("#ponteiro").css("left") <= "370px"){
					alert("Você Ganhou!");
                    location.href="win.php?level=<?php echo $level;?>&passos="+count+"&bombs="+bombs+"&enemy="+countEnemy+"&win";
				}
			}
			verificaMorte();
		}
		
		/* Prescisa explicar? */
		var resetaPosicao = function(){
            location.href="win.php?level=<?php echo $level;?>&passos="+count+"&bombs="+bombs+"&enemy="+countEnemy;
		}
		
		/* Controla e verifica a movimentação */
		var up = function(){
			$("#ponteiro").css({'background-position-x' : '-16px'});
			if(col[getTop("ponteiro")][getLeft("ponteiro")].up){
				//scroll da pagina
				var y = $(window).scrollTop();
				$("html, body").animate({ scrollTop: y -18 }, "normal");

				$("#ponteiro").animate({"top":"-=9px"}, "fast");
				$("#ponteiro").css({'background-position-y' : '-16px'}).delay(0)
				  .queue(function(next){ 
					$(this).css({'background-position-y' : '-32px'}) 
					next(); 
				});
				$("#ponteiro").animate({"top":"-=9px"}, "fast");
				$("#ponteiro").delay(0).queue(function(next){ 
					$(this).css({'background-position-y' : '0px'}); 
					next(); 
				});
			}
			verificaPosicao();
		}
		var down = function(){
			$("#ponteiro").css({'background-position-x': '0px'});
			if(col[getTop("ponteiro")][getLeft("ponteiro")].down){
				//scroll da pagina
				var y = $(window).scrollTop();
				$("html, body").animate({ scrollTop: y +18 }, "normal");
				
				$("#ponteiro").animate({"top":"+=9px"}, "fast");
				$("#ponteiro").css({'background-position-y' : '-16px'}).delay(0)
				  .queue(function(next){ 
					$(this).css({'background-position-y' : '-32px'}) 
					next(); 
				});
				$("#ponteiro").animate({"top":"+=9px"}, "fast");
				$("#ponteiro").delay(0).queue(function(next){ 
					$(this).css({'background-position-y' : '0px'}); 
					next(); 
				});
			}
			verificaPosicao();
		}
		var left = function(){
			$("#ponteiro").css({'background-position-x' : '-32px'});
			if(col[getTop("ponteiro")][getLeft("ponteiro")].left){
				//scroll Left
				var y = $(window).scrollLeft();
				$("html, body").animate({ scrollLeft: y -18 }, "normal");
				
				$("#ponteiro").animate({"left":"-=9px"}, "fast");
				
				$("#ponteiro").css({'background-position-y' : '-16px'}).delay(0)
				  .queue(function(next){ 
					$(this).css({'background-position-y' : '-32px'}) 
					next(); 
				});
				$("#ponteiro").animate({"left":"-=9px"}, "fast");
				
				$("#ponteiro").delay(0).queue(function(next){ 
					$(this).css({'background-position-y' : '0px'}); 
					next(); 
				});
			}
			verificaPosicao();	
		}
		var right = function(){	
			$("#ponteiro").css({'background-position-x' : '-48px'});
			if(col[getTop("ponteiro")][getLeft("ponteiro")].right){
				//scroll Left
				var y = $(window).scrollLeft();
				$("html, body").animate({ scrollLeft: y +18 }, "slow");
				
				$("#ponteiro").animate({"left":"+=9px"}, "fast");
				
				$("#ponteiro").css({'background-position-y' : '-16px'}).delay(0)
				  .queue(function(next){ 
					$(this).css({'background-position-y' : '-32px'}) 
					next(); 
				});
				$("#ponteiro").animate({"left":"+=9px"}, "fast");
			 	
				$("#ponteiro").delay(0).queue(function(next){ 
					$(this).css({'background-position-y' : '0px'}); 
					next(); 
				});
			}
			verificaPosicao();
		}
		
		/* Pega as posições já entregando o valor do array */
		var getTop = function(obj){
			return (parseInt($("#"+obj).css("top"))/18)-1 || 0;
		}
		var getLeft = function(obj){
			return ((parseInt($("#"+obj).css("left"))-2)/18)-1 || 0;
		}
	</script>
    <script src="scripts/enemy.js"></script>
</body>
</html>