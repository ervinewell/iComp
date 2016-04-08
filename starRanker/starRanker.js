/* ------ 星级评分插件 2015-09-12 Ver. ------ */
/* starRanker.js
 * arguments: number(amounts of the stars)
 * returns: jquery
 */

(function($){

	/* --- modify the checkState of stars --- */
	$.fn.setState = function (_val) {		
		this.attr('checkState', _val)
			.html(_val == 1 ? '☆' : '★');	
		return this;
	};
	
	$.fn.starRanker = function (options) {
			var starNumber    =   options || 5,
			    $_this        =   $(this),
			    $_starLi      =   $('<li />').setState(1).html('☆'),
			    $_starArea    =   $('<ul />');

			for(var i = 0; i < starNumber; i++)
				$_starArea.append($_starLi.clone(true));			
		    
		    $_starArea.appendTo($_this).on('click', 'li', function() {
				var $_this    =  $(this);
			
				$_this.attr('checkState') == 2 ?
				$_this.nextAll().setState(1)   :
				$_this.prevAll().addBack().setState(2);
				$('body').trigger('starRanker', $_this.parent().find('*[checkState="2"]').length);
		    });		
			return this;
		}
})(jQuery);