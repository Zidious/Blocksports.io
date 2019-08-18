$.getJSON('scripts/leaderboardData.json', function (data) {
   $.each(data, function (key, value) {
       $('<tr>').html(
           "<th>" + (key + 1) + "</th><th>" + value.username + "</th><th>" + value.points + "</th>"
       ).appendTo('#table');

   });
});


