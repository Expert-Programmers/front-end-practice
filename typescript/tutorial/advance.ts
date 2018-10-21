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









