function createTriangle(pyramidHeight, symbol) {
    symbol = symbol || "*";
    let triangle = '';
    if (symbol.length === 1) {
        for (let i = 1; i <= pyramidHeight; i++) {
          const spaces = ' '.repeat(pyramidHeight - i);
          triangle += spaces + symbol.repeat(i + i - 1) + '\n';
        };
        return triangle;
    }
    else {
       return 'Введите один символ';
    }
};

// let vertSize = prompt('Введите высоту пирамиды');
// let symbol = prompt('Введите символ');

console.log(createTriangle(10, "@"));

// module.exports = { createTriangle };