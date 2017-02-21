/**
 * Select shape type and show shape params form
 */
document.getElementsByClassName('shape-type')[0].addEventListener("change", function () {
    let shapeControlForms = shapeProgram.GetFormCollection();

    let selectedType = this.value.toString();

    switch (selectedType) {
        case "circle":
            shapeProgram.ResetForm();
            shapeControlForms.circleForm.style.display = "block";
            break;
        case "rectangle":
            shapeProgram.ResetForm();
            shapeControlForms.rectangleForm.style.display = "block";
            break;
        case "triangle":
            shapeProgram.ResetForm();
            shapeControlForms.triangleForm.style.display = "block";
            break;
    }

    shapeControlForms.colorForm.style.display = "block";
    shapeControlForms.actionControl.style.display = "block";

});

/**
 * Hide all control forms
 */
document.getElementsByClassName('reset-configurator')[0].addEventListener("click", function ()
{
    shapeProgram.ResetForm();
});

/**
 * Hide all control forms
 */
document.getElementsByClassName('reset-configurator')[0].addEventListener("click", function ()
{
    shapeProgram.ResetForm();
});