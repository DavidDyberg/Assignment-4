$(function() {
    const API_ADRESS = "https://pokeapi.co/api/v2/pokemon/";
    
    function generatePokemon() {
        let id = Math.floor(Math.random() * 900);

        fetch(API_ADRESS + id)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            $(".pokemon-name").text(data.name);
            $("img").attr("src",data.sprites.front_default)
            $(".weight").text("weight = " + Math.round(data.weight*0.45359237) + " kg")
            $(".height").text("height = " + Math.round(data.height*0.304*10) /10  + " meters")
            $(".hp").text("Hp = " + data.stats[0].base_stat)
            $(".attack").text("Attack damage = " + data.stats[1].base_stat)
            $(".defense").text("Defense = " + data.stats[2].base_stat)
            $(".type").text("Type: " + data.types[0].type.name)
            $(".speed").text("Speed = " + data.stats[5].base_stat)
            $(".moves0").text(data.moves[0].move.name)
            $(".moves1").text(data.moves[1].move.name)
            $(".moves2").text(data.moves[2].move.name)
            $(".moves3").text(data.moves[3].move.name)
            $(".moves4").text(data.moves[4].move.name)
            $(".moves5").text(data.moves[5].move.name)
            $(".moves6").text(data.moves[6].move.name)
            $(".moves7").text(data.moves[7].move.name)
            $(".moves8").text(data.moves[8].move.name)
        })
    }

    $(".generatepokemon").on("click", generatePokemon);
});