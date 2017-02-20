'use strict';

var ShapeProgram = {
    /*
     Loader solution by joshuamabina
     http://stackoverflow.com/questions/950087/how-do-i-include-a-javascript-file-in-another-javascript-file
      */
    LoadScript: function(url, callback) {
        // Adding the script tag to the head as suggested before
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;

        // Then bind the event to the callback function.
        // There are several events for cross browser compatibility.
        script.onreadystatechange = callback;
        script.onload = callback;

        // Fire the loading
        head.appendChild(script);
    },

    InitProgram: function() {
        this.LoadScript('js/shapes/shape.js');
        this.LoadScript('js/shapes/circle.js');
        this.LoadScript('js/shapes/rectangle.js');
        this.LoadScript('js/shapes/shape.js');
        this.LoadScript('js/shapes/triangle.js');
    },

    // todo
    InitFormEvents: function () {

    }
};


