(function($){

	var methods={
		init:function(options)
		{
			return this.each(function(){
			});
		},
		bonusForm:function()
		{
			leo=$(this);
			sn=$(this).data('snLeo');
			$("#bonus-area-input input").on("focus",function(){
				 $(this).removeClass("bonus-input-blur").addClass("bonus-input-focus").select();
				 if (sn.bonus.inputText) {
					if ($(this).val()==sn.bonus.inputText) {
						$(this).val("");
					}
				}
			});
			$("#bonus-area-input input").on("blur",function(){
				 $(this).removeClass("bonus-input-focus").addClass("bonus-input-blur");
				 if (sn.bonus.inputText) {
					if ($(this).val()=="") {
						$(this).val(sn.bonus.inputText);
					}
				}
			});
			$("#bonus-link-check").on("click",function(e){
				e.preventDefault();
				leo.snLeoEvents({'href':'#checkCard'});
			});
			$("#bonus-form").on("submit",function(e){
				e.preventDefault();
				leo.snLeoEvents({'href':'#checkCard'});
			});			
		}
	};		

	$.fn.snLeoTriggers=function(sn){
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
