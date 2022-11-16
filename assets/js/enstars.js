let submit = () => {
    var pointGoal = document.getElementsByName("pointGoal")[0].value + "\n";
    var songPoints = document.getElementsByName("songPoints")[0].value + "\n";
    roughTotal = diaMathRough(pointGoal, songPoints);
    estTotal = diaMathEst(roughTotal);
    diaHTML(roughTotal, estTotal)
};

function diaMathRough(pointGoal, songPoints) {
    var songPlays = pointGoal / songPoints;
    songPlays = Math.round(songPlays);
    var roughTotal = songPlays * 20;
    return roughTotal;
};

function diaMathEst(roughTotal) {
    var estTotal = roughTotal - 9680;
    return estTotal;
};

function diaHTML(roughTotal, estTotal) {
    if(estTotal < 0) {
        estTotal = 0
    };
    let r = Math.round(roughTotal);
    let e = Math.round(estTotal);
    r = r.toLocaleString();
    e = e.toLocaleString();
    let rHTML = '<p>max dia needed: ' + r + '</p>';
    let eHTML = '<p>estimated dia needed: ' + e + '</p>';
    let fin = rHTML + eHTML;
    document.getElementById('results').innerHTML = fin;
};