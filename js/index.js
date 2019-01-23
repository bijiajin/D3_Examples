var width = 370,
    height = 380,
    margin = {left:50,top:30,right:20,bottom:20},
    g_width = width - margin.left - margin.right,
    g_height = height - margin.top - margin.bottom;


//给指定元素添加svg
var svg = d3.select("#container")
.append("svg")
//设置svg宽高
.attr("width",width)
.attr("height",height)

//在生成的svg中添加g元素
var g = d3.select("svg")
    .append("g")
//g元素偏移
    .attr("transform","translate("+margin.left+","+margin.top+")")
//数据源
var dataset = [ 250 , 210 , 170 , 130 , 90 ];  //数据（表示矩形的宽度）

var rectHeight = 30;//设置每一个矩形的高度

g.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x",20)//设置左上点的x
    .attr("y",function(d,i){//设置左上点的y
        return i*rectHeight;
    })
    .attr("width",function(d){//设置宽
        return d;
    })
    .attr("height",rectHeight-5)//设置长
    .attr("fill","blue");//颜色填充

