function CTriangle(fillColor = '#fff', borderColor = '#000', x1 = 10, y1 = 20, x2 = 40, y2 = 20, x3 = 50, y3 = 60) {
    CShape.apply(this, arguments);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
}

CTriangle.prototype = Object.create(CShape.prototype);
CTriangle.prototype.constructor = CTriangle;

CTriangle.prototype.calculateArea = function() {
    var a  = Math.sqrt(Math.sqrt(Math.abs(this.x1 - this.x2)) + Math.sqrt(Math.abs(this.y1 - this.y2))),
        b  = Math.sqrt(Math.sqrt(Math.abs(this.x2 - this.x3)) + Math.sqrt(Math.abs(this.y2 - this.y3))),
        c  = Math.sqrt(Math.sqrt(Math.abs(this.x3 - this.x1)) + Math.sqrt(Math.abs(this.y3 - this.y1))),
        perimeter = this.calculatePerimeter();

    return parseFloat((Math.sqrt(perimeter * (perimeter - a) * (perimeter - b) * (perimeter - c))).toFixed(2));
};

CTriangle.prototype.calculatePerimeter = function() {
    var a  = Math.sqrt(Math.sqrt(Math.abs(this.x1 - this.x2)) + Math.sqrt(Math.abs(this.y1 - this.y2))),
        b  = Math.sqrt(Math.sqrt(Math.abs(this.x2 - this.x3)) + Math.sqrt(Math.abs(this.y2 - this.y3))),
        c  = Math.sqrt(Math.sqrt(Math.abs(this.x3 - this.x1)) + Math.sqrt(Math.abs(this.y3 - this.y1)));

    return parseFloat((2 * (a + b + c)).toFixed(2));
};

CTriangle.prototype.draw = function() {

};

