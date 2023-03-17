(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3925101c"],{"0792":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var r=function(e,t,a){if(t.trim()){var r=/^1[3456789]\d{9}$/;r.test(t.trim())||a(new Error("手机号格式错误"))}a()}},5369:function(e,t,a){},6672:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-card",{staticClass:"departmentCard"},[a("div",{staticClass:"filter-container"},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.add()}}},[e._v("添加")])],1)],1)],1),a("div",{staticClass:"filter-container"},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"组织机构"}},[a("el-cascader",{ref:"elcascader1",staticStyle:{width:"100%"},attrs:{options:e.OrgList,props:{checkStrictly:!0,expandTrigger:"hover"},clearable:"",filterable:"",placeholder:"请选择或搜索"},on:{change:e.changeOrg},model:{value:e.OrganizeID,callback:function(t){e.OrganizeID=t},expression:"OrganizeID"}})],1),a("el-form-item",{attrs:{label:"部门"}},[a("el-cascader",{key:e.cascaderKey,ref:"elcascader2",staticStyle:{width:"100%"},attrs:{options:e.DepartmentList,props:{checkStrictly:!0,expandTrigger:"hover"},clearable:"",filterable:"",placeholder:"请选择或搜索"},on:{change:e.changeVal2},model:{value:e.DepartmentID,callback:function(t){e.DepartmentID=t},expression:"DepartmentID"}})],1),a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{attrs:{placeholder:"请输入",clearable:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.search()}}},[e._v("查询")])],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.reset()}}},[e._v("重置")])],1)],1)],1),a("el-table",{ref:"table",staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{stripe:"",height:e.tableHeight,data:e.tableData,"highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"UserCode",label:"用户账号",align:"center",width:"120px"}}),a("el-table-column",{attrs:{prop:"UserName",label:"用户名称",align:"center",width:"120px"}}),a("el-table-column",{attrs:{prop:"UserTel",label:"手机号",align:"center",width:"120px"}}),a("el-table-column",{attrs:{prop:"OrganizeName",label:"组织机构",align:"center",width:"200px"}}),a("el-table-column",{attrs:{prop:"DepartmentName",label:"部门",align:"center",width:"200px"}}),a("el-table-column",{attrs:{prop:"Description",label:"描述说明",align:"center",width:"120px"}}),a("el-table-column",{attrs:{prop:"IsEnable",label:"是否启用",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return["true"===e.row.IsEnable||!0===e.row.IsEnable?a("svg-icon",{attrs:{"icon-class":"selectBox"}}):a("svg-icon",{attrs:{"icon-class":"noSelectBox"}})]}}])}),a("el-table-column",{attrs:{prop:"LastLoginDate",label:"最后登录时间",align:"center",width:"200px"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.LastLoginDate?a("span",[e._v("\n            "+e._s(e._f("parseTime")(new Date(t.row.LastLoginDate),"{y}-{m}-{d} {h}:{i}:{s}"))+"\n          ")]):e._e()]}}])}),a("el-table-column",{attrs:{prop:"LastLoginDate",label:"操作",align:"center",width:"160px",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.settingRole(t.row)}}},[e._v("设置角色")]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.edit(t.row)}}},[e._v("编辑")]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.del(t.row)}}},[e._v("删除")])]}}])})],1),a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,30,40],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalSize},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange2}})],1),a("el-dialog",{attrs:{visible:e.dialogEditVisible,title:e.dialogEditTitle,"append-to-body":!0},on:{"update:visible":function(t){e.dialogEditVisible=t}}},[a("edit-form",{attrs:{form:e.form,"dialog-edit-visible":e.dialogEditVisible},on:{closeDialog:e.closeDialog}})],1),a("el-dialog",{attrs:{visible:e.dialogRoleVisible,title:"设置角色","append-to-body":!0},on:{"update:visible":function(t){e.dialogRoleVisible=t}}},[a("role-form",{attrs:{form:e.form,keyparams:e.keyparams,"dialog-role-visible":e.dialogRoleVisible},on:{closeDialog:e.closeDialog}})],1)],1)},n=[],i=(a("8593"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"100px",rules:e.rules}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"用户账号：",prop:"UserCode"}},[a("el-input",{attrs:{placeholder:"请输入用户账号",maxlength:"60","show-word-limit":""},model:{value:e.form.UserCode,callback:function(t){e.$set(e.form,"UserCode",t)},expression:"form.UserCode"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"用户名称：",prop:"UserName"}},[a("el-input",{attrs:{placeholder:"请输入用户名称",maxlength:"60","show-word-limit":""},model:{value:e.form.UserName,callback:function(t){e.$set(e.form,"UserName",t)},expression:"form.UserName"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"组织机构：",prop:"OrganizeID"}},[a("el-cascader",{ref:"elcascader1",staticStyle:{width:"100%"},attrs:{options:e.OrgList,props:{checkStrictly:!0,expandTrigger:"hover"},clearable:"",filterable:"",placeholder:"请选择或搜索"},on:{change:e.changeOrg},model:{value:e.form.OrganizeID,callback:function(t){e.$set(e.form,"OrganizeID",t)},expression:"form.OrganizeID"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"部门：",prop:"DepartmentID"}},[a("el-cascader",{key:e.cascaderKey,ref:"elcascader2",staticStyle:{width:"100%"},attrs:{options:e.DepartmentList,props:{checkStrictly:!0,expandTrigger:"hover"},clearable:"",filterable:"",placeholder:"请选择或搜索"},on:{change:e.changeVal2},model:{value:e.form.DepartmentID,callback:function(t){e.$set(e.form,"DepartmentID",t)},expression:"form.DepartmentID"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"手机号：",prop:"UserTel"}},[a("el-input",{attrs:{placeholder:"请输入手机号",type:"number"},model:{value:e.form.UserTel,callback:function(t){e.$set(e.form,"UserTel",t)},expression:"form.UserTel"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"描述说明：",prop:"Description"}},[a("el-input",{attrs:{placeholder:"请输入描述",maxlength:"60","show-word-limit":""},model:{value:e.form.Description,callback:function(t){e.$set(e.form,"Description",t)},expression:"form.Description"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"是否启用："}},[a("el-checkbox",{model:{value:e.form.IsEnable,callback:function(t){e.$set(e.form,"IsEnable",t)},expression:"form.IsEnable"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"handle"},[a("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:function(t){return e.save()}}},[e._v("保存")]),a("el-button",{attrs:{type:""},on:{click:function(t){return e.closeDialog()}}},[e._v("取消")])],1)])],1)],1)],1)}),o=[],l=a("0792");function c(e){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}var s={props:{keyparams:{type:Object,default:function(){return{roleName:"",userCode:"",orgCode:""}}},form:{type:Object,default:function(){return{OrganizeID:"",DepartmentID:"",UserID:"",UserCode:"",UserSeq:"",UserTel:"",UserName:"",Description:"",Password:"",OrganizeName:"",ConfigJSON:"",IsEnable:!0,LoginCount:"",LastLoginDate:"",CreatePerson:"",CreateDate:"",UpdatePerson:"",UpdateDate:"",roleName:"",userCode:"",orgCode:""}}},dialogEditVisible:{type:Boolean,default:!1}},data:function(){return{loading:!1,cascaderKey:1,OrgList:[{Address:"2",Approval:"校核.dwg",ApprovalUrl:"http://121.41.23.111/FileDown/2020/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg",CertificateNO:"2",Check:"校核.dwg",CheckUrl:"http://121.41.23.111/FileDown/2020/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg",ContactPerson:"1",ContactTel:"18877776666",CreateDate:"2020-11-11T11:21:10",CreatePerson:"0af7e783c98a49008944ce2ca57f8eaf",Description:"2",Discount:"0.6",Examine:"校核.dwg",ExamineUrl:"http://121.41.23.111/FileDown/2020/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg",ExpirationTime:null,IsDelete:0,IsMember:null,JointlySign:"校核.dwg",JointlySignUrl:"http://121.41.23.111/FileDown/2020/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg",Level:"0",Logo:"校核.dwg",Organization:"校核.dwg",OrganizeCode:"1",OrganizeCode1:"JLSJ",OrganizeID:"f1cc6af023cc11eb8f4e00163e127e89",OrganizeLogin:"1",OrganizeName:"1",OrganizeType:null,ParentID:"",Proportion:"",Signature:"","SignatureUrl ":null,UpdateDate:"2020-12-02T14:17:30",UpdatePerson:"0af7e783c98a49008944ce2ca57f8eaf"},{Address:"43gsdf",Approval:null,ApprovalUrl:"http://121.41.23.111/FileDown/2020/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg",CertificateNO:null,Check:null,CheckUrl:"http://121.41.23.111/FileDown/2020/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg",ContactPerson:"1212",ContactTel:"15545454545",CreateDate:"2020-11-05T13:33:57",CreatePerson:"48ce2528c18d4097ad3cb2b88bc34705",Description:"",Discount:"0.6",Examine:null,ExamineUrl:"http://121.41.23.111/FileDown/2020/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg",ExpirationTime:null,IsDelete:0,IsMember:null,JointlySign:null,JointlySignUrl:"http://121.41.23.111/FileDown/2020/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg",Level:null,Logo:null,Organization:null,OrganizeCode:"123",OrganizeCode1:"YYZX",OrganizeID:"80460fe41f2811eba7c000163e0b5c5d",OrganizeLogin:"123",OrganizeName:"cs111",OrganizeType:null,ParentID:"",Proportion:null,Signature:null,"SignatureUrl ":null,UpdateDate:null,UpdatePerson:null},{Address:"莫干山路",Approval:"",ApprovalUrl:"http://121.41.23.111/FileDown/2021/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg",CertificateNO:"",Check:"",CheckUrl:"http://121.41.23.111/FileDown/2021/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg",ContactPerson:"赵四",ContactTel:"18258892233",CreateDate:"2021-06-23T16:50:54",CreatePerson:"c7ca16b8f40346acbe892a228173d684",Description:"",Discount:"0.6",Examine:"",ExamineUrl:"http://121.41.23.111/FileDown/2021/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg",ExpirationTime:null,IsDelete:0,IsMember:1,JointlySign:"",JointlySignUrl:"http://121.41.23.111/FileDown/2021/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg",Level:"1",Logo:"",Organization:"",OrganizeCode:"12345",OrganizeCode1:"12345",OrganizeID:"0160a755a8a943bba4a639aa2ab657bb",OrganizeLogin:"12345",OrganizeName:"测试",OrganizeType:"1",ParentID:"",Proportion:"0.4",Signature:"","SignatureUrl ":null,UpdateDate:null,UpdatePerson:""},{Address:"金山路",Approval:"",ApprovalUrl:"http://121.41.23.111/FileDown/2021/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg",CertificateNO:"",Check:"",CheckUrl:"http://121.41.23.111/FileDown/2021/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg",ContactPerson:"林兵",ContactTel:"13456504455",CreateDate:"2021-06-28T10:51:11",CreatePerson:"55083b1bf4094e9f881129e4105e8e54",Description:"",Discount:"0.6",Examine:"",ExamineUrl:"http://121.41.23.111/FileDown/2021/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg",ExpirationTime:null,IsDelete:0,IsMember:1,JointlySign:"",JointlySignUrl:"http://121.41.23.111/FileDown/2021/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg",Level:"1",Logo:"",Organization:"",OrganizeCode:"1234567",OrganizeCode1:"1234567",OrganizeID:"ee3f1bb9cfbb4588b3223836f01d2be8",OrganizeLogin:"1234567",OrganizeName:"嘉兴",OrganizeType:"1",ParentID:"",Proportion:"0.4",Signature:"","SignatureUrl ":null,UpdateDate:null,UpdatePerson:""}],DepartmentList:[{CreateDate:null,CreatePerson:null,DepartmenCode:"pw",DepartmentID:"04d8c1883f4311eba7c000163e0b5c5d",DepartmentName:"测试",label:"测试",value:"04d8c1883f4311eba7c000163e0b5c5d",Description:"",IsDelete:0,OrganizeCode:"JLSJ",OrganizeID:"92c911dc0d4f43798dee9a550d9fade7",ParentID:"",UpdateDate:null,UpdatePerson:null,children:[]},{CreateDate:null,CreatePerson:null,DepartmenCode:"pw",DepartmentID:"04d8c1883f4311eba7c000163e0b5c6d",DepartmentName:"测试2",value:"04d8c1883f4311eba7c000163e0b5c6d",label:"测试2",Description:"",IsDelete:0,OrganizeCode:"JLSJ",OrganizeID:"92c911dc0d4f43798dee9a550d9fade7",ParentID:"",UpdateDate:null,UpdatePerson:null,children:[]}],rules:{UserCode:[{required:!0,message:"请输入用户账号",trigger:"blur"}],UserName:[{required:!0,message:"请输入用户名称",trigger:"blur"}],OrganizeID:[{required:!0,message:"请选择组织机构",trigger:"change"}],DepartmentID:[{required:!0,message:"请选择部门",trigger:"change"}],UserTel:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:l["a"],trigger:"blur"}]}}},watch:{dialogEditVisible:function(){this.dialogEditVisible&&this.getOrgList()}},created:function(){this.getOrgList(),this.form.userCode},methods:{changeVal2:function(){this.$refs.elcascader2.dropDownVisible=!1},getOrgList:function(){var e=this.OrgList,t=function e(t){t.forEach((function(t){t.children&&0!==t.children.length?e(t.children):delete t.children,t.label=t.OrganizeName,t.value=t.OrganizeID}))};t(e),this.OrgList=e},GetDepartmentByOrg:function(e){},changeOrg:function(){this.$refs.elcascader1.dropDownVisible=!1,this.form.DepartmentID="";var e="";"object"===c(this.form.OrganizeID)&&(e=this.form.OrganizeID[this.form.OrganizeID.length-1]||""),e?this.GetDepartmentByOrg(e):this.cascaderKey=this.cascaderKey+1},save:function(){var e=this;this.$refs["form"].validate((function(t){if(t)return e.loading=!0,e.form.UserID?(e.$message({message:"修改成功",type:"success"}),e.$emit("closeDialog"),void e.closeLoading()):(e.$message({message:"新增成功",type:"success"}),e.$emit("closeDialog"),void e.closeLoading())}))},closeDialog:function(){this.$emit("closeDialog")},closeLoading:function(){var e=this;setTimeout((function(){e.loading=!1}),500)}}},d=s,g=(a("8683"),a("2877")),u=Object(g["a"])(d,i,o,!1,null,"748c17b4",null),f=u.exports,p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"info"},[r("img",{staticClass:"avatar",attrs:{src:a("1195")}}),r("span",{staticClass:"text"},[e._v("\n      "+e._s(e.form.UserName)+"\n          \n      "+e._s(e.form.Description)+"\n    ")])]),r("br"),r("el-row",{staticClass:"roleUser"},[r("el-col",{attrs:{span:20,offset:2}},[r("el-checkbox",{on:{change:e.changeCheckAll},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")])],1),e._l(e.userAllList,(function(t,a){return r("el-col",{key:a,staticClass:"item",attrs:{span:8,offset:2}},[r("el-checkbox",{on:{change:e.changeCheck},model:{value:t.checked,callback:function(a){e.$set(t,"checked",a)},expression:"item.checked"}},[e._v(e._s(t.RoleName))])],1)}))],2),r("br"),r("span",{staticClass:"handle",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){return e.closeDialog()}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addUser()}}},[e._v("确 定")])],1)],1)},m=[],D={props:{form:{type:Object,default:function(){return{DepartmentID:"",UserID:"",UserCode:"",UserSeq:"",UserTel:"",UserName:"",Description:"",Password:"",OrganizeName:"",ConfigJSON:"",IsEnable:!0,LoginCount:"",LastLoginDate:"",CreatePerson:"",CreateDate:"",UpdatePerson:"",UpdateDate:""}}},dialogRoleVisible:{type:Boolean,default:function(){return!1}}},data:function(){return{userAllList:[{Checked:"false",RoleCode:"gly",RoleID:"0879f605847211ea8f4e00163e127e89",RoleName:"机构管理员",UserID:null},{Checked:"true",RoleCode:"sjry",RoleID:"3f37e1989fba11eaa7c000163e0b5c5d",RoleName:"设计人员",UserID:"9f825a9b9fee4638b624b15aa13a8f5c"}],innerVisible:!1,checkAll:!1}},watch:{dialogRoleVisible:function(){this.dialogRoleVisible&&this.getUserAllData()}},created:function(){this.getUserAllData()},methods:{getUserAllData:function(){},changeCheckAll:function(){var e=this;this.userAllList.forEach((function(t){t.checked=e.checkAll}))},changeCheck:function(){var e=this.userAllList.filter((function(e){return!0===e.checked}));e.length===this.userAllList.length?this.checkAll=!0:this.checkAll=!1},addUser:function(){var e=this.userAllList.filter((function(e){return!0===e.checked})),t=[];e.map((function(e){t.push({RoleID:e.RoleID})})),this.$message({message:"编辑成功",type:"success"}),this.$emit("closeDialog")},closeDialog:function(){this.$emit("closeDialog")}}},h=D,b=(a("9f49"),Object(g["a"])(h,p,m,!1,null,"3415fe76",null)),I=b.exports;function O(e){return O="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}var C={components:{EditForm:f,RoleForm:I},data:function(){return{cascaderKey:1,OrganizeID:"",DepartmentID:"",OrgList:[{Address:"2",Approval:"校核.dwg",ApprovalUrl:"http://121.41.23.111/FileDown/2020/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg",CertificateNO:"2",Check:"校核.dwg",CheckUrl:"http://121.41.23.111/FileDown/2020/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg",ContactPerson:"1",ContactTel:"18877776666",CreateDate:"2020-11-11T11:21:10",CreatePerson:"0af7e783c98a49008944ce2ca57f8eaf",Description:"2",Discount:"0.6",Examine:"校核.dwg",ExamineUrl:"http://121.41.23.111/FileDown/2020/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg",ExpirationTime:null,IsDelete:0,IsMember:null,JointlySign:"校核.dwg",JointlySignUrl:"http://121.41.23.111/FileDown/2020/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg",Level:"0",Logo:"校核.dwg",Organization:"校核.dwg",OrganizeCode:"1",OrganizeCode1:"JLSJ",OrganizeID:"f1cc6af023cc11eb8f4e00163e127e89",OrganizeLogin:"1",OrganizeName:"1",OrganizeType:null,ParentID:"",Proportion:"",Signature:"","SignatureUrl ":null,UpdateDate:"2020-12-02T14:17:30",UpdatePerson:"0af7e783c98a49008944ce2ca57f8eaf"},{Address:"43gsdf",Approval:null,ApprovalUrl:"http://121.41.23.111/FileDown/2020/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg",CertificateNO:null,Check:null,CheckUrl:"http://121.41.23.111/FileDown/2020/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg",ContactPerson:"1212",ContactTel:"15545454545",CreateDate:"2020-11-05T13:33:57",CreatePerson:"48ce2528c18d4097ad3cb2b88bc34705",Description:"",Discount:"0.6",Examine:null,ExamineUrl:"http://121.41.23.111/FileDown/2020/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg",ExpirationTime:null,IsDelete:0,IsMember:null,JointlySign:null,JointlySignUrl:"http://121.41.23.111/FileDown/2020/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg",Level:null,Logo:null,Organization:null,OrganizeCode:"123",OrganizeCode1:"YYZX",OrganizeID:"80460fe41f2811eba7c000163e0b5c5d",OrganizeLogin:"123",OrganizeName:"cs111",OrganizeType:null,ParentID:"",Proportion:null,Signature:null,"SignatureUrl ":null,UpdateDate:null,UpdatePerson:null},{Address:"莫干山路",Approval:"",ApprovalUrl:"http://121.41.23.111/FileDown/2021/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg",CertificateNO:"",Check:"",CheckUrl:"http://121.41.23.111/FileDown/2021/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg",ContactPerson:"赵四",ContactTel:"18258892233",CreateDate:"2021-06-23T16:50:54",CreatePerson:"c7ca16b8f40346acbe892a228173d684",Description:"",Discount:"0.6",Examine:"",ExamineUrl:"http://121.41.23.111/FileDown/2021/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg",ExpirationTime:null,IsDelete:0,IsMember:1,JointlySign:"",JointlySignUrl:"http://121.41.23.111/FileDown/2021/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg",Level:"1",Logo:"",Organization:"",OrganizeCode:"12345",OrganizeCode1:"12345",OrganizeID:"0160a755a8a943bba4a639aa2ab657bb",OrganizeLogin:"12345",OrganizeName:"测试",OrganizeType:"1",ParentID:"",Proportion:"0.4",Signature:"","SignatureUrl ":null,UpdateDate:null,UpdatePerson:""},{Address:"金山路",Approval:"",ApprovalUrl:"http://121.41.23.111/FileDown/2021/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg",CertificateNO:"",Check:"",CheckUrl:"http://121.41.23.111/FileDown/2021/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg",ContactPerson:"林兵",ContactTel:"13456504455",CreateDate:"2021-06-28T10:51:11",CreatePerson:"55083b1bf4094e9f881129e4105e8e54",Description:"",Discount:"0.6",Examine:"",ExamineUrl:"http://121.41.23.111/FileDown/2021/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg",ExpirationTime:null,IsDelete:0,IsMember:1,JointlySign:"",JointlySignUrl:"http://121.41.23.111/FileDown/2021/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg",Level:"1",Logo:"",Organization:"",OrganizeCode:"1234567",OrganizeCode1:"1234567",OrganizeID:"ee3f1bb9cfbb4588b3223836f01d2be8",OrganizeLogin:"1234567",OrganizeName:"嘉兴",OrganizeType:"1",ParentID:"",Proportion:"0.4",Signature:"","SignatureUrl ":null,UpdateDate:null,UpdatePerson:""}],DepartmentList:[{CreateDate:null,CreatePerson:null,DepartmenCode:"pw",DepartmentID:"04d8c1883f4311eba7c000163e0b5c5d",DepartmentName:"测试",label:"测试",value:"04d8c1883f4311eba7c000163e0b5c5d",Description:"",IsDelete:0,OrganizeCode:"JLSJ",OrganizeID:"92c911dc0d4f43798dee9a550d9fade7",ParentID:"",UpdateDate:null,UpdatePerson:null,children:[]},{CreateDate:null,CreatePerson:null,DepartmenCode:"pw",DepartmentID:"04d8c1883f4311eba7c000163e0b5c6d",DepartmentName:"测试2",value:"04d8c1883f4311eba7c000163e0b5c6d",label:"测试2",Description:"",IsDelete:0,OrganizeCode:"JLSJ",OrganizeID:"92c911dc0d4f43798dee9a550d9fade7",ParentID:"",UpdateDate:null,UpdatePerson:null,children:[]}],staticHeight:innerHeight,tableHeight:innerHeight-330,currentPage:1,pageSize:10,totalSize:0,tableData:[{ConfigJSON:"",CreateDate:"2021-01-13T10:59:02",CreatePerson:"0af7e783c98a49008944ce2ca57f8eaf",DepartmentID:"",DepartmentName:null,Description:"",IsEnable:"true",LastLoginDate:"2021-05-07T16:19:40",LoginCount:8,OrganizeID:"b0c203fff18111ea8f4e00163e127e89",OrganizeName:"运营中心",Password:"f80920d38468262c0860c0ca3c2a41b9",RoleName:"",UpdateDate:null,UpdatePerson:"",UserCode:"体验账号",UserID:"9f825a9b9fee4638b624b15aa13a8f5c",UserName:"体验账号",UserSeq:"",UserTel:"19939186789"},{ConfigJSON:"",CreateDate:"2021-01-13T10:59:02",CreatePerson:"0af7e783c98a49008944ce2ca57f8eaf",DepartmentID:"",DepartmentName:null,Description:"",IsEnable:"true",LastLoginDate:"2021-05-07T16:19:40",LoginCount:8,OrganizeID:"b0c203fff18111ea8f4e00163e127e89",OrganizeName:"运营中心",Password:"f80920d38468262c0860c0ca3c2a41b9",RoleName:"",UpdateDate:null,UpdatePerson:"",UserCode:"体验账号1",UserID:"9f825a9b9fee4638b624b15aa13a8f5c",UserName:"体验账号1",UserSeq:"",UserTel:"19939186789"},{ConfigJSON:"",CreateDate:"2021-01-13T10:59:02",CreatePerson:"0af7e783c98a49008944ce2ca57f8eaf",DepartmentID:"",DepartmentName:null,Description:"",IsEnable:"true",LastLoginDate:"2021-05-07T16:19:40",LoginCount:8,OrganizeID:"b0c203fff18111ea8f4e00163e127e89",OrganizeName:"运营中心",Password:"f80920d38468262c0860c0ca3c2a41b9",RoleName:"",UpdateDate:null,UpdatePerson:"",UserCode:"体验账号2",UserID:"9f825a9b9fee4638b624b15aa13a8f5c",UserName:"体验账号2",UserSeq:"",UserTel:"19939186789"}],name:"",currentDepartmentRow:{DepartmentID:""},dialogEditVisible:!1,dialogRoleVisible:!1,dialogEditTitle:"新增用户",form:{DepartmentID:"",UserID:"",UserCode:"",UserSeq:"",UserTel:"",UserName:"",Description:"",Password:"",OrganizeName:"",ConfigJSON:"",IsEnable:!0,LoginCount:"",LastLoginDate:"",CreatePerson:"",CreateDate:"",UpdatePerson:"",UpdateDate:"",roleName:"",userCode:"",orgCode:""},roleName:"",userCode:"",orgCode:"",keyparams:{roleName:"",userCode:"",orgCode:""},parentList:[]}},created:function(){this.getOrgList(),this.roleName=localStorage.getItem("ai-rolename"),this.userCode=localStorage.getItem("ai-usercode"),this.orgCode=localStorage.getItem("ai-orgcode")},methods:{changeVal1:function(){this.$refs.elcascader1.dropDownVisible=!1},changeVal2:function(){this.$refs.elcascader2.dropDownVisible=!1},changeOrg:function(){this.changeVal1(),this.DepartmentID="";var e="";"object"===O(this.OrganizeID)&&(e=this.OrganizeID[this.OrganizeID.length-1]||""),e?this.GetDepartmentByOrg(e):this.cascaderKey=this.cascaderKey+1},getOrgList:function(){var e=this.OrgList,t=function e(t){t.forEach((function(t){t.children&&0!==t.children.length?e(t.children):delete t.children,t.label=t.OrganizeName,t.value=t.OrganizeID}))};t(e),this.OrgList=e},GetDepartmentByOrg:function(e){},getData:function(){},add:function(){this.form={OrganizeID:"",DepartmentID:"",UserID:"",UserCode:"",UserSeq:"",UserTel:"",UserName:"",Description:"",Password:"",OrganizeName:"",ConfigJSON:"",IsEnable:!0,LoginCount:"",LastLoginDate:"",CreatePerson:"",CreateDate:"",UpdatePerson:"",UpdateDate:"",roleName:this.roleName,userCode:this.userCode,orgCode:this.orgCode},this.dialogEditTitle="新增用户",this.dialogEditVisible=!0},edit:function(e){this.form={OrganizeID:e.OrganizeID,DepartmentID:e.DepartmentID,UserID:e.UserID,UserCode:e.UserCode,UserSeq:e.UserSeq,UserTel:e.UserTel,UserName:e.UserName,Description:e.Description,Password:e.Password,OrganizeName:e.OrganizeName,ConfigJSON:e.ConfigJSON,IsEnable:"true"===e.IsEnable,LoginCount:e.LoginCount,LastLoginDate:e.LastLoginDate,CreatePerson:e.CreatePerson,CreateDate:e.CreateDate,UpdatePerson:e.UpdatePerson,UpdateDate:e.UpdateDate},this.dialogEditVisible=!0,this.dialogEditTitle="编辑用户"},del:function(e){var t=this;this.$confirm("此操作将删除"+e.UserName+", 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$message({message:"删除成功",type:"success"})})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},settingRole:function(e){this.form.UserID=e.UserID,this.dialogRoleVisible=!0},closeDialog:function(){this.dialogEditVisible=!1,this.dialogRoleVisible=!1,this.getData()},search:function(){this.currentPage=1,this.getData()},reset:function(){this.name="",this.currentPage=1,this.cascaderKey=this.cascaderKey+1,this.DepartmentID="",this.OrganizeID="",this.getData()},handleNodeClick:function(e){this.currentDepartmentRow=e?{DepartmentID:e.DepartmentID}:{DepartmentID:""},this.getData()},handleSizeChange:function(e){this.pageSize=e,this.getData()},handleCurrentChange2:function(e){this.currentPage=e,this.getData()}}},U=C,w=(a("a9eb"),a("f9a4"),Object(g["a"])(U,r,n,!1,null,"6d148a86",null));t["default"]=w.exports},8054:function(e,t,a){},8593:function(e,t,a){"use strict";a.d(t,"p",(function(){return n})),a.d(t,"i",(function(){return i})),a.d(t,"v",(function(){return o})),a.d(t,"B",(function(){return l})),a.d(t,"z",(function(){return c})),a.d(t,"h",(function(){return s})),a.d(t,"u",(function(){return d})),a.d(t,"o",(function(){return g})),a.d(t,"j",(function(){return u})),a.d(t,"w",(function(){return f})),a.d(t,"q",(function(){return p})),a.d(t,"l",(function(){return m})),a.d(t,"r",(function(){return D})),a.d(t,"x",(function(){return h})),a.d(t,"y",(function(){return b})),a.d(t,"A",(function(){return I})),a.d(t,"D",(function(){return O})),a.d(t,"C",(function(){return C})),a.d(t,"k",(function(){return U})),a.d(t,"m",(function(){return w})),a.d(t,"f",(function(){return v})),a.d(t,"s",(function(){return y})),a.d(t,"g",(function(){return z})),a.d(t,"t",(function(){return N})),a.d(t,"n",(function(){return L})),a.d(t,"c",(function(){return S})),a.d(t,"b",(function(){return P})),a.d(t,"d",(function(){return k})),a.d(t,"a",(function(){return T})),a.d(t,"e",(function(){return x}));var r=a("b775");function n(e){return Object(r["a"])({url:"/api/service/GetMethod?GNID=DeleteMenu",method:"post",data:e})}function i(e){return Object(r["a"])({url:"/api/service/GetMethod?GNID=AddMenu",method:"post",data:e})}function o(e){return Object(r["a"])({url:"/api/service/GetMethod?GNID=UpdateMenu",method:"post",data:e})}function l(e){return Object(r["a"])({url:"/api/service/GetMethod?GNID=GetOrganizeList",method:"post",data:e})}function c(e){return Object(r["a"])({url:"/api/service/GetMethod?GNID=GetDepartmentList",method:"post",data:e})}function s(e){return Object(r["a"])({url:"/api/service/GetMethod?GNID=AddDepartment",method:"post",data:e})}function d(e){return Object(r["a"])({url:"/api/service/GetMethod?GNID=UpdateDepartment",method:"post",data:e})}function g(e){return Object(r["a"])({url:"/api/service/GetMethod?GNID=DeleteDepartment",method:"post",data:e})}function u(e){return Object(r["a"])({url:"/api/service/GetMethod?GNID=AddRole",method:"post",data:e})}function f(e){return Object(r["a"])({url:"/api/service/GetMethod?GNID=UpdateRole",method:"post",data:e})}function p(e){return Object(r["a"])({url:"/api/service/GetMethod?GNID=DeleteRole",method:"post",data:e})}function m(e){return Object(r["a"])({url:"/api/service/GetMethod?GNID=AddUser",method:"post",data:e})}function D(e){return Object(r["a"])({url:"/api/service/GetMethod?GNID=DeleteUser",method:"post",data:e})}function h(e){return Object(r["a"])({url:"/api/service/GetMethod?GNID=UpdateUser",method:"post",data:e})}function b(e){return Object(r["a"])({url:"/api/service/GetMethod?GNID=GetCodeTypeList",method:"post",data:e})}function I(e){return Object(r["a"])({url:"/api/service/GetMethod?GNID=GetMenuList",method:"post",data:e})}function O(e){return Object(r["a"])({url:"/api/service/GetMethod?GNID=GetUserALL",method:"post",data:e})}function C(e){return Object(r["a"])({url:"/api/service/GetMethod?GNID=GetRoleUser",method:"post",data:e})}function U(e){return Object(r["a"])({url:"/api/service/GetMethod?GNID=AddRoleUser",method:"post",data:e})}function w(e){return Object(r["a"])({url:"/api/service/GetMethod?GNID=DeleteCode",method:"post",data:e})}function v(e){return Object(r["a"])({url:"/api/service/GetMethod?GNID=AddCode",method:"post",data:e})}function y(e){return Object(r["a"])({url:"/api/service/GetMethod?GNID=UpdateCode",method:"post",data:e})}function z(e){return Object(r["a"])({url:"/api/service/GetMethod?GNID=AddCodeType",method:"post",data:e})}function N(e){return Object(r["a"])({url:"/api/service/GetMethod?GNID=UpdateCodeType",method:"post",data:e})}function L(e){return Object(r["a"])({url:"/api/service/GetMethod?GNID=DeleteCodeType",method:"post",data:e})}function S(e){return Object(r["a"])({url:"/api/service/GetMethod?GNID=AddUserRole",method:"post",data:e})}function P(e){return Object(r["a"])({url:"/api/service/GetMethod?GNID=AddRoleMenu",method:"post",data:e})}function k(e){return Object(r["a"])({url:"/api/service/GetMethod?GNID=DeleteOrganize",method:"post",data:e})}function T(e){return Object(r["a"])({url:"/api/service/GetMethod?GNID=AddOrganize",method:"post",data:e})}function x(e){return Object(r["a"])({url:"/api/service/GetMethod?GNID=UpdateOrganize",method:"post",data:e})}},8683:function(e,t,a){"use strict";var r=a("fa68"),n=a.n(r);n.a},"9f49":function(e,t,a){"use strict";var r=a("e721"),n=a.n(r);n.a},a9eb:function(e,t,a){"use strict";var r=a("5369"),n=a.n(r);n.a},e721:function(e,t,a){},f9a4:function(e,t,a){"use strict";var r=a("8054"),n=a.n(r);n.a},fa68:function(e,t,a){}}]);
//# sourceMappingURL=chunk-3925101c.658340b9.js.map