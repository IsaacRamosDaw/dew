button = document.getElementById('submit');
age = document.getElementById('age');
height =  document.getElementById('height');
container = document.getElementById('container');
button.onclick = function () {
    let attractions = ATTRACTIONS.filter(function(attraction){
        return filter(attraction, age.value, height.value);
    });

    attractions.forEach(function(attraction){
        const newElement = document.createElement('div');
        newElement.innerHTML(`\
        <ul>\
            <li>Name:${attractions.name}</li>\
            <li>Description:${attractions.description}</li>\
        <ul>`);
        container.appendChild(newElement);
    });
}