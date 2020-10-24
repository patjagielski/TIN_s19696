function addPar(){
    var p = document.getElementById('toAdd');
    var text = document.createTextNode(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in mauris dolor. Vestibulum a aliquet urna, sit amet tincidunt lectus. Proin sit amet mi et nisl consequat eleifend quis in leo. In rhoncus ultricies faucibus. Vestibulum id mi vitae ex interdum iaculis. Nullam id dolor et ipsum efficitur lobortis a in mi. Aenean sit amet cursus erat, et posuere urna. Pellentesque sed dignissim eros, sed luctus arcu. Fusce fringilla id dolor ut auctor. Aenean imperdiet dictum erat eget cursus. Etiam at lectus et ligula maximus iaculis et ultricies est. Integer sed ultrices ligula.

    Donec venenatis et odio vitae egestas. Pellentesque tincidunt, enim egestas varius maximus, neque magna euismod felis, a finibus lacus odio eget lacus. Vestibulum ac maximus neque. Nunc pharetra, neque at accumsan sodales, lorem mi pulvinar quam, in porttitor velit nibh sit amet odio. Phasellus molestie tellus id ex suscipit hendrerit. Aliquam ut lacus feugiat, volutpat neque in, aliquam est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc quis nisl ac urna vulputate ultricies ut in felis. Nulla eleifend lectus quis turpis venenatis commodo. Quisque a rutrum nulla. Phasellus id neque diam. Phasellus porta justo dui, a porta sapien pharetra in. Vivamus fermentum nisi nec leo sodales, sed varius lacus sollicitudin. Maecenas pulvinar arcu sit amet neque faucibus fermentum.`)
    p.appendChild(text);

}

window.onload = function () {
    setTimeout(function(){ 
        addPar();
        
    }, 5000); 
    
};