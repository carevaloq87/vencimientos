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
                vencimiento = {"id" : "" , "text" : "&Uacute;timos dos digitos"};
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
                            {"id":01, "text": "OCTUBRE  17  DE 2019"},
                            {"id":02, "text": "OCTUBRE  17  DE 2019"},
                            {"id":03, "text": "OCTUBRE  16  DE 2019"},
                            {"id":04, "text": "OCTUBRE  16  DE 2019"},
                            {"id":05, "text": "OCTUBRE  15  DE 2019"},
                            {"id":06, "text": "OCTUBRE  15  DE 2019"},
                            {"id":07, "text": "OCTUBRE  11  DE 2019"},
                            {"id":08, "text": "OCTUBRE  11  DE 2019"},
                            {"id":09, "text": "OCTUBRE  10  DE 2019"},
                            {"id":10, "text": "OCTUBRE  10  DE 2019"},
                            {"id":11, "text": "OCTUBRE  09  DE 2019"},
                            {"id":12, "text": "OCTUBRE  09  DE 2019"},
                            {"id":13, "text": "OCTUBRE  08  DE 2019"},
                            {"id":14, "text": "OCTUBRE  08  DE 2019"},
                            {"id":15, "text": "OCTUBRE  07  DE 2019"},
                            {"id":16, "text": "OCTUBRE  07  DE 2019"},
                            {"id":17, "text": "OCTUBRE  04  DE 2019"},
                            {"id":18, "text": "OCTUBRE  04  DE 2019"},
                            {"id":19, "text": "OCTUBRE  03  DE 2019"},
                            {"id":20, "text": "OCTUBRE  03  DE 2019"},
                            {"id":21, "text": "OCTUBRE  02  DE 2019"},
                            {"id":22, "text": "OCTUBRE  02  DE 2019"},
                            {"id":23, "text": "OCTUBRE  01  DE 2019"},
                            {"id":24, "text": "OCTUBRE  01  DE 2019"},
                            {"id":25, "text": "SEPTIEMBRE  30  DE 2019"},
                            {"id":26, "text": "SEPTIEMBRE  30  DE 2019"},
                            {"id":27, "text": "SEPTIEMBRE  27  DE 2019"},
                            {"id":28, "text": "SEPTIEMBRE  27  DE 2019"},
                            {"id":29, "text": "SEPTIEMBRE  26  DE 2019"},
                            {"id":30, "text": "SEPTIEMBRE  26  DE 2019"},
                            {"id":31, "text": "SEPTIEMBRE  25  DE 2019"},
                            {"id":32, "text": "SEPTIEMBRE  25  DE 2019"},
                            {"id":33, "text": "SEPTIEMBRE  24  DE 2019"},
                            {"id":34, "text": "SEPTIEMBRE  24  DE 2019"},
                            {"id":35, "text": "SEPTIEMBRE  23  DE 2019"},
                            {"id":36, "text": "SEPTIEMBRE  23  DE 2019"},
                            {"id":37, "text": "SEPTIEMBRE  20  DE 2019"},
                            {"id":38, "text": "SEPTIEMBRE  20  DE 2019"},
                            {"id":39, "text": "SEPTIEMBRE  19  DE 2019"},
                            {"id":40, "text": "SEPTIEMBRE  19  DE 2019"},
                            {"id":41, "text": "SEPTIEMBRE  18  DE 2019"},
                            {"id":42, "text": "SEPTIEMBRE  18  DE 2019"},
                            {"id":43, "text": "SEPTIEMBRE  17  DE 2019"},
                            {"id":44, "text": "SEPTIEMBRE  17  DE 2019"},
                            {"id":45, "text": "SEPTIEMBRE  16  DE 2019"},
                            {"id":46, "text": "SEPTIEMBRE  16  DE 2019"},
                            {"id":47, "text": "SEPTIEMBRE  13  DE 2019"},
                            {"id":48, "text": "SEPTIEMBRE  13  DE 2019"},
                            {"id":49, "text": "SEPTIEMBRE  12  DE 2019"},
                            {"id":50, "text": "SEPTIEMBRE  12  DE 2019"},
                            {"id":51, "text": "SEPTIEMBRE  11  DE 2019"},
                            {"id":52, "text": "SEPTIEMBRE  11  DE 2019"},
                            {"id":53, "text": "SEPTIEMBRE  10  DE 2019"},
                            {"id":54, "text": "SEPTIEMBRE  10  DE 2019"},
                            {"id":55, "text": "SEPTIEMBRE  09  DE 2019"},
                            {"id":56, "text": "SEPTIEMBRE  09  DE 2019"},
                            {"id":57, "text": "SEPTIEMBRE  06  DE 2019"},
                            {"id":58, "text": "SEPTIEMBRE  06  DE 2019"},
                            {"id":59, "text": "SEPTIEMBRE  05  DE 2019"},
                            {"id":60, "text": "SEPTIEMBRE  05  DE 2019"},
                            {"id":61, "text": "SEPTIEMBRE  04  DE 2019"},
                            {"id":62, "text": "SEPTIEMBRE  04  DE 2019"},
                            {"id":63, "text": "SEPTIEMBRE  03  DE 2019"},
                            {"id":64, "text": "SEPTIEMBRE  03  DE 2019"},
                            {"id":65, "text": "SEPTIEMBRE  02  DE 2019"},
                            {"id":66, "text": "SEPTIEMBRE  02  DE 2019"},
                            {"id":67, "text": "AGOSTO 30  DE  2019"},
                            {"id":68, "text": "AGOSTO 30  DE  2019"},
                            {"id":69, "text": "AGOSTO 29  DE  2019"},
                            {"id":70, "text": "AGOSTO 29  DE  2019"},
                            {"id":71, "text": "AGOSTO 28  DE  2019"},
                            {"id":72, "text": "AGOSTO 28  DE  2019"},
                            {"id":73, "text": "AGOSTO 27  DE  2019"},
                            {"id":74, "text": "AGOSTO 27  DE  2019"},
                            {"id":75, "text": "AGOSTO 26  DE  2019"},
                            {"id":76, "text": "AGOSTO 26  DE  2019"},
                            {"id":77, "text": "AGOSTO 23  DE  2019"},
                            {"id":78, "text": "AGOSTO 23  DE  2019"},
                            {"id":79, "text": "AGOSTO 22  DE  2019"},
                            {"id":80, "text": "AGOSTO 22  DE  2019"},
                            {"id":81, "text": "AGOSTO 21  DE  2019"},
                            {"id":82, "text": "AGOSTO 21  DE  2019"},
                            {"id":83, "text": "AGOSTO 20  DE  2019"},
                            {"id":84, "text": "AGOSTO 20  DE  2019"},
                            {"id":85, "text": "AGOSTO 16  DE  2019"},
                            {"id":86, "text": "AGOSTO 16  DE  2019"},
                            {"id":87, "text": "AGOSTO 15  DE  2019"},
                            {"id":88, "text": "AGOSTO 15  DE  2019"},
                            {"id":89, "text": "AGOSTO 14  DE  2019"},
                            {"id":90, "text": "AGOSTO 14  DE  2019"},
                            {"id":91, "text": "AGOSTO 13  DE  2019"},
                            {"id":92, "text": "AGOSTO 13  DE  2019"},
                            {"id":93, "text": "AGOSTO 12  DE  2019"},
                            {"id":94, "text": "AGOSTO 12  DE  2019"},
                            {"id":95, "text": "AGOSTO 09  DE  2019"},
                            {"id":96, "text": "AGOSTO 09  DE  2019"},
                            {"id":97, "text": "AGOSTO 08  DE  2019"},
                            {"id":98, "text": "AGOSTO 08  DE  2019"},
                            {"id":99, "text": "AGOSTO 06  DE  2019"}
                        ];

    callLater(successCallback);

}