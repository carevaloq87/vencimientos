var app = {

    initialize: function() {
        var self = this;
        this.store = new MemoryStore();
        new HomeView(this.store);
    }

};

app.initialize();