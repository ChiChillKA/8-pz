let o=

[
    {
        n:'Василий',
        s:'Васильев'
    }
    ,
    {
        n:'Иван',
        s:'Иванов'
    }
    ,
    {
        n:'Пётр',
        s:'Петров'
    }
]

function fov

(
    o,k,v
    )

{

const r=

[

]

for(

    let i=0;i<o.length;i++

    )

{

const obj=o

[
    i
]

if
(
    obj

    [
        k
    ]

    ===v

    )

    r.push

    (
        obj
        )

}

return r

}

const fay=fov

(
    o,'n','Иван'
    )

console.log

(
    fay
    )