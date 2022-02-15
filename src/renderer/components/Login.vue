<template>

<div class="form">
    <a-divider>ACCESS TOKEN</a-divider>
    <div class="pass">
          <a-form layout="inline" :form="form" @submit="handleSubmit">
    <a-form-item :validate-status="userNameError() ? 'error' : ''" :help="userNameError() || ''">
      <a-input
        v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] },
        ]"
        placeholder="Username"
      >
        <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item :validate-status="passwordError() ? 'error' : ''" :help="passwordError() || ''">
      <a-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
        type="password"
        placeholder="Password"
      >
        <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit" :disabled="hasErrors(form.getFieldsError())">
        Log in
      </a-button>
    </a-form-item>
  </a-form>
    </div>
     <a-divider>API KEY</a-divider>
    <div class="key">
         <a-input-search placeholder="input your API KEY " enter-button='login' @search="onSearch" />

    </div>
    <div class="bottom">
        <div class="icon">
            <a-result title="https://github.com/bigsizeme/">
    <template #icon>
      <a-icon type="github"  theme="filled" style="color:black" />
    </template>
 </a-result>
        </div>
    </div>
    
</div>


</template>


<script>
import SystemInformation from './LandingPage/SystemInformation'
    function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
    }
    export default{
         data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: 'horizontal_login' }),
    };
  },
  mounted() {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields();
    });
  },
  methods: {
    // Only show error after a field is touched.
    userNameError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('userName') && getFieldError('userName');
    },
    // Only show error after a field is touched.
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('password') && getFieldError('password');
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
          let accesstoken ='';
        if (!err) {
          console.log('Received values of form: ', values);
          let url = 'https://api.zoomeye.org/user/login';
          let result='';
          result =   this.$http({
              method:'post',
              url:url,
              data:{
                  username:values.userName,
                  password:values.password
              }
          })
        console.log('result',result)
          result.then((data)=>{
              console.log('status',data.status)
              if(data.status == 200){
              accesstoken = data.data.access_token;
               console.log(accesstoken)
                 return this.$router.push({
                        name:'landing-page',
                        params:{
                            accesstoken
                        }
          }); 
              }
          }
          )
          .catch(()=>{
                      this.$message.warning(
                        'Check your username and password!',
                        5,
                    );
          })
        }
      });
    },
    onSearch(value) {
 console.log(value);
      if(value==''){
         this.$message.warning(
        'Your API key not null!',
        5,
      );
      }else{
            return this.$router.push({
                name:'landing-page',
                    params:{
                        value
                    }
          }); 
          
      }
    },
  },
        
        
    }

</script>
<style>
    .pass{
        padding: 20px;
    }
    .key{
        padding: 20px;
    }
    .bottom{
        display: flex;
            text-align:center;
            margin-left: 20%;
    }
    .icon{
        padding: 80px;
        justify-content: space-between;
       text-align:center;
    }

</style>
