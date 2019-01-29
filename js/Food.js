 //创建食物
 (() => {
    //删除食物标记
    let element = [];

    function Food(width, height, color, x, y) {
        this.width = width || 20;
        this.height = height || 20;
        this.color = color || "#d21b56";
        this.x = x || 0;
        this.y = y || 0;
    }

    //初始化
    Food.prototype.init = function (map) {
        remove();
        let div = document.createElement("div");
        map.appendChild(div);
        div.style.width = this.width + "px";
        div.style.height = this.height + "px";
        div.style.position = "absolute";
        div.style.backgroundColor = this.color;
        let x = parseInt(Math.random() * (map.offsetWidth / this.width));
        let y = parseInt(Math.random() * (map.offsetHeight / this.height));
        this.x = x;
        this.y = y;
        div.style.left = x * this.width + "px";
        div.style.top = y * this.height + "px";
        element.push(div);
    }

    //删除食物
    function remove() {
        for (let i = 0; i < element.length; i++) {
            element[i].parentNode.removeChild(element[i]);
            element.splice(0, 1);
        }
    }
    window.Food = Food;
})();

