# Template.class.js
ES6+ Template class. Super simple few lines micro template script!

### Usage:

### Our HTML
```html
<div id="output"></div>
 
<script id="header" type="text/template">
    <header>
        <h1>${title}</h1>
        <ul>
        <$ links.forEach((link, i) => { $>
            <li><a href="${link.href}/${i}">${link.title}</a></li>
        <$ }) $>
        </ul>
    </header>
</script>
 
<script id="article" type="text/template">
    <article id="article-${id}">
        <h1>${title}</h1>
        <p>${content}</p>
    </article>
</script>
 
<script id="body" type="text/template">
    <$= header(header) $>
 
    <div id="articles">
    <$ articles.forEach(article => { $>
        <$= article(article) $>
    <$ }) $>
    </div>
</script>
```

### Our JavaScript
```js
Template.registerPartial('article', document.getElementById('article').innerHTML);
Template.registerPartial('header', document.getElementById('header').innerHTML);
 
var bodyTemplate = new Template(document.getElementById('body').innerHTML);
var output = document.getElementById('output');
 
output.innerHTML += bodyTemplate.render({
    header: {
        title: 'Welcome!',
        links: [
            {href: '/page', title: 'Test 1'},
            {href: '/page', title: 'Test X'}
        ]
    },
    articles: [
        {id: 0, title: 'Lorem ipsum', content: 'Lorem ipsum for first article.'},
        {id: 1, title: 'Dolor sit amet', content: 'Did you know that "Dolor" is similar to "Color"???'}
    ]
});
```

### The result
```html
<div id="output">
    <header>
        <h1>Welcome!</h1>
        <ul>
            <li><a href="/page/0">Test 1</a></li>
            <li><a href="/page/1">Test X</a></li>
        </ul>
    </header>
 
    <div id="articles">
        <article id="article-0">
            <h1>Lorem ipsum</h1>
            <p>Lorem ipsum for first article.</p>
        </article>
        <article id="article-1">
            <h1>Dolor sit amet</h1>
            <p>Did you know that "Dolor" is similar to "Color"???</p>
        </article>
    </div>
</div>
```
