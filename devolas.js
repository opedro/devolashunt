devolas = document.getElementById('devolas');
devolasmove = document.getElementById('devolasmove');
party = document.getElementById('party');
target = document.getElementById('target');
button = document.querySelector('button');
phineas = document.getElementById('phineas');
scorePoints = 0;

gamestarted= true;

plusOneScore = function(){
    scorePoints+=1;
    document.getElementById('score').innerText = scorePoints;
}

shootArrow = function(x,y){
    let flecha = document.getElementById('flecha');
    flecha.style.display = 'block';
    setTimeout(function(){
        
        flecha.style.left = x + 'px';
        flecha.style.top = y + 'px';
    }, 0)
    
    setTimeout(function(){
        flecha.style.display = 'none';
        flecha.style.top = "100%";
        flecha.style.left = "0%";
    }, 600)
    
}

window.addEventListener('mousemove', function(e){
    if(gamestarted){
        target.style.display = 'block';
        target.style.left=e.pageX+'px';
        target.style.top =e.pageY+'px';
    }else{
        target.style.display='none'
    }
});

/*button.addEventListener('click', function(e){
    gamestarted = true;
    button.style.display = 'none';
    phineas.style.display = 'block'
    document.getElementById('score').innerText = scorePoints;
    document.getElementById('score').style.display = 'block';

})*/

window.addEventListener('click', function(e){
    shootArrow(e.pageX, e.pageY);
    if (e.pageX > devolas.offsetLeft-50 && e.pageX < devolas.offsetLeft+50 &&
        e.pageY > devolas.offsetTop && e.pageY < devolas.offsetTop+50){
        plusOneScore();
        devolas.style.display= 'none';
        devolasmove.style.display = 'block';
        party.style.display= 'block';
        this.setTimeout(function(){
            let newpositionY = Math.random()*window.innerHeight;
            let newpositionX = Math.random()*window.innerWidth;
            devolas.style.top = newpositionY;
            devolas.style.left = newpositionX;
            devolasmove.style.display = 'none';
            party.style.display = 'none';
            devolasmove.style.top = newpositionY;
            devolasmove.style.left = newpositionX;
            devolas.style.display = 'block'
        }, 1000)
    }
    console.log ('Dev X = '+ this.document.getElementById('devolas').offsetLeft, 'Dev Y = '+ document.getElementById('devolas').offsetTop)
    console.log('X='+e.pageX+'px' + '   Y=' + e.pageY+'px');
})