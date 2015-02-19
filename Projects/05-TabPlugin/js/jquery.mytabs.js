
	(function($) {

		$.fn.myTabs = function(method) {
			return $(this).each(init);
		};

		function init() {
			var $target = $(this);

			$target.addClass("mytabs")
				   .on("click", ".tab-nav .tab", onTabClick);
		}

		function onTabClick() {
			var $target  = $(this),
				$tabs    = $target.parents(".tab-nav").find(".tab"),
				$content = $target.parents(".tab-nav").next(".tab-content").find(".tab"),
				index    = $target.index();

			$tabs.removeClass("active")
				 .eq(index)
				 .addClass("active");

			$content.removeClass("active")
					.eq(index)
					.addClass("active");
		}

	})(jQuery);