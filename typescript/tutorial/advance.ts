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
