let nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
let str = ref('');
let verVal 

export const VerifyCode = (width:number,height:number) => {
    // 绘制验证码
    function drawCode() {
        const canvas = document.createElement('canvas') as HTMLCanvasElement    //创建画布

        var context = canvas.getContext("2d"); //canvas的画布2D上下文
        context!.fillStyle = "cornflowerblue"; //画布背景填充色
        context!.fillRect(0, 0, width, height); //设置画布坐标,大小
        context!.fillStyle = "white"; //设置字体颜色
        context!.font = "25px Arial"; //设置字体
        var rand = new Array();
        var x = new Array();
        var y = new Array();
        //生成4位随机数
        for (var i = 0; i < 4; i++) {
            rand[i] = nums[Math.floor(Math.random() * nums.length)] //从字符集中随机取一位
            x[i] = i * 20 + 10; //开始绘制文本的x坐标(相对于画布)
            y[i] = Math.random() * 20 + 20;
            context!.fillText(rand[i], x[i], y[i]); //写入文本
        }
        str.value = rand.join('').toUpperCase();  //验证码字符串
        //画3条随机线
        for (var i = 0; i < 3; i++) {
            drawline(canvas, context);
        }
        // 画30个随机点
        for (var i = 0; i < 30; i++) {
            drawDot(canvas, context);
        }

        return reactive({
            str, //验证码字符串
            url: canvas.toDataURL("image/png")   //画布图片路径
        }) 
    }

    // 生成随机线
    function drawline(canvas, context) {
        context.moveTo(Math.floor(Math.random() * width), Math.floor(Math.random() * height)); //随机线的起点x坐标是画布x坐标0位置，y坐标是画布高度的随机数
        context.lineTo(Math.floor(Math.random() * width), Math.floor(Math.random() * height)); //随机线的终点x坐标是画布宽度，y坐标是画布高度的随机数
        context.lineWidth = Math.random(); //随机线宽
        context.strokeStyle = 'rgba(50,50,50,0.3)'; //随机线描边属性
        context.stroke(); //描边，即起点描到终点
    }

    // 生成随机点(所谓画点其实就是画1px像素的线)
    function drawDot(canvas, context) {
        var px = Math.floor(Math.random() * width);
        var py = Math.floor(Math.random() * height);
        context.moveTo(px, py);
        context.lineTo(px + 1, py + 1);
        context.lineWidth = 0.2;
        context.stroke();
    }

    verVal = drawCode();

    return verVal   //将生成的str 和 url 返回
}