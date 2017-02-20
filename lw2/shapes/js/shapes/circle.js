'use strict';

function CCircle(fillColor = '#fff', borderColor = '#000', radius = 50, centerX = 200, centerY = 200) {
    CShape.apply(this, arguments);
    this.radius = radius;
    this.centerX = centerX;
    this.centerY = centerY;

}

CCircle.prototype = Object.create(CShape.prototype);
CCircle.prototype.constructor = CCircle;

CCircle.prototype.calculateArea = function() {
    return parseFloat(Math.pow(Math.PI * this.radius, 2).toFixed(2));
};

CCircle.prototype.calculatePerimeter = function() {
    return parseFloat((2 * Math.PI * this.radius).toFixed(2));
};

CCircle.prototype.draw = function() {

};