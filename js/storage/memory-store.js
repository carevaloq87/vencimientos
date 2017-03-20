var MemoryStore = function(successCallback, errorCallback) {

    this.findById = function(id, callback) {
        var vencimientos = this.vencimientos;
        var vencimiento = null;
        var l = vencimientos.length;
        for (var i=0; i < l; i++) {
            if (vencimientos[i].id == id && id != '') {
                vencimiento = vencimientos[i];
                console.log("IN " + id);
                break;
            } else if(id == ''){
                vencimiento = {"id" : "" , "text" : "Ingresa dos digitos"};
                console.log("IN " + id);
                break;
            }
        }
        callLater(callback, vencimiento);
    }

    // Used to simulate async calls. This is done to provide a consistent interface with stores (like WebSqlStore)
    // that use async data access APIs
    var callLater = function(callback, data) {
        if (callback) {
            setTimeout(function() {
                callback(data);
            });
        }
    }

    this.vencimientos = [
                            {"id": 00, "text": "AGOSTO 09  de  2017"},
                            {"id": 01, "text": "OCTUBRE  19  de 2017"},
                            {"id": 02, "text": "OCTUBRE  19  de 2017"},
                            {"id": 03, "text": "OCTUBRE  18  de 2017"},
                            {"id": 04, "text": "OCTUBRE  18  de 2017"},
                            {"id": 05, "text": "OCTUBRE  17  de 2017"},
                            {"id": 06, "text": "OCTUBRE  17  de 2017"},
                            {"id": 07, "text": "OCTUBRE  13  de 2017"},
                            {"id": 08, "text": "OCTUBRE  13  de 2017"},
                            {"id": 09, "text": "OCTUBRE  12  de 2017"},
                            {"id": 10, "text": "OCTUBRE  12  de 2017"},
                            {"id": 11, "text": "OCTUBRE  11  de 2017"},
                            {"id": 12, "text": "OCTUBRE  11  de 2017"},
                            {"id": 13, "text": "OCTUBRE  10  de 2017"},
                            {"id": 14, "text": "OCTUBRE  10  de 2017"},
                            {"id": 15, "text": "OCTUBRE  09  de 2017"},
                            {"id": 16, "text": "OCTUBRE  09  de 2017"},
                            {"id": 17, "text": "OCTUBRE  06  de 2017"},
                            {"id": 18, "text": "OCTUBRE  06  de 2017"},
                            {"id": 19, "text": "OCTUBRE  05  de 2017"},
                            {"id": 20, "text": "OCTUBRE  05  de 2017"},
                            {"id": 21, "text": "OCTUBRE  04  de 2017"},
                            {"id": 22, "text": "OCTUBRE  04  de 2017"},
                            {"id": 23, "text": "OCTUBRE  03  de 2017"},
                            {"id": 24, "text": "OCTUBRE  03  de 2017"},
                            {"id": 25, "text": "OCTUBRE  02  de 2017"},
                            {"id": 26, "text": "OCTUBRE  02  de 2017"},
                            {"id": 27, "text": "SEPTIEMBRE 29  de 2017"},
                            {"id": 28, "text": "SEPTIEMBRE 29  de 2017"},
                            {"id": 29, "text": "SEPTIEMBRE 28  de 2017"},
                            {"id": 30, "text": "SEPTIEMBRE 28  de 2017"},
                            {"id": 31, "text": "SEPTIEMBRE 27  de 2017"},
                            {"id": 32, "text": "SEPTIEMBRE 27  de 2017"},
                            {"id": 33, "text": "SEPTIEMBRE 26  de 2017"},
                            {"id": 34, "text": "SEPTIEMBRE 26  de 2017"},
                            {"id": 35, "text": "SEPTIEMBRE 25  de 2017"},
                            {"id": 36, "text": "SEPTIEMBRE 25  de 2017"},
                            {"id": 37, "text": "SEPTIEMBRE 22  de 2017"},
                            {"id": 38, "text": "SEPTIEMBRE 22  de 2017"},
                            {"id": 39, "text": "SEPTIEMBRE 21  de 2017"},
                            {"id": 40, "text": "SEPTIEMBRE 21  de 2017"},
                            {"id": 41, "text": "SEPTIEMBRE 20  de 2017"},
                            {"id": 42, "text": "SEPTIEMBRE 20  de 2017"},
                            {"id": 43, "text": "SEPTIEMBRE 19  de 2017"},
                            {"id": 44, "text": "SEPTIEMBRE 19  de 2017"},
                            {"id": 45, "text": "SEPTIEMBRE 18  de 2017"},
                            {"id": 46, "text": "SEPTIEMBRE 18  de 2017"},
                            {"id": 47, "text": "SEPTIEMBRE 15  de 2017"},
                            {"id": 48, "text": "SEPTIEMBRE 15  de 2017"},
                            {"id": 49, "text": "SEPTIEMBRE 14  de 2017"},
                            {"id": 50, "text": "SEPTIEMBRE 14  de 2017"},
                            {"id": 51, "text": "SEPTIEMBRE 13  de 2017"},
                            {"id": 52, "text": "SEPTIEMBRE 13  de 2017"},
                            {"id": 53, "text": "SEPTIEMBRE 12  de 2017"},
                            {"id": 54, "text": "SEPTIEMBRE 12  de 2017"},
                            {"id": 55, "text": "SEPTIEMBRE 11  de 2017"},
                            {"id": 56, "text": "SEPTIEMBRE 11  de 2017"},
                            {"id": 57, "text": "SEPTIEMBRE 08  de 2017"},
                            {"id": 58, "text": "SEPTIEMBRE 08  de 2017"},
                            {"id": 59, "text": "SEPTIEMBRE 07  de 2017"},
                            {"id": 60, "text": "SEPTIEMBRE 07  de 2017"},
                            {"id": 61, "text": "SEPTIEMBRE 06  de 2017"},
                            {"id": 62, "text": "SEPTIEMBRE 06  de 2017"},
                            {"id": 63, "text": "SEPTIEMBRE 05  de 2017"},
                            {"id": 64, "text": "SEPTIEMBRE 05  de 2017"},
                            {"id": 65, "text": "SEPTIEMBRE 04  de 2017"},
                            {"id": 66, "text": "SEPTIEMBRE 04  de 2017"},
                            {"id": 67, "text": "SEPTIEMBRE 01  de 2017"},
                            {"id": 68, "text": "SEPTIEMBRE 01  de 2017"},
                            {"id": 69, "text": "AGOSTO 31  de  2017"},
                            {"id": 70, "text": "AGOSTO 31  de  2017"},
                            {"id": 71, "text": "AGOSTO 30  de  2017"},
                            {"id": 72, "text": "AGOSTO 30  de  2017"},
                            {"id": 73, "text": "AGOSTO 29  de  2017"},
                            {"id": 74, "text": "AGOSTO 29  de  2017"},
                            {"id": 75, "text": "AGOSTO 28  de  2017"},
                            {"id": 76, "text": "AGOSTO 28  de  2017"},
                            {"id": 77, "text": "AGOSTO 25  de  2017"},
                            {"id": 78, "text": "AGOSTO 25  de  2017"},
                            {"id": 79, "text": "AGOSTO 24  de  2017"},
                            {"id": 80, "text": "AGOSTO 24  de  2017"},
                            {"id": 81, "text": "AGOSTO 23  de  2017"},
                            {"id": 82, "text": "AGOSTO 23  de  2017"},
                            {"id": 83, "text": "AGOSTO 22  de  2017"},
                            {"id": 84, "text": "AGOSTO 22  de  2017"},
                            {"id": 85, "text": "AGOSTO 18  de  2017"},
                            {"id": 86, "text": "AGOSTO 18  de  2017"},
                            {"id": 87, "text": "AGOSTO 17  de  2017"},
                            {"id": 88, "text": "AGOSTO 17  de  2017"},
                            {"id": 89, "text": "AGOSTO 16  de  2017"},
                            {"id": 90, "text": "AGOSTO 16  de  2017"},
                            {"id": 91, "text": "AGOSTO 15  de  2017"},
                            {"id": 92, "text": "AGOSTO 15  de  2017"},
                            {"id": 93, "text": "AGOSTO 14  de  2017"},
                            {"id": 94, "text": "AGOSTO 14  de  2017"},
                            {"id": 95, "text": "AGOSTO 11  de  2017"},
                            {"id": 96, "text": "AGOSTO 11  de  2017"},
                            {"id": 97, "text": "AGOSTO 10  de  2017"},
                            {"id": 98, "text": "AGOSTO 10  de  2017"},
                            {"id": 99, "text": "AGOSTO 09  de  2017"}
                        ];

    callLater(successCallback);

}