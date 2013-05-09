$(function(){
	$('.selectarrow').click(function(){

		$('.accor_selecthotel_headselect_list').toggle();
		});	
		
		$('.accor_selecthotel_headselect_list li').click(function(){
			var accor_selecthotel_this=$('.accor_selecthotel_headselect_list li').eq($('.accor_selecthotel_headselect_list li').index(this)).html();
			$(this).parent().parent().prev().children('.accor_selecthotel_headerselettitle').html(accor_selecthotel_this);
			$(this).parent().parent().hide();
			});
});