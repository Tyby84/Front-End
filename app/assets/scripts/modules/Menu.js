// The following code is responsible opening and closing the menu under the more icon.

import $ from 'jquery';

class Nav {
	constructor() {
		this.navButton = $('.panel').find('.panel__more');
		this.nav = $('.nav');
		this.closeButton = $('.nav').find('.nav__list__close');
		this.events();
	}

	events() {
		this.navButton.click(this.navOpen.bind(this));
		this.closeButton.click(this.navClose.bind(this));
	}

	navOpen() {
		this.nav.addClass('nav--visible');
		
	}
	
	navClose() {
		this.nav.removeClass('nav--visible');
	}
}

export default Nav;