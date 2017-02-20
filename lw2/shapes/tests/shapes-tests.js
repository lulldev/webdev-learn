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


