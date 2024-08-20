// The towerOfHanoi function takes four parameters: n is the number of disks, source is the starting tower, target is the destination tower, and auxiliary is the auxiliary tower.
export default function () {
	function generateSVG(towers, step) {
		const towerWidth = 100;
		const diskHeight = 20;
		const svgWidth = 3 * towerWidth;
		const svgHeight =
			towers.reduce(
				(max, tower) => Math.max(max, tower.length * diskHeight),
				0,
			) + 50;

		let svg = `<svg width="${svgWidth}" height="${svgHeight}" xmlns="http://www.w3.org/2000/svg">`;
		svg += `<text x="10" y="20" font-size="16">Step ${step}</text>`;

		towers.forEach((tower, towerIndex) => {
			const x = towerIndex * towerWidth + towerWidth / 2;
			svg += `<line x1="${x}" y1="30" x2="${x}" y2="${svgHeight}" stroke="black" />`;

			tower.forEach((disk, diskIndex) => {
				const diskWidth = disk * 20;
				const y = svgHeight - (diskIndex + 1) * diskHeight;
				svg += `<rect x="${x - diskWidth / 2}" y="${y}" width="${diskWidth}" height="${diskHeight}" fill="blue" stroke="black" />`;
			});
		});

		svg += `</svg></br>`;
		return svg;
	}

	function towerOfHanoi(n, source, target, auxiliary) {
		const towers = {
			A: Array.from({ length: n }, (_, i) => n - i),
			B: [],
			C: [],
		};
		const stack = [{ n, source, target, auxiliary }];
		let svgOutput = "";
		let step = 0;

		while (stack.length > 0) {
			const { n, source, target, auxiliary } = stack.pop();

			if (n === 1) {
				// Move the disk from source to target
				const disk = towers[source].pop();
				towers[target].push(disk);
				step++;
				svgOutput += generateSVG([towers.A, towers.B, towers.C], step);
			} else {
				stack.push({ n: n - 1, source: auxiliary, target, auxiliary: source });
				stack.push({ n: 1, source, target, auxiliary });
				stack.push({ n: n - 1, source, target: auxiliary, auxiliary: target });
			}
		}

		return svgOutput;
	}
	const n = 4; // Number of disks
	const svgResult = towerOfHanoi(n, "A", "C", "B");
	return `
        <div style="position: relative; width: 500px; height: 5000px;">   
        ${svgResult}
        </div>
    `;
}
