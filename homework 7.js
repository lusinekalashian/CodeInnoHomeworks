const grid1 = [
    [".", ".", ".", "1", "4", ".", ".", "2", "."],
    [".", ".", "6", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", "1", ".", ".", ".", ".", ".", "."],
    [".", "6", "7", ".", ".", ".", ".", ".", "9"],
    [".", ".", ".", ".", ".", ".", "8", "1", "."],
    [".", "3", ".", ".", ".", ".", ".", ".", "6"],
    [".", ".", ".", ".", ".", "7", ".", ".", "."],
    [".", ".", ".", "5", ".", ".", ".", "7", "."],
];
const grid2 = [
    [".", ".", ".", ".", "2", ".", ".", "9", "."],
    [".", ".", ".", ".", "6", ".", ".", ".", "."],
    ["7", "1", ".", ".", "7", "5", ".", ".", "."],
    [".", "7", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", "8", "3", ".", ".", "."],
    [".", ".", "8", ".", ".", "7", ".", "6", "."],
    [".", ".", ".", ".", ".", "2", ".", ".", "."],
    [".", "1", ".", "2", ".", ".", ".", ".", "."],
    [".", "2", ".", ".", "3", ".", ".", ".", "."],
];

function solution(grid) {
    let newArr1 = [];
    let newArr2 = [];

    let arr1 = [];
    let arr2 = [];
    let arr3 = [];

    for (let i = 0;i < grid.length;++i){
        newArr1 = [];
        newArr2 = [];
        if(i === 3 || i === 6)
        {
            arr1 = [];
            arr2 = [];
            arr3 = [];
        }
        for (let j = 0;j < grid[i].length;++j){
            if (grid[i][j] !== ".")
            {
                if(j < 3)
                {
                    if(arr1.includes(grid[i][j])) return false;
                    else arr1.unshift(grid[i][j]);
                }
                if(j > 2 && j < 6)
                {
                    if(arr2.includes(grid[i][j])) return false;
                    else arr2.unshift(grid[i][j]);
                }
                if(j > 5)
                {
                    if(arr3.includes(grid[i][j])) return false;
                    else arr3.unshift(grid[i][j]);
                }

                if(newArr1.includes(grid[i][j])) return false;
                else newArr1.unshift(grid[i][j]);
            }

            if (grid[j][i] !== ".")
            {
                if(newArr2.includes(grid[j][i])) return false;
                else newArr2.unshift(grid[j][i]);
            }
        }

    }

    return true;
}

console.log(solution(grid1));
console.log(solution(grid2));