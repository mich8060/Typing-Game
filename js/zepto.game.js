$(document).ready(function(){
	$('.keys').focus();
	
	var second = 0;
	var minute = 0;
	
	var letters = "a a ; ; s s l l dd kk f f j j ; ;; a a l l e e uu oo enter ww x x r r c c i i , , v v m m . . d d l l a as l enter dk f j j f kd s l a ; a j fmw uc ox ri vl ak uf ja e enter enter also work over could form come six enter offers four does room low world five enter would sour crust loud slow four enter enter for form our or from more some also enter work over would offer cake low doors enter come seer lead keep deep sleep enter enter A call from me. From me. See me fall. enter A low door. Some will work. enter Ask dad. A sad lad. Ask all dads.";
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