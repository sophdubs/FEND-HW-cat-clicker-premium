
let model = {
    currentCat: null,
    cats: [
        {
            clickCount: 0,
            name: 'Mittens',
            imgURL: 'img/cat1.jpeg'
        },
        {
            clickCount: 0,
            name: 'Snowball',
            imgURL: 'img/cat2.jpg'
        },
        {
            clickCount: 0,
            name: 'Fluffy',
            imgURL: 'img/cat3.jpg'
        },
        {
            clickCount: 0,
            name: 'Cinnamon',
            imgURL: 'img/cat4.jpg'
        },
        {
            clickCount: 0,
            name: 'Hershey',
            imgURL: 'img/cat5.jpeg'
        }
    ]
};

let octopus = {
    init: function(){
        model.currentCat = model.cats[0];
        catListView.init();
        catView.init();
    },
    getCurrentCat: function(){
        return model.currentCat;
    },
    getCats: function(){
        return model.cats;
    },
    setCurrentCat: function(cat){
        model.currentCat = cat;
    },
    incrementCounter: function(){
        model.currentCat.clickCount++;
        catView.render();
    }
};


let catView = {
    init: function(){
        this.catElem = document.querySelector('.cat-viewing-area');
        this.catNameElem = document.querySelector('.cat-name');
        this.catPictureElem = document.querySelector('.main-image');
        this.countElem = document.querySelector('.number_of_clicks');

        this.catPictureElem.addEventListener('click', function(){
            octopus.incrementCounter();
        });

        this.render();

    },
    render: function(){
        var currentCat = octopus.getCurrentCat();
        this.countElem.textContent = currentCat.clickCount;
        this.catNameElem.textContent = currentCat.name;
        this.catPictureElem.src= currentCat.imgURL;
    }
};

let catListView = {
    init: function(){
        this.catListElem = document.querySelector('.cat-list');

        this.render();

    },
    render: function(){
        var cats = octopus.getCats();
        this.catListElem.innerHTML = '';

        for (var i = 0; i < cats.length; i++){
            var cat = cats[i];

            var elem = document.createElement('button');
            elem.textContent = cat.name;

            elem.addEventListener('click', (function(catcopy){
                return function(){
                    octopus.setCurrentCat(catcopy);
                    catView.render();

                };
            })(cat));

            this.catListElem.appendChild(elem);
        };
    }
};


octopus.init();
