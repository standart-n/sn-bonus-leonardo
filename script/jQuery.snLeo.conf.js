(function($){

	var methods={
		init:function(options)
		{
			return this.each(function(){
				$(this).snLeoConf('main');
			});
		},
		main:function()
		{
			var sn=$(this).data('snLeo');
			$.ajax({
				url:'sn-project/settings/main.json',
				async:false,
				dataType:"json",
				success:function(s){
					$.extend(true,sn,s);
					$(this).data('snLeo',sn);
				}
			});
		}
	};

	$.fn.snLeoConf=function(sn){
		if (!sn) { var sn={}; }
		if (methods[sn]) {
			return methods[sn].apply(this,Array.prototype.slice.call(arguments,1));
		} else if (typeof sn==='object' || !sn) {
			return methods.init.apply(this,arguments);
		} else {
			$.error('Метод '+sn+' не существует');
		}    
		
	};		
})(jQuery);
