   alert("loaded and ready");

    var divElement = document.getElementById("myDIV");

    var divElementTwo = document.getElementById("myDIV2");

    var buttonElement = document.getElementById("buttonID");

    var areaClicked = document.getElementById("areaClicked");

    buttonElement.addEventListener('click', function(event){

        var that = this;

        var x = event.clientX;     // Get the horizontal coordinate
        var y = event.clientY;     // Get the vertical coordinate

        var elementClickedOn = event.target;

        var coor = 'You clicked on this buttons: ' + "X coordinate is " + x + " and the Y coordinate is " + y +".";

        divElement.classList.toggle("mystyle");

        console.log(event);

        areaClicked.innerHTML = coor;

        document.getElementById("elementClicked").innerHTML = "Triggered by a " + elementClickedOn.tagName + " element";
    });