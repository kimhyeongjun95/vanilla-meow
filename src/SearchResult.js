class SearchResult {
  $searchResult = null;
  data = null;
  onClick = null;
  loading = false;

  constructor({ $target, initialData, onClick }) {
    this.$searchResult = document.createElement("div");
    this.$searchResult.className = "SearchResult";
    $target.appendChild(this.$searchResult);

    this.data = initialData;
    this.onClick = onClick;
    
    this.render();
  }
  
  setState(nextData) {
    console.log(nextData);
    this.data = nextData.data;
    this.loading = nextData.loading;
    this.render();
  }
  
  render() {
    if (this.loading) {
      if (!this.data.length) {
        // 검색 결과가 없는 경우, 유저가 불편함을 느끼지 않도록 UI적인 적절한 처리가 필요합니다.
        this.$searchResult.innerHTML = `<h3>검색 결과가 없습니다.</h3>`
        return;
      }
      // 로딩 완료
      this.$searchResult.innerHTML = this.data
      .map(
        cat => `
        <div class="item">
        <img src=${cat.url} alt=${cat.name} />
        </div>
        `
        )
        .join("");
        
        this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
          $item.addEventListener("click", () => {
            this.onClick(this.data[index]);
          });
        });
      } else if (!this.loading && this.data === null) {
      // 데이터를 불러오는 중일 때, 현재 데이터를 불러오는 중임을 유저에게 알리는 UI를 추가해야 합니다.
      // 데이터를 불러오는 중, 현재 데이터를 불러오는 중
      this.$searchResult.innerHTML = `<h3>Loading...</h3>`
    } else if (!this.loading && this.data !== []) {
      // 첫 화면, 로딩중 X
      this.$searchResult.innerHTML = ``
    }
    
  }
}
