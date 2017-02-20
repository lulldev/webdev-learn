'use strict';

function CRectangle(fillColor = '#fff', borderColor = '#000', x1 = 10, y1 = 20, x2 = 40, y2 = 20) {
    CShape.apply(this, arguments);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;

}

CRectangle.prototype = Object.create(CShape.prototype);
CRectangle.prototype.constructor = CRectangle;

CRectangle.prototype.calculateSides = function() {
    return [Math.abs(this.x2 - this.x1), Math.abs(this.y2 - this.y1)];
};

CRectangle.prototype.calculateArea = function() {
    let [a, b] = this.calculateSides();
    return parseFloat((a * b).toFixed(2));
};

CRectangle.prototype.calculatePerimeter = function() {
    let [a, b] = this.calculateSides();
    return parseFloat((2 * (a + b)).toFixed(2));
};

CRectangle.prototype.draw = function() {

};