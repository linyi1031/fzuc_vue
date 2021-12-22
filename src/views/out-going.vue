<template>
  <div id="app">
    <div id="nav" style="width: 16.5%;height: 1000px;background-color:#182a38;position: fixed;top: 4.1%;left: 0px;">
      <img src="../assets/FZU.png" style="height: 50px;width: 50px;margin-left: 10%;position: relative">
      <span style="color: white;text-align: left;font-size: 20px;margin-left: 2%;position: absolute;margin-top: 6%;font-weight: bold">FZU_Community</span>
      <el-divider style="width: 90%;margin-left: 10%"></el-divider>
      <el-menu
          style="padding-top: 5%;text-align: left"
          default-active="8"
          class="el-menu-vertical-demo"
          background-color="#182a38"
          text-color="#fff"
          active-text-color="#52b4ff">
        <el-menu-item index="1" style="padding-left: 16%" @click="home">
          <i class="el-icon-news" style="color: white"></i>
          <span slot="title">Off-Topic Discussion</span>
        </el-menu-item>
        <el-menu-item index="2" style="padding-left: 16%" @click="sec">
          <i class="el-icon-thumb" style="color: white"></i>
          <span slot="title">Lost and Found office</span>
        </el-menu-item>
        <el-menu-item index="3" style="padding-left: 16%" @click="thi">
          <i class="el-icon-money" style="color: white"></i>
          <span slot="title">Part-time module</span>
        </el-menu-item>
        <el-menu-item index="4" style="padding-left: 16%" @click="fou">
          <i class="el-icon-postcard" style="color: white"></i>
          <span slot="title">Club activity</span>
        </el-menu-item>
        <el-menu-item index="5" style="padding-left: 16%" @click="fif">
          <i class="el-icon-sold-out" style="color: white"></i>
          <span slot="title">Idles items transfer</span>
        </el-menu-item>
        <el-menu-item index="6" style="padding-left: 16%" @click="six">
          <i class="el-icon-office-building" style="color: white"></i>
          <span slot="title">Campus Notification</span>
        </el-menu-item>
        <el-menu-item index="7" style="padding-left: 16%" @click="seven">
          <i class="el-icon-map-location" style="color: white"></i>
          <span slot="title">Epidemic Map</span>
        </el-menu-item>
        <el-menu-item index="8" style="padding-left: 16%" @click="eight">
          <i class="el-icon-edit" style="color: white"></i>
          <span slot="title">Outgoing application</span>
        </el-menu-item>
        <el-menu-item index="9" style="padding-left: 16%" @click="nine">
          <i class="el-icon-date" style="color: white"></i>
          <span slot="title">Daily check</span>
        </el-menu-item>
      </el-menu>
      <el-divider></el-divider>
      <div style="margin-top: -5%">
        <span class="a2" style="color: white;margin-left: 20%;margin-top: -3%">©2021 <i style="font-weight: bold" @click="about">About Team 3</i></span>
        <br>
      </div>
    </div>
    <div style="width: 82.5%;float: left;margin-bottom: 1%" >
      <div style="margin-top: 15px;padding-bottom: 2%;margin-left:20.19%;margin-bottom:15px;background-color: white;border-radius: 30px;background-color: #eff3f7;width: 100%;position: relative">
        <el-input
            style="width: 35%;margin:1.5% 0 0 2%;"
            placeholder="Search for your want"
            suffix-icon="el-icon-search"
            v-model="input1">
        </el-input>
        <el-button style="margin-left: 2%" type="primary">search</el-button>
        <el-popover
            placement="bottom"
            width="100"
            trigger="hover">
          <div>
            <span style="padding-left: 14%;margin-top: 0.8%;font-size: 18px;margin-left: 1%;text-overflow: ellipsis;width:80px;overflow: hidden;white-space: nowrap;">Hi! {{ message.nickname }}</span>
            <el-menu
                style="padding-top: 5%;text-align: left"
                class="el-menu-vertical-demo"
                active-text-color="black">
              <el-menu-item index="1" @click="open">
                <i class="el-icon-s-custom" style="color: gray"></i>
                <span slot="title">Your friends</span>
              </el-menu-item>
              <el-menu-item index="2" @click="open">
                <i class="el-icon-s-tools" style="color: gray"></i>
                <span slot="title">Setting</span>
              </el-menu-item>
              <el-menu-item index="3" @click="manage">
                <i class="el-icon-s-claim" style="color: gray"></i>
                <span slot="title">Management</span>
              </el-menu-item>
              <el-menu-item index="4" @click="Log_out">
                <i class="el-icon-right" style="color: gray"></i>
                <span slot="title">Log-Out</span>
              </el-menu-item>
            </el-menu>
          </div>
          <div class="block" slot="reference" style="float: right;margin-right: 8%;margin-top: 1.5%;"><el-avatar :size="50" :src="circleUrl2" size="medium" style="position: relative"></el-avatar><span style="position: absolute;margin-top: 0.8%;font-size: 18px;margin-left: 1%;text-overflow: ellipsis;width: 6%;overflow: hidden;white-space: nowrap;">Hi! {{ message.nickname }}</span></div>
        </el-popover>
        <el-popover
            placement="bottom"
            width="200"
            trigger="hover">
          <span>oops!</span><br>
          <span>You have no notice here!</span>
          <i class="el-icon-message-solid" slot="reference" style="color: #acacfc;float: right;font-size: 30px;margin-right: 2%;margin-top: 1.8%"></i>
        </el-popover>
        <el-popover
            placement="bottom"
            width="250"
            trigger="hover">
          <div class="a1">
            <div style="float: left;margin-left: 2%;margin-top: 1.5%;" @click="open">
              <el-avatar :size="50" :src="circleUrl3" size="medium" style="position: relative"></el-avatar>
              <span style="position: absolute;width: 220px;margin-left: 2%;margin-top: 3%"><span style="font-weight: bold">Tom:</span> How are you going?</span>
            </div>
          </div>
          <i class="el-icon-s-comment" slot="reference" style="color: #acacfc;float: right;font-size: 30px;margin-right: 2%;margin-top: 1.8%"></i>
        </el-popover>
        <el-popover
            placement="bottom"
            width="260"
            trigger="hover">
          <div style="width: 130px;text-align: center;float: left;border-radius: 10px;margin-top: 5%" class="a1" @click="open">
            <i class="el-icon-document-add" style="font-size: 40px;color: lightblue"></i><br>
            <span>Create Blog</span>
          </div>
          <div style="width: 130px;text-align: center;float: left;border-radius: 10px;margin-top: 5%" class="a1"  @click="open">
            <i class="el-icon-date" style="font-size: 40px;color: lightpink"></i><br>
            <span>Create Event</span>
          </div>
          <div style="width: 130px;text-align: center;float: left;border-radius: 10px;margin-top: 5%" class="a1"  @click="open">
            <i class="el-icon-user-solid" style="font-size: 40px;color: lightgreen"></i><br>
            <span>Create Group</span>
          </div>
          <div style="width: 130px;text-align: center;float: left;border-radius: 10px;margin-top: 5%" class="a1"  @click="open">
            <i class="el-icon-s-flag" style="font-size: 40px;color: lightsalmon"></i><br>
            <span>Create Page</span>
          </div>
          <i class="el-icon-menu " slot="reference" style="color: #acacfc;float: right;font-size: 30px;margin-right: 2%;margin-top: 1.8%"></i>
        </el-popover>
        <br>
        <el-divider></el-divider>
        <div class="left" style="width: 50%;padding-bottom: 2%;min-height: 620px;border-right: 1px solid lightgray">
          <div style="width: 50%;margin-left: 20%">
            <h2 style="padding-left: 40%">Outgoing apply</h2>
            <el-form ref="form" :model="form1" label-width="120px" style="padding-top: 1%">
              <el-form-item label="Account">
                <el-input v-model="form1.acc" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="Phone">
                <el-input v-model="form1.phone" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="Travel Area">
                <el-select v-model="form1.area1" placeholder="Choose Travel area">
                  <el-option label="Fuzhou" value=1></el-option>
                  <el-option label="Fujian province" value=2></el-option>
                  <el-option label="Fujian outside" value=3></el-option>
                  <el-option label="Overseas" value=4></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Through Area">
                <el-select v-model="form1.area2" placeholder="Choose through area">
                  <el-option label="Qishang area" value=1></el-option>
                  <el-option label="Yishang area" value=2></el-option>
                  <el-option label="Tongpan area" value=3></el-option>
                  <el-option label="Quangang area" value=4></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="begin time">
                <el-date-picker
                    v-model="form1.date1"
                    type="datetime"
                    placeholder="begin time">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="end time">
                <el-date-picker
                    v-model="form1.date2"
                    type="datetime"
                    placeholder="end time">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="reason">
                <el-input type="textarea" v-model="form1.reason" :rows="5"></el-input>
              </el-form-item>
              <el-form-item style="padding-left: 8%">
                <el-button type="primary" @click="onSubmit">apply</el-button>
                <el-button>cancel</el-button>
              </el-form-item>
            </el-form>
          </div>

        </div>
        <div class="right" style="width: 45%;float: right;position: absolute;top:100px;left: 53%;">
          <h2 style="padding-left: 35%">Your applications</h2>
          <div class="boxes">
            <template>
              <el-table
                  :data="tableData"
                  height="500"
                  @row-click="handle"
                  style="width: 100%">
                <el-table-column
                    prop="startTime"
                    label="Start Time"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="passAreaInfo"
                    label="Through Area"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="status"
                    label="state"
                    show-overflow-tooltip>
                </el-table-column>
              </el-table>
            </template>
          </div>

        </div>
        <div v-if="show" class="show">
          <div class="msg_pass2">
            <div style="padding-left: 34%"><h4 class="msg_pass_title1">Application Details</h4></div>
            <el-form ref="form" :model="form2" label-width="120px" style="padding-top: 1%">
              <el-form-item label="Account" style="width: 80%">
                <el-input v-model="form1.acc" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="Phone" style="width: 80%">
                <el-input v-model="form1.phone" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="Travel Area" style="width: 80%">
                <el-select v-model="form2.travelAreaInfo" placeholder="Choose Travel area" :disabled="true">
                  <el-option label="Fuzhou" value=1></el-option>
                  <el-option label="Fujian province" value=2></el-option>
                  <el-option label="Fujian outside" value=3></el-option>
                  <el-option label="Overseas" value=4></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Through Area" style="width: 80%">
                <el-select v-model="form2.passAreaInfo" placeholder="Choose through area" :disabled="true">
                  <el-option label="Qishang area" value=1></el-option>
                  <el-option label="Yishang area" value=2></el-option>
                  <el-option label="Tongpan area" value=3></el-option>
                  <el-option label="Quangang area" value=4></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="begin time" style="width: 80%">
                <el-input v-model="form2.startTime" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="end time" style="width: 80%">
                <el-input v-model="form2.lastTime" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="reason"  style="width: 80%">
                <el-input v-model="form2.reasonContent" :disabled="true"></el-input>
              </el-form-item>
            </el-form>
            <div style="padding-left: 24%">
              <el-button style="flex: 1;height: 30px !important;line-height: 5px" @click="change" type="primary">change</el-button>
              <el-button style="flex: 1;height: 30px !important;line-height: 5px" @click="remove" type="danger">delete</el-button>
              <el-button style="flex: 1;height: 30px !important;line-height: 5px" @click="show=false">close</el-button>
            </div>
          </div>
        </div>
        <div v-if="show2" class="show">
          <div class="msg_pass2">
            <div style="padding-left: 34%"><h4 class="msg_pass_title1">Application Details</h4></div>
            <el-form ref="form" :model="form1" label-width="120px" style="padding-top: 1%">
              <el-form-item label="Account">
                <el-input v-model="form1.acc" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="Phone">
                <el-input v-model="form1.phone" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="Travel Area">
                <el-select v-model="form1.area1" placeholder="Choose Travel area">
                  <el-option label="Fuzhou" value=1></el-option>
                  <el-option label="Fujian province" value=2></el-option>
                  <el-option label="Fujian outside" value=3></el-option>
                  <el-option label="Overseas" value=4></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Through Area">
                <el-select v-model="form1.area2" placeholder="Choose through area">
                  <el-option label="Qishang area" value=1></el-option>
                  <el-option label="Yishang area" value=2></el-option>
                  <el-option label="Tongpan area" value=3></el-option>
                  <el-option label="Quangang area" value=4></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="begin time">
                <el-date-picker
                    v-model="form1.date1"
                    type="datetime"
                    placeholder="begin time">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="end time">
                <el-date-picker
                    v-model="form1.date2"
                    type="datetime"
                    placeholder="end time">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="reason">
                <el-input type="textarea" v-model="form1.reason" :rows="5"></el-input>
              </el-form-item>
            </el-form>
            <div style="padding-left: 24%">
              <el-button style="flex: 1;height: 30px !important;line-height: 5px" @click="submit" type="primary">submit</el-button>
              <el-button style="flex: 1;height: 30px !important;line-height: 5px" @click="show2=false">cancel</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "Off-Topic",
  data(){
    return{
      tableData:[],
      form2:{},
      form1:{
        acc:'',
        phone:'',
        area1:'',
        area2:'',
        date1:'',
        date2:'',
        reason:'',
      },
      fileList:[],
      img:'',
      cover:'cover',
      srcList:[],
      headers:{
        Authorization: localStorage.token
      },
      message:{},
      loading:true,
      input:'',
      input2:'',
      categoryId:1,
      thumbShow:true,
      show:false,
      show2:false,
      A:{},
      C:[],
      form:{
        title:'',
        contentText:'',
        summary:'',
      },
      direction:'rtl',
      drawer:false,
      drawer2:false,
      tabPosition:'left',
      articleId:1,
      data:'',
      indexId:0,
      config:{
      },
      input1:'',
      circleUrl:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      circleUrl2:'https://img0.baidu.com/it/u=599045285,3012701325&fm=26&fmt=auto',
      circleUrl3:'https://img0.baidu.com/it/u=2750626237,1051246873&fm=26&fmt=auto',
      circleUrl4:'https://img2.baidu.com/it/u=1705326576,1210829699&fm=26&fmt=auto',
      circleUrl5:'https://img1.baidu.com/it/u=3762563167,1544396654&fm=26&fmt=auto',
      circleUrl6:'https://img2.baidu.com/it/u=2953908856,3466344438&fm=26&fmt=auto',
      article:[],
      rules: {
        title: [
          { required: true, message: 'required', trigger: 'blur' },
        ],
        summary: [
          { required: true, message: 'required', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    let _this=this
    this.data={
      token:localStorage.token
    }
    this.config = {
      method: 'post',
      url: 'http://47.96.236.167:8080/user/message',
      headers: {
        'Content-Type': 'application/json',
        'token':localStorage.token
      },
      data:this.data
    }
    axios(this.config).then(function(response) {
      _this.message=response.data.content
      _this.form1.acc=response.data.content.account
      _this.form1.phone=response.data.content.phoneNumber
      if(response.data.status == 0){
        alert("You have not logged in!")
        location.href = "/"
      }
    }).catch(function(error) {
      console.log(error)
    });
  },
  methods:{
    about(){
      this.$router.push('/about');
    },
    submit(){
      let _this=this
      this.data={
        lastTime: this.handleTIme(_this.form1.date2),
        passAreaId: parseInt(_this.form1.area2),
        reasonContent: _this.form1.reason,
        startTime: this.handleTIme(_this.form1.date1),
        travelAreaId: parseInt(_this.form1.area1),
        indexId:_this.indexId
      }
      console.log(this.data)
      this.config={
        method:'post',
        url:'http://47.96.236.167:8080/outgoing/modification',
        headers:{
          'Content-Type':'application/json',
          'token':localStorage.token
        },
        data:this.data
      }
      axios(this.config).then(function(response){
        if(response.data.success){
          alert('successfully')
          _this.form1={
            acc:_this.form1.acc,
            phone:_this.form1.phone,
            area1:'',
            area2:'',
            date1:'',
            date2:'',
            reason:'',
          }
          _this.config = {
            method: 'post',
            url: 'http://47.96.236.167:8080/outgoing/search',
            headers: {
              'Content-Type': 'application/json',
              'token':localStorage.token
            },
          }
          axios(_this.config).then(function(response) {
            _this.tableData=response.data.data
            _this.show2=false
          }).catch(function(error) {
            console.log(error)
          });
        }
      }).catch(function (error){

      });
    },
    change(){
      let _this=this
      _this.form1={
            acc:_this.form1.acc,
            phone:_this.form1.phone,
            area1:'',
            area2:'',
            date1:'',
            date2:'',
            reason:'',
      }
      _this.show=false
      _this.show2=true
    },
    remove(){
      let _this=this
      this.config={
        method:'post',
        url:'http://47.96.236.167:8080/outgoing/delete',
        headers:{
          'Content-Type': 'application/json',
          'token':localStorage.token
        },
        data: {indexId:_this.indexId},
      }
      axios(this.config).then(function(response){
        if(response.data.success){
          alert('successfully')
          _this.config = {
            method: 'post',
            url: 'http://47.96.236.167:8080/outgoing/search',
            headers: {
              'Content-Type': 'application/json',
              'token':localStorage.token
            },
          }
          axios(_this.config).then(function(response) {
            _this.tableData=response.data.data
            _this.show=false
          }).catch(function(error) {
            console.log(error)
          });
        }
      }).catch(function (error){
      });
    },
    handle(row){
      this.show=true
      let _this=this
      _this.form2=row
      _this.indexId=_this.form2.indexId
      console.log(_this.form2)
    },
    timestampToTime (time) {
      var date = new Date(time)
      let y = date.getFullYear()
      let MM = date.getMonth() + 1
      MM = MM < 10 ? ('0' + MM) : MM
      let d = date.getDate()
      d = d < 10 ? ('0' + d) : d
      let h = date.getHours()
      h = h < 10 ? ('0' + h) : h
      let m = date.getMinutes()
      m = m < 10 ? ('0' + m) : m
      let s = date.getSeconds()
      return y + '-' + MM + '-' + d + ' ' + h + ':' + m +':' + s
    },
    Log_out(){
      this.data={
        token:localStorage.token
      }
      this.config={
        method:'post',
        url:'http://47.96.236.167:8080/user/delete',
        headers:{
          'Content-Type':'application/json',
          'token':localStorage.token
        },
        data:this.data
      }
      axios(this.config).then(function(response){
        location.href = "/"
      }).catch(function (error){

      });
    },
    open(){
      this.$message({message: 'Sorry, function is not online, please look forward to it',type: 'warning'});
    },
    manage(){
      this.$router.push('/manage-user');
    },
    onSubmit(){
      let _this=this
      console.log(_this.form1)
      this.data={
        lastTime: this.handleTIme(_this.form1.date2),
        passAreaId: parseInt(_this.form1.area2),
        reasonContent: _this.form1.reason,
        startTime: this.handleTIme(_this.form1.date1),
        travelAreaId: parseInt(_this.form1.area1)
      }
      console.log(this.data)
      this.config={
        method:'post',
        url:'http://47.96.236.167:8080/outgoing/application',
        headers:{
          'Content-Type':'application/json',
          'token':localStorage.token
        },
        data:this.data
      }
      axios(this.config).then(function(response){
        if(response.data.success){
          alert('successfully')
          _this.config = {
            method: 'post',
            url: 'http://47.96.236.167:8080/outgoing/search',
            headers: {
              'Content-Type': 'application/json',
              'token':localStorage.token
            },
          }
          axios(_this.config).then(function(response) {
            _this.tableData=response.data.data
            _this.form1={
              acc:_this.form1.acc,
              phone:_this.form1.phone,
              area1:'',
              area2:'',
              date1:'',
              date2:'',
              reason:'',
            }
          }).catch(function(error) {
            console.log(error)
          });
        }
      }).catch(function (error){

      });
    },
    onCancel(){
      this.drawer=false
    },
    handleClose(done) {
      this.$confirm('Confirm closure？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    },
    handleTIme(time){
      var timeAfter=this.timestampToTime(time.getTime())
      return timeAfter
    },
    home(){
      this.$router.push('/Off-Topic');
    },
    sec(){
      this.$router.push('/Lost_Found');
    },
    thi(){
      this.$router.push('/Part-time');
    },
    fou(){
      this.$router.push('/Club');
    },
    fif(){
      this.$router.push('/Idles_items_transfer');
    },
    six(){
      this.$router.push('/Campus_notification');
    },
    seven(){
      this.$router.push('/epidemic_map');
    },
    eight(){
      this.$router.push('/outgoing');
    },
    nine(){
      this.$router.push('/daily-check');
    },
  },
  mounted() {
    let _this=this
    this.config = {
      method: 'post',
      url: 'http://47.96.236.167:8080/outgoing/search',
      headers: {
        'Content-Type': 'application/json',
        'token':localStorage.token
      },
    }
    axios(this.config).then(function(response) {
      _this.tableData=response.data.data
      console.log(response.data.data)
    }).catch(function(error) {
      console.log(error)
    });
  }
}

</script>

<style scoped>
.thumb :hover{
  cursor: pointer;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.boxes{
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 1px 9px #d2d2d2;;
  padding: 10px;
  width: 90%;
  margin-left: 4%;
  margin-top: 3%;
  margin-bottom: 1.5%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {

}.a1:hover{
   background-color: #f3f3f3;
   cursor: pointer;
 }

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #182a38;
}
#nav .el-menu-item{
  font-size: 15px;
}
#nav .el-menu-item.is-active{
  background-color: #182a38 !important;
  font-size: 18px;
}
.el-menu{
  border: none;
}

.a2:hover{
  cursor: pointer;
  color: #182a38;
}
.show{
  background: rgba(0,0,0, 0.8);
  position: fixed;
  z-index: 300;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.msg_pass2{
  width: 500px;height: 620px;background-color: #fff;color: #3c4248;padding: 20px;position: absolute;border-radius: 10px;
  top: 50%;left: 50%;transform: translate(-50%,-50%)
}
</style>
