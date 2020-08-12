let shuffleAndSort = (function() {
    // object to store item no and its corressponding color 
    const elementArray = [{ elem:1, class: 'colorCode1' }, { elem:2, class: 'colorCode2' }, { elem:3, class: 'colorCode3' }, { elem:4, class: 'colorCode2' }, { elem:5, class: 'colorCode3' }, { elem:6, class: 'colorCode4' }, { elem: 7, class: 'colorCode4' },{ elem:8, class: 'colorCode1' }, { elem:9, class: 'colorCode3' }];
    
    // randomized shuffle method
    function shuffle() {
        for (let i = elementArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            [elementArray[i], elementArray[j]] = [elementArray[j], elementArray[i]];
        }
        render(elementArray);
    }

    // method to sort elements in increasing order	
    function sort() {
        elementArray.sort(function (x, y) {
            return x.elem - y.elem;
        });
        render(elementArray);
    }
    
    // function to display dynamically created elements	
    function render(elementArray) {
        document.getElementById('elements').innerHTML = '';
        for(let i = 0; i < elementArray.length; i++)
        {
            let card = document.createElement("div");
            let cardValue = document.createElement("div");
            card.className = "col-md-4 col-sm-4 col-xs-12 card "+ elementArray[i].class;
            cardValue.className = "cardValue";

            cardValue.innerHTML = elementArray[i].elem;
            card.appendChild(cardValue);

            document.getElementById("elements").appendChild(card);
        }
    }
    
    return {
        shuffle, sort
    }
})();

function load()
{
	shuffleAndSort.sort();
}

window.onload = load;
