<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path:'/home'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path:'/home/menu'}">菜单列表</el-breadcrumb-item>
      <el-breadcrumb-item>菜单添加</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="菜单名称" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>

      <el-form-item label="上级菜单" prop="pid">
        <el-select v-model="ruleForm.pid" placeholder="请选择">
          <el-option label="顶级菜单" value="0"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      
      <el-form-item label="菜单类型" prop="type">
        <el-radio-group v-model="ruleForm.type">
          <el-radio label="1">目录</el-radio>
          <el-radio label="2">菜单</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="菜单图标" prop="icon" v-show="ruleForm.type == 1">
        <el-input v-model="ruleForm.icon"></el-input>
      </el-form-item>

      <el-form-item label="菜单地址" prop="url" v-show="ruleForm.type == 2">
        <el-input v-model="ruleForm.url"></el-input>
      </el-form-item>

      <el-form-item label="状态" prop="status">
        <el-switch v-model="ruleForm.status"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
     data() {
      return {
        ruleForm: {
          title: '',
          pid: '',
          status:true,
          type: "",
          icon: '',
          url:""
        },
        rules: {
          title: [
            { required: true, message: '请输入菜单名称', trigger: 'blur' }
          ],
          pid: [
            { required: true, message: '请选择上级菜单', trigger: 'change' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.ruleForm.status = this.ruleForm.status ? 1 : 2
            this.$http.post("/menuadd",this.ruleForm).then(res=>{
                console.log(res);
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
     
    }
  
};
</script>

<style lang="stylus" scoped>
.demo-ruleForm{
    margin-top:20px;
}
</style>