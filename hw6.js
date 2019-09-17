// ************************* REQUIRED ******************************
var buttonStatus = true;
var arrTag = ['section', 'article', 'p'];
var style = document.createElement('style');
style.textContent = `
                    .section{
                        padding: 20px;
                        border: 1px solid red;
                        width:200px;
                        height:200px;
                    }
                    .article{
                        padding: 20px;
                        border: 2px solid green;
                        width:120px;
                        height:120px;
                    }
                    .p{
                        padding: 10px;
                        border: 3px solid blue;
                        width:80px;
                        height:80px;
                    }
                    .changeBack{
                        background-color: blue;
                    }`
document.head.appendChild(style);

getStyle.onclick = (event) => {
    var tag = required;
    var i = 0;
    if (buttonStatus) {
        for (item of arrTag) {
            tag = tag.appendChild(document.createElement(item))
            tag.className = item;
        }
        buttonStatus = false;
        getStyle.textContent = 'Удалить стили'
    }
    else {
        buttonStatus = true;
        getStyle.textContent = 'Применить стили'
        document.getElementsByTagName(arrTag[0])[0].remove();
    }
};
// ******************* ADDITIONAL #1 *******************************************

var tag = [
    {
        localName: 'section',
        className: 'section',
        innerHTML: `<p> HELLO WORLD!!! I am here!!! meybe...</p>`,
        onmouseenter: function (event) {
            this.classList.add('changeBack')
        },
        onmouseleave: function (event) {
            this.classList.remove('changeBack')
        }
    },
    {
        localName: 'article',
        className: 'article',
        innerHTML: `<p> What is going on here?</p>`,
        onmouseenter: function (event) {
            this.classList.add('changeBack')
        },
        onmouseleave: function (event) {
            this.classList.remove('changeBack')
        }
    },
    {
        localName: 'p',
        className: 'p',
        innerHTML: ` I am piece of text`,
        onmouseenter: function (event) {
            this.classList.add('changeBack')
        },
        onmouseleave: function (event) {
            this.classList.remove('changeBack')
        }
    },
]
for (var elem of tag){
    let newTag = document.createElement(elem.localName);
    for (var key in elem) newTag[key] = elem[key];

    additonalOne.appendChild(newTag)
}
