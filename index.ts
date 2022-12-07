interface Article {
  title: string,
  source: string,
  tag: string,
  url: string
}

const articles:Article[] = [
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
]

let newArticle:Article = {
  title: 'CSS Grid Layout',
  source: 'MDN',
  tag: 'css',
  url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout'
}

articles.push(newArticle)

let tagItems = document.querySelectorAll('.tag');

tagItems.forEach(item  => {
  item.addEventListener('click', e => {
    item.classList.add('active')
    tagItems.forEach(item => { if(item !== e.currentTarget) item.classList.remove('active') })

    const { currentTarget } = e
    let tag = (currentTarget as HTMLButtonElement).dataset.id
    let currentArticles = articles.filter(item => item.tag === tag)
    if(tag === 'all') {
      displayArticles(articles)
    } else {
      displayArticles(currentArticles)
    }
  })
})

const articlesContainer = document.getElementById('articles')
window.addEventListener('DOMContentLoaded', () => displayArticles(articles))

const displayArticles = function(currentArticles: Article[]):void {
  let articlesBlock = currentArticles.map(item => {
    return `<a href="${item.url}" target=”_blank” class="block h-36">
              <div class="h-36 p-4 flex flex-col justify-between gap-4  shadow-base cursor-pointer hover:shadow-xl duration-300">
                <div class="text-lg font-bold leading-5"> ${item.title} </div>
                <div class="flex justify-between items-center">
                  <div class="py-0.5 px-2 text-xs rounded-xl border-2 text-blue border-blue"> ${item.tag} </div>
                  <div class="flex gap-2 items-center">
                    <span class="text-xs opacity-70 font-black"> ${item.source} </span>
                    <img src="src/img/arrow.svg" alt="read" class="w-5 h-5">
                  </div>
                </div>
              </div>
            </a>`
  })
  articlesContainer!.innerHTML = articlesBlock.join('')
}



