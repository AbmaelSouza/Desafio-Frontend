var filmes;
var personagens;
var characters;
var dates;
var director;
var left = 0;
var right = 1;
var states = 0;
var statesc = 0;
var statescm = 0;
var pixels = (202);
// setar variáveis necessárias//

$( document ).ready( function () { //checar se o documento está pronto//
    $setlayout = $( '#content' ); //id do layout do meio para mudança de display baseado na classe active//
    $loading = $( '#loading' );
    $moviecard1 = $( "#moviecard1" );
    $moviecard2 = $( "#moviecard2" );
    $moviecard3 = $( "#moviecard3" );
    $moviecard4 = $( "#moviecard4" );
    $moviecard5 = $( "#moviecard5" );
    $moviecard6 = $( "#moviecard6" );
    //id de todos os elementos os quais vão receber os nomes dos filmes via append//
    $movie1 = $( "#movie1name" );
    $movie2 = $( "#movie2name" );
    $movie3 = $( "#movie3name" );
    $movie4 = $( "#movie4name" );
    $movie5 = $( "#movie5name" );
    $movie6 = $( "#movie6name" );


    //id dos elementos os quais vão receber a data de lançamento via append//
    $datalan1 = $( "#datalan1" );
    $datalan2 = $( "#datalan2" );
    $datalan3 = $( "#datalan3" );
    $datalan4 = $( "#datalan4" );
    $datalan5 = $( "#datalan5" );
    $datalan6 = $( "#datalan6" );
    //id dos elementos os quais vão receber o nome do diretor via append//
    $direc1 = $( "#direc1" );
    $direc2 = $( "#direc2" );
    $direc3 = $( "#direc3" );
    $direc4 = $( "#direc4" );
    $direc5 = $( "#direc5" );
    $direc6 = $( "#direc6" );

    $datanas1 = $( "#datanas1" );
    $datanas2 = $( "#datanas2" );
    $datanas3 = $( "#datanas3" );
    $datanas4 = $( "#datanas4" );
    $datanas5 = $( "#datanas5" );
    $datanas6 = $( "#datanas6" );

    $char1 = $( "#char1" );
    $char2 = $( "#char2" );
    $char3 = $( "#char3" );
    $char4 = $( "#char4" );
    $char5 = $( "#char5" );
    $char6 = $( "#char6" );
    $char12 = $( "#char12" );
    $char22 = $( "#char22" );
    $char32 = $( "#char32" );
    $char42 = $( "#char42" );
    $char52 = $( "#char52" );
    $char62 = $( "#char62" );

    $char1name = $( "#char1name" );
    $char2name = $( "#char2name" );
    $char3name = $( "#char3name" );
    $char4name = $( "#char4name" );
    $char5name = $( "#char5name" );
    $char6name = $( "#char6name" );

    $char1alt = $( "#char1alt" );
    $char2alt = $( "#char2alt" );
    $char3alt = $( "#char3alt" );
    $char4alt = $( "#char4alt" );
    $char5alt = $( "#char5alt" );
    $char6alt = $( "#char6alt" );

    async function getfromapi(url) {
        const response = await fetch( url );
        var data = await response.json();
        return data.results;
    }

    async function getfilms() {
        filmes = await getfromapi( "https://swapi.dev/api/films/?format=json" );
        $movie1.append( filmes[3].title.toString() );
        $movie2.append( filmes[4].title.toString() );
        $movie3.append( filmes[5].title.toString() );
        $movie4.append( filmes[0].title.toString() );
        $movie5.append( filmes[1].title.toString() );
        $movie6.append( filmes[2].title.toString() );
    }

    async function getdates() {
        dates = await getfromapi( "https://swapi.dev/api/films/?format=json" );
        $datalan1.append( dates[3].release_date.toString() );
        $datalan2.append( dates[4].release_date.toString() );
        $datalan3.append( dates[5].release_date.toString() );
        $datalan4.append( dates[0].release_date.toString() );
        $datalan5.append( dates[1].release_date.toString() );
        $datalan6.append( dates[2].release_date.toString() );
    }

    async function getdirectors() {
        director = await getfromapi( "https://swapi.dev/api/films/?format=json" );
        $direc1.append( director[3].director.toString() );
        $direc2.append( director[4].director.toString() );
        $direc3.append( director[5].director.toString() );
        $direc4.append( director[0].director.toString() );
        $direc5.append( director[1].director.toString() );
        $direc6.append( director[2].director.toString() );
    }

    async function getchardata() {
        personagens = await getfromapi( "https://swapi.dev/api/people/?page=1&format=json" );
        personagenspg2= await getfromapi( "https://swapi.dev/api/people/?page=2&format=json" );
        personagenspg3= await getfromapi( "https://swapi.dev/api/people/?page=3&format=json" );

        $char1name.append( personagens[0].name.toString() );
        $datanas1.append( personagens[0].birth_year.toString() );
        $char1alt.append( personagens[0].height.toString() );

        $char2name.append( personagens[1].name.toString() );
        $datanas2.append( personagens[1].birth_year.toString() );
        $char2alt.append( personagens[1].height.toString() );

        $char3name.append( personagens[2].name.toString() );
        $datanas3.append( personagens[2].birth_year.toString() );
        $char3alt.append( personagens[2].height.toString() );

        $char4name.append( personagens[3].name.toString() );
        $datanas4.append( personagens[3].birth_year.toString() );
        $char4alt.append( personagens[3].height.toString() );

        $char5name.append( personagens[4].name.toString() );
        $datanas5.append( personagens[4].birth_year.toString() );
        $char5alt.append( personagens[4].height.toString() );

        $char6name.append( personagens[5].name.toString() );
        $datanas6.append( personagens[5].birth_year.toString() );
        $char6alt.append( personagens[5].height.toString() );


    }

           async function getALLdata() {

            await getdates();
            await getfilms();
            await getdirectors();
            await getchardata();
            $setlayout.addClass( "active" );
            $loading.toggle();


        }


        getALLdata();

        $moviecard1.click( function () {
            let movieid = 3;
            var charlist1 = [1, 2, 9, 10, 15, 19];
            $setlayout.removeClass( "active" );
            $loading.toggle();
            document.getElementById("poster").src = "movie_posters/episode_1.jpg";
            $( "#movie-title" ).append( filmes[movieid].title.toString() );
            $( "#crawl" ).append( filmes[movieid].opening_crawl.toString() );
            $( "#datalan12" ).append( filmes[movieid].release_date.toString() );
            $( "#direc" ).append( filmes[movieid].director.toString() );
            $( "#direcpro" ).append( filmes[movieid].producer.toString() );
            $( "#char1name2" ).append( personagens[charlist1[0]].name.toString() );
            $( "#char2name2" ).append( personagens[charlist1[1]].name.toString() );
            $( "#char3name2" ).append( personagens[charlist1[2]].name.toString() );
            $( "#char4name2" ).append( personagenspg2[charlist1[3]-9].name.toString() );
            $( "#char5name2" ).append( personagenspg2[charlist1[4]-9].name.toString() );
            $( "#char6name2" ).append( personagenspg3[charlist1[5]-18].name.toString() );
            $( "#datanas12" ).append( personagens[charlist1[0]].birth_year.toString() );
            $( "#datanas22" ).append( personagens[charlist1[1]].birth_year.toString() );
            $( "#datanas32" ).append( personagens[charlist1[2]].birth_year.toString() );
            $( "#datanas42" ).append( personagenspg2[charlist1[3]-9].birth_year.toString() );
            $( "#datanas52" ).append( personagenspg2[charlist1[4]-9].birth_year.toString() );
            $( "#datanas62" ).append( personagenspg3[charlist1[5]-18].birth_year.toString() );
            $( "#char1alt2" ).append( personagens[charlist1[0]].height.toString() );
            $( "#char2alt2" ).append( personagens[charlist1[1]].height.toString() );
            $( "#char3alt2" ).append( personagens[charlist1[2]].height.toString() );
            $( "#char4alt2" ).append( personagenspg2[charlist1[3]-9].height.toString() );
            $( "#char5alt2" ).append( personagenspg2[charlist1[4]-9].height.toString() );
            $( "#char6alt2" ).append( personagenspg3[charlist1[5]-18].height.toString() );

            $("#content2").addClass("active");
            $loading.toggle();
        } );

    $moviecard2.click( function () {
        let movieid = 4;
        var charlist1 = [1, 2, 5, 6, 9, 10];
        $setlayout.removeClass( "active" );
        $loading.toggle();
        document.getElementById("poster").src = "movie_posters/episode_2.webp";
        $( "#movie-title" ).append( filmes[movieid].title.toString() );
        $( "#crawl" ).append( filmes[movieid].opening_crawl.toString() );
        $( "#datalan12" ).append( filmes[movieid].release_date.toString() );
        $( "#direc" ).append( filmes[movieid].director.toString() );
        $( "#direcpro" ).append( filmes[movieid].producer.toString() );
        $( "#char1name2" ).append( personagens[charlist1[0]].name.toString() );
        $( "#char2name2" ).append( personagens[charlist1[1]].name.toString() );
        $( "#char3name2" ).append( personagens[charlist1[2]].name.toString() );
        $( "#char4name2" ).append( personagens[charlist1[3]].name.toString() );
        $( "#char5name2" ).append( personagens[charlist1[4]].name.toString() );
        $( "#char6name2" ).append( personagenspg2[charlist1[5]-9].name.toString() );
        $( "#datanas12" ).append( personagens[charlist1[0]].birth_year.toString() );
        $( "#datanas22" ).append( personagens[charlist1[1]].birth_year.toString() );
        $( "#datanas32" ).append( personagens[charlist1[2]].birth_year.toString() );
        $( "#datanas42" ).append( personagens[charlist1[3]].birth_year.toString() );
        $( "#datanas52" ).append( personagens[charlist1[4]].birth_year.toString() );
        $( "#datanas62" ).append( personagenspg2[charlist1[5]-9].birth_year.toString() );
        $( "#char1alt2" ).append( personagens[charlist1[0]].height.toString() );
        $( "#char2alt2" ).append( personagens[charlist1[1]].height.toString() );
        $( "#char3alt2" ).append( personagens[charlist1[2]].height.toString() );
        $( "#char4alt2" ).append( personagens[charlist1[3]].height.toString() );
        $( "#char5alt2" ).append( personagens[charlist1[4]].height.toString() );
        $( "#char6alt2" ).append( personagenspg2[charlist1[5]-9].height.toString() );

        $("#content2").addClass("active");
        $loading.toggle();

    } );
    $moviecard3.click( function () {
        let movieid = 5;
        var charlist1 = [0, 1, 2, 3, 4, 5];
        $setlayout.removeClass( "active" );
        $loading.toggle();
        document.getElementById("poster").src = "movie_posters/episode_3.jpg";
        $( "#movie-title" ).append( filmes[movieid].title.toString() );
        $( "#crawl" ).append( filmes[movieid].opening_crawl.toString() );
        $( "#datalan12" ).append( filmes[movieid].release_date.toString() );
        $( "#direc" ).append( filmes[movieid].director.toString() );
        $( "#direcpro" ).append( filmes[movieid].producer.toString() );
        $( "#char1name2" ).append( personagens[charlist1[0]].name.toString() );
        $( "#char2name2" ).append( personagens[charlist1[1]].name.toString() );
        $( "#char3name2" ).append( personagens[charlist1[2]].name.toString() );
        $( "#char4name2" ).append( personagens[charlist1[3]].name.toString() );
        $( "#char5name2" ).append( personagens[charlist1[4]].name.toString() );
        $( "#char6name2" ).append( personagens[charlist1[5]].name.toString() );
        $( "#datanas12" ).append( personagens[charlist1[0]].birth_year.toString() );
        $( "#datanas22" ).append( personagens[charlist1[1]].birth_year.toString() );
        $( "#datanas32" ).append( personagens[charlist1[2]].birth_year.toString() );
        $( "#datanas42" ).append( personagens[charlist1[3]].birth_year.toString() );
        $( "#datanas52" ).append( personagens[charlist1[4]].birth_year.toString() );
        $( "#datanas62" ).append( personagens[charlist1[5]].birth_year.toString() );
        $( "#char1alt2" ).append( personagens[charlist1[0]].height.toString() );
        $( "#char2alt2" ).append( personagens[charlist1[1]].height.toString() );
        $( "#char3alt2" ).append( personagens[charlist1[2]].height.toString() );
        $( "#char4alt2" ).append( personagens[charlist1[3]].height.toString() );
        $( "#char5alt2" ).append( personagens[charlist1[4]].height.toString() );
        $( "#char6alt2" ).append( personagens[charlist1[5]].height.toString() );
        $("#content2").addClass("active");
        $loading.toggle();


    } );
    $moviecard4.click( function () {
        let movieid = 0;
        var charlist1 = [0, 1, 2, 3, 4, 5];
        $setlayout.removeClass( "active" );
        $loading.toggle();
        document.getElementById("poster").src = "movie_posters/episode_4.webp";
        $( "#movie-title" ).append( filmes[movieid].title.toString() );
        $( "#crawl" ).append( filmes[movieid].opening_crawl.toString() );
        $( "#datalan12" ).append( filmes[movieid].release_date.toString() );
        $( "#direc" ).append( filmes[movieid].director.toString() );
        $( "#direcpro" ).append( filmes[movieid].producer.toString() );
        $( "#char1name2" ).append( personagens[charlist1[0]].name.toString() );
        $( "#char2name2" ).append( personagens[charlist1[1]].name.toString() );
        $( "#char3name2" ).append( personagens[charlist1[2]].name.toString() );
        $( "#char4name2" ).append( personagens[charlist1[3]].name.toString() );
        $( "#char5name2" ).append( personagens[charlist1[4]].name.toString() );
        $( "#char6name2" ).append( personagens[charlist1[5]].name.toString() );
        $( "#datanas12" ).append( personagens[charlist1[0]].birth_year.toString() );
        $( "#datanas22" ).append( personagens[charlist1[1]].birth_year.toString() );
        $( "#datanas32" ).append( personagens[charlist1[2]].birth_year.toString() );
        $( "#datanas42" ).append( personagens[charlist1[3]].birth_year.toString() );
        $( "#datanas52" ).append( personagens[charlist1[4]].birth_year.toString() );
        $( "#datanas62" ).append( personagens[charlist1[5]].birth_year.toString() );
        $( "#char1alt2" ).append( personagens[charlist1[0]].height.toString() );
        $( "#char2alt2" ).append( personagens[charlist1[1]].height.toString() );
        $( "#char3alt2" ).append( personagens[charlist1[2]].height.toString() );
        $( "#char4alt2" ).append( personagens[charlist1[3]].height.toString() );
        $( "#char5alt2" ).append( personagens[charlist1[4]].height.toString() );
        $( "#char6alt2" ).append( personagens[charlist1[5]].height.toString() );
        $("#content2").addClass("active");
        $loading.toggle();



    } );
    $moviecard5.click( function () {
        let movieid = 1;
        var charlist1 = [0, 1, 2, 3, 4, 9];
        $setlayout.removeClass( "active" );
        $loading.toggle();
        document.getElementById("poster").src = "movie_posters/episode_5.jpg";
        $( "#movie-title" ).append( filmes[movieid].title.toString() );
        $( "#crawl" ).append( filmes[movieid].opening_crawl.toString() );
        $( "#datalan12" ).append( filmes[movieid].release_date.toString() );
        $( "#direc" ).append( filmes[movieid].director.toString() );
        $( "#direcpro" ).append( filmes[movieid].producer.toString() );
        $( "#char1name2" ).append( personagens[charlist1[0]].name.toString() );
        $( "#char2name2" ).append( personagens[charlist1[1]].name.toString() );
        $( "#char3name2" ).append( personagens[charlist1[2]].name.toString() );
        $( "#char4name2" ).append( personagens[charlist1[3]].name.toString() );
        $( "#char5name2" ).append( personagens[charlist1[4]].name.toString() );
        $( "#char6name2" ).append( personagens[charlist1[5]].name.toString() );
        $( "#datanas12" ).append( personagens[charlist1[0]].birth_year.toString() );
        $( "#datanas22" ).append( personagens[charlist1[1]].birth_year.toString() );
        $( "#datanas32" ).append( personagens[charlist1[2]].birth_year.toString() );
        $( "#datanas42" ).append( personagens[charlist1[3]].birth_year.toString() );
        $( "#datanas52" ).append( personagens[charlist1[4]].birth_year.toString() );
        $( "#datanas62" ).append( personagens[charlist1[5]].birth_year.toString() );
        $( "#char1alt2" ).append( personagens[charlist1[0]].height.toString() );
        $( "#char2alt2" ).append( personagens[charlist1[1]].height.toString() );
        $( "#char3alt2" ).append( personagens[charlist1[2]].height.toString() );
        $( "#char4alt2" ).append( personagens[charlist1[3]].height.toString() );
        $( "#char5alt2" ).append( personagens[charlist1[4]].height.toString() );
        $( "#char6alt2" ).append( personagens[charlist1[5]].height.toString() );
        $("#content2").addClass("active");
        $loading.toggle();



    } );
    $moviecard6.click( function () {
        let movieid = 2;
        var charlist1 = [0, 1, 2, 3, 4, 9];
        $setlayout.removeClass( "active" );
        $loading.toggle();
        document.getElementById("poster").src = "movie_posters/episode_6.jpg";
        $( "#movie-title" ).append( filmes[movieid].title.toString() );
        $( "#crawl" ).append( filmes[movieid].opening_crawl.toString() );
        $( "#datalan12" ).append( filmes[movieid].release_date.toString() );
        $( "#direc" ).append( filmes[movieid].director.toString() );
        $( "#direcpro" ).append( filmes[movieid].producer.toString() );
        $( "#char1name2" ).append( personagens[charlist1[0]].name.toString() );
        $( "#char2name2" ).append( personagens[charlist1[1]].name.toString() );
        $( "#char3name2" ).append( personagens[charlist1[2]].name.toString() );
        $( "#char4name2" ).append( personagens[charlist1[3]].name.toString() );
        $( "#char5name2" ).append( personagens[charlist1[4]].name.toString() );
        $( "#char6name2" ).append( personagens[charlist1[5]].name.toString() );
        $( "#datanas12" ).append( personagens[charlist1[0]].birth_year.toString() );
        $( "#datanas22" ).append( personagens[charlist1[1]].birth_year.toString() );
        $( "#datanas32" ).append( personagens[charlist1[2]].birth_year.toString() );
        $( "#datanas42" ).append( personagens[charlist1[3]].birth_year.toString() );
        $( "#datanas52" ).append( personagens[charlist1[4]].birth_year.toString() );
        $( "#datanas62" ).append( personagens[charlist1[5]].birth_year.toString() );
        $( "#char1alt2" ).append( personagens[charlist1[0]].height.toString() );
        $( "#char2alt2" ).append( personagens[charlist1[1]].height.toString() );
        $( "#char3alt2" ).append( personagens[charlist1[2]].height.toString() );
        $( "#char4alt2" ).append( personagens[charlist1[3]].height.toString() );
        $( "#char5alt2" ).append( personagens[charlist1[4]].height.toString() );
        $( "#char6alt2" ).append( personagens[charlist1[5]].height.toString() );


        $("#content2").addClass("active");
        $loading.toggle();



    } );
    $("#header-title").click( function () {
        window.location.href ='index.html';
    } );
    }

)

    function checkstates() {
        let movielist = [$moviecard1, $moviecard2, $moviecard3, $moviecard4, $moviecard5, $moviecard6];
        let frontcards = [$moviecard1, $moviecard2, $moviecard3];
        let backcards = [$moviecard4, $moviecard5, $moviecard6];
        if (states > 5) {
            states = 0;
        }
        if (states < 0) {
            states = 5;
        }
        switch (states) {
            case 0:
                frontcards.forEach( (element => element.css( 'z-index', 2 )) );
                movielist.forEach( (element => element.css( 'right', 0 + 'px' )) );

                break;
            case 1:
                movielist.forEach( (element => element.css( 'right', pixels + 'px' )) );
                break;
            case 2:
                movielist.forEach( (element => element.css( 'right', pixels * 2 + 'px' )) );
                break;
            case 3:
                movielist.forEach( (element => element.css( 'right', pixels * 3 + 'px' )) );
                break;
            case 4:
                frontcards.forEach( (element => element.css( 'z-index', 0 )) );
                backcards.forEach( (element => element.css( 'right', pixels * 4 + 'px' )) );
                frontcards.forEach( (element => element.css( 'right', -pixels * 2 + 'px' )) )

                break;
            case 5:
                frontcards.forEach( (element => element.css( 'z-index', 2 )) );
                backcards.forEach( (element => element.css( 'right', pixels * 5 ) + 'px') );
                frontcards.forEach( (element => element.css( 'right', -pixels + 'px' )) )

                break;
            case 6:
                backcards.forEach( (element => element.css( 'right', pixels * 5 ) + 'px') );
                frontcards.forEach( (element => element.css( 'right', -pixels + 'px' )) )
                break;
        }
    }

    function moveleftmovies() {
        states++;
        checkstates();
    }

    function moverightmovies() {
        states--;
        checkstates()

    }


    function checkstateschars() {
        let charlist = [$char1, $char2, $char3, $char4, $char5, $char6];
        let frontcards = [$char1, $char2, $char3];
        let backcards = [$char4, $char5, $char6];
        if (statesc > 5) {
            statesc = 0;
        }
        if (statesc < 0) {
            statesc = 5;
        }
        switch (statesc) {
            case 0:
                frontcards.forEach( (element => element.css( 'z-index', 3 )) );
                charlist.forEach( (element => element.css( 'right', 0 + 'px' )) );

                break;
            case 1:
                charlist.forEach( (element => element.css( 'right', pixels + 'px' )) );
                break;
            case 2:
                charlist.forEach( (element => element.css( 'right', pixels * 2 + 'px' )) );
                break;
            case 3:
                charlist.forEach( (element => element.css( 'right', pixels * 3 + 'px' )) );
                break;
            case 4:
                frontcards.forEach( (element => element.css( 'z-index', 0 )) );
                backcards.forEach( (element => element.css( 'right', pixels * 4 + 'px' )) );
                frontcards.forEach( (element => element.css( 'right', -pixels * 2 + 'px' )) )
                break;
            case 5:
                frontcards.forEach( (element => element.css( 'z-index', 2 )) );
                backcards.forEach( (element => element.css( 'right', pixels * 5 ) + 'px') );
                frontcards.forEach( (element => element.css( 'right', -pixels + 'px' )) )
                break;
            case 6:
                backcards.forEach( (element => element.css( 'right', pixels * 5 ) + 'px') );
                frontcards.forEach( (element => element.css( 'right', -pixels + 'px' )) )
                break;
        }
    }

    function moveleftchars() {
        statesc++;
        checkstateschars();
    }

    function moverightchars() {
        statesc--;
        checkstateschars()

    }

function checkstatescharsmovie() {
    let charlist = [$char12, $char22, $char32, $char42, $char52, $char62];
    let frontcards = [$char12, $char22, $char32];
    let backcards = [$char42, $char52, $char62];
    if (statescm > 5) {
        statescm = 0;
    }
    if (statescm < 0) {
        statescm = 5;
    }
    switch (statescm) {
        case 0:
            frontcards.forEach( (element => element.css( 'z-index', 3 )) );
            charlist.forEach( (element => element.css( 'right', 0 + 'px' )) );

            break;
        case 1:
            charlist.forEach( (element => element.css( 'right', pixels + 'px' )) );
            break;
        case 2:
            charlist.forEach( (element => element.css( 'right', pixels * 2 + 'px' )) );
            break;
        case 3:
            charlist.forEach( (element => element.css( 'right', pixels * 3 + 'px' )) );
            break;
        case 4:
            frontcards.forEach( (element => element.css( 'z-index', 0 )) );
            backcards.forEach( (element => element.css( 'right', pixels * 4 + 'px' )) );
            frontcards.forEach( (element => element.css( 'right', -pixels * 2 + 'px' )) )
            break;
        case 5:
            frontcards.forEach( (element => element.css( 'z-index', 2 )) );
            backcards.forEach( (element => element.css( 'right', pixels * 5 ) + 'px') );
            frontcards.forEach( (element => element.css( 'right', -pixels + 'px' )) )
            break;
        case 6:
            backcards.forEach( (element => element.css( 'right', pixels * 5 ) + 'px') );
            frontcards.forEach( (element => element.css( 'right', -pixels + 'px' )) )
            break;
    }
}

function moveleftcharsmovie() {
    statescm++;
    checkstatescharsmovie();
}

function moverightcharsmovie() {
    statescm--;
    checkstatescharsmovie()

}