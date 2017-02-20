describe("CCircle testing", function() {

    describe("Init circle", function() {

        it("Init with default values", function() {

            var circle = new CCircle();

            assert.equal(circle.radius, 50);
            assert.equal(circle.centerX, 200);
            assert.equal(circle.centerY, 200);
            assert.equal(circle.fillColor, '#fff');
            assert.equal(circle.borderColor, '#000');
        });

        it("Init with optional values", function() {

            var circle = new CCircle('#ccc', '#000', 10, 20);

            assert.equal(circle.radius, 10);
            assert.equal(circle.centerX, 20);
            assert.equal(circle.centerY, 200);
            assert.equal(circle.fillColor, '#ccc');
            assert.equal(circle.borderColor, '#000');
        });

    });

    describe("Calculations", function() {

        var circle = new CCircle('#ccc', '#000', 10, 20);

        it("Calculate perimeter", function() {
            assert.typeOf(circle.calculatePerimeter(), 'number');
            assert.equal(circle.calculatePerimeter(), 62.83);
        });

        it("Calculate area", function() {
            assert.typeOf(circle.calculateArea(), 'number');
            assert.equal(circle.calculateArea(), 986.96)
        });
    });

});

describe("CRectangle testing", function() {

    describe("Init rectangle", function() {

        it("Init with default values", function() {

            var rectangle = new CRectangle();
            assert.equal(rectangle.x1, 10);
            assert.equal(rectangle.y2, 20);
            assert.equal(rectangle.x2, 40);
            assert.equal(rectangle.y2, 20);
            assert.equal(rectangle.fillColor, '#fff');
            assert.equal(rectangle.borderColor, '#000');
        });

        it("Init with optional values", function() {

            var rectangle = new CRectangle('#ccc', '#000', 100, 200, 300, 200);

            assert.equal(rectangle.x1, 100);
            assert.equal(rectangle.y2, 200);
            assert.equal(rectangle.x2, 300);
            assert.equal(rectangle.y2, 200);
            assert.equal(rectangle.fillColor, '#ccc');
            assert.equal(rectangle.borderColor, '#000');
        });

    });

    describe("Calculations", function() {

        var rectangle = new CRectangle('#ccc', '#000', 10, 20, 50, 30);

        it("Calculate perimeter", function() {
            assert.typeOf(rectangle.calculatePerimeter(), 'number');
            assert.equal(rectangle.calculatePerimeter(), 100);
        });

        it("Calculate area", function() {
            assert.typeOf(rectangle.calculateArea(), 'number');
            assert.equal(rectangle.calculateArea(), 400)
        });
    });

});


