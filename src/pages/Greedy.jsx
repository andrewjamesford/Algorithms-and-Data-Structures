import { Sandpack } from "@codesandbox/sandpack-react";

import Example from "../examples/Greedy/Example.js?raw";
import index from "../examples/Greedy/index.js?raw";
import { sandPackOptions } from "../config/settings";

function Queues() {
  return (
    <div>
      <div className="pr-4">
        <h1 className="text-4xl">Greedy Algorithm</h1>
        <p className="py-4">
          A greedy algorithm is an algorithmic paradigm that builds up a
          solution piece by piece, always choosing the next piece that offers
          the most obvious and immediate benefit. It is used to solve
          optimisation problems.
        </p>
        <p className="py-4">
          Suppose we have a knapsack with a capacity of 50 kg and the following
          items with their respective weights and values:
        </p>
        <table className="table-auto border-2 border-collapse border-spacing-2 p-2">
          <thead className="[&_tr]:border-b">
            <tr className="border-b">
              <th className="p-2">Item</th>
              <th className="p-2">Weight (kg)</th>
              <th className="p-2">Value (USD)</th>
              <th className="p-2">Value/Weight (USD/kg)</th>
            </tr>
          </thead>
          <tbody className="[&_tr:last-child]:border-0">
            <tr className="border-b">
              <td className="p-2">A</td>
              <td className="p-2">10</td>
              <td className="p-2">60</td>
              <td className="p-2">6</td>
            </tr>
            <tr className="border-b">
              <td className="p-2">B</td>
              <td className="p-2">20</td>
              <td className="p-2">100</td>
              <td className="p-2">5</td>
            </tr>
            <tr className="border-b">
              <td className="p-2">C</td>
              <td className="p-2">30</td>
              <td className="p-2">120</td>
              <td className="p-2">4</td>
            </tr>
          </tbody>
        </table>
        <p className="py-4">
          The local optimal strategy is to choose the item that has maximum
          value vs weight ratio. This strategy also leads to a globally optimal
          solution because we are allowed to take fractions of an item
          https://www.guru99.com/fractional-knapsack-problem-greedy.html).
        </p>
        <p className="py-4">
          Here’s how we can solve this problem using a greedy algorithm:
        </p>
        <p className="py-4">
          1. Calculate the value-to-weight ratio for each item:
        </p>
        <table className="table-auto border-2 border-collapse border-spacing-2 p-2">
          <thead className="[&_tr]:border-b">
            <tr className="border-b">
              <th className="p-2">Item</th>
              <th className="p-2">Weight (kg)</th>
              <th className="p-2">Value (USD)</th>
              <th className="p-2">Value/Weight (USD/kg)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2">A</td>
              <td className="p-2">10</td>
              <td className="p-2">60</td>
              <td className="p-2">6</td>
            </tr>
            <tr className="border-b">
              <td className="p-2">B</td>
              <td className="p-2">20</td>
              <td className="p-2">100</td>
              <td className="p-2">5</td>
            </tr>
            <tr className="border-b">
              <td className="p-2">C</td>
              <td className="p-2">30</td>
              <td className="p-2">120</td>
              <td className="p-2">4</td>
            </tr>
          </tbody>
        </table>
        <p className="py-4">
          2. Sort the items in descending order of their value-to-weight ratio:
        </p>
        <table className="table-auto border-2 border-collapse border-spacing-2 p-2">
          <thead className="[&_tr]:border-b">
            <tr className="border-b">
              <th className="p-2">Item</th>
              <th className="p-2">Weight (kg)</th>
              <th className="p-2">Value (USD)</th>
              <th className="p-2">Value/Weight (USD/kg)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2">A</td>
              <td className="p-2">10</td>
              <td className="p-2">60</td>
              <td className="p-2">6</td>
            </tr>
            <tr className="border-b">
              <td className="p-2">B</td>
              <td className="p-2">20</td>
              <td className="p-2">100</td>
              <td className="p-2">5</td>
            </tr>
            <tr className="border-b">
              <td className="p-2">C</td>
              <td className="p-2">30</td>
              <td className="p-2">120</td>
              <td className="p-2">4</td>
            </tr>
          </tbody>
        </table>
        <p className="py-4">
          3. Starting from the first item, add items to the knapsack until it is
          full:
        </p>
        <table className="table-auto border-2 border-collapse border-spacing-2 p-2">
          <thead className="[&_tr]:border-b">
            <tr className="border-b">
              <th className="p-2">Item</th>
              <th className="p-2">Weight (kg)</th>
              <th className="p-2">Value (USD)</th>
              <th className="p-2">Value/Weight (USD/kg)</th>
              <th className="p-2">Fraction Added (kg)</th>
              <th className="p-2">Value Added (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2">A</td>
              <td className="p-2">10</td>
              <td className="p-2">60</td>
              <td className="p-2">6</td>
              <td className="p-2">10</td>
              <td className="p-2">60</td>
            </tr>
            <tr className="border-b">
              <td className="p-2">B</td>
              <td className="p-2">20</td>
              <td className="p-2">100</td>
              <td className="p-2">5</td>
              <td className="p-2">20</td>
              <td className="p-2">100</td>
            </tr>
            <tr className="border-b">
              <td className="p-2">C</td>
              <td className="p-2">30</td>
              <td className="p-2">120</td>
              <td className="p-2">4</td>
              <td className="p-2">20</td>
              <td className="p-2">80</td>
            </tr>
          </tbody>
        </table>
        <p className="py-4">
          Therefore, the optimal solution is to take{" "}
          <strong>10 kg of item A</strong>, <strong>20 kg of item B</strong>,
          and <strong>20 kg of item C</strong>. The total value of the items in
          the knapsack is <strong>240 USD</strong>.
        </p>
      </div>

      <Sandpack
        template="node"
        theme="dark"
        files={{
          "Example.js": Example,
          "index.js": index,
        }}
        customSetup={{
          entry: index,
        }}
        autoRun={true}
        options={sandPackOptions}
        showNavigation={true}
      />
    </div>
  );
}

export default Queues;
