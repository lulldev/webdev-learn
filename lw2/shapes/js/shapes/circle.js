'use strict';

function CCircle(shapeColorParams, shapeParams) {
    CShape.apply(this, arguments);

    if (shapeParams === undefined)
    {
        shapeParams = {
            radius: 50,
            centerX: 200,
            centerY: 200
        };
    }

    this.validateParams(shapeParams);

    this.radius = shapeParams.radius;
    this.centerX = shapeParams.centerX;
    this.centerY = shapeParams.centerY;
}

CCircle.prototype = Object.create(CShape.prototype);
CCircle.prototype.constructor = CCircle;

CCircle.prototype.validateParams = function(shapeParams) {
    if (!shapeParams.hasOwnProperty('radius') || !shapeParams.hasOwnProperty('centerX') ||
            !shapeParams.hasOwnProperty('centerY'))
    {
        throw ReferenceError("Circle params required");
    }

    if (shapeParams.radius < 0 || shapeParams.centerX < 0 || shapeParams.centerY < 0)
    {
        throw RangeError("Invalid circle params");
    }
};

CCircle.prototype.calculateArea = function() {
    return parseFloat(Math.pow(Math.PI * this.radius, 2).toFixed(2));
};

CCircle.prototype.calculatePerimeter = function() {
    return parseFloat((2 * Math.PI * this.radius).toFixed(2));
};

CCircle.prototype.draw = function(canvasAreaId) {
    this.canvasArea = document.querySelector("#" + canvasAreaId);
    console.log(canvasAreaId);
};