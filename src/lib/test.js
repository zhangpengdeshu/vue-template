function getTargetArr () {
    const limit = 3;
    const arr = ['a', 'b', 'c', 'd','e', 'f']
    for (let i = 0; i < arr.length; i+= limit) {
        let newArr = []
        for (let j = 0; j < limit && j+i < arr.length; j++) {
            newArr.push(arr[i + j])
        }
        console.log('===>newArr', newArr)
    }
}

getTargetArr()