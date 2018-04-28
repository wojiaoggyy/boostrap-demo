$(function(){

	$("#BTable_demo").bootstrapTable({
		height: "400",
		method: "get",
		url: '../json/BootstrapTable/demo.json', //表格数据请求地址  
		pagination: true, //是否分页  
		search: true, //是否显示查询框  
		sortable: true, //排序相关  
		sortName: "id",
		sortOrder: "asc",
		toolbar: "#toolbar",
		clickToSelect: true,
		striped: true, //是否显示行间隔色
	
		//editable: true,//开启编辑模式 
	
		showExport: true, //是否显示导出按钮  
		exportDataType: 'all',
		buttonsAlign: "right", //按钮位置  
		exportTypes: ['csv'], //导出文件类型  
		exportOptions: {
			ignoreColumn: [0], //忽略某一列的索引  
			fileName: '我下载的表格', //文件名称设置  
		},
	
		columns: [{
			checkbox: true,
			title: '选择'
		}, {
			field: 'id',
			class: 'id',
			title: '自定义1',
			sortable: true
		}, {
			field: 'name',
			class: 'name',
			title: '自定义2',
			sortable: true,
			editable: {
				type: "text",
				mode: "inline",
				validate: function(v) {
					if(!v) return '不能为空';
				}
			}
		}, {
			field: 'price',
			class: 'price',
			title: '自定义3',
			sortable: true,
			editable: {
				type: "text",
				mode: "inline",
				validate: function(v) {
					if(!v) return '不能为空';
				}
			}
		}, {
			field: '',
			title: '操作',
			formatter: function() {
				var str = '<a class="btn btn-success btn-xs save_cz" href="###"><span class="glyphicon glyphicon-ok"></span> 保存</a>';
				return str;
			}
		}]
	});
	
	$("#BTable_demo").on("click",".save_cz",function(){
//		var trs_index = $(this).parents("tr").attr("data-index");
//		$("#BTable_demo").bootstrapTable('updateRow', {index: trs_index,row: {name:'1',price:'1'}});
		var trs_id = $(this).parent().siblings(".id").text();
		var trs_name = $(this).parent().siblings(".name").text();
		var trs_price = $(this).parent().siblings(".price").text();
		
		$.post("../json/BootstrapTable/demo.json",{id:trs_id,name:trs_name,price:trs_price},function(){
			alert("保存成功");
		});
	})
	
	$("#btn_delete").click(function () {
        var ids = $.map($("#BTable_demo").bootstrapTable('getSelections'), function (row) {
            return row.id;
        });
        $.post("../json/BootstrapTable/demo.json",{id:ids},function(){
        	alert("删除成功");
        });
        $("#BTable_demo").bootstrapTable('remove', {
            field: 'id',
            values: ids
        });
    });
})