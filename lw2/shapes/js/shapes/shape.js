function CShape(fillColor, borderColor) {
    this.setFillColor(fillColor);
    this.setBorderColor(borderColor);
}

CShape.prototype.setFillColor = function(fillColorValue) {
    fillColorValue != undefined ?
        this.fillColor = fillColorValue : this.fillColor = '#fff';
};

CShape.prototype.getFillColor = function() {
    return this.fillColor;
};

CShape.prototype.setBorderColor = function(borderColorValue) {
    borderColorValue != undefined ?
        this.borderColor = borderColorValue : this.borderColor = '#000';
};

CShape.prototype.getBorderColor = function() {
    return this.borderColor;
};

