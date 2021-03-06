
//用户管理界面成员列表状态按钮事件

$(function () {
    //注册jQ事件
    app.confirmDelete();
});

//前台jq声明
var app =
    {
        //参数1：元素; 参数2：表名; 参数3：要改变的属性; 参数4：表单查询id
        toggle:function (el, collectionName, attr, id)
        {
            //Ajax 请求
            $.get('/admin/changeStatus', {collectionName:collectionName, attr:attr, id:id},
                function (data)
                {

                    if(data.success)
                    {
                        if(el.src.indexOf('yes') != -1)
                        {
                            el.src = '/admin/images/no.gif';
                        }
                        else
                        {
                            el.src = '/admin/images/yes.gif';
                        }
                    }
                }
            )
        },

        //确定删除jQ语法
        confirmDelete()
        {
            $('.delete').click(function () {
                let flag = confirm('你确定要删除吗？');
                return flag;
            })
        },


        //改变排序的方法
        changeSort(el, collectionName, id)
        {
            let sortValue = el.value;
            //触发 Ajax 请求
            $.get('/admin/changeSort', {collectionName:collectionName, id:id, value:sortValue},
                function (data)
                {
                    //console.log(data);
                }
            )
        }

    };