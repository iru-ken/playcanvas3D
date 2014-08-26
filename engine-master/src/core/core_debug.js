/**
* @name pc.debug
* @namespace
*/
pc.debug = (function () {
    var table = null;
    var row = null;
    var title = null;
    var field = null;

    return {
        /**
        * @name pc.debug.display
        * @description Display an object and it's data in a table on the page
        * @param {Object} data
        */
        display: function (data) {
            function init() {
                table = document.createElement('table');
                row = document.createElement('tr');
                title = document.createElement('td');
                field = document.createElement('td');
        
                table.style.cssText = 'position:absolute;font-family:sans-serif;font-size:12px';
                table.style.top = '0px';
                table.style.left = '0px';
                table.style.border = 'thin solid black';

                document.body.appendChild(table);
            }

            if (!table) {
                init();
            }

            table.innerHTML = '';
            for (var key in data) {
                var r = row.cloneNode();
                var t = title.cloneNode();
                var f = field.cloneNode();

                t.textContent = key;
                f.textContent = data[key];

                r.appendChild(t);
                r.appendChild(f);
                table.appendChild(r);  
            }
        }
    };
}());