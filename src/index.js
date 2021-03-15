// You should implement your task here.

module.exports = function towelSort(matrix) {

    if (!matrix) return [];
    let res = [];

    for (let i = 0; i < matrix.length; i++) {

        if (i % 2 !==1) {
            for (let j = 0; j < matrix[i].length; j++) {
                res.push(matrix[i][j]);
            }

        } else {
            for (let j = matrix[i].length-1; j >= 0; j--) {
                res.push(matrix[i][j]);
            }
        }
    }
    return res;
}
