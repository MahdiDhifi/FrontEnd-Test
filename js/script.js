	function toggleIcon(e) {
        $(e.target)
            .prev('.panel-heading')
            .find(".more-less")
            .toggleClass('glyphicon-plus glyphicon-minus');
    };
    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
  $('.panel-group').on('shown.bs.collapse', toggleIcon);
	
	
	//parsing json
	
	$(document).ready(function(){
     $.ajax({url: 'js/products.json', success: function(result){
    

		var item=0;

	var collapseId = ["collapseOne", "collapseTwo", "collapseThree", "collapseFour"]; 
            $.each(result, function(i, field){
			item ++;
			var product= 	'<div class="panel panel-default" >'+
		                '	<div class="panel-heading" role="tab" id="heading'+item+'">'+
			'	<h4 class="panel-title" >'+
					'<a role="button" data-toggle="collapse" data-parent="#accordion" href="#'+collapseId[item]+'" aria-expanded="true" aria-controls="'+collapseId[item]+'">'+
						'<i class="more-less glyphicon glyphicon-plus "></i>'+
					field.title +
				'	</a>'+
				'</h4>'+
			'</div>'+
		'	<div id="'+collapseId[item]+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading'+item+'">'+
			'	<div class="panel-body">'+
	          
 '<div class="row"><div class="col-md-8"><p>'+ field.description+'<p></div>'+ '<div class="col-md-4"><img class="img-responsive" src="'+field.image+'"><div>'+
			'	</div>'+
		'	</div>'+
		'</div>';
			
                $("#accordion").append(product);
            });
}});
  
});