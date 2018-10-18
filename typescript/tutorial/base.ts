// ## 布尔值
let isDone: boolean = false;

// let createdByNewBoolean: boolean = new Boolean(1);
let createdByNewBoolean: Boolean = Boolean(1);

// ----------------------------------------------

// 数值
let decLiteral: number = 0;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNUmber: number = Infinity;

// ----------------------------------------------

// 字符串
let myName: string = 'Tom';
let myAge: number = 25;
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;

// ----------------------------------------------

// 空值
function alertName(): void {
    alert('My name is Tom.');
}

let unusable: void = undefined;

// ----------------------------------------------

// Null 和 Undefined
let u: undefined = undefined;
let n: null = null;

let num: number = undefined;
num = u;

let v: void;
// num = v;

// 任意值
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;

let anyThing: any = 'hello';
console.log(anyThing.myName);
// console.log(anyThing.myName.firstName);

// anyThing.setName('Jerry');
// anyThing.setName('Jerry').sayHello();
// anyThing.myName.setFirstName('Cat');
// 可以认为,声明一个变量为任意值之后,对它的任何操作,返回的内容的类型都是任意值.
// 变量如果在声明的时候,未指定其类型,那么它会被识别为任意值类型.

// 类型推论

// 联合类型

let myFavoriteNumber_: string | number;
myFavoriteNumber_ = 'seven';
myFavoriteNumber_ = 7;

// function getLength(something: string | number): number {
//     return something.length;
// }
// 只能访问此联合类型的所有类型里共有的属性或方法
function getString(something: string | number): string {
    return something.toString();
}

// 对象的类型——接口

interface Person {
    name: string;
    age: number;
}

// 赋值的时候,变量的形状必须和接口的形状保持一致.
let tom: Person = {
    name: 'Tom',
    age: 25
};

interface Person2 {
    name: string;
    age?: number;
}

let tom2: Person2 = {
    name: 'Tom'
};

interface Person3 {
    name: string;
    age?: number;

    [propName: string]: any;
}

// 使用 [propName: string] 定义了任意属性取 string 类型的值.
let tom3: Person3 = {
    name: 'Tom',
    gender: 'male',
};

// 需要注意的是,一旦定义了任意属性,那么确定属性和可选属性都必须是它的子属性
// interface Person4 {
//     name: string;
//     age?: number;
//     [propName: string]: string
// }
// 只读属性
interface Person5 {
    readonly id: number;
    name: string;
    age?: number;

    [propName: string]: any;
}

let tom5: Person5 = {
    id: 4234,
    name: 'Tom',
    gender: 'male'
};

// 数组的类型
let fibonacci: number[] = [1, 1, 2, 3, 5];
// 数组泛型
let fibonacci2: Array<number> = [1, 1, 2, 3, 5];

// 用接口表示数组
interface NumberArray {
    [index: number]: string;
}

let fibonacci3: NumberArray = ['1', '1', '2', '3', '5'];
// any 在数组中的应用
let list: any[] = ['Xcat Liu', 25, {website: 'http://xcatliu.com'}];

function sum() {
    let args: IArguments = arguments;
}

// 函数声明
function sum1(x, y) {
    return x + y;
}

let mySum = function (x, y) {
    return x + y;
};

function sum3(x: number, y: number): number {
    return x + y;
}

let mySum1 = function (x: number, y: number): number {
    return x + y;
};

let mySum2: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};

// 用接口定义函数的形状
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string): boolean {
    return source.search(subString) !== -1;
};

// 可选参数
function buildName(firstName: string, lastName?: string): string {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}

let tomcat = buildName('tom', 'cat');
let tom4 = buildName('tom');

// 参数默认值
// TypeScript 会将添加了默认值的参数识别为可选参数
function buildName2(firstName: string = 'Tom', lastName: string): string {
    return firstName + ' ' + lastName;
}

// 此时就不受「可选参数必须接在必需参数后面」的限制了：
let tomcat2 = buildName2('Tom', 'cat');
let cat2 = buildName2(undefined, 'cat');

// 剩余参数
function push(array: any[], ...items: any[]) {
    items.forEach(function (item) {
        array.push(item);
    });
}

let a: any[] = [];
push(a, 1, 2, 3);

// 重载
// function reverse(x: number | string): number | string {
//     if (typeof x === "number") {
//         return Number(x.toString().split('').reverse().join(''))
//     } else if (typeof x === "string") {
//         return x.split('').reverse().join('');
//     }
// }

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

function getLength2(something: string | number) {
    if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}
