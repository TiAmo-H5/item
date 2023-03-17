(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-428f8b3c"],{"0792":function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var n=function(e,t,i){if(t.trim()){var n=/^1[3456789]\d{9}$/;n.test(t.trim())||i(new Error("手机号格式错误"))}i()}},"09a4":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("el-card",{staticClass:"card"},[i("div",{staticClass:"filter-container"},[i("el-form",{attrs:{inline:!0}},[i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.add()}}},[e._v("添加")])],1)],1)],1),i("div",{staticClass:"filter-container"},[i("el-form",{attrs:{inline:!0}},[i("el-form-item",{attrs:{label:"组织机构名称"}},[i("el-input",{attrs:{placeholder:"请输入组织机构名称",clearable:""},model:{value:e.OrganizeName,callback:function(t){e.OrganizeName=t},expression:"OrganizeName"}})],1),i("el-form-item",{attrs:{label:"组织机构编码"}},[i("el-input",{attrs:{placeholder:"请输入组织机构编码",clearable:""},model:{value:e.OrganizeCode,callback:function(t){e.OrganizeCode=t},expression:"OrganizeCode"}})],1),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.search()}}},[e._v("查询")])],1),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.reset()}}},[e._v("重置")])],1)],1)],1),i("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{stripe:"",height:e.tableHeight,data:e.tableData,"row-key":"OrganizeID","default-expand-all":"","highlight-current-row":"","tree-props":{children:"children",hasChildren:"hasChildren"}}},[i("el-table-column",{attrs:{prop:"OrganizeName",label:"组织名称",align:"left",width:"300px"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.children&&0!==t.row.children.length?i("svg-icon",{attrs:{"icon-class":"folder"}}):i("svg-icon",{attrs:{"icon-class":"file"}}),i("span",[e._v(e._s(t.row.OrganizeName))])]}}])}),i("el-table-column",{attrs:{prop:"OrganizeCode",label:"组织编码",align:"center",width:"200px"}}),i("el-table-column",{attrs:{prop:"ContactPerson",label:"联系人",align:"center",width:"200px"}}),i("el-table-column",{attrs:{prop:"ContactTel",label:"联系电话",align:"center",width:"200px"}}),i("el-table-column",{attrs:{prop:"Address",label:"地址",align:"center",width:"260px"}}),i("el-table-column",{attrs:{prop:"Description",label:"备注",align:"center",width:"200px"}}),i("el-table-column",{attrs:{label:"操作",align:"center",fixed:"right",width:"160px"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{type:"text"},on:{click:function(i){return e.edit(t.row)}}},[e._v("编辑")]),i("el-button",{attrs:{type:"text"},on:{click:function(i){return e.del(t.row)}}},[e._v("删除")])]}}])})],1)],1),i("el-dialog",{attrs:{visible:e.dialogEditVisible,title:e.dialogEditTitle,"append-to-body":!0},on:{"update:visible":function(t){e.dialogEditVisible=t}}},[i("edit-form",{attrs:{form:e.form,"dialog-edit-visible":e.dialogEditVisible},on:{closeDialog:e.closeDialog}})],1)],1)},a=[],o=i("8593"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-form",{ref:"info",attrs:{model:e.info,"label-width":"115px",rules:e.rules}},[i("el-row",[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"组织名称：",prop:"OrganizeName"}},[i("el-input",{attrs:{placeholder:"请输入组织名称",maxlength:"60","show-word-limit":""},model:{value:e.info.OrganizeName,callback:function(t){e.$set(e.info,"OrganizeName",t)},expression:"info.OrganizeName"}})],1)],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"组织编码：",prop:"OrganizeCode"}},[i("el-input",{attrs:{placeholder:"请输入组织编码",maxlength:"60","show-word-limit":""},model:{value:e.info.OrganizeCode,callback:function(t){e.$set(e.info,"OrganizeCode",t)},expression:"info.OrganizeCode"}})],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"联系人：",prop:"ContactPerson"}},[i("el-input",{attrs:{placeholder:"请输入联系人",maxlength:"60","show-word-limit":""},model:{value:e.info.ContactPerson,callback:function(t){e.$set(e.info,"ContactPerson",t)},expression:"info.ContactPerson"}})],1)],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"联系电话：",prop:"ContactTel"}},[i("el-input",{attrs:{placeholder:"请输入联系电话",maxlength:"60","show-word-limit":"",type:"number"},model:{value:e.info.ContactTel,callback:function(t){e.$set(e.info,"ContactTel",t)},expression:"info.ContactTel"}})],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"联系地址：",prop:"Address"}},[i("el-input",{attrs:{placeholder:"请输入联系地址",maxlength:"60","show-word-limit":""},model:{value:e.info.Address,callback:function(t){e.$set(e.info,"Address",t)},expression:"info.Address"}})],1)],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"备注：",prop:"Description"}},[i("el-input",{attrs:{placeholder:"请输入备注",maxlength:"60","show-word-limit":""},model:{value:e.info.Description,callback:function(t){e.$set(e.info,"Description",t)},expression:"info.Description"}})],1)],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"资质证书号：",prop:"CertificateNO"}},[i("el-input",{attrs:{maxlength:"20","show-word-limit":"",type:"number"},model:{value:e.info.CertificateNO,callback:function(t){e.$set(e.info,"CertificateNO",t)},expression:"info.CertificateNO"}})],1)],1),i("el-col",{attrs:{span:12}},[i("el-form-item",[i("span",[e._v("（请上传DWG格式）")])])],1),i("el-col",{attrs:{span:24}},[i("el-row",[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"设计院logo：",prop:"LogoList"}},[i("el-upload",{ref:"LogoList",attrs:{action:"action","on-remove":e.handleRemove.bind(this,"LogoList"),"on-change":e.handleChange.bind(this,"LogoList"),"auto-upload":!1,limit:1,"file-list":e.info.LogoList,accept:".dwg","on-exceed":e.handleExceed.bind(this,"LogoList")}},[i("el-button",{attrs:{size:"small",type:"primary"}},[e._v("+上传")])],1)],1)],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"批准：",prop:"ApprovalList"}},[i("el-upload",{ref:"ApprovalList",attrs:{action:"action","on-remove":e.handleRemove.bind(this,"ApprovalList"),"on-change":e.handleChange.bind(this,"ApprovalList"),"auto-upload":!1,limit:1,"file-list":e.info.ApprovalList,accept:".dwg","on-exceed":e.handleExceed.bind(this,"ApprovalList")}},[i("el-button",{attrs:{size:"small",type:"primary"}},[e._v("+上传")])],1)],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"审核：",prop:"ExamineList"}},[i("el-upload",{ref:"ExamineList",attrs:{action:"action","on-remove":e.handleRemove.bind(this,"ExamineList"),"on-change":e.handleChange.bind(this,"ExamineList"),"auto-upload":!1,limit:1,"file-list":e.info.ExamineList,accept:".dwg","on-exceed":e.handleExceed.bind(this,"ExamineList")}},[i("el-button",{attrs:{size:"small",type:"primary"}},[e._v("+上传")])],1)],1)],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"校验：",prop:"CheckList"}},[i("el-upload",{ref:"CheckList",attrs:{action:"action","on-remove":e.handleRemove.bind(this,"CheckList"),"on-change":e.handleChange.bind(this,"CheckList"),"auto-upload":!1,limit:1,"file-list":e.info.CheckList,accept:".dwg","on-exceed":e.handleExceed.bind(this,"CheckList")}},[i("el-button",{attrs:{size:"small",type:"primary"}},[e._v("+上传")])],1)],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"会签：",prop:"JointlySignList"}},[i("el-upload",{ref:"JointlySignList",attrs:{action:"action","on-remove":e.handleRemove.bind(this,"JointlySignList"),"on-change":e.handleChange.bind(this,"JointlySignList"),"auto-upload":!1,limit:1,"file-list":e.info.JointlySignList,accept:".dwg","on-exceed":e.handleExceed.bind(this,"JointlySignList")}},[i("el-button",{attrs:{size:"small",type:"primary"}},[e._v("+上传")])],1)],1)],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"编制/主设：",prop:"OrganizationList"}},[i("el-upload",{ref:"OrganizationList",attrs:{action:"action","on-remove":e.handleRemove.bind(this,"OrganizationList"),"on-change":e.handleChange.bind(this,"OrganizationList"),"auto-upload":!1,limit:1,"file-list":e.info.OrganizationList,accept:".dwg","on-exceed":e.handleExceed.bind(this,"OrganizationList")}},[i("el-button",{attrs:{size:"small",type:"primary"}},[e._v("+上传")])],1)],1)],1)],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:24}},[i("div",{staticClass:"handle"},[i("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:function(t){return e.save()}}},[e._v("保存")]),i("el-button",{attrs:{type:""},on:{click:function(t){return e.closeDialog()}}},[e._v("取消")])],1)])],1)],1)],1)},s=[],l=i("bc3a"),c=i.n(l),d=i("5f87"),u=i("0792");function g(e){return g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function f(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function p(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?f(Object(i),!0).forEach((function(t){h(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):f(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function h(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var m={props:{form:{type:Object,default:function(){return{OrganizeID:"",ParentID:"",OrganizeCode:"",OrganizeName:"",OrganizeLogin:"",ContactPerson:"",ContactTel:"",Address:"",Description:"",Level:"0",CertificateNO:"",Logo:"",Proportion:"",Signature:"",OrganizeType:"",Approval:"",Examine:"",Check:"",JointlySign:"",Organization:"",Discount:""}}},dialogEditVisible:{type:Boolean,default:!1}},data:function(){var e=function(e,t,i){if(0===t.length)return i(new Error("请选择dwg文件"));i()};return{loading:!1,needUpload:{LogoList:!1,ApprovalList:!1,ExamineList:!1,CheckList:!1,JointlySignList:!1,OrganizationList:!1},treeData:[],info:{LogoList:[],ApprovalList:[],ExamineList:[],CheckList:[],JointlySignList:[],OrganizationList:[]},rules:{OrganizeName:[{required:!0,message:"请输入组织名称",trigger:"blur"}],OrganizeCode:[{required:!0,message:"请输入组织编码",trigger:"blur"}],ContactPerson:[{required:!0,message:"请输入联系人",trigger:"blur"}],ContactTel:[{required:!0,message:"请输入联系电话",trigger:"blur"},{validator:u["a"],trigger:"blur"}],Address:[{required:!0,message:"请输入联系地址",trigger:"blur"}],CertificateNO:[{required:!0,message:"请输入资质证书号",trigger:"blur"}],LogoList:[{required:!0,message:"请选择dwg文件",trigger:"blur"},{validator:e,trigger:"blur"}],ApprovalList:[{required:!0,message:"请选择dwg文件",trigger:"blur"},{validator:e,trigger:"blur"}],ExamineList:[{required:!0,message:"请选择dwg文件",trigger:"blur"},{validator:e,trigger:"blur"}],CheckList:[{required:!0,message:"请选择dwg文件",trigger:"blur"},{validator:e,trigger:"blur"}],JointlySignList:[{required:!0,message:"请选择dwg文件",trigger:"blur"},{validator:e,trigger:"blur"}],OrganizationList:[{required:!0,message:"请选择dwg文件",trigger:"blur"},{validator:e,trigger:"blur"}]}}},watch:{dialogEditVisible:function(){this.dialogEditVisible?(this.info=p(p({},this.info),this.form),this.setFileName(),this.getData()):this.resetForm("info")}},created:function(){this.info=p(p({},this.info),this.form),this.setFileName(),this.getData()},mounted:function(){},methods:{setFileName:function(){if(this.info.OrganizeID)for(var e in this.info.LogoList=this.info.Logo?[{name:this.info.Logo,url:""}]:[],this.info.ApprovalList=this.info.Approval?[{name:this.info.Approval,url:""}]:[],this.info.ExamineList=this.info.Examine?[{name:this.info.Examine,url:""}]:[],this.info.CheckList=this.info.Check?[{name:this.info.Check,url:""}]:[],this.info.JointlySignList=this.info.JointlySign?[{name:this.info.JointlySign,url:""}]:[],this.info.OrganizationList=this.info.Organization?[{name:this.info.Organization,url:""}]:[],this.needUpload)this.needUpload[e]=!1;else for(var t in this.needUpload)this.needUpload[t]=!0},changeVal1:function(){this.$refs.elcascader1.dropDownVisible=!1},getData:function(){var e=this,t={OrganizeName:"",OrganizeCode:"",OrganizeType:"",OrganizeCode1:localStorage["ai-orgcode"],UserID:localStorage["ai-userid"]};Object(o["B"])(t).then((function(t){var i=t.Data,n=function e(t){t.forEach((function(t){t.children&&0!==t.children.length?e(t.children):delete t.children,t.value=t.OrganizeID,t.label=t.OrganizeName}))};function a(e,t){return e.filter((function(e,i){return e.children&&(e.children=a(e.children,t)),e.OrganizeID!==t}))}n(i);var o=a(i,e.info.OrganizeID);e.treeData=o}))},uploadFile:function(){var e=this,t=new FormData;t.append("Token",Object(d["a"])()),t.append("UserID",localStorage["ai-userid"]),t.append("OrganizeName",this.info.OrganizeName),t.append("OrganizeID",this.info.OrganizeID),this.needUpload.LogoList&&t.append("file1",this.info.LogoList[0].raw),this.needUpload.ApprovalList&&t.append("file2",this.info.ApprovalList[0].raw),this.needUpload.ExamineList&&t.append("file3",this.info.ExamineList[0].raw),this.needUpload.CheckList&&t.append("file4",this.info.CheckList[0].raw),this.needUpload.JointlySignList&&t.append("file5",this.info.JointlySignList[0].raw),this.needUpload.OrganizationList&&t.append("file6",this.info.OrganizationList[0].raw),c.a.post("http://121.41.23.111:8088/api/data/OrgImg",t).then((function(t){"1"===t.data.Rows.result?e.$message({message:t.data.Rows.remark||"操作成功",type:"success"}):"0"===t.data.Rows.result?e.$message({message:t.data.Rows.remark||"操作失败",type:"error"}):"2"===t.data.Rows.result?e.$message({message:t.data.Rows.remark||"操作成功",type:"error"}):"-1"===t.data.Rows.result?e.$message({message:t.data.Rows.remark||"内部异常",type:"error"}):e.$message({message:t.data.Rows.remark,type:"error"})})).catch((function(e){}))},save:function(){var e=this;this.$refs["info"].validate((function(t){if(t)if(e.loading=!0,e.info.OrganizeID){var i={OrganizeCode1:localStorage["ai-orgcode"],UserID:localStorage["ai-userid"],Update:[{OrganizeID:e.info.OrganizeID,ParentID:e.info.ParentID,OrganizeCode:e.info.OrganizeCode,OrganizeName:e.info.OrganizeName,OrganizeLogin:e.info.OrganizeCode,ContactPerson:e.info.ContactPerson,ContactTel:e.info.ContactTel,Address:e.info.Address,Description:e.info.Description,Level:e.info.Level,CertificateNO:e.info.CertificateNO,Proportion:e.info.Proportion,Discount:e.info.Discount,Signature:e.info.Signature,OrganizeType:e.info.OrganizeType,Logo:e.info.LogoList[0]?e.info.LogoList[0].name:"",Approval:e.info.ApprovalList[0]?e.info.ApprovalList[0].name:"",Examine:e.info.ExamineList[0]?e.info.ExamineList[0].name:"",Check:e.info.CheckList[0]?e.info.CheckList[0].name:"",JointlySign:e.info.JointlySignList[0]?e.info.JointlySignList[0].name:"",Organization:e.info.OrganizationList[0]?e.info.OrganizationList[0].name:""}]};"object"===g(e.info.ParentID)&&e.info.ParentID?i.Update[0].ParentID=e.info.ParentID[e.info.ParentID.length-1]||"":i.Update[0].ParentID=e.info.ParentID,Object(o["e"])(i).then((function(t){e.closeLoading(),"1"===t.Rows.result?(e.uploadFile(),e.$emit("closeDialog")):e.$message({message:t.Rows.remark,type:"error"})})).catch((function(t){e.closeLoading()}))}else{var n={OrganizeCode1:localStorage["ai-orgcode"],UserID:localStorage["ai-userid"],Innsert:[{ParentID:"",OrganizeCode:e.info.OrganizeCode,OrganizeName:e.info.OrganizeName,OrganizeLogin:e.info.OrganizeCode,ContactPerson:e.info.ContactPerson,ContactTel:e.info.ContactTel,Address:e.info.Address,Description:e.info.Description,Level:e.info.Level,CertificateNO:e.info.CertificateNO,Proportion:e.info.Proportion,Discount:e.info.Discount,Signature:e.info.Signature,OrganizeType:e.info.OrganizeType,Logo:e.info.LogoList[0]?e.info.LogoList[0].name:"",Approval:e.info.ApprovalList[0]?e.info.ApprovalList[0].name:"",Examine:e.info.ExamineList[0]?e.info.ExamineList[0].name:"",Check:e.info.CheckList[0]?e.info.CheckList[0].name:"",JointlySign:e.info.JointlySignList[0]?e.info.JointlySignList[0].name:"",Organization:e.info.OrganizationList[0]?e.info.OrganizationList[0].name:""}]};"string"===typeof e.info.ParentID?n.Innsert[0].ParentID=e.info.ParentID:e.info.ParentID&&(n.Innsert[0].ParentID=e.info.ParentID[e.info.ParentID.length-1]||""),Object(o["a"])(n).then((function(t){e.closeLoading(),"1"===t.Rows.result?(e.info.OrganizeID="bea78a6579fe4d0db9b1846b1336235b",e.uploadFile(),e.$emit("closeDialog")):e.$message({message:t.Rows.remark,type:"error"})})).catch((function(t){e.closeLoading()}))}}))},handleExceed:function(e,t,i){-1!==t[0].name.indexOf(".dwg")?(this.$set(i[0],"raw",t[0]),this.$set(i[0],"name",t[0].name),this.$refs[e].clearFiles(),this.$refs[e].handleStart(t[0])):this.$message({message:"请选择 .dwg 格式的文件",type:"warning"})},handleChange:function(e,t,i){var n=this;if(0!==i.length){this.needUpload[e]=!0;var a=[];i.forEach((function(e){-1!==e.name.indexOf(".dwg")?a.push(e):n.$message({message:"请选择 .dwg 格式的文件",type:"warning"})})),this.info[e]=a}else this.info[e]=i},handleRemove:function(e,t,i){this.info[e]=i},closeDialog:function(){this.$emit("closeDialog")},closeLoading:function(){var e=this;setTimeout((function(){e.loading=!1}),500)},resetForm:function(e){this.$refs[e].resetFields(),this.info.LogoList=[],this.info.ApprovalList=[],this.info.ExamineList=[],this.info.CheckList=[],this.info.JointlySignList=[],this.info.OrganizationList=[]}}},O=m,b=(i("239c"),i("2877")),v=Object(b["a"])(O,r,s,!1,null,"346c34c4",null),L=v.exports,z={components:{EditForm:L},data:function(){return{OrganizeName:"",OrganizeCode:"",tableHeight:innerHeight-250,judge:{id:""},currentPage:1,pageSize:500,treeData:[],treeData2:{},tableData:[{OrganizeName:"设备厂商1",OrganizeCode:"003",ContactPerson:"张三",ContactTel:18783838383,Address:"北京市东城区",Note:""},{OrganizeName:"设备厂商1",OrganizeCode:"003",ContactPerson:"张三",ContactTel:18783838383,Address:"北京市东城区",Note:""},{OrganizeName:"设备厂商1",OrganizeCode:"003",ContactPerson:"张三",ContactTel:18783838383,Address:"北京市东城区",Note:""},{OrganizeName:"设备厂商1",OrganizeCode:"003",ContactPerson:"张三",ContactTel:18783838383,Address:"北京市东城区",Note:""},{OrganizeName:"设备厂商1",OrganizeCode:"003",ContactPerson:"张三",ContactTel:18783838383,Address:"北京市东城区",Note:""},{OrganizeName:"设备厂商1",OrganizeCode:"003",ContactPerson:"张三",ContactTel:18783838383,Address:"北京市东城区",Note:""}],currentOrgRow:{OrganizeCode:"",OrganizeID:""},dialogEditVisible:!1,dialogEditTitle:"新增组织",form:{OrganizeID:"",ParentID:"",OrganizeCode:"",OrganizeName:"",OrganizeLogin:"",ContactPerson:"",ContactTel:"",Address:"",Description:""}}},created:function(){},methods:{search:function(){this.getData()},reset:function(){this.OrganizeName="",this.OrganizeCode="",this.getData()},getData:function(){var e=this,t={OrganizeName:this.OrganizeName,OrganizeCode:this.OrganizeCode,OrganizeType:"",OrganizeCode1:localStorage["ai-orgcode"],UserID:localStorage["ai-userid"]};Object(o["B"])(t).then((function(t){var i=t.Data,n=function e(t){t.forEach((function(t){t.children&&0!==t.children.length?e(t.children):delete t.children}))};n(i),e.tableData=i}))},add:function(){this.form={OrganizeID:"",ParentID:"",OrganizeCode:"",OrganizeName:"",OrganizeLogin:"",ContactPerson:"",ContactTel:"",Address:"",Description:"",Level:"0",CertificateNO:"",Logo:"",Proportion:"",Signature:"",Approval:"",Examine:"",Check:"",JointlySign:"",Organization:"",Discount:"",OrganizeType:""},this.dialogEditTitle="新增组织",this.dialogEditVisible=!0},edit:function(e){this.form={OrganizeID:e.OrganizeID,ParentID:e.ParentID,OrganizeCode:e.OrganizeCode,OrganizeName:e.OrganizeName,OrganizeLogin:"",ContactPerson:e.ContactPerson,ContactTel:e.ContactTel,Address:e.Address,Description:e.Description,Level:e.Level,CertificateNO:e.CertificateNO,Logo:e.Logo?e.Logo:"",Proportion:e.Proportion,Signature:e.Signature?e.Signature:"",Approval:e.Approval?e.Approval:"",Examine:e.Examine?e.Examine:"",Check:e.Check?e.Check:"",JointlySign:e.JointlySign?e.JointlySign:"",Organization:e.Organization?e.Organization:"",Discount:e.Discount,OrganizeType:e.OrganizeType},this.dialogEditVisible=!0,this.dialogEditTitle="编辑组织"},del:function(e){var t=this;this.$confirm("此操作将删除"+e.OrganizeName+", 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var i={OrganizeCode:localStorage["ai-orgcode"],UserID:localStorage["ai-userid"],Delete:[{OrganizeID:e.OrganizeID}]};Object(o["d"])(i).then((function(e){"1"===e.Rows.result?(t.$message({message:"删除成功",type:"success"}),t.getData(),t.dialogEditVisible=!1):t.$message({message:e.Rows.remark,type:"error"})})).catch((function(e){t.$message({message:e.Rows.remark,type:"error"})}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},closeDialog:function(){this.dialogEditVisible=!1,this.getData()}}},D=z,C=(i("cb01"),i("c180"),Object(b["a"])(D,n,a,!1,null,"3b638926",null));t["default"]=C.exports},"239c":function(e,t,i){"use strict";var n=i("9e90"),a=i.n(n);a.a},"3d00":function(e,t,i){},8593:function(e,t,i){"use strict";i.d(t,"p",(function(){return a})),i.d(t,"i",(function(){return o})),i.d(t,"v",(function(){return r})),i.d(t,"B",(function(){return s})),i.d(t,"z",(function(){return l})),i.d(t,"h",(function(){return c})),i.d(t,"u",(function(){return d})),i.d(t,"o",(function(){return u})),i.d(t,"j",(function(){return g})),i.d(t,"w",(function(){return f})),i.d(t,"q",(function(){return p})),i.d(t,"l",(function(){return h})),i.d(t,"r",(function(){return m})),i.d(t,"x",(function(){return O})),i.d(t,"y",(function(){return b})),i.d(t,"A",(function(){return v})),i.d(t,"D",(function(){return L})),i.d(t,"C",(function(){return z})),i.d(t,"k",(function(){return D})),i.d(t,"m",(function(){return C})),i.d(t,"f",(function(){return y})),i.d(t,"s",(function(){return w})),i.d(t,"g",(function(){return N})),i.d(t,"t",(function(){return I})),i.d(t,"n",(function(){return x})),i.d(t,"c",(function(){return G})),i.d(t,"b",(function(){return P})),i.d(t,"d",(function(){return k})),i.d(t,"a",(function(){return A})),i.d(t,"e",(function(){return E}));var n=i("b775");function a(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=DeleteMenu",method:"post",data:e})}function o(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=AddMenu",method:"post",data:e})}function r(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=UpdateMenu",method:"post",data:e})}function s(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=GetOrganizeList",method:"post",data:e})}function l(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=GetDepartmentList",method:"post",data:e})}function c(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=AddDepartment",method:"post",data:e})}function d(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=UpdateDepartment",method:"post",data:e})}function u(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=DeleteDepartment",method:"post",data:e})}function g(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=AddRole",method:"post",data:e})}function f(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=UpdateRole",method:"post",data:e})}function p(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=DeleteRole",method:"post",data:e})}function h(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=AddUser",method:"post",data:e})}function m(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=DeleteUser",method:"post",data:e})}function O(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=UpdateUser",method:"post",data:e})}function b(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=GetCodeTypeList",method:"post",data:e})}function v(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=GetMenuList",method:"post",data:e})}function L(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=GetUserALL",method:"post",data:e})}function z(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=GetRoleUser",method:"post",data:e})}function D(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=AddRoleUser",method:"post",data:e})}function C(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=DeleteCode",method:"post",data:e})}function y(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=AddCode",method:"post",data:e})}function w(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=UpdateCode",method:"post",data:e})}function N(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=AddCodeType",method:"post",data:e})}function I(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=UpdateCodeType",method:"post",data:e})}function x(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=DeleteCodeType",method:"post",data:e})}function G(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=AddUserRole",method:"post",data:e})}function P(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=AddRoleMenu",method:"post",data:e})}function k(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=DeleteOrganize",method:"post",data:e})}function A(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=AddOrganize",method:"post",data:e})}function E(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=UpdateOrganize",method:"post",data:e})}},"9e90":function(e,t,i){},aae2:function(e,t,i){},c180:function(e,t,i){"use strict";var n=i("3d00"),a=i.n(n);a.a},cb01:function(e,t,i){"use strict";var n=i("aae2"),a=i.n(n);a.a}}]);
//# sourceMappingURL=chunk-428f8b3c.4d43ce9b.js.map