class ImageInfo {
  $imageInfo = null;
  data = null;

  constructor({ $target, data }) {
    const $imageInfo = document.createElement("div");
    $imageInfo.className = "ImageInfo";
    this.$imageInfo = $imageInfo;
    $target.appendChild($imageInfo);
    
    this.data = data;
    
    // 필수 이미지를 검색한 후 결과로 주어진 이미지를 클릭하면 모달이 뜨는데, 모달 영역 밖을 누르거나 / 모달 우측의 닫기(x) 버튼을 누르면 닫히도록 수정해야 합니다.
    this.$imageInfo.addEventListener('click', (e) => {
      if (e.target === e.currentTarget || e.target.classList.contains('close')) {
        this.$imageInfo.style.display = "none"
      }
    })
    // ESC
    window.onkeyup = (e) => {
      if (e.keyCode === 27) {
        this.$imageInfo.style.display = "none"
      }
    }

    
    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    if (this.data.visible) {
      const { name, url, temperament, origin } = this.data.image;

      this.$imageInfo.innerHTML = `
        <div class="content-wrapper">
          <div class="title">
            <span>${name}</span>
            <div class="close">x</div>
          </div>
          <img src="${url}" alt="${name}"/>        
          <div class="description">
            <div>성격: ${temperament}</div>
            <div>태생: ${origin}</div>
          </div>
        </div>`;
      this.$imageInfo.style.display = "block";
    } else {
      this.$imageInfo.style.display = "none";
    }
  }
}
