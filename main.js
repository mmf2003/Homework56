console.log("#55. JavaScript homework example file");

// ========================================
// #1. Async Operation Demo
// ========================================

function asyncOperationDemo(callback) {
    console.log("Перший виклик");

    process.nextTick(() => {
        console.log("Виконано nextTick");
        callback("nextTick");
    });

    setImmediate(() => {
        console.log("Виконано setImmediate");
        callback("setImmediate");
    });

    setTimeout(() => {
        console.log("Виконано setTimeout");
        callback("setTimeout");
    }, 0);

    console.log("Останній виклик");
}

// ========================================
// Example Usage
// ========================================

asyncOperationDemo((operation) => {
    console.log(`Завершено виконання: ${operation}`);
});

export { asyncOperationDemo };
