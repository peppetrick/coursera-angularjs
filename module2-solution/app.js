(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.items=ShoppingListCheckOffService.getItemsToBuy();
  toBuy.buyItem=function(itemIndex){
    return ShoppingListCheckOffService.buyItem(itemIndex);
  }
}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var alreadyBought = this;
  alreadyBought.items=ShoppingListCheckOffService.getItemsAlreadyBought();
  alreadyBought.total=alreadyBought.items.length;

}
//creato il service, resta da collegare i pulsanti alla rimozione dell'item

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var itemsToBuy = [{
    name: "cookies",
    quantity: 10
  },
  {
    name: "beer cans",
     quantity: 10
  },
  {
    name: "pasta",
    quantity: 5
  },
{
  name: "wine bottle",
  quantity: 4
},
{
  name: "onion",
  quantity: 10
}
    ];

var itemsalreadyBought =[];


  service.getItemsToBuy = function () {
    return itemsToBuy;
  };

  service.getItemsAlreadyBought = function (itemIdex) {
    return itemsalreadyBought;
  };

  service.buyItem = function (itemIndex) {
      itemsalreadyBought.push(itemsToBuy[itemIndex]);
    itemsToBuy.splice(itemIndex,1);
  };
}

})();
