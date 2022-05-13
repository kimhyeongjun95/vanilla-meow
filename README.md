

### 굵은 글씨는 필수 구현사항입니다.

### 기울어진 글씨는 추가 구현사항입니다.



# HTML, CSS 관련

- [ ] 현재 HTML 코드가 전체적으로 `<div>` 로만 이루어져 있습니다. 이 마크업을 시맨틱한 방법으로 변경해야 합니다.
- [ ] 유저가 사용하는 디바이스의 가로 길이에 따라 검색결과의 row 당 column 갯수를 적절히 변경해주어야 합니다.
  - 992px 이하: 3개
  - 768px 이하: 2개
  - 576px 이하: 1개

- [ ] 다크 모드(Dark mode)를 지원하도록 CSS를 수정해야 합니다.

  - CSS 파일 내의 다크 모드 관련 주석을 제거한 뒤 구현합니다.

  - 모든 글자 색상은 `#FFFFFF` , 배경 색상은 `#000000` 로 한정합니다.

  - 기본적으로는 OS의 다크모드의 활성화 여부를 기반으로 동작하게 하되, 유저가 테마를 토글링 할 수 있도록 좌측 상단에 해당 기능을 토글하는 체크박스를 만듭니다.



# 이미지 상세 보기 모달 관련

- [x] 디바이스 가로 길이가 768px 이하인 경우, 모달의 가로 길이를 디바이스 가로 길이만큼 늘려야 합니다.
- [x]  **`필수` 이미지를 검색한 후 결과로 주어진 이미지를 클릭하면 모달이 뜨는데, 모달 영역 밖을 누르거나 / 키보드의 ESC 키를 누르거나 / 모달 우측의 닫기(x) 버튼을 누르면 닫히도록 수정해야 합니다.**

- [ ] 모달에서 고양이의 성격, 태생 정보를 렌더링합니다. 해당 정보는 `/cats/:id` 를 통해 불러와야 합니다.

- [ ] *`추가` 모달 열고 닫기에 fade in/out을 적용해 주세요.*



# 검색 페이지 관련

- [ ] 페이지 진입 시 포커스가 `input` 에 가도록 처리하고, 키워드를 입력한 상태에서 `input` 을 클릭할 시에는 기존에 입력되어 있던 키워드가 삭제되도록 만들어야 합니다.

- [x] **`필수`** **데이터를 불러오는 중일 때, 현재 데이터를 불러오는 중임을 유저에게 알리는 UI를 추가해야 합니다.**

- [x] **`필수`** **검색 결과가 없는 경우, 유저가 불편함을 느끼지 않도록 UI적인 적절한 처리가 필요합니다.**

- [ ] 최근 검색한 키워드를 `SearchInput` 아래에 표시되도록 만들고, 해당 영역에 표시된 특정 키워드를 누르면 그 키워드로 검색이 일어나도록 만듭니다. 단, 가장 최근에 검색한 5개의 키워드만 노출되도록 합니다.

- [ ] 페이지를 새로고침해도 마지막 검색 결과 화면이 유지되도록 처리합니다.

- [x] **`필수` SearchInput 옆에 버튼을 하나 배치하고, 이 버튼을 클릭할 시 `/api/cats/random50` 을 호출하여 화면에 뿌리는 기능을 추가합니다. 버튼의 이름은 마음대로 정합니다.**

- [ ] lazy load 개념을 이용하여, 이미지가 화면에 보여야 할 시점에 load 되도록 처리해야 합니다.

- [ ] *`추가` 검색 결과 각 아이템에 마우스 오버시 고양이 이름을 노출합니다.*



# 스크롤 페이징 구현

- [ ] 검색 결과 화면에서 유저가 브라우저 스크롤 바를 끝까지 이동시켰을 경우, 그 다음 페이지를 로딩하도록 만들어야 합니다.



# 랜덤 고양이 배너 섹션 추가

- [ ] 현재 검색 결과 목록 위에 배너 형태의 랜덤 고양이 섹션을 추가합니다.

- [ ] 앱이 구동될 때 `/api/cats/random50` api를 요청하여 받는 결과를 별도의 섹션에 노출합니다.

- [ ] 검색 결과가 많더라도 화면에 5개만 노출하며 각 이미지는 좌, 우 슬라이드 이동 버튼을 갖습니다.

- [ ] 좌, 우 버튼을 클릭하면, 현재 노출된 이미지는 사라지고 이전 또는 다음 이미지를 보여줍니다.(트렌지션은 선택)



# 코드 구조 관련 

- [ ] ES6 module 형태로 코드를 변경합니다.

  - `webpack` , `parcel` 과 같은 번들러를 사용하지 말아주세요.

  - 해당 코드 실행을 위해서는 `http-server` 모듈을(로컬 서버를 띄우는 다른 모듈도 사용 가능) 통해 `index.html` 을 띄워야 합니다.

- [x] API fetch 코드를 `async` , `await` 문을 이용하여 수정해주세요. 해당 코드들은 에러가 났을 경우를 대비해서 적절히 처리가 되어있어야 합니다.
- [x] **`필수` API 의 status code 에 따라 에러 메시지를 분리하여 작성해야 합니다. 아래는 예시입니다.**

```
  const request = async (url: string) => {     try {       const result = await fetch(url);       return result.json();     } catch (e) {       console.warn(e);     }   }    const api = {     fetchGif: keyword => {       return request(`${API_ENDPOINT}/api/gif/search?q=${keyword}`);     },     fetchGifAll: () => {       return request(`${API_ENDPOINT}/api/gif/all`);     }   };
```

- [ ] SearchResult 에 각 아이템을 클릭하는 이벤트를 Event Delegation 기법을 이용해 수정해주세요.

- [ ] 컴포넌트 내부의 함수들이나 Util 함수들을 작게 잘 나누어주세요.