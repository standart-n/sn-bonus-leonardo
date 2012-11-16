(function($){

	var methods={
		init:function(options)
		{
			if (!options) { var options={}; }
			def={
				'bonus':
				{
					'inputText':'Введите номер карты'
				},
				'content':{},
				'result':{}
			}
			$.extend(true,def,options);
			return this.each(function(){
				$(this).data('snLeo',def);
				$(this).snLeoEvents({'href':'#autoload'});
			});
		}
	};		

	$.fn.snLeo=function(sn){
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
