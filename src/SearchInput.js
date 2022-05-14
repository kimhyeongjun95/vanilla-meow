const TEMPLATE = '<input type="text">';

class SearchInput {
  constructor({ $target, onSearch, onClick }) {
    this.$target = $target;
    
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
    this.recentSearches.innerHTML = this.searchList.map((item) => {
      return `
        <div>
          <p>${item}</p>
        </div>
      `
    }).join('');
  }
}
