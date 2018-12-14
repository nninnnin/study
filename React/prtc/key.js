const numbers = [1,2,3,4,5];

const listItems = numbers.map((number)=>{<li key={number.toString()}>{number*2}</li>});



//The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys.

const todoItems = todos.map((todo)=><li key={todo.id}>{todo.text}</li>);

//When you don't have stable IDs for rendered items, you may use the item index as a key as a last resort

const todoItems = todos.map((todo,index)=>
    <li key={index}>
        {todo.text}
    </li>
);


//We don't recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state. Check out Robin Pokorny's article for an in-depth explanation on the negative impacts of using an index as a key. If you choose not to assign an explicit key to list items then React will default to using indexes as keys.

//Extracting Components with Keys

//Keys only make sense in the context of the surrounding array.


//For example, if you extract a ListItem component, you should keep the key on the <ListItem/> elements in the array rather than on the <li> element in the ListItem itself.

//Example:Incorrect Key Usage

function ListItem(props){
    const value=props.value;

    return(
        //Wrong! There is no need to specify the key here:
        <li key={value.toString()}>
            {value}
        </li>
    );
}

function NumberList(props){
    const numbers = props.numbers;
    const listItems = numbers.map(
        (number)=> <ListItem value={number}/>
    );
    return(
        <ul>
            {listItems}
        </ul>
    );
}

//Correct Key Usage

function ListItem(props){
    //Correct! There is no need to specify the key here:
    return <li>{props.value}</li>;
}

function NumberList(props){
    const numbers = props.numbers;
    const listItems = numbers.map((number)=>
    //Correct! Key should be specified inside the array.
    <ListItem key={number.toString()}
                value={number}/>
    );
}

//Keys Must Only Be Unique Among Siblings
//Keys used within arrays should be unique among their siblings. However, they don't need to be globally unique. We can use the same keys when we produce two different arrays:

function Blog(props){//그럼 여기서 props에 posts가 들어가게 되고
    const sidebar=(
        <ul>
            {props.posts.map((post)=> //걔넬 어떻게 렌더링할거냐면 아래처럼
                <li key={post.id}>  {/*자 이렇게 key에는 post의 id를 넣어주고*/}
                    {post.title}
                </li>
                )}
        </ul>
    );//근데 도대체 이렇게 sidebar = (); 는 어떻게 된 문법인지?
    const content=props.posts.map((post)=> //얘는 map을 실행해서 리턴되는 값을 content에 넣어주지만..
        <div key={post.id}> {/*얘도 key에는 post.id를 넣어주었다. sidebar와 content는 서로 다른 컴포넌트이지만 같은 key값을 사용할 수 있다. 그러니까 위에서 말했듯, 이 Key는 걔네끼리는 unique해야 하지만 global하게는 unique하지 않아도 괜찮다.*/}
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
        );

    return(
        <div>
            {sidebar}
            <hr/>
            {content}
        </div>
    );
}



const posts=[
    {id: 1, title:'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

ReactDOM.render(
    <Blog posts={posts}/>, //Blog컴포넌트에 posts라는 property (prop)를에, posts를 담아서 보낸다.
    documnet.getElementById('root')
);


//Keys serve as a hint to React but they don't get passed to your components.
//If you need the same value in your component, pass it explicitly as a prop with a different name:

const content = posts.map((post)=>
    <Post
        key={post.id}
        id={post.id}
        title={post.title}/>
);
//With the example above, the Post component can read props.id but not props.key
//아..그러니까 아예 props에서 key로 넘긴건 컴포넌트에서 읽을 수 없고, 그 키값과 똑같은 값을 쓰고싶다면 넘길때 똑같은 값(여기서는 post.id)에다가 다른 이름(여기서는 id)를 매겨서 두개를 넘기고 key가 아닌걸 니가 써라, 라는 뜻이구나.

//정리하자면 key는 리액트가 참고하기 위해 쓰는 값이고, 사용자가 component에서 읽어서 사용할 수 없는 값이다.
//따라서 key로 넘긴 값을 컴포넌트에서 사용하고(읽고) 싶다면, props로 넘길 때 key로 넘기는 값과 똑같은 값을 다른 이름으로 넘겨라.




//Embedding map() in JSX

//In the examples above we declared a separate listItems variable and included it in JSX
//바로 아래처럼
function NumberList(props){//함수형 컴포넌트..매개변수로 props를 받는다. 이름은 NumberList
    const numbers = props.numbers;
    const listItems = numbers.map((number)=>
        <ListItem key={number.toString()}
                    value={number}/>
    );
    return(
        <ul>
            {listItems}
        </ul>
    );
}

//JSX allows embedding any expression in curly braces so we could inline the map() result:

function NumberList(props){
    const numbers = props.numbers;
    return(
        <ul>
            {numbers.map((number)=>{
                <ListItem key={number.toString}
                        value={number}/>
            })}
        </ul>
    );
}

//Sometimes this results clearer code, but this style can also be abused. Like in JavaScript, it is up to you to decide whether it is worth extracting a variable for readibility. Keep in mind that if the map() body is too nested, it might be a good time to extract a component.


