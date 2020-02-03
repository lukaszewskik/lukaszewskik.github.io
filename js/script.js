document.addEventListener('DOMContentLoaded', function(event) {
    var mageDiv = document.getElementById("mage");
    var bcgDiv = document.getElementById("background");
    var mages = mageDiv.children;
    var backgrounds = bcgDiv.children;

    mageDiv.addEventListener("click"
    , function (event) {
        console.log('mage')
        for (var i = 0; i < mages.length; i++) {
            if (mages[i].hidden == false){
                if (i < mages.length - 1){
                    mages[i].hidden = true;
                    mages[i+1].hidden = false;
                    break
                } else {
                    mages[i].hidden = true;
                    mages[0].hidden = false;
                    break
                } 
            }
        }
    })

    bcgDiv.addEventListener("click", function (event){
        console.log('background')
        for (var i = 0; i < backgrounds.length; i++) {
            if (backgrounds[i].hidden == false){
                if (i < backgrounds.length - 1){
                    backgrounds[i].hidden = true;
                    backgrounds[i+1].hidden = false;
                    break
                } else {
                    backgrounds[i].hidden = true;
                    backgrounds[0].hidden = false;
                    break
                } 
            }
        }
    })


});



