// let MyDom =
//     (<div>
//         <div>Hello</div>
//         <div>World</div>
//     </div>);
// ReactDOM.render(MyDom, document.getElementById("app"));

let text = "Hello"
let num = 1006;

function fun(obj) {
    // return "Name:" + obj.name + " | Age:" + obj.age;
    return `Name: ${obj.name} | Age: ${obj.age}`;
}
let user = {
    name: "Alex",
    age: 18
}

let myDom =
    <div>
        <div>{text}</div>
        <div>{num * 2}</div>
        <div>{fun(user)}</div>

    </div>;
ReactDOM.render(myDom, document.getElementById("app"));