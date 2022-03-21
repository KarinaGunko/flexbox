var navLink = $('.menu a').on('click', function(e) {
	e.preventDefault();
	console.log('navLink', navLink);
	console.log('notThis', navLink.not(this));
	navLink.not(this).removeClass('active');
	console.log('this', this);
	$(this).addClass('active');
	console.log('this2', this);
})

function handleActiveMenu() {
	const menuItems = document.querySelectorAll('.menu a');
	console.log('menuItems', menuItems);
	menuItems.forEach(function(e1) {
		e1.addEventListener('click', function(e) {
			e.preventDefault();
			menuItems.forEach((n1) => {
				if (n1 !== this) {
					n1.classList.remove('active');
				}
			});
			this.classList.add('active');
		}, false);
	});
}
handleActiveMenu();