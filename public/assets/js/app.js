$(function(){
    $(".slurp").on("click", function(event){
        event.preventDefault();
        $.ajax({
            type: "PUT",
            url: "/api/pho/",
            data: {slurped: 1}
        }).then(function(data){
            location.reload();
        });
    });

    $(".delete").on("click",function(event){
        event.preventDefault();

        $.ajax({
            type: "PUT",
            url:"/api/pho/"+$(this).data('id'),
            data: { slurped: 0}
        }).then(function(data){
            location.reload();
        });
    });

    $(".addPho").on("submit", function(event){
        event.preventDefault();

        var newPho = {
            pho_name: $("#newPho").val().trim()
        };

        $.ajax({
            type: "POST",
            url:"/api/pho",
            data: newPho
        }).then(function(data){
            location.reload();
        });
    });
});