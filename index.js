var articles = [
    {
        title: 'Iterators and generators',
        source: 'MDN',
        tag: 'javascript',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators'
    },
    {
        title: 'Image Illustration Filter',
        source: 'CSS-Tricks',
        tag: 'css',
        url: 'https://css-tricks.com/snippets/css/image-illustration-filter/'
    },
    {
        title: 'How To Work with JSON in JavaScript',
        source: 'DigitalOcean',
        tag: 'javascript',
        url: 'https://www.digitalocean.com/community/tutorials/how-to-work-with-json-in-javascript'
    },
    {
        title: 'Viewport meta tag',
        source: 'MDN',
        tag: 'html',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag'
    },
    {
        title: 'How To Use Enums in Typescript',
        source: 'DigitalOcean',
        tag: 'typescript',
        url: 'https://www.digitalocean.com/community/tutorials/how-to-use-enums-in-typescript'
    },
    {
        title: 'Vue 3 Tips & Best Practices',
        source: 'Medium',
        tag: 'vue.js',
        url: 'https://medium.com/js-dojo/vue-3-tips-best-practices-54aec91d95dc'
    },
    {
        title: 'The TypeScript Tax',
        source: 'Medium',
        tag: 'typescript',
        url: 'https://medium.com/javascript-scene/the-typescript-tax-132ff4cb175b'
    },
    {
        title: 'Translate HTML code',
        source: 'Lokalise',
        tag: 'html',
        url: 'https://lokalise.com/blog/translate-html-content'
    },
    {
        title: 'Vue i18n: Building a multi-language app',
        source: 'Lokalise',
        tag: 'vue.js',
        url: 'https://lokalise.com/blog/vue-i18n'
    },
    {
        title: 'Some Links About CSS Gradients',
        source: 'CSS-Tricks',
        tag: 'css',
        url: 'https://css-tricks.com/some-links-about-css-gradients/'
    },
];
var newArticle = {
    title: 'CSS Grid Layout',
    source: 'MDN',
    tag: 'css',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout'
};
articles.push(newArticle);
var tagItems = document.querySelectorAll('.tag');
tagItems.forEach(function (item) {
    item.addEventListener('click', function (e) {
        item.classList.add('active');
        tagItems.forEach(function (item) { if (item !== e.currentTarget)
            item.classList.remove('active'); });
        var currentTarget = e.currentTarget;
        var tag = currentTarget.dataset.id;
        var currentArticles = articles.filter(function (item) { return item.tag === tag; });
        if (tag === 'all') {
            displayArticles(articles);
        }
        else {
            displayArticles(currentArticles);
        }
    });
});
var articlesContainer = document.getElementById('articles');
window.addEventListener('DOMContentLoaded', function () { return displayArticles(articles); });
var displayArticles = function (currentArticles) {
    var articlesBlock = currentArticles.map(function (item) {
        return "<a href=\"".concat(item.url, "\" target=\u201D_blank\u201D class=\"block h-36\">\n              <div class=\"h-36 p-4 flex flex-col justify-between gap-4 bg-white shadow-base cursor-pointer hover:shadow-xl duration-300\">\n                <div class=\"text-lg font-bold leading-5\"> ").concat(item.title, " </div>\n                <div class=\"flex justify-between items-center\">\n                  <div class=\"py-0.5 px-2 text-xs rounded-xl border-2 text-blue border-blue\"> ").concat(item.tag, " </div>\n                  <div class=\"flex gap-2 items-center\">\n                    <span class=\"text-xs opacity-70 font-black\"> ").concat(item.source, " </span>\n                    <img src=\"src/img/arrow.svg\" alt=\"read\" class=\"w-5 h-5\">\n                  </div>\n                </div>\n              </div>\n            </a>");
    });
    articlesContainer.innerHTML = articlesBlock.join('');
};
