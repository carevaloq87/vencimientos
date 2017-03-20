var HomeView = function(store) {
 
	this.findById = function() {
	    store.findById($('#text_date').val(), function(vencimientos) {
	        console.log(vencimientos);
	        $("h1").html(vencimientos.text);
	    });
	};

    this.initialize = function() {
        $(document).on("keyup", "#text_date", this.findById);
    };
 
    this.initialize();
}
 