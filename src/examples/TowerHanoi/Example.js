// The towerOfHanoi function takes four parameters: n is the number of disks, source is the starting tower, target is the destination tower, and auxiliary is the auxiliary tower.
export default function () {
	function towerOfHanoi(n, source, target, auxiliary) {
		let answer = "";
		const stack = [{ n, source, target, auxiliary }];

		while (stack.length > 0) {
			const { n, source, target, auxiliary } = stack.pop();

			if (n > 0) {
				stack.push({ n: n - 1, source: auxiliary, target, auxiliary: source });
				answer += `Move disk ${n} from ${source} to ${target}<br/>`;
				stack.push({ n: n - 1, source, target: auxiliary, auxiliary: target });
			}
		}

		return answer;
	}

	return towerOfHanoi(3, "A", "C", "B");
}
