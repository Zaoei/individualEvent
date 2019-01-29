//自调用函数————游戏对象
(() => {
    var that;

    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        that = this;
    }

    Game.prototype.init = function () {
        this.food.init(this.map);
        this.snake.init(this.map);
        this.runSnake(this.map);
        this.bindkey();
    }

    Game.prototype.runSnake = function (map) {
        const tiemId = setInterval(() => {
            this.snake.move(map);
            this.snake.init(map);
            const maxX = map.offsetWidth / this.snake.width;
            const minX = 0;
            const maxY = map.offsetHeight / this.snake.height;
            const minY = 0;
            let snakeX = this.snake.arr[0].x;
            let snakeY = this.snake.arr[0].y;
            if (snakeX >= maxX || minX > snakeX) {
                clearInterval(tiemId);
                alert("游戏结束！");
            }
            if (snakeY >= maxY || minY > snakeY) {
                clearInterval(tiemId);
                alert("游戏结束！");
            }
            var flag = this.eatFood(snakeX, snakeY);
            if (!flag) {
                clearInterval(tiemId);
                alert("游戏结束！");
            }
        }, 100);
    }

    Game.prototype.bindkey = function () {
        document.addEventListener("keydown", (e) => {
            switch (e.keyCode) {
                case 37:
                    if (this.snake.driection != "right") {
                        this.snake.driection = "left";
                    }
                    break;
                case 38:
                    if (this.snake.driection != "bottom") {
                        this.snake.driection = "top";
                    }
                    break;
                case 39:
                    if (this.snake.driection != "left") {
                        this.snake.driection = "right";
                    }
                    break;
                case 40:
                    if (this.snake.driection != "top") {
                        this.snake.driection = "bottom";
                    }
                    break;
                default:
                    break;
            }
        }, false)
    }

    Game.prototype.eatFood = function (snakeX, snakeY) {
        let foodX = this.food.x;
        let foodY = this.food.y;
        let a = {
            x: snakeX,
            y: snakeY,
            color: "#09b745"
        }
        if (snakeX == foodX && snakeY == foodY) {
            let last = this.snake.arr[this.snake.arr.length - 1]
            this.snake.arr.push({
                x: last.x,
                y: last.y,
                color: last.color,
            });
            this.food.init(this.map);
        }
        var flag = JSON.stringify(this.snake.arr).indexOf(JSON.stringify(a));

        if (flag != -1) {
            return false;
        } else {
            return true;
        }
    }

    window.Game = Game;
})();