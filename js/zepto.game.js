$(document).ready(function(){
	$('.keys').focus();
	
	var second = 0;
	var minute = 0;
	
	var letters = "g g t t b b f f g g f f t t f f b f g f f t f f b enter f f f g g t t b b fg f g t f t b f b b b g g f f enter t t fb f f t f f g f f f g g t t b b f g enter enter a b c d e f g i j k l m o r s t u v w x g t b enter f g b go to bo ge ti bu gs jt kb jf gw tm enter br cg xt bw gt at bets to go it le t sits enter enter eat ate took but out bags two gave fast enter good before blue just take give black little enter after because time brittle bowl grow tow enter enter Save it. Eat fast. Good job. Little or big. enter Takes me time. Birds fly. Grubs burrow. enter Gerbils eat some food.";
	var flow = letters;	
		letters = letters.split(" ");
		flow = flow.replace(/enter/g, "<br />");
	var current = 0;
	
	$('.flow').html(flow);
	$('.output').html(letters[current]);
	$('.keys').keydown(function(e){
		
			if(letters[current] == "enter"){
				if(e.keyCode == 13){
					current++;
					$('.output').html(letters[current]);
					$('.keys').val('').focus();
					$('.position').html('');
					for(x = 0;x < current; x++) {
						if(letters[x] == 'enter'){
							$('.position').append('<br />');
						}else{
							$('.position').append(letters[x]+' ');
						}
					}
					$('.position').append($('<span />').html(letters[current]));
				}else{
					e.preventDefault();
				}
			}else{
				if(e.keyCode == 32){
					if($('.keys').val() == (letters[current])){
						current++;
						$('.output').html(letters[current]);
						$('.keys').val('').focus();
						$('.position').html('');
						for(x = 0;x < current; x++) {
							if(letters[x] == 'enter'){
								$('.position').append('<br />');
							}else{
								$('.position').append(letters[x]+' ');
							}
						}
						$('.position').append($('<span />').html(letters[current]));
					}
					if($('.keys').val() == ''){
						e.preventDefault();
					}
				}
			}
			
			if(letters[current] == "enter"){
				$('.output').css('color','#39C');
			}else{
				$('.output').css('color','#000');
			}
		
	});
	
	var timer = window.setInterval(function(){
		second++;
		if(second > 59){
			minute++;
			second = 0;
			$('.minutes').html(minute);
				$('.seconds').html('00');
		}
		
		if(second < 10){
			$('.seconds').html('0'+second);	
		}else{
			$('.seconds').html(second);	
		}
	},1000);
});