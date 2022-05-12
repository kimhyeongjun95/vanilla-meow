const TEMPLATE = '<input type="text">';

// SearchInput 옆에 버튼을 하나 배치하고
// 이 버튼을 클릭할 시 /api/cats/random50 을 호출하여 
// 화면에 뿌리는 기능을 추가합니다. 버튼의 이름은 마음대로 정합니다.
class SearchInput {
  constructor({ $target, onSearch, onClick }) {
    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";
    $searchInput.className = "SearchInput";

    const btn = document.createElement('button');
    btn.innerText = "랜덤 고양이";
    $target.appendChild($searchInput);
    $target.appendChild(btn);
    btn.addEventListener('click', () => {
      onClick();
    })

    $searchInput.addEventListener("keyup", e => {
      if (e.keyCode === 13) {
        onSearch(e.target.value);
      }
    });

    console.log("SearchInput created.", this);
  }
  render() {}
}
