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
                            { "id": 00, "text": "AGOSTO 11  de  2020" },
                            { "id": 01, "text": "OCTUBR  21  de 2020" },
                            { "id": 02, "text": "OCTUBR  21  de 2020" },
                            { "id": 03, "text": "OCTUBR  20  de 2020" },
                            { "id": 04, "text": "OCTUBR  20  de 2020" },
                            { "id": 05, "text": "OCTUBR  19  de 2020" },
                            { "id": 06, "text": "OCTUBR  19  de 2020" },
                            { "id": 07, "text": "OCTUBR  16  de 2020" },
                            { "id": 08, "text": "OCTUBR  16  de 2020" },
                            { "id": 09, "text": "OCTUBR  15  de 2020" },
                            { "id": 10, "text": "OCTUBR  15  de 2020" },
                            { "id": 11, "text": "OCTUBR  14  de 2020" },
                            { "id": 12, "text": "OCTUBR  14  de 2020" },
                            { "id": 13, "text": "OCTUBR  13  de 2020" },
                            { "id": 14, "text": "OCTUBR  13  de 2020" },
                            { "id": 15, "text": "OCTUBR  09  de 2020" },
                            { "id": 16, "text": "OCTUBR  09  de 2020" },
                            { "id": 17, "text": "OCTUBR  08  de 2020" },
                            { "id": 18, "text": "OCTUBR  08  de 2020" },
                            { "id": 19, "text": "OCTUBR  07  de 2020" },
                            { "id": 20, "text": "OCTUBR  07  de 2020" },
                            { "id": 21, "text": "OCTUBR  06  de 2020" },
                            { "id": 22, "text": "OCTUBR  06  de 2020" },
                            { "id": 23, "text": "OCTUBR  05  de 2020" },
                            { "id": 24, "text": "OCTUBR  05  de 2020" },
                            { "id": 25, "text": "OCTUBR  02  de 2020" },
                            { "id": 26, "text": "OCTUBR  02  de 2020" },
                            { "id": 27, "text": "OCTUBR  01  de 2020" },
                            { "id": 28, "text": "OCTUBR  01  de 2020" },
                            { "id": 29, "text": "SPTBRE  30  de 2020" },
                            { "id": 30, "text": "SPTBRE  30  de 2020" },
                            { "id": 31, "text": "SPTBRE  29  de 2020" },
                            { "id": 32, "text": "SPTBRE  29  de 2020" },
                            { "id": 33, "text": "SPTBRE  28  de 2020" },
                            { "id": 34, "text": "SPTBRE  28  de 2020" },
                            { "id": 35, "text": "SPTBRE  25  de 2020" },
                            { "id": 36, "text": "SPTBRE  25  de 2020" },
                            { "id": 37, "text": "SPTBRE  24  de 2020" },
                            { "id": 38, "text": "SPTBRE  24  de 2020" },
                            { "id": 39, "text": "SPTBRE  23  de 2020" },
                            { "id": 40, "text": "SPTBRE  23  de 2020" },
                            { "id": 41, "text": "SPTBRE  22  de 2020" },
                            { "id": 42, "text": "SPTBRE  22  de 2020" },
                            { "id": 43, "text": "SPTBRE  21  de 2020" },
                            { "id": 44, "text": "SPTBRE  21  de 2020" },
                            { "id": 45, "text": "SPTBRE  18  de 2020" },
                            { "id": 46, "text": "SPTBRE  18  de 2020" },
                            { "id": 47, "text": "SPTBRE  17  de 2020" },
                            { "id": 48, "text": "SPTBRE  17  de 2020" },
                            { "id": 49, "text": "SPTBRE  16  de 2020" },
                            { "id": 50, "text": "SPTBRE  16  de 2020" },
                            { "id": 51, "text": "SPTBRE  15  de 2020" },
                            { "id": 52, "text": "SPTBRE  15  de 2020" },
                            { "id": 53, "text": "SPTBRE  14  de 2020" },
                            { "id": 54, "text": "SPTBRE  14  de 2020" },
                            { "id": 55, "text": "SPTBRE  11  de 2020" },
                            { "id": 56, "text": "SPTBRE  11  de 2020" },
                            { "id": 57, "text": "SPTBRE  10  de 2020" },
                            { "id": 58, "text": "SPTBRE  10  de 2020" },
                            { "id": 59, "text": "SPTBRE  09  de 2020" },
                            { "id": 60, "text": "SPTBRE  09  de 2020" },
                            { "id": 61, "text": "SPTBRE  08  de 2020" },
                            { "id": 62, "text": "SPTBRE  08  de 2020" },
                            { "id": 63, "text": "SPTBRE  07  de 2020" },
                            { "id": 64, "text": "SPTBRE  07  de 2020" },
                            { "id": 65, "text": "SPTBRE  04  de 2020" },
                            { "id": 66, "text": "SPTBRE  04  de 2020" },
                            { "id": 67, "text": "SPTBRE  03  de 2020" },
                            { "id": 68, "text": "SPTBRE  03  de 2020" },
                            { "id": 69, "text": "SPTBRE  02  de 2020" },
                            { "id": 70, "text": "SPTBRE  02  de 2020" },
                            { "id": 71, "text": "SPTBRE  01  de 2020" },
                            { "id": 72, "text": "SPTBRE  01  de 2020" },
                            { "id": 73, "text": "AGOSTO 31  de  2020" },
                            { "id": 74, "text": "AGOSTO 31  de  2020" },
                            { "id": 75, "text": "AGOSTO 28  de  2020" },
                            { "id": 76, "text": "AGOSTO 28  de  2020" },
                            { "id": 77, "text": "AGOSTO 27  de  2020" },
                            { "id": 78, "text": "AGOSTO 27  de  2020" },
                            { "id": 79, "text": "AGOSTO 26  de  2020" },
                            { "id": 80, "text": "AGOSTO 26  de  2020" },
                            { "id": 81, "text": "AGOSTO 25  de  2020" },
                            { "id": 82, "text": "AGOSTO 25  de  2020" },
                            { "id": 83, "text": "AGOSTO 24  de  2020" },
                            { "id": 84, "text": "AGOSTO 24  de  2020" },
                            { "id": 85, "text": "AGOSTO 21  de  2020" },
                            { "id": 86, "text": "AGOSTO 21  de  2020" },
                            { "id": 87, "text": "AGOSTO 20  de  2020" },
                            { "id": 88, "text": "AGOSTO 20  de  2020" },
                            { "id": 89, "text": "AGOSTO 19  de  2020" },
                            { "id": 90, "text": "AGOSTO 19  de  2020" },
                            { "id": 91, "text": "AGOSTO 18  de  2020" },
                            { "id": 92, "text": "AGOSTO 18  de  2020" },
                            { "id": 93, "text": "AGOSTO 14  de  2020" },
                            { "id": 94, "text": "AGOSTO 14  de  2020" },
                            { "id": 95, "text": "AGOSTO 13  de  2020" },
                            { "id": 96, "text": "AGOSTO 13  de  2020" },
                            { "id": 97, "text": "AGOSTO 12  de  2020" },
                            { "id": 98, "text": "AGOSTO 12  de  2020" },
                            { "id": 99, "text": "AGOSTO 11  de  2020" }
                        ];

    callLater(successCallback);

}