<template>
  <div>
    <el-button type="primary" @click="back"style="margin-left: 1%;margin-top: 1%">Back</el-button>
    <div>
      <div style="margin-top: 2%;">
        <img src="../assets/FZU.png" style="height: 150px;width: 150px;margin-left: 10%;position: relative">
        <span style="color: white;text-align: left;font-size: 60px;margin-left: 2%;margin-top: 3%;position: absolute;font-weight: bold">FZU_Community</span>
        <span style="color: white;text-align: left;font-size: 20px;margin-left: 35%;margin-top: 3%;position: absolute;"> "Share what's new and life moments with your friends"
        <br>
          We are committed to building Fuzhou University's own campus forum.
        </span>
      </div>
      <el-divider style="width: 90%;margin-left: 10%"></el-divider>
      <div>
        <div v-for="(item,index) in info" style="float: left;width: 30%;margin-left: 2.5%;margin-top: 3%">
          <div style="position: relative;float: left;">
            <i class="el-icon-user-solid" style="font-size: 140px;margin-left: 10%;color: white"></i>
          </div>
          <div style="float: left ;width: 70%;margin-left: 2%;align-content: center;margin-top: 2%">
            <span style="color: white;font-size: 18px;padding-bottom: 3%;">{{item.name}}</span><br><br>
            <span style="color: white;font-size: 18px;padding-top: 5%;">{{item.position}}</span><br><br>
            <span style="color: white;font-size: 18px;padding-top: 5%;">{{item.work}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  data(){
    return{
      info:[{
        name:' Shiyuan Fang',
        position:'Product manager',
        work:'Responsible for UI design, assist the front, document writing',
      },{
        name:' Yi Lin',
        position:'Front-end engineer',
        work:'Responsible for page development and part of UI design, as well as front-end testing and post-production video',
      },{
        name:' Chenghao Wang',
        position:'Front-end engineer',
        work:'Responsible for the development of part of the page, such as login and registration, sign-in system',
      },{
        name:' Jiahao chen',
        position:'Back-end engineer',
        work:'Responsible for is the back-end part of the forum module and its management module',
      },{
        name:' Jinyu Wang',
        position:'Back-end engineer',
        work:'Responsible for applying for outgoing and auditing system sections ',
      },{
        name:' Sulin Chen',
        position:'Back-end engineer',
        work:'Responsible for the three parts: Back-end logic for login and registration, get the epidemic data and saved them in a cloud database, the last is statistics some data for management. ',
      }]
    }
  },
  methods: {
    back() {
      this.$router.push('/Off-Topic')
    },
  }
}
</script>

<style scoped>

</style>