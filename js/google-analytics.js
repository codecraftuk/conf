(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject'] = r;i[r]=i[r]||function(){
        (i[r].q = i[r].q || []).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-138996-11', 'auto');
ga('send', 'pageview');

$("#mc-embedded-subscribe").click(function () {
    ga('send', 'event', 'email', 'subscribe', 'subcribe');
});

$("#buyTicketsLink").click(function () {
    ga('send', 'event', 'tickets', 'buy', 'link');
});

$("#buyDiscountTicketsLink").click(function () {
    ga('send', 'event', 'tickets', 'buy', 'discount');
});

$("#buyStandardTicketsLink").click(function () {
    ga('send', 'event', 'tickets', 'buy', 'standard');
});