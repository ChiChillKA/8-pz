let arr = [
    {
        value: "Значение1",
        label: "Значение 1",
    },
    {
        value: "Значение2",
        label: "Значение 2",
    },
    {
        value: "Значение3",
        label: "Значение 3",
    },
    {
        value: "Значение4",
        label: "Значение 4",
    },
    {
        value: "Значение5",
        label: "Значение 5",
    },
];

function createSelect(arr, str) {
    let select = document.createElement("select");
    if (Array.isArray(arr)) {
        if (typeof arr[0] === "number" || typeof arr[0] === "string")
            for (let value of arr) {
                let isSelected = str === value;
                let option = new Option(value, value, isSelected, isSelected);
                select.options.add(option);
            }
        else
            for (let e of arr) {
                let value = e.value;
                let isSelected = str === value;
                let option = new Option(e.label, value, isSelected, isSelected);
                select.options.add(option);
            }
    }
    else {
        for (let e of Object.entries(arr)) {
            let value = e[0];
            let isSelected = str === value;
            let option = new Option(e[1], value, isSelected, isSelected);
            select.options.add(option);
        }
    }
    return select;
}

document.body.append(createSelect(arr));
let arr2 = [1, "value2", "value3", 4, 5];
document.body.append(createSelect(arr2));
let obj = {
    value1: 'Значение 1',
    value2: 'Значение 2',
    value3: 'Значение 3', value4: 'Значение 4',
    value5: 'Значение 5'
};
document.body.append(createSelect(obj));