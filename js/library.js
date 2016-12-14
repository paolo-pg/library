(function(window){
    //I recommend this
    'use strict';
    function defineLibrary(){
        var Library = {}; //Naam van library om aan te roepen
        
        // DIVS AANMAKEN BINNEN WRAPPER


        Library.play = function(){

            (function () {
            var dagDeel = {}; //Global variable om te gebruiken in andere functie
                
                function checkTime(i) {
                    return (i < 10) ? "0" + i : i;
                }

            function startTime() {
                var today = new Date(),
                    h = checkTime(today.getHours()),
                    m = checkTime(today.getMinutes()),
                    s = checkTime(today.getSeconds());

                var dd = today.getDate();
                var mm = today.getMonth()+1; //January is 0!
                var yyyy = today.getFullYear();

                if(dd<10) {
                    dd='0'+dd
                } 
                if(mm<10) {
                    mm='0'+mm
                } 
                today = mm+'/'+dd+'/'+yyyy;
                
                if (h >= 12 && h <= 18) {
                    dagDeel.waarde = "Goedemiddag ";
                } else if (h > 18) {
                    dagDeel.waarde = "Goedenavond ";
                }
                else {
                    dagDeel.waarde = "Goedemorgen ";
                }

            // Output
            document.getElementById('library2').innerHTML = h + ":" + m + ":" + s;
            document.getElementById('library3').innerHTML = today;
            
            setTimeout(function () {
                startTime()
            }, 500);
            
            }
            startTime();

            var naam = prompt("Wat is je naam?");
                    if (naam === "") {
                        document.getElementById('library').innerHTML = "Geen naam ingevuld.";
                    } else if (naam != null) { //WERKT NIET
                        document.getElementById('library').innerHTML = dagDeel.waarde + naam;
                        console.log("naamloos");
                    } else {
                        document.getElementById('library').innerHTML = "Hallo " + "Geannuleerd";
                    }
    })(); 

        

        } //end tag Library.play 
        return Library;
    }
    //define globally if it doesn't already exist
    if(typeof(Library) === 'undefined'){
        window.Library = defineLibrary();
    }
    else{
        console.log("Library already defined.");
    }
})(window);