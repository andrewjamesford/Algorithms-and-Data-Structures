export default function () {
    function fractionalKnapsack(capacity, weights, values) {
        let n = values.length;
        let valuePerWeight = [];
        let knapsack = [];

        // Calculate the value-to-weight ratio for each item
        for (let i = 0; i < n; i++) {
            valuePerWeight[i] = { index: i, value: values[i] / weights[i] };
        }

        // Sort the items in descending order of their value-to-weight ratio
        valuePerWeight.sort((a, b) => b.value - a.value);

        // Starting from the first item, add items to the knapsack until it is full
        let weight = 0;
        for (let i = 0; i < n; i++) {
            let itemIndex = valuePerWeight[i].index;
            if (weight + weights[itemIndex] <= capacity) {
                knapsack[itemIndex] = 1;
                weight += weights[itemIndex];
            } else {
                knapsack[itemIndex] = (capacity - weight) / weights[itemIndex];
                weight = capacity;
                break;
            }
        }

        // Calculate the total value of the items in the knapsack
        let totalValue = 0;
        for (let i = 0; i < n; i++) {
            if (knapsack[i]) {
                totalValue += knapsack[i] * values[i];
            }
        }

        return totalValue;
    }

    // Example usage
    let capacity = 50;
    let weights = [10, 20, 30];
    let values = [60, 100, 120];
    let totalValue = fractionalKnapsack(capacity, weights, values);
    return (`The maximum value that can be obtained is $${totalValue}.`);

}