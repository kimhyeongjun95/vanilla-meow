import store from './storage.js'

const TEMPLATE = '<input type="text">';

export default class SearchInput {
  constructor({ $target, onSearch, onClick }) {
    this.$target = $target;
    this.onSearch = onSearch;

    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.";
    this.$searchInput.autofocus = true;
    $searchInput.className = "SearchInput";

    const btn = document.createElement('button');
    btn.innerText = "랜덤 고양이";
    btn.addEventListener('click', () => {
      onClick();
    })

    const searchList = [];
    this.searchList = searchList;
    const recentSearches = document.createElement('div')
    this.recentSearches = recentSearches

    $searchInput.addEventListener("keyup", e => {
      if (e.keyCode === 13) {
        searchList.unshift(e.target.value);
        if (searchList.length > 5) {
          searchList.pop();
        }
        onSearch(e.target.value);
        store.setItem(e.target.value);
        this.render();
      }
    });

    $searchInput.addEventListener("click", e => {
      e.target.value = "";
    })
    $target.appendChild($searchInput);
    $target.appendChild(btn);
    $target.appendChild(recentSearches)
    console.log("SearchInput created.", this);

  }
  render() {
    this.recentSearches.innerHTML = this.searchList.map((item, idx) => {
      return `
        <div class="recent" data-recent-id=${idx}>
          <p>${item}</p>
        </div>
      `
    }).join('');

    this.recentSearches.querySelectorAll('.recent').forEach((item, idx) => {
      item.addEventListener('click', () => {
        this.onSearch(this.recentSearches[idx])
      })
    })
  }
}
