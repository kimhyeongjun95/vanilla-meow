import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'
import ImageInfo from './ImageInfo.js'
import store from './storage.js'
import api from './api.js'

export default class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target;

    this.searchInput = new SearchInput({
      $target,
      onSearch: keyword => {
        // 로딩중
        this.setState({ data: null, loading: false })
        api.fetchCats(keyword)
          .then(({ data }) => this.setState({data, loading: true}))
      },
      onClick: () => {
        api.randomCats().then(({data}) => this.setState({data, loading:true }))
      }
    });

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: image => {
        api.fetchCatsById(image.id)
          .then(({ data }) => {
            this.imageInfo.setState({
              visible: true,
              image: data
          })
        });
      }
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null
      }
    });

    this.recentSearch();
  }

  setState(nextData) {
    console.log(this);
    this.data = nextData;
    this.searchResult.setState(nextData);
  }

  recentSearch() {
    console.log(store.getItem())
    if (store.getItem()) {
      this.searchInput.onSearch(store.getItem());
    }
  }
}
