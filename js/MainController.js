// Code goes here

const myApp = angular.module('myApp', ['angularUtils.directives.dirPagination']);

function MyController($scope, $filter) {
  $scope.title = 'Dynamic Responsive Table';
  $scope.promo = 'Our Product.';
  $scope.show = 'Show';
  $scope.entries = 'entries';
  $scope.searchh = 'Search';
  $scope.showing = 'Page';

  $scope.row1name = 'Image';
  $scope.row2name = 'Name';
  $scope.row3name = 'Stock';
  $scope.row4name = 'Model';
  $scope.row5name = 'Price';
  $scope.nomatching = 'No matching records found';

  $scope.currentPage = 1;

  $scope.pageSize = 12;
  $scope.product = [
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster01.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Ninja Turtles1',
      stock: 129,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster02.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Trash Pack 2',
      stock: 128,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster03.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Baby Alive 3',
      stock: 127,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster04.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'My Little Pony 4',
      stock: 129,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster05.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Littlest Pet Shop Eva Puzzle 5',
      stock: 128,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster06.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Nerf N-Strike Elite Strongarm 6',
      stock: 127,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster07.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Nerf Thunder Bow 7',
      stock: 129,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster08.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Barbie 8',
      stock: 128,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster09.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Transformers 9',
      stock: 127,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster10.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Bakugan 10',
      stock: 129,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster11.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Winx Blooms Vespa 11',
      stock: 128,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster12.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Play Big - Hello Kitty Playset 12 ',
      stock: 127,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster13.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Violetta 13',
      stock: 129,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster14.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Hot Wheels 14',
      stock: 128,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster15.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Minnie 15',
      stock: 127,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster16.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Iron Man3 16',
      stock: 129,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster17.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Planes 1:24 RC Ripslinger 17',
      stock: 128,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster18.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Monster High 13 18',
      stock: 127,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster02.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Planes 19',
      stock: 128,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster03.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Ben10 Ultimate Alien 20',
      stock: 127,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster04.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'My Little Pony 21',
      stock: 129,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster05.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Big Hero DX Feature Figure 22',
      stock: 128,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster06.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Monster High Paris 23',
      stock: 127,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster07.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Polly Pocket 24',
      stock: 129,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster08.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Trash Pack S5 25',
      stock: 128,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster09.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Transformers TF4',
      stock: 127,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster10.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Equesteria Pony Girls',
      stock: 129,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster11.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Gormiti CGI Lord',
      stock: 128,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster12.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Slugterra',
      stock: 127,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster13.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Planes RC El Chupacabra',
      stock: 129,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster14.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'The Amazing Spider-Man2',
      stock: 128,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster15.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Ben10 Ultimate Alien Arm',
      stock: 127,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster16.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Transformers Ultra Spark',
      stock: 129,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster17.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Transformers Tf4 Leader',
      stock: 128,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster18.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Howlywood',
      stock: 127,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster16.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Ninja Turtles',
      stock: 129,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster17.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'My Little Pony Dekopony',
      stock: 128,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster18.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Transformers Mini',
      stock: 127,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster16.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Slugterra',
      stock: 129,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster17.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Frozen',
      stock: 128,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster18.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Gormiti CGI',
      stock: 127,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster16.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Polly Pocket Polly',
      stock: 129,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster17.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Star Wars Extend Lightsaber',
      stock: 128,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
    {
      coversmall: 'http://placehold.it/35x35',
      covermedium: 'img/Monster-Medium/monster18.jpg',
      coverbig: 'http://placehold.it/100x100',
      name: 'Cars 2',
      stock: 127,
      modeldate: new Date('2014', '03', '08'),
      price: 19,
    },
  ];
  $scope.counted = $scope.product.length;
  $scope.$watch('search', (query) => {
    $scope.counted = $filter('filter')($scope.product, query).length;
  });

  $scope.pageChangeHandler = function (num) {
    console.log('product page changed to ' + num);
  };
}

function OtherController($scope) {
  $scope.pageChangeHandler = function (num) {
    console.log('going to page ' + num);
  };
}

myApp.controller('MyController', MyController);
myApp.controller('OtherController', OtherController);
