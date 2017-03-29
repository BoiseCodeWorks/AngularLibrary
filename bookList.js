(function () {
	
	var app = angular.module('libraryApp');

	app.component('bookList', {
		controller: BookList,
		controllerAs: 'bl',
		templateUrl: 'bookList.html'
	});

	BookList.$inject = [];

	function BookList() {
		
		var bl = this;

		bl.books = [];
		bl.newBook = {
			name: '',
			author: '',
			published: ''
		};

		bl.$onInit = function () {
			// load from local storage	
		}

		bl.addBook = function () {
			
			if (bl.newBook.name && bl.newBook.author) {

				bl.books.push(angular.copy(bl.newBook));

				bl.newBook.name = '';
				bl.newBook.author = '';
				bl.newBook.published = '';

				console.log(bl.books);
			}
		}

		bl.deleteBook = function (index) {
			
			bl.books.splice(index, 1);
		}
	}
	
})();