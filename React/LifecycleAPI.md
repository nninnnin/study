***LifeCycle API에 대해서 알아봅시다.***

이 API는 컴포넌트가 여러분의 브라우저에서 나타날 때, 사라질 떄, 그리고 업데이트 될 때 호출되는 API입니다.

**컴포넌트 초기 생성**
컴포넌트가 브라우저에 나타나기 전, 후에 호출되는 API들이 있다.

- constructor
  ```
  constructor(props){
      super(props);
  }
  ```
- componentWillMount
- componentDidMount

**컴포넌트 업데이트**
- componentWillReceiveProps
- [new!!]static getDerivedStateFromProps()
- shouldComponentUpdate
- componentWillUpdate
- [new!!]getSnapshotBeforeUpdate()
- componentDidUpdate

**컴포넌트 제거**
컴포넌트가 더 이상 필요하지 않게 되면 단 하나의 API가 호출됩니다
- componentWillUnmount

**직접 사용해보기**

**컴포넌트에 에러 발생**

**정리**

*이 문서는 https://velopert.com/3631 기반으로 작성되었습니다*