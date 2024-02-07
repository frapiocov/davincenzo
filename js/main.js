function main() {
	(function () {
		"use strict";

		$("a.page-scroll").click(function () {
			if (
				location.pathname.replace(/^\//, "") ==
					this.pathname.replace(/^\//, "") &&
				location.hostname == this.hostname
			) {
				var target = $(this.hash);
				target = target.length
					? target
					: $("[name=" + this.hash.slice(1) + "]");
				if (target.length) {
					$("html,body").animate(
						{
							scrollTop: target.offset().top - 40,
						},
						900
					);
					return false;
				}
			}
		});

		// Show Menu on Book
		$(window).bind("scroll", function () {
			var navHeight = $(window).height() - 600;
			if ($(window).scrollTop() > navHeight) {
				$(".navbar-default").addClass("on");
			} else {
				$(".navbar-default").removeClass("on");
			}
		});

		$("body").scrollspy({
			target: ".navbar-default",
			offset: 80,
		});

		// Hide nav on click
		$(".navbar-nav li a").click(function (event) {
			// check if window is small enough so dropdown is created
			var toggle = $(".navbar-toggle").is(":visible");
			if (toggle) {
				$(".navbar-collapse").collapse("hide");
			}
		});
	})();
}

main();

/* Cookie banner */
const cookie_container = document.querySelector(".cookie-consent");
const accept_btn = document.getElementById("allow-btn");
const refuse_btn = document.getElementById("canc-btn");

accept_btn.addEventListener("click", () => {
  cookie_container.classList.add("see-cookie");
});

refuse_btn.addEventListener("click", () => {
  cookie_container.classList.add("see-cookie");
});

/**
 * Back to top button
 */


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('back-to-top').style.display='block';
  } else {
    document.getElementById('back-to-top').style.display='none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

