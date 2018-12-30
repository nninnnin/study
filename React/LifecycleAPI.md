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
```
componentWillMount(){
}
```
이 API는 원래 주로 브라우저가 아닌 환경에서 (서버사이드)도 호출하는 용도로 사용했었는데, 이 API가 더 이상 필요하지 않게 되어 리액트 16.3에서는 해당 API가 deprecated되었다..고한다. 16.3이후부터는 UNSAFE_componentWillMount()라는 이름으로 사용된다고 한다.
기존에 이 API에서 처리하던 것들을 위에 있는 constructor와 아래에 있는 componentDidMount에서 충분히 처리할 수 있다.
- componentDidMount
```javascript
componentDidMount(){
    //외부 라이브러리 연동:D3, masonry, etc
    //컴포넌트에서 필요한 데이터 요청 : Ajax, GraphQL, etc
    //DOM에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
}
```
이 API는 여러분의 컴포넌트가 화면에 나타나게 되었을 때 호출됩니다. 여기에서는 주로 D3, masonry처럼 DOM을 사용해야하는 외부 라이브러리 연동을 하거나, 해당 컴포넌트에서 필요로하는 데이터를 요청하기 위해 axios, fetch등을 통하여 ajax요청을 하거나, DOM의 속성을 읽거나 직접 변경하는 작업을 진행합니다.

그러니까 component가 화면에 그려진 이후에 그 안에 넣어줄 데이터를 가져오는 것을 수행해주는 함수라고 보면 될 것 같다. **second HTTP request!**



**컴포넌트 업데이트**
컴포넌트 업데이트는 props나 state의 변화에 따라 결정됩니다. 업데이트 전후에 어떤 API들이 호출되었는지 살펴보자

- componentWillReceiveProps
```javascript
    componentWillReceiveProps(nextProps){
        //this.props는 아직 바뀌지 않은 상태
    }
```
이 API는 컴포넌트가 새로운 props를 받게 되었을 때 호출됩니다. 이 안에서는 주로 state가 props에 따라 변해야 하는 로직을 작성합니다. 새로 받게될 props는 nextProps로 조회할 수 있으며, 이 때 this.props를 조회하면 업데이트 되기 전의 API이니 참고하세요. 이 API 또한 16.3부터 deprecate됩니다..UNSAFE_componentWillReceiveProps() 라는 이름으로 사용되고, 상황에 따라 새로운 API인 getDerivedStateFromProps로 대체될 수 있답니다.

- [new!!]static getDerivedStateFromProps()
요게 16.3이후에 만들어진 라이프사이클 API인데, 이 API는 props로 받아온 값을 state로 동기화 하는 작업을 해줘야 하는 경우에 사용된다.
```javascript
static getDerivedStateFromProps(nextProps,prevState){
    //여기서는 setState를 하는 것이 아니라 특정 props가 바뀔 때 이에 반응하여 변화하도록 설정하고 싶은 state값을 리턴하는 형태로 사용됩니다.
    if(nextProps.value !== prevState.value){
        return {value:nextProps.value};//바뀐 props의 값으로 value라는 state값을 변화시킨다
    }
    return null; //null을 리턴하면 따로 없데이트 할 것은 없다는 의미
}
```

- shouldComponentUpdate

이 API는 컴포넌트를 최적화하는 작업에서 매우 유용하게 사용됩니다.
리액트에서는 변화가 발생하는 부분만 업데이트를 해주기 떄문에 좋은 성능을 발휘할 수 있다고 배웠는데, 변화가 발생한 부분만 감지해내기 위해서는 Virtual DOM에 한번 그려줘야한다.

즉, 현재 컴포넌트의 상태가 업데이트되지 않아도 부모 컴포넌트가 리렌더링되면 자식 컴포넌트들도 리렌더링된다. 여기서 렌더링된다는 것은 render()함수가 호출된다는 의미이다.

변화가 없으면 DOM조작은 하지 않게 된다. 그저 Virtual DOM에만 렌더링 할 입니다. 이 작업은 그렇게 부하가 많은 작업은 아니지만, 컴포넌트가 무수히 많이 렌더링된다면..? CPU 리소스를 사용하는 것..

쓸데없이 낭비되고 있는 CPU처리량을 줄여주기 위해서 우리는 Virtual DOM에 리렌더링 하는것도, 불필요한 경우엔 방지하기 위해서 우리는 shouldComponentUpdate를 작성한다.

이 함수는 기본적으로 true를 반환한다. 우리가 따로 작성을 해주어서 조건에 따라 false를 반환하면 해당 조건에는 render 함수를 호출하지 않는다.

그러니까 정리하자면, 위에서 말했듯 컴포넌트의 **최적화**에 필요한 것이라고 이해할 수 있다.

```javascript
shouldComponentUpdate(nextProps, nextState){
//return false는 업데이트를 안하고
//return this.props.checked !== nextProps.checked
return true;
}
```

- componentWillUpdate

```javascript
componentWillUpdate(nextProps,nextState){

}
```
이 API는 shouldComponentUpdate에서 true를 반환했을때에만 호출됩니다. 만약에 false를 반환했었다면 이 함수는 호출되지 않습니다. 여기에서는 주로 애니메이션 효과를 초기화하거나, 이벤트 리스너를 없애는 작업을 합니다.

shouldComponentUpdate -> componentWillUpdate

기억합시다.\
이 함수가 호출되고 난 다음에는 render()가 호출됩니다.
이 API 또한 16.3이후 deprecate 됩니다;
기존의 기능은 getSnapshotBeforeUpdate로 대체될 수 있습니다..

- [new!!]getSnapshotBeforeUpdate()

이 API가 발생하는 시점은 다음과 같습니다.  
    1. render()
    2. **getSnapshotBeforeUpdate()**
    3. 실제 DOM에 변화 발생
    4. componentDidUpdate  
이 API를 통해서, DOM변화가 일어나기 **직전**의 DOM상태를 가져오고, 여기서 리턴하는 값은 componentDidUpdate에서 3번째 파라미터로 받아올 수 있게 됩니다.

```javascript
getSnapshotBeforeUpdate(prevProps,prevState){
//DOM업데이트가 일어나기 직전의 시점입니다.
//새 데이터가 상단에 추가되어도 스크롤바를 유지해보겠습니다.
//scrollHeght는 전후를 비교해서 스크롤 위치를 설정하기 위함이고,
//scrollTop은, 이 기능이 크롬에 이미 구현이 되어있는데,
//이미 구현이 되어있다면 처리하지 않도록 하기 위함입니다.
    if(prevState.array!==this.state.array){//데이터가 추가되었다면,
        const{
            scrollTop, scrollHeight
        } = this.list;
        //여기서 반환하는 값은 componentDidMount에서 snapshot값으로 받아올 수 있습니다
        return{
            scrollTop, scrollHeight
        };
    }
}

componentDidUpdate(prevProps, prevState, snapshot){
    if(snapshot){
        const{scrollTop} = this.list;
        if (scrollTop !== snapshot.scrollTop) return;//기능이 이미 구현되어 있다면 처리하지 않습니다

        const diff = this.list.scrollHeight - snapshot.scrollHeight;
        this.list.scrollTop += diff;
    }
}
```

- componentDidUpdate()
```javascript
componentDidUpdate(prevProps, prevState, snapshot){
}
```
이 API는 컴포넌트에서 render()를 호출하고 난 다음에 발생하게 됩니다. 이 시점에선 this.props와 this.state가 바뀌어 있습니다. 그리고 파라미터를 통해 이전의 값인 prevProps와 prevState를 조회할 수 있습니다. 그리고, getSnapshotBeforeUpdate에서 반환한 snapshot값은 세번째 값으로 받아옵니다.


**컴포넌트 제거**
컴포넌트가 더 이상 필요하지 않게 되면 단 하나의 API가 호출됩니다
- componentWillUnmount

```javascript
componentWillUnmount(){
    //이벤트, setTimeout, 외부 라이브러리 인스턴스 제거
}
```

여기서는 주로 등록했었던 이벤트를 제거하고, 만약에 setTimeout을 걸어놓은 것이 있다면 clearTimeout을 통하여 제거합니다. 추가적으로, 외부 라이브러리를 사용한게 있고 해당 라이브러리에 dispose 기능이 있다면 여기에서 호출해주시면 됩니다.

컴포넌트 제거에 대한 다른 문서 참조

In the unmounting phase, we have just one lifecycle method to help us out : componentWillUnMount. componentWillUnmount is the last function to be called immediately before the component is removed from the DOM. It is generally used to perform **clean-up** for any **DOM-elements** or **timers** created in componentWIllMount.

At a picnic, componentWillUnmount corresponds to just before you pick up your picnic blanket. You would need to clean up all the food and drinks you've set on the blanket first or they'd spill everywhere! You'd also have to shut down your radio. After that's all done you would be free to pick up your picnic blanket and put it back in the bag safely.

For a React component, this is where you would clean up any of those long running processes that you set up in componentDidMount. In the above data fetching example, all we would have to do is clear the interval so that the weather API would no longer get called every 15 seconds

Summary
The mounting and unmounting steps are important for ensuring that the React component gets set up and initialized nicely and that when it gets unmounted, it leaves the space it occupied just as it was before : nice and tidy.

In the mounting step, we can set up any special requirements we may have for that particular component : fetch some data, start counters etc. It is extremely important to clean up all the things we set up in the unmounting stage in componentWillUnmount, as not doing so may lead to some pretty nasty consequences - even as bad as crashing your carefully crafted application!


**직접 사용해보기**

**컴포넌트에 에러 발생**

**정리**

*이 문서는 https://velopert.com/3631 기반으로 작성되었습니다*