
export default function () {

    // The towerOfHanoi function takes four parameters: n is the number of disks, source is the starting tower, target is the destination tower, and auxiliary is the auxiliary tower.

    function towerOfHanoi(n, source, target, auxiliary) {
        let answer = '';
        if (n > 0) {
            towerOfHanoi(n - 1, source, auxiliary, target);
            answer = answer + `Move disk ${n} from ${source} to ${target}`;
            towerOfHanoi(n - 1, auxiliary, target, source);
        }

        return answer;
    };

    towerOfHanoi(3, 'A', 'C', 'B');



}
















// Output:
// Move disk 1 from A to C
// Move disk 2 from A to B
// Move disk 1 from C to B
// Move disk 3 from A to C
// Move disk 1 from B to A
// Move disk 2 from B to C
// Move disk 1 from A to C