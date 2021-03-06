//The following code is for the Follow - Unfollow logic.
//When the user click on the plus icon or Follow text it changes to 'Unfollow' and they also will get a red color.

import $ from 'jquery';

class Follow {
	constructor() {
		this.followButton = $('.panel').find('#plus'); 
		this.follow = $('.panel').find('.panel__follow__text');
		this.circle = $('.panel').find('.panel__follow');
		this.isFollowed = false;
		this.events();
	}
	
	events() {
		this.followButton.click(this.toggleFollow.bind(this));
		this.follow.click(this.toggleFollow.bind(this));
	}
	
	toggleFollow() {
		if(!this.isFollowed) {
			this.follow.text('Unfollow')
			.addClass('panel__follow__text--unfollow');
			this.followButton.removeClass('fa-plus').addClass('fa-minus');
			this.circle.css('borderColor','#d80b0b');
			this.isFollowed = true;
		} else {
			this.follow.text('Follow')
			.removeClass('panel__follow__text--unfollow');
			this.followButton.removeClass('fa-minus').addClass('fa-plus');
			this.circle.css('borderColor','#1705c6');
			this.isFollowed = false;
		}
	}
	
	
}

export default Follow;
