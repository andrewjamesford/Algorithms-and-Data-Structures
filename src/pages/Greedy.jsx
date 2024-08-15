import { Sandpack } from "@codesandbox/sandpack-react";

import Example from "../examples/Greedy/Example.js?raw";
import index from "../examples/Greedy/index.js?raw";
import { sandPackOptions } from "../config/settings";

function Queues() {
  return (
    <div>
      <h1 className="text-4xl">Greedy Algorithm</h1>
      <p className="py-4">
        A greedy algorithm is an algorithmic paradigm that builds up a solution
        piece by piece, always choosing the next piece that offers the most
        obvious and immediate benefit. It is used to solve optimisation
        problems.
      </p>
      <p className="py-4">
        Suppose we have a knapsack with a capacity of 50 kg and the following
        items with their respective weights and values:
      </p>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Weight (kg)</th>
            <th>Value (USD)</th>
            <th>Value/Weight (USD/kg)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A</td>
            <td>10</td>
            <td>60</td>
            <td>6</td>
          </tr>
          <tr>
            <td>B</td>
            <td>20</td>
            <td>100</td>
            <td>5</td>
          </tr>
          <tr>
            <td>C</td>
            <td>30</td>
            <td>120</td>
            <td>4</td>
          </tr>
        </tbody>
      </table>
      <p className="py-4">
        The local optimal strategy is to choose the item that has maximum value
        vs weight ratio. This strategy also leads to a globally optimal solution
        because we are allowed to take fractions of an item
        https://www.guru99.com/fractional-knapsack-problem-greedy.html).
      </p>
      <p className="py-4">
        Here’s how we can solve this problem using a greedy algorithm:
      </p>
      <p className="py-4">
        1. Calculate the value-to-weight ratio for each item:
      </p>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Weight (kg)</th>
            <th>Value (USD)</th>
            <th>Value/Weight (USD/kg)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A</td>
            <td>10</td>
            <td>60</td>
            <td>6</td>
          </tr>
          <tr>
            <td>B</td>
            <td>20</td>
            <td>100</td>
            <td>5</td>
          </tr>
          <tr>
            <td>C</td>
            <td>30</td>
            <td>120</td>
            <td>4</td>
          </tr>
        </tbody>
      </table>
      <p className="py-4">
        2. Sort the items in descending order of their value-to-weight ratio:
      </p>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Weight (kg)</th>
            <th>Value (USD)</th>
            <th>Value/Weight (USD/kg)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A</td>
            <td>10</td>
            <td>60</td>
            <td>6</td>
          </tr>
          <tr>
            <td>B</td>
            <td>20</td>
            <td>100</td>
            <td>5</td>
          </tr>
          <tr>
            <td>C</td>
            <td>30</td>
            <td>120</td>
            <td>4</td>
          </tr>
        </tbody>
      </table>
      <p className="py-4">
        3. Starting from the first item, add items to the knapsack until it is
        full:
      </p>

      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Weight (kg)</th>
            <th>Value (USD)</th>
            <th>Value/Weight (USD/kg)</th>
            <th>Fraction Added (kg)</th>
            <th>Value Added (USD)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A</td>
            <td>10</td>
            <td>60</td>
            <td>6</td>
            <td>10</td>
            <td>60</td>
          </tr>
          <tr>
            <td>B</td>
            <td>20</td>
            <td>100</td>
            <td>5</td>
            <td>20</td>
            <td>100</td>
          </tr>
          <tr>
            <td>C</td>
            <td>30</td>
            <td>120</td>
            <td>4</td>
            <td>20</td>
            <td>80</td>
          </tr>
        </tbody>
      </table>

      <p className="py-4">
        Therefore, the optimal solution is to take{" "}
        <strong>10 kg of item A</strong>, <strong>20 kg of item B</strong>, and{" "}
        <strong>20 kg of item C</strong>. The total value of the items in the
        knapsack is <strong>240 USD</strong>.
      </p>

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
