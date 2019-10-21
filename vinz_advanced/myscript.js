
$("code").css("color", "red");

$("ol > li").css("background-color", "#2a7b90");

$("textarea").attr("placeholder", "Express your opinion");

$("img").attr("src", "https://www.codefactory.wien/wp-content/uploads/2018/03/codefactory-vienna-footer-h.png");

$("blockquote").css({"background-color": "orange", "font-style": "italic"});

$("h1#logo").css("color","black");
$("span.gray").css("color","white");

$(".date").remove();

var items = $("<li><a>New Templates</li><li><a>Order Template</li><li><a>Contact Us</li>");
$("#sidebar ul:first-of-type").append(items);

$("a").attr("href", "www.codefactory.wien");

$("p:contains('Be not')").text("\"When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.\"")