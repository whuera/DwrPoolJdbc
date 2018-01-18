if (typeof dwr == 'undefined' || dwr.engine == undefined) throw new Error('You must include DWR engine before including this file');

(function() {
  if (dwr.engine._getObject("DWRCall") == undefined) {
    var p;
    
    p = {};
    p._path = '/DwrTestJsp/dwr';

    /**
     * @param {function|Object} callback callback function or options object
     */
    p.getString = function(callback) {
      return dwr.engine._execute(p._path, 'DWRCall', 'getString', arguments);
    };
    
    dwr.engine._setObject("DWRCall", p);
  }
})();
