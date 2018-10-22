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

// 类
// 属性和方法
class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHi(): string {
        return `My name is ${this.name}`;
    }
}

let a = new Animal('Jack');
a.sayHi();

class Cat extends Animal {
    constructor(name: string) {
        super(name); // 调用父类的 constructor(name)
        console.log(this.name);
    }

    sayHi(): string {
        return 'Meow, ' + super.sayHi();
    }
}

let c = new Cat('Tom');
console.log(c.sayHi());

class Animal2 {
    constructor(name: string) {
        this.name = name;
    }

    get name() {
        return 'Jack';
    }

    set name(value) {
        console.log('setter: ' + value);
    }
}

let a2 = new Animal2('Kitty');
a2.name = 'Tom';
console.log(a2.name);

// 静态方法
class Animal3 {
    static isAnimal(a: any) {
        return a instanceof Animal3;
    }
}

let a3 = new Animal3();
Animal3.isAnimal(a);
// a.isAnimal(a);

// ES7 中类的用法
// 实例属性
class Animal4 {
    name = 'Jack';

    constructor() {
        //    ...
    }
}

let a4 = new Animal4();
console.log(a4.name);

// 静态属性
class Animal5 {
    static num = 42;

    constructor() {
        //    ...
    }
}

console.log(Animal5.num);

// 抽象类
abstract class Animal6 {
    public name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public abstract sayHi();
}

// let a6 = new Animal6('');

abstract class Animal7 {
    public name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public abstract sayHi();
}

class Cat7 extends Animal7 {
    public sayHi() {
        console.log(`Meow, My name is ${this.name}`);
    }
}

let cat = new Cat7('Tom');

// 类的类型
class Animal8 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHi(): string {
        return `My name is ${this.name}`;
    }
}

let a8: Animal8 = new Animal8('Jack');
console.log(a8.sayHi());

// 类实现接口
interface Alarm {
    alert();
}

class Door {
}

class SecurityDoor extends Door implements Alarm {
    alert() {
        console.log('SecurityDoor alert');
    }
}

class Car implements Alarm {
    alert() {
        console.log('Car alert');
    }
}

interface Light {
    lightOn();

    lightOff();
}

class Car2 implements Alarm, Light {
    alert() {
        console.log('Car alert');
    }

    lightOff() {
        console.log('Car light off');
    }

    lightOn() {
        console.log('Car light on');
    }
}

// 接口继承接口

interface LightableAlarm extends Alarm {
    lightOn();

    lightOff();
}

class Point {
    x: number;
    y: number;
}

// 接口继承类
interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};

// 混合类型
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    return source.search(subString) !== -1;
};

interface Counter {
    (start: number): string;

    interval: number;

    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) {
    };
    counter.interval = 123;
    counter.reset = function () {
    };
    return counter;
}

let c2 = getCounter();
c2(10);
c2.reset();
c2.interval = 5.0;

// 泛型
function createArray(length: number, value: any): Array<any> {
    let result = [];
    for (let i = 0; i < length; i++) {
        result.push(value);
    }
    return result;
}

createArray(3, 'x');

function createGenericArray<T>(length: number, value: T): Array<T> {
    let result = [];
    for (let i = 0; i < length; i++) {
        result.push(value);
    }
    return result;
}

createGenericArray<string>(3, 'x');

// 多个类型参数
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

swap<number, string>([7, 'seven']);

// 泛型约束
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

function copyFields<T extends U, U>(target: T, source: U): T {
    for (let id in source) {
        target[id] = (<T>source)[id];
    }
    return target;
}

let x = {a: 1, b: 2, c: 3, d: 4};

copyFields(x, {b: 10, d: 20});

// 泛型接口
interface SearchFunc2 {
    (source: string, substring: string): boolean;
}

let mySearch2: SearchFunc2;
mySearch2 = (source: string, substring: string): boolean => {
    return source.search(substring) !== -1;
};

interface CreateArrayFunc {
    <T>(length: number, value: T): Array<T>;
}

let createArray_: CreateArrayFunc;
createArray_ = <T>(length: number, value: T): Array<T> => {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result.push(value);
    }
    return result;
};

interface CreateArrayFunc__<T> {
    (length: number, value: T): Array<T>;
}

let createArray__: CreateArrayFunc__<any>;
createArray__ = <T>(length: number, value: T): Array<T> => {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result.push(value);
    }
    return result;
};

createArray__(3, 'x');

// 泛型类
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber: GenericNumber<number> = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = (x, y) => x + y;

// 泛型参数的默认类型
function createArrayDefault<T = string>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result.push(value);
    }
    return result;
}
