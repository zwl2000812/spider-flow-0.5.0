(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{428:function(t,_,e){"use strict";e.r(_);var r=e(29),v=Object(r.a)({},(function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"spider-flow使用说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spider-flow使用说明"}},[t._v("#")]),t._v(" spider-flow使用说明")]),t._v(" "),e("h4",{attrs:{id:"启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[t._v("#")]),t._v(" 启动")]),t._v(" "),e("ul",[e("li",[t._v("本项目为SpringBoot项目,运行SpiderApplication类,访问"),e("a",{attrs:{href:"http://localhost:8088/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8088/"),e("OutboundLink")],1),t._v("即可")])]),t._v(" "),e("h4",{attrs:{id:"演示站点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#演示站点"}},[t._v("#")]),t._v(" 演示站点")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://39.105.125.219:8088/",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击跳转"),e("OutboundLink")],1)]),t._v(" "),e("blockquote",[e("p",[t._v("服务器配置较低,如有卡顿请谅解")])]),t._v(" "),e("h4",{attrs:{id:"抓取页面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#抓取页面"}},[t._v("#")]),t._v(" 抓取页面")]),t._v(" "),e("ul",[e("li",[t._v("循环变量：用来定义循环变量，主要目的是抓取多个同类URL,如：projectIndex")]),t._v(" "),e("li",[t._v("循环次数：定义循环次数，可使用${}从变量中获取值，如：10")]),t._v(" "),e("li",[t._v("起始URL：抓取地址，可使用${}从变量中获取值如：https://gitee.com/${projectUrls[projectIndex]}")]),t._v(" "),e("li",[t._v("请求方法：GET、POST")]),t._v(" "),e("li",[t._v("请求参数：用来设置请求参数，可添加多个，参数值处可使用${}来获取值")]),t._v(" "),e("li",[t._v("请求header：用来设置请求header，可添加多个，header值处可使用${}来获取值")]),t._v(" "),e("li",[t._v("代理：host:port")])]),t._v(" "),e("h4",{attrs:{id:"定义变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定义变量"}},[t._v("#")]),t._v(" 定义变量")]),t._v(" "),e("ul",[e("li",[t._v("变量名：定义变量名称")]),t._v(" "),e("li",[t._v("变量值："),e("code",[t._v("可使用${}从变量中获取值如：${selectors(resp.html,'.categorical-project-card a','attr','href')}")])])]),t._v(" "),e("h4",{attrs:{id:"定义数据源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定义数据源"}},[t._v("#")]),t._v(" 定义数据源")]),t._v(" "),e("ul",[e("li",[t._v("数据库类型，目前仅支持Mysql(其它驱动未引入至项目中)")]),t._v(" "),e("li",[t._v("数据库连接，如：jdbc:mysql://127.0.0.1:3306/test?useUnicode=true&characterEncoding=utf-8")]),t._v(" "),e("li",[t._v("用户名，如：root")]),t._v(" "),e("li",[t._v("密码,如：123456")])]),t._v(" "),e("blockquote",[e("p",[t._v("需要注意的是，此处不支持${}语法")])]),t._v(" "),e("h4",{attrs:{id:"输出"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#输出"}},[t._v("#")]),t._v(" 输出")]),t._v(" "),e("ul",[e("li",[t._v("输出项，该值为页面中显示表格的列名")]),t._v(" "),e("li",[t._v("输出值，该值为页面中显示表格单元格值，语法同样支持${}")])]),t._v(" "),e("h4",{attrs:{id:"执行sql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#执行sql"}},[t._v("#")]),t._v(" 执行SQL")]),t._v(" "),e("ul",[e("li",[t._v("数据源，选择之前定义好的数据源")]),t._v(" "),e("li",[t._v("语句类型，select/insert/update/delete")]),t._v(" "),e("li",[t._v("SQL语句，如"),e("code",[t._v("INSERT INTO gitee_gvp(project_name, project_link,project_desc) VALUES (#${projectNames[projectIndex]}#,#${projectUrls[projectIndex]}#,#${projectDesc}#)")])])]),t._v(" "),e("blockquote",[e("p",[t._v("需要注意的是，SQL语句不支持${}语法，但是参数是支持的，另外参数需要用##包起来")])]),t._v(" "),e("h4",{attrs:{id:"箭头"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#箭头"}},[t._v("#")]),t._v(" 箭头")]),t._v(" "),e("ul",[e("li",[t._v("条件，每个箭头都可以添加条件，当条件成立时，才流向所指向的节点，不写即不判断，直接流向下一个节点")])]),t._v(" "),e("h4",{attrs:{id:"内置变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内置变量"}},[t._v("#")]),t._v(" 内置变量")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("变量名称")]),t._v(" "),e("th",[t._v("变量值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("resp")]),t._v(" "),e("td",[t._v("HttpResponse对象")])]),t._v(" "),e("tr",[e("td",[t._v("rs")]),t._v(" "),e("td",[t._v("SQL执行结果，类型：int或List<Map<String,Object>>")])])])]),t._v(" "),e("h4",{attrs:{id:"httpresponse对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#httpresponse对象"}},[t._v("#")]),t._v(" HttpResponse对象")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("字段名称")]),t._v(" "),e("th",[t._v("字段类型")]),t._v(" "),e("th",[t._v("字段描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("html")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("页面HTML")])]),t._v(" "),e("tr",[e("td",[t._v("json")]),t._v(" "),e("td",[t._v("JSONObject/JSONArray")]),t._v(" "),e("td",[t._v("内容转json结果")])]),t._v(" "),e("tr",[e("td",[t._v("bytes")]),t._v(" "),e("td",[t._v("byte[]")]),t._v(" "),e("td",[t._v("二进制结果")])]),t._v(" "),e("tr",[e("td",[t._v("cookies")]),t._v(" "),e("td",[t._v("Map<String,String>")]),t._v(" "),e("td",[t._v("cookies")])]),t._v(" "),e("tr",[e("td",[t._v("headers")]),t._v(" "),e("td",[t._v("Map<String,String>")]),t._v(" "),e("td",[t._v("headers")])]),t._v(" "),e("tr",[e("td",[t._v("statusCode")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("HTTP状态码")])])])])])}),[],!1,null,null,null);_.default=v.exports}}]);