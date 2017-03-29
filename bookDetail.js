(function () {
	
	var app = angular.module('libraryApp');

	app.component('bookDetail', {
		controller: BookDetail,
		controllerAs: 'bd',
		templateUrl: 'bookDetail.html',
		bindings: {
			book: '<',
			index: '<'
		},
		require: {
			parent: '^bookList'
		}
	});

	BookDetail.$inject = [];

	function BookDetail() {
		
		var bd = this;

		console.log('Book Detail: ', bd);

		bd.delete = function () {
			bd.parent.deleteBook(bd.index);
		}
	}
	
})();