(function ($) {
    
    $().ready(function() {
        $(".nav-expand-container").each(function() {
            var parent = this;
            var action = $(".nav-expand-action", this)[0];
            var innerList = document.createElement('ul');
            console.log(action);
            $("li:not(.nav-expand-action)", parent).each(function() {
                item = document.createElement('li');
                link = document.createElement('a');
                if (source = $("a", this)[0]) {
                    console.log(source);
                    link.innerHTML = source.innerHTML;
                    link.href = source.href;
                }
                $(link).appendTo(item);
                $(item).appendTo(innerList);
            });
            $(innerList).addClass("nav-expand-content").hide();
            $(action).append(innerList);
            $(action).click(function(event) {
                $("ul.nav-expand-content", action).slideToggle(400);
                event.preventDefault();
            });
        });
    });
    
})(jQuery);