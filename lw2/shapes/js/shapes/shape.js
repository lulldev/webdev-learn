function Shape(size, fillColor, borderColor) {
    this.size = size;
    this.fillColor = fillColor;
    this.borderColor = borderColor;
}

Shape.prototype.setFillColor = function(value) {
    this.fillColor = value;
};

Shape.prototype.getFillColor = function() {
    return this.fillColor;
};

Shape.prototype.setBorderColor = function(value) {
    this.borderColor = value;
};

Shape.prototype.getBorderColor = function() {
    return this.borderColor;
};

