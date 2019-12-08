$("#redirect").click(function(){
    window.location.href = "http://localhost:8000/tjanster";
});

$(function() {
    $('.chart').easyPieChart({
        size: 200,
        barColor: '#61d148',
        lineWidth: 25,
        scaleColor: false,
        lineCap: 'butt'
    });
});