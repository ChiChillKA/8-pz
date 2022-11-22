const sct=document.querySelector

(
    '.select'
    )

const arr=

[
    {
        v: "Лапша",
        l: 'Лапша',
    },

    {
        v:"Роллы",
        l:"Роллы",
    },

    {
        v:"Пицца",
        l:"Пицца",
    }
]

const sel=document.createElement

(
    'select'
    )

for(
    let 
    [
        inx,
         itm
        ] 
        of arr.entries()
        ) 

        {
    let el=document.createElement
    (
        'option'
        )
    inx==0?el.setAttribute
    (
        'selected',
        ''
        )
         :false
    el.v=itm.v
    el.innerHTML=itm.l

   sel.appendChild
   (
    el
    )
    console.log
    (
        inx,
         itm
         )
}
sct.appendChild
(
    sel
    )