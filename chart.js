
//var row=['Name','aaa','bbb','cck','dd','eee','fffd','mek','ll','jj','ee','ree'];
//var column=['Mark',20,30,152,70,160,80,192];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

let columnchart=function(data1,data2){
    let row=data1;
    let column=data2;
    let build=`<canvas name="canvas" id="myCanvas" width="${((column.length-1)*50)+110}" height="410px" style="background-color:rgb(212, 212, 255);margin: 50px 50px;border-radius:15px"></canvas>`
    document.querySelector("body").innerHTML=build;
    let canvas = document.getElementById('myCanvas');
    let context = canvas.getContext('2d');

    let x=80;

    let max = column[1];
    for (let i = 2; i < column.length; i++) {
    if (column[i] > max) {
        max = column[i];
    }
    }
    let cmax=0;
    let citer=0;
    if(max<=5){
        while(max>cmax){
            cmax+=5;
            citer+=1;
        }
    }
    else{
        while(max>cmax){
            cmax+=10;
            citer+=2;
        }
    }
    
    
    let co=cmax;

    async function drawbar(a,b,c,d,e,f){
        let col="#" + ((1<<24)*Math.random() | 0).toString(16);
        let angle=359;
        for(let i=d-2;i>=0;i-=2){
            context.fillStyle = col;
            context.fillRect(a, angle-=2, c, 2);
            await sleep(3);
        }
        context.fillStyle = "black";
        context.textAlign = "center";
        context.fillText(e, a+15, 375);
        context.fillText(f, a+15, b-5);
    }
    async function createchart(){  
        let wid=((column.length-1)*50)+100;
        for(var i=60;i<=300;i+=60){
            // context.beginPath();
            context.moveTo(x, i);
            context.lineTo(wid-20, i);
            context.textAlign = "end"; 
            context.strokeStyle = "#b3b3b3";
            context.fillText(co, x-10, i);
            co-=citer;
            // set col
            context.stroke();
        }

        context.beginPath();
        context.moveTo(x, i);
        context.lineTo(wid-20, i);
        context.textAlign = "end"; 
        context.fillText(co, x-10, i);
        co-=citer;
        // set col
        context.strokeStyle = "black";
        context.stroke();

        //for wrriting barchart
        let cont=x+10
        for(let i=1;i<column.length;i++){
            let h=(column[i]/citer)*60;
            //context.fillRect(cont, 360-h, 60, h);
            await drawbar(cont, 360-h, 30, h,row[i],column[i]);
            cont+=50;
            
        }
        context.fillStyle = "black";
        //for heading tittle
        context.textAlign = "center";
        context.font="15px verdana";
        context.fillText(column[0], wid/2, 30);

        //for horizontal tittle
        context.textAlign = "center";
        context.font="15px verdana";
        context.fillText(row[0], wid/2, 395);

        //for vertical tittle
        context.save();
        context.translate(0, 300);
        context.rotate(-Math.PI/2);
        context.textAlign = "center";
        context.fillText(column[0], 100, 25);
        context.restore();

    
    }
    createchart()
    return{
        createchart
    }
}


let barchart=function(data1,data2){
    let row=data1;
    let column=data2;
    let build=`<canvas name="canvas" id="myCanvas" width="600px" height="${((column.length-1)*50)+130}px" style="background-color:rgb(212, 212, 255);margin: 50px 50px;border-radius:15px"></canvas>`
    document.querySelector("body").innerHTML=build;

    let canvas = document.getElementById('myCanvas');
    let context = canvas.getContext('2d');

    let y=40;

    //for calculating the max and graph values
    let max = column[1];
    for (let i = 2; i < column.length; i++) {
    if (column[i] > max) {
        max = column[i];
    }
    }
    let cmax=0;
    let citer=0;
    if(max<=5){
        while(max>cmax){
            cmax+=5;
            citer+=1;
        }
    }
    else{
        while(max>cmax){
            cmax+=10;
            citer+=2;
        }
    }

    async function drawbar(a,b,c,d,e,f){
        let col="#" + ((1<<24)*Math.random() | 0).toString(16);
        let angle=88;
        for(var i=c;i<c+d;i+=2){
            context.fillStyle = col;
            context.fillRect(angle+=2, a, 2, 30);
            await sleep(1);
        }
        context.font="12px verdana";
        context.fillStyle = "black";
        context.textAlign = "end";
        context.fillText(e, 85, a+20);
        context.textAlign = "start";
        context.fillText(f, i+10, a+20);
    }
    let co=0;
    async function createline(){
        let wid=(column.length-1)*50;
        for(let i=90;i<=540;i+=90){
            context.beginPath();
            context.moveTo(i, wid+y);
            context.lineTo(i, y);
            context.textAlign = "center"; 
            context.fillText(co, i, wid+y+20);
            co+=citer;
            // set col
            context.strokeStyle = " #b3b3b3";
            context.stroke();
        }

        //for wrriting barchart
        let cont=50;
        for(let i=1;i<column.length;i++){
            let w=(column[i]/citer)*90;
            //context.fillRect(cont, 360-h, 60, h);
            await drawbar(cont, 360, 90, w,row[i],column[i]);
            cont+=50;
            
        }
         context.fillStyle = "black";
        //for heading tittle
        context.textAlign = "center";
        context.font="15px verdana";
        context.fillText(column[0], 300, 30);

        //for horizontal tittle
        context.fillText(column[0], 300, wid+110);

        //for vertical tittle by rotating
        context.save();
        context.translate(0, wid+60);
        context.rotate(-Math.PI/2);
        context.textAlign = "center";
        context.fillText(row[0], wid/2, 25);
        context.restore();
    
    }
    createline();
    return{
        createline
    }
}