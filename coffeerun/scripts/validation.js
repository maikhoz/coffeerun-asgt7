(function(window) {
    'use strict';
    var App = window.App || {};

    var Validation = {
        isCompanyEmail: function(email) {
            return /.+@bignerdranch\.com$/.test(email);
        },
        decafCheck: function(order, caffeine) {
            return !(caffeine > 20 && /.?decaf.?/.test(order));
        }
    };


    App.Validation = Validation;
    window.App = App;
})(window);
