// 类型别名
type Name = string;
type NameResolver = () => string
type NameOrResolver = Name | NameResolver;

// function getName(Name);
// function getName(NameResolver);
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}

// 字符串字面量类型
type EventNames = 'click' | 'scroll' | 'mousemove';

function handleEvent(ele: Element, event: EventNames): void {
//    do something
}

handleEvent(document.getElementById('hello'), 'scroll');
// handleEvent(document.getElementById('world'), 'dbclick');

// 元组
let name1: [string, number] = ['one', 10];
let name2: [string, number];
name2[0] = 'other';
name2[1] = 200;

name2[0].slice(1);
name2[1].toFixed(2);

let name3: [string, number];
name3 = ['three', 20];

// 枚举
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat}

console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true

enum Days2 {Sum = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat}

// 常数枚举
const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];


























