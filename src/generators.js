//Creating generators
function* stationariesGenerator() {
    yield 'Book';
    yield 'Pen';
    yield 'Pencil';
    return 'Drawing Sheet';
}

const stationaries = stationariesGenerator()
console.log(stationaries.next());
console.log(stationaries.next());
console.log(stationaries.next());
console.log(stationaries.next());
console.log(stationaries.next());

//Generator as Iterator
function* generatorAsIterator(names) {
    for (let i = 0; i < names.length; i++) {
        yield names[i];
    }
}
const iterator = generatorAsIterator(['Joey', 'Rachel', 'Ross', 'Monica']);
let count = iterator.next();
while (!count.done) {
    console.log(count);
    count = iterator.next();
}