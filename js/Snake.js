 //创建蛇
 (() => {
    let element = []

    function Snake(width = 20, height = 20, driection = "right") {
        this.width = width;
        this.height = height;
        this.driection = driection;
        this.arr = [{
                x: 3,
                y: 2,
                color: "#24792e"
            },
            {
                x: 2,
                y: 2,
                color: "#09b745"
            },
            {
                x: 1,
                y: 2,
                color: "#09b745"
            }
        ];
    }

    Snake.prototype.init = function (map) {
        remove();
        for (let i = 0; i < this.arr.length; i++) {
            let div = document.createElement("div");
            map.appendChild(div);
            div.style.width = this.width + "px";
            div.style.height = this.height + "px";
            div.style.position = "absolute";
            div.style.backgroundColor = this.arr[i].color;
            div.style.left = this.arr[i].x * this.width + "px";
            div.style.top = this.arr[i].y * this.height + "px";
            element.push(div);
        }
    };

    Snake.prototype.move = function (map) {
        const arrLength = this.arr.length - 1;
        for (var i = arrLength; i > 0; i--) {
            this.arr[i].x = this.arr[i - 1].x;
            this.arr[i].y = this.arr[i - 1].y;
        }

        switch (this.driection) {
            case "right":
                this.arr[0].x += 1;
                break;
            case "left":
                this.arr[0].x -= 1;
                break;
            case "top":
                this.arr[0].y -= 1;
                break;
            case "bottom":
                this.arr[0].y += 1;
                break;

            default:
                break;
        }
    }

    function remove() {
        const elementLength = element.length - 1;
        for (var i = elementLength; i >= 0; i--) {
            element[i].parentNode.removeChild(element[i]);
            element.splice(i, 1);
        }
    }

    window.Snake = Snake;
})();

