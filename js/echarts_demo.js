/**
 * Created by GY on 2017/7/21.
 */
var myChart_09 = echarts.init(document.getElementById('chart_09'));
var myChart_10 = echarts.init(document.getElementById('chart_10'));
var myChart_11 = echarts.init(document.getElementById('chart_11'));
var myChart_12 = echarts.init(document.getElementById('chart_12'));
var myChart_13 = echarts.init(document.getElementById('chart_13'));
var myChart_14 = echarts.init(document.getElementById('chart_14'));
var myChart_15 = echarts.init(document.getElementById('chart_15'));
var myChart_16 = echarts.init(document.getElementById('chart_16'));

var options_09 =  {
	title : {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

var options_10 = {
	backgroundColor: '#2c343c',

    title: {
        text: 'Customized Pie',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:274, name:'联盟广告'},
                {value:235, name:'视频广告'},
                {value:400, name:'搜索引擎'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};

var options_11 = {
	title: {
        text: '基础雷达图'
    },
    tooltip: {},
    legend: {
        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
    },
    radar: {
        // shape: 'circle',
        indicator: [
           { name: '销售（sales）', max: 6500},
           { name: '管理（Administration）', max: 16000},
           { name: '信息技术（Information Techology）', max: 30000},
           { name: '客服（Customer Support）', max: 38000},
           { name: '研发（Development）', max: 52000},
           { name: '市场（Marketing）', max: 25000}
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [4300, 10000, 28000, 35000, 50000, 19000],
                name : '预算分配（Allocated Budget）'
            },
             {
                value : [5000, 14000, 28000, 31000, 42000, 21000],
                name : '实际开销（Actual Spending）'
            }
        ]
    }]
};

var options_12 = {
	title: {
        text: '浏览器占比变化',
        subtext: '纯属虚构',
        x:'right',
        y:'bottom'
    },
    tooltip: {
        trigger: 'item',
        backgroundColor : 'rgba(0,0,250,0.2)'
    },
    legend: {
        data: (function (){
            var list = [];
            for (var i = 1; i <=28; i++) {
                list.push(i + 2000 + '');
            }
            return list;
        })()
    },
    visualMap: {
        color: ['red', 'yellow']
    },
    radar: {
       indicator : [
           { text: 'IE8-', max: 400},
           { text: 'IE9+', max: 400},
           { text: 'Safari', max: 400},
           { text: 'Firefox', max: 400},
           { text: 'Chrome', max: 400}
        ]
    },
    series : (function (){
        var series = [];
        for (var i = 1; i <= 28; i++) {
            series.push({
                name:'浏览器（数据纯属虚构）',
                type: 'radar',
                symbol: 'none',
                itemStyle: {
                    normal: {
                        lineStyle: {
                          width:1
                        }
                    },
                    emphasis : {
                        areaStyle: {color:'rgba(0,250,0,0.3)'}
                    }
                },
                data:[
                  {
                    value:[
                        (40 - i) * 10,
                        (38 - i) * 4 + 60,
                        i * 5 + 10,
                        i * 9,
                        i * i /2
                    ],
                    name: i + 2000 + ''
                  }
                ]
            });
        }
        return series;
    })()
	
};

var options_13 = {
	title: {
        text: '漏斗图',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    legend: {
        data: ['展现','点击','访问','咨询','订单']
    },
    calculable: true,
    series: [
        {
            name:'漏斗图',
            type:'funnel',
            left: '10%',
            top: 80,
            //x2: 80,
            bottom: 10,
            width: '80%',
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                },
                emphasis: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            labelLine: {
                normal: {
                    length: 10,
                    lineStyle: {
                        width: 1,
                        type: 'solid'
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            },
            data: [
                {value: 60, name: '访问'},
                {value: 40, name: '咨询'},
                {value: 20, name: '订单'},
                {value: 80, name: '点击'},
                {value: 100, name: '展现'}
            ]
        }
    ]
};

var options_14 = {
	title: {
        text: '漏斗图(对比)',
        subtext: '纯属虚构',
        left: 'left',
        top: 'bottom'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        top: 'center',
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['产品A','产品B','产品C','产品D','产品E']
    },
    calculable: true,
    series: [
        {
            name: '漏斗图',
            type: 'funnel',
            width: '40%',
            height: '45%',
            left: '5%',
            top: '50%',
            funnelAlign: 'right',

            center: ['25%', '25%'],  // for pie

            data:[
                {value:60, name:'产品C'},
                {value:30, name:'产品D'},
                {value:10, name:'产品E'},
                {value:80, name:'产品B'},
                {value:100, name:'产品A'}
            ]
        },
        {
            name: '金字塔',
            type:'funnel',
            width: '40%',
            height: '45%',
            left: '5%',
            top: '5%',
            sort: 'ascending',
            funnelAlign: 'right',

            center: ['25%', '75%'],  // for pie

            data:[
                {value:60, name:'产品C'},
                {value:30, name:'产品D'},
                {value:10, name:'产品E'},
                {value:80, name:'产品B'},
                {value:100, name:'产品A'}
            ]
        },
        {
            name:'漏斗图',
            type:'funnel',
            width: '40%',
            height: '45%',
            left: '55%',
            top: '5%',
            funnelAlign: 'left',

            center: ['75%', '25%'],  // for pie

            data: [
                {value: 60, name: '产品C'},
                {value: 30, name: '产品D'},
                {value: 10, name: '产品E'},
                {value: 80, name: '产品B'},
                {value: 100, name: '产品A'}
            ]
        },
        {
            name: '金字塔',
            type:'funnel',
            width: '40%',
            height: '45%',
            left: '55%',
            top: '50%',
            sort: 'ascending',
            funnelAlign: 'left',

            center: ['75%', '75%'],  // for pie

            data: [
                {value: 60, name: '产品C'},
                {value: 30, name: '产品D'},
                {value: 10, name: '产品E'},
                {value: 80, name: '产品B'},
                {value: 100, name: '产品A'}
            ]
        }
    ]
};

var options_15 = {
	tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: '业务指标',
            type: 'gauge',
            detail: {formatter:'{value}%'},
            data: [{value: 50, name: '完成率'}]
        }
    ]
};

var options_16 = {
	backgroundColor: '#1b1b1b',
    tooltip : {
        formatter: "{a} <br/>{c} {b}"
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    series : [
        {
            name:'速度',
            type:'gauge',
            min:0,
            max:220,
            splitNumber:11,
            radius: '50%',
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.09, 'lime'],[0.82, '#1e90ff'],[1, '#ff4500']],
                    width: 3,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisLabel: {            // 坐标轴小标记
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length :15,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            splitLine: {           // 分隔线
                length :25,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            pointer: {           // 分隔线
                shadowColor : '#fff', //默认透明
                shadowBlur: 5
            },
            title : {
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontSize: 20,
                    fontStyle: 'italic',
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            detail : {
                backgroundColor: 'rgba(30,144,255,0.8)',
                borderWidth: 1,
                borderColor: '#fff',
                shadowColor : '#fff', //默认透明
                shadowBlur: 5,
                offsetCenter: [0, '50%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    color: '#fff'
                }
            },
            data:[{value: 40, name: 'km/h'}]
        },
        {
            name:'转速',
            type:'gauge',
            center : ['25%', '55%'],    // 默认全局居中
            radius : '30%',
            min:0,
            max:7,
            endAngle:45,
            splitNumber:7,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.29, 'lime'],[0.86, '#1e90ff'],[1, '#ff4500']],
                    width: 2,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisLabel: {            // 坐标轴小标记
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length :12,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            splitLine: {           // 分隔线
                length :20,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            pointer: {
                width:5,
                shadowColor : '#fff', //默认透明
                shadowBlur: 5
            },
            title : {
                offsetCenter: [0, '-30%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontStyle: 'italic',
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            detail : {
                //backgroundColor: 'rgba(30,144,255,0.8)',
               // borderWidth: 1,
                borderColor: '#fff',
                shadowColor : '#fff', //默认透明
                shadowBlur: 5,
                width: 80,
                height:30,
                offsetCenter: [25, '20%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    color: '#fff'
                }
            },
            data:[{value: 1.5, name: 'x1000 r/min'}]
        },
        {
            name:'油表',
            type:'gauge',
            center : ['75%', '50%'],    // 默认全局居中
            radius : '30%',
            min:0,
            max:2,
            startAngle:135,
            endAngle:45,
            splitNumber:2,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.2, 'lime'],[0.8, '#1e90ff'],[1, '#ff4500']],
                    width: 2,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length :12,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisLabel: {
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                },
                formatter:function(v){
                    switch (v + '') {
                        case '0' : return 'E';
                        case '1' : return 'Gas';
                        case '2' : return 'F';
                    }
                }
            },
            splitLine: {           // 分隔线
                length :15,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            pointer: {
                width:2,
                shadowColor : '#fff', //默认透明
                shadowBlur: 5
            },
            title : {
                show: false
            },
            detail : {
                show: false
            },
            data:[{value: 0.5, name: 'gas'}]
        },
        {
            name:'水表',
            type:'gauge',
            center : ['75%', '50%'],    // 默认全局居中
            radius : '30%',
            min:0,
            max:2,
            startAngle:315,
            endAngle:225,
            splitNumber:2,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.2, 'lime'],[0.8, '#1e90ff'],[1, '#ff4500']],
                    width: 2,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                show: false
            },
            axisLabel: {
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                },
                formatter:function(v){
                    switch (v + '') {
                        case '0' : return 'H';
                        case '1' : return 'Water';
                        case '2' : return 'C';
                    }
                }
            },
            splitLine: {           // 分隔线
                length :15,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            pointer: {
                width:2,
                shadowColor : '#fff', //默认透明
                shadowBlur: 5
            },
            title : {
                show: false
            },
            detail : {
                show: false
            },
            data:[{value: 0.5, name: 'gas'}]
        }
    ]
};

myChart_09.setOption(options_09);
myChart_10.setOption(options_10);
myChart_11.setOption(options_11);
myChart_12.setOption(options_12);
myChart_13.setOption(options_13);
myChart_14.setOption(options_14);
myChart_15.setOption(options_15);
myChart_16.setOption(options_16);
$(window).resize(function(){
	setTimeout(function(){
		myChart_09.resize();
		myChart_11.resize();
		myChart_12.resize();
		myChart_13.resize();
		myChart_14.resize();
		myChart_15.resize();
		myChart_16.resize();
	},200);			
});
