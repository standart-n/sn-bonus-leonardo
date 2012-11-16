(function($){

	var methods={
		init:function(options)
		{
			return this.each(function(){
				var def={
					'href':"none"
				};
				$.extend(true,def,options);
				var href=def.href;
				switch (href.replace(/(.*)#(.*)/,"$2")){
					case "autoload":
						var sn=$(this).data('snLeo');
						if (sn.bonus.inputText) {
							$("#bonus-area-input input").val(sn.bonus.inputText);
						}
						$(this).snLeoTriggers('bonusForm');
					break;
					case "checkCard":
						alert("check");
					break;
					case "close":
						$(this).hide();
					break;
				}
			});
		}
	};

	$.fn.snLeoEvents=function(sn){
		if (!sn) { var sn={}; }
		if ( methods[sn]) {
			return methods[sn].apply(this,Array.prototype.slice.call(arguments,1));
		} else if (typeof sn==='object' || !sn) {
			return methods.init.apply(this,arguments);
		} else {
			$.error('Метод '+sn+' не существует');
		}		
	};		
})(jQuery);
