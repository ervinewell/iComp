/* ------ 星级评分插件 2015-09-12 Ver. ------ */
/* starRanker.js
 * arguments: number(amounts of the stars)
 * returns: jquery
 */

(function($){
	$.fn.starRanker = function (options) {
			var starNumber    =   options || 5,
			    $_this        =   $(this),
			    $_starLi      =   $('<li />').html('★'),
			    $_starArea    =   $('<ul />');

			for(var i = 0; i < starNumber; i++)
				$_starArea.append($_starLi.clone(true));			
		    
		    $_starArea.appendTo($_this).on('click', 'li', function() {
				var $_this    =  $(this);
			
				$_this.hasClass('starChecked') ?
				  $_this.nextAll().removeClass('starChecked')
				: $_this.prevAll().addBack().addClass('starChecked');
				
				$('body').trigger('starRanker', $_this.parent().find('.starChecked').length);
		    });		
			return this;
		}
})(jQuery);