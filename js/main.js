var select = document.querySelector('select');
var resultSelect = document.querySelector('.pizza-type__value')
select.onchange = function(){
    resultSelect.textContent = select.value;
}

// RADIO

var radios= document.querySelectorAll('.pizza-size-radio');
var resultRadio = document.querySelector('.size-result__value');
radios.forEach(radio => {
    radio.addEventListener('change', function () {
        resultRadio.textContent=radio.value;
    });
});

// CONTENT

var pizzaContents = document.querySelectorAll('.pizza-content__check');
var pizzaContentList = document.querySelector('.content-result__list');
pizzaContents.forEach(pizzaContent => {
    pizzaContent.onclick= function(){
        if(pizzaContent.checked){
            let newElement = document.createElement('li');
            newElement.textContent=pizzaContent.value;
            pizzaContentList.append(newElement);
        }
        else{
            productItems = pizzaContentList.querySelectorAll('li');
            productItems.forEach(productItem => {
                if(productItem.textContent===pizzaContent.value){
                    productItem.remove();
                }
            });
            
        }
    }
});

// EXTRA

var pizzaExtras = document.querySelectorAll('.pizza-extra__check');
var pizzaExtraList = document.querySelector('.extra-result__list');
pizzaExtras.forEach(pizzaExtra => {
    pizzaExtra.onclick= function(){
        if(pizzaExtra.checked){
            let newElement = document.createElement('li');
            newElement.textContent=pizzaExtra.value;
            pizzaExtraList.append(newElement);
        }
        else{
            productItems = pizzaExtraList.querySelectorAll('li');
            productItems.forEach(productItem => {
                if(productItem.textContent===pizzaExtra.value){
                    productItem.remove();
                }
            });
            
        }
    }
});