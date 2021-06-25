
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13




    // your code here

    document.getElementById("run").addEventListener("click", () => { 

        let m = new Array(13);
        m[1]="January"; m[2]="February";  m[3]="March"; m[4]="April"; m[5]="May"; m[6]="June"; m[7]="July"; m[8]="August"; m[9]="September"; m[10]="October"; m[11]="November"; m[12]="December";
        let year = document.getElementById("year").value;
        function friday(year) {
            var nbrjour = 0;
                for (i = 1; i <= 12; i++) {
                var d = new Date(i + "/13/" + year);
                if (d.getDay() == 5) {
                    nbrjour++ ;

                }
            }
            return nbrjour;
            }

        

        alert(friday(year))
        })

    
();
