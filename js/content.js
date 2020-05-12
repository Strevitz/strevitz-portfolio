// californian time zone clock

function getTime() 
{
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
 
    return ""+(h - 9)+
             ((m<10)?":0":":")+m+
             ((s<10)?":0":":")+s;
}

setInterval(function() {
 
    document.getElementById('latime').innerHTML = 'W Kalifornii jest ' + getTime();
     
}, 1000);