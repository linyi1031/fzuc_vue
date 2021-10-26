<template>
  <div id="app">
    <div id="nav" style="width: 16.5%;height: 1000px;background-color:#1c3faa;position: fixed;top: 4.1%;left: 0px;">
      <img src="../assets/FZU.png" style="height: 50px;width: 50px;margin-left: 10%;position: relative">
      <span style="color: white;text-align: left;font-size: 20px;margin-left: 2%;position: absolute;margin-top: 6%;font-weight: bold">FZU_Community</span>
      <el-divider style="width: 90%;margin-left: 10%"></el-divider>
      <el-menu
          style="padding-top: 5%;text-align: left"
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#1c3faa"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
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
        <el-menu-item index="7" style="padding-left: 16%" @click="">
          <i class="el-icon-map-location" style="color: white"></i>
          <span slot="title">Epidemic Map</span>
        </el-menu-item>
        <el-menu-item index="8" style="padding-left: 16%" @click="">
          <i class="el-icon-edit" style="color: white"></i>
          <span slot="title">Outgoing application</span>
        </el-menu-item>
        <el-menu-item index="9" style="padding-left: 16%">
          <i class="el-icon-date" style="color: white"></i>
          <span slot="title">View the history module</span>
        </el-menu-item>
      </el-menu>
      <el-divider></el-divider>
      <div style="margin-top: -5%">
        <span class="a2" style="color: white;margin-left: 30%;margin-top: -3%">©2021 <i style="font-weight: bold">Team 3</i></span>
        <br>
      </div>
    </div>
    <div style="width: 82.5%;float: left;margin-bottom: 1%" >
      <div style="margin-top: 15px;margin-left:20.19%;margin-bottom:15px;background-color: white;border-radius: 30px;background-color: #eff3f7;width: 100%;position: relative">
        <el-input
            style="width: 35%;margin:1.5% 0 0 2%;"
            placeholder="Search for friend, videos and more"
            suffix-icon="el-icon-search"
            v-model="input1">
        </el-input>
        <el-popover
            placement="bottom"
            width="100"
            trigger="hover">
          <div>
            <el-menu
                style="padding-top: 5%;text-align: left"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                active-text-color="#52b4ff">
              <el-menu-item index="1">
                <i class="el-icon-s-custom" style="color: gray"></i>
                <span slot="title">Your friends</span>
              </el-menu-item>
              <el-menu-item index="2">
                <i class="el-icon-s-tools" style="color: gray"></i>
                <span slot="title">Setting</span>
              </el-menu-item>
              <el-menu-item index="3" >
                <i class="el-icon-right" style="color: gray"></i>
                <span slot="title">Log-Out</span>
              </el-menu-item>
            </el-menu>
          </div>
          <div class="block" slot="reference" style="float: right;margin-right: 2%;margin-top: 1.5%"><el-avatar :size="50" :src="circleUrl2" size="medium"></el-avatar></div>
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
            <div style="float: left;margin-left: 2%;margin-top: 1.5%;">
              <el-avatar :size="50" :src="circleUrl3" size="medium" style="position: relative"></el-avatar>
              <span style="position: absolute;width: 220px;margin-left: 2%;margin-top: 3%"><span style="font-weight: bold">Tom:</span> How are you going?</span>
            </div>
          </div>
          <i class="el-icon-s-comment" slot="reference" style="color: #acacfc;float: right;font-size: 30px;margin-right: 2%;margin-top: 1.8%"></i>
      </el-popover><el-popover
          placement="bottom"
          width="260"
          trigger="hover">
        <div style="width: 130px;text-align: center;float: left;border-radius: 10px;margin-top: 5%" class="a1">
          <i class="el-icon-document-add" style="font-size: 40px;color: lightblue"></i><br>
          <span>Create Blog</span>
        </div>
        <div style="width: 130px;text-align: center;float: left;border-radius: 10px;margin-top: 5%" class="a1">
          <i class="el-icon-date" style="font-size: 40px;color: lightpink"></i><br>
          <span>Create Event</span>
        </div>
        <div style="width: 130px;text-align: center;float: left;border-radius: 10px;margin-top: 5%" class="a1">
          <i class="el-icon-user-solid" style="font-size: 40px;color: lightgreen"></i><br>
          <span>Create Group</span>
        </div>
        <div style="width: 130px;text-align: center;float: left;border-radius: 10px;margin-top: 5%" class="a1">
          <i class="el-icon-s-flag" style="font-size: 40px;color: lightsalmon"></i><br>
          <span>Create Page</span>
        </div>
        <i class="el-icon-menu " slot="reference" style="color: #acacfc;float: right;font-size: 30px;margin-right: 2%;margin-top: 1.8%"></i>
      </el-popover>
        <br>
        <el-divider></el-divider>
        <div class="left" style="width: 60%;padding-bottom: 2%;min-height: 1200px">
          <el-carousel :interval="4000" type="card" height="200px" style="width:98%;margin-left: 4%;">
            <el-carousel-item style="border-radius: 10px">
              <img src="../assets/1.jpg" style="height:100%;width:100%;" alt="图片丢失了"/>
            </el-carousel-item>
            <el-carousel-item style="border-radius: 10px">
              <img src="../assets/2.jpg" style="height:100%;width:100%;" alt="图片丢失了"/>
            </el-carousel-item>
            <el-carousel-item style="border-radius: 10px">
              <img src="../assets/3.jpg" style="height:100%;width:100%;" alt="图片丢失了"/>
            </el-carousel-item>
            <el-carousel-item style="border-radius: 10px">
              <img src="../assets/4.jpg" style="height:100%;width:100%;" alt="图片丢失了"/>
            </el-carousel-item>
            <el-carousel-item style="border-radius: 10px">
              <img src="../assets/5.jpg" style="height:100%;width:100%;" alt="图片丢失了"/>
            </el-carousel-item>
          </el-carousel>
          <div class="boxes">
            <div style="width: 100%">
              <div style="position:relative;">
                <el-avatar :size="50" :src="circleUrl2" style="margin-left: 2%;"></el-avatar>
                <span style="line-height: 34px;font-size: 25px;margin-left: 4%;position: absolute;margin-top: 1.5%">Hi! What are you thinking now?</span>
              </div>
              <div style="width: 100%;border-radius: 50px;position: relative">
                <el-input
                    style="width: 85%;margin:1.5% 0 0 2%;"
                    placeholder="Show your life here!"
                    v-model="input1">
                </el-input>
                <i class="el-icon-picture" style="color: gray;font-size: 33px;line-height: 20px;position: absolute;margin-top: 3%;margin-left: 2%"></i>
              </div>
            </div>
          </div>
          <div v-for="item in article" class="boxes">
            <div style="position: relative"><el-avatar :size="50" :src="circleUrl5" style="margin-left: 2%;"></el-avatar>
              <span style="position:absolute;margin-left: 1%;margin-top: 1%;font-weight: bold">{{item.name}}</span>
              <span style="position:absolute;margin-left: 1%;margin-top: 4%">{{item.T}} Hrs <i class="el-icon-user"></i></span>
              <span style="position:absolute;margin-left: 87%;margin-top: 0.5%;font-size: 20px"><i class="el-icon-more"></i></span>
            </div>
            <div style="position: relative">
              <h3 style="margin-left: 3%">{{item.title}}</h3>
              <span style="margin-left:3%">{{item.S}}</span>
              <el-divider></el-divider>
              <div style="position: relative;margin-top: -2%;padding-bottom: 3.5%">
                <div style="text-align: center;float: left;width: 25%">
                  <span><i class="el-icon-star-on" style="font-size: 22px;margin-right: 2px"></i> 3 Likes</span>
                </div>
                <div style="text-align: center;float: left;width: 25%">
                  <span><i class="el-icon-chat-line-square" style="font-size: 20px;margin-right: 2px"></i> {{item.com_c}} Comments</span>
                </div>
                <div style="text-align: center;float: left;width: 25%">
                  <span><i class="el-icon-user-solid" style="font-size: 20px;margin-right: 2px"></i> {{item.VC}} Views</span>
                </div>
                <div style="text-align: center;float: left;width: 25%">
                  <span><i class="el-icon-s-flag" style="font-size: 20px;margin-right: 2px"></i> 8 Saves </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="right" style="width: 35%;float: right;position: absolute;top:140px;left: 63%;">
          <div>
            <h3 style="margin-left: 1%">Trending !</h3>
            <el-tag type="info" color="#d8dde1" style="margin-left: 4%;cursor: pointer">#hello</el-tag>
            <el-tag type="info" color="#d8dde1" style="margin-left: 4%;cursor: pointer">#Good Morning</el-tag>
            <el-tag type="info" color="#d8dde1" style="margin-left: 4%;cursor: pointer">#study</el-tag>
            <el-tag type="info" color="#d8dde1" style="margin-left: 4%;cursor: pointer">#test</el-tag>
            <el-tag type="info" color="#d8dde1" style="margin-left: 4%;cursor: pointer">#work hard</el-tag>
            <el-tag type="info" color="#d8dde1" style="margin-left: 4%;margin-top: 1%;cursor: pointer">#have a nice day</el-tag>
            <el-tag type="info" color="#d8dde1" style="margin-left: 4%;cursor: pointer">#Good Morning</el-tag>
            <el-tag type="info" color="#d8dde1" style="margin-left: 4%;cursor: pointer">#news</el-tag>
          </div>
          <el-divider></el-divider>
          <div>
            <h3 style="margin-left: 1%">People you may know</h3>
            <div style="position: relative"><el-avatar :size="52" :src="circleUrl4" style="margin-left: 2%;"></el-avatar>
              <span style="position:absolute;margin-left: 1%;margin-top:3%;font-size: 20px">Jane</span>
              <el-button type="info" plain size="mini" style="color: black;background-color:#d8dde1;margin-left: 70%;margin-top: 3%;position: absolute">Follow</el-button>
            </div>
            <div style="position: relative;margin-top: 3%"><el-avatar :size="52" :src="circleUrl3" style="margin-left: 2%;"></el-avatar>
              <span style="position:absolute;margin-left: 1%;margin-top:3%;font-size: 20px">Jane</span>
              <el-button type="info" plain size="mini" style="color: black;background-color:#d8dde1;margin-left: 70%;margin-top: 3%;position: absolute">Follow</el-button>
            </div>
            <div style="position: relative;margin-top: 3%"><el-avatar :size="52" :src="circleUrl2" style="margin-left: 2%;"></el-avatar>
              <span style="position:absolute;margin-left: 1%;margin-top:3%;font-size: 20px">Jane</span>
              <el-button type="info" plain size="mini" style="color: black;background-color:#d8dde1;margin-left: 70%;margin-top: 3%;position: absolute">Follow</el-button>
            </div>
            <div style="position: relative;margin-top: 3%"><el-avatar :size="52" :src="circleUrl5" style="margin-left: 2%;"></el-avatar>
              <span style="position:absolute;margin-left: 1%;margin-top:3%;font-size: 20px">Jane</span>
              <el-button type="info" plain size="mini" style="color: black;background-color:#d8dde1;margin-left: 70%;margin-top: 3%;position: absolute">Follow</el-button>
            </div>
          </div>
          <el-divider></el-divider>
          <div>
            <h3 style="margin-left: 1%">Pages you may like</h3>
            <div style="position: relative"><el-avatar :size="52" :src="circleUrl5" style="margin-left: 2%;"></el-avatar>
              <span style="position:absolute;margin-left: 1%;margin-top:3%;font-size: 20px">Jane</span>
              <el-button type="info" plain size="mini" style="color: black;background-color:#d8dde1;margin-left: 72%;margin-top: 3%;position: absolute">Like</el-button>
            </div>
            <div style="position: relative;margin-top: 3%"><el-avatar :size="52" :src="circleUrl3" style="margin-left: 2%;"></el-avatar>
              <span style="position:absolute;margin-left: 1%;margin-top:3%;font-size: 20px">Jane</span>
              <el-button type="info" plain size="mini" style="color: black;background-color:#d8dde1;margin-left: 72%;margin-top: 3%;position: absolute">Like</el-button>
            </div>
          </div>
          <el-divider></el-divider>
          <div>
            <h3 style="margin-left: 1%">Study groups</h3>
            <div style="position: relative"><el-avatar :size="52" :src="circleUrl4" style="margin-left: 2%;"></el-avatar>
              <span style="position:absolute;margin-left: 1%;margin-top:3%;font-size: 20px">Jane</span>
              <el-button type="info" plain size="mini" style="color: black;background-color:#d8dde1;margin-left: 72%;margin-top: 3%;position: absolute">Join</el-button>
            </div>
            <div style="position: relative;margin-top: 3%"><el-avatar :size="52" :src="circleUrl2" style="margin-left: 2%;"></el-avatar>
              <span style="position:absolute;margin-left: 1%;margin-top:3%;font-size: 20px">Jane</span>
              <el-button type="info" plain size="mini" style="color: black;background-color:#d8dde1;margin-left: 72%;margin-top: 3%;position: absolute">Join</el-button>
            </div>
            <div style="position: relative;margin-top: 3%"><el-avatar :size="52" :src="circleUrl6" style="margin-left: 2%;"></el-avatar>
              <span style="position:absolute;margin-left: 1%;margin-top:3%;font-size: 20px">Jane</span>
              <el-button type="info" plain size="mini" style="color: black;background-color:#d8dde1;margin-left: 72%;margin-top: 3%;position: absolute">Join</el-button>
            </div>
          </div>
          <el-divider></el-divider>
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
      tabPosition:'left',
      articleId:1,
      data:'',
      config:{
      },
      input1:'',
      circleUrl:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      circleUrl2:'https://img0.baidu.com/it/u=599045285,3012701325&fm=26&fmt=auto',
      circleUrl3:'https://img0.baidu.com/it/u=2750626237,1051246873&fm=26&fmt=auto',
      circleUrl4:'https://img2.baidu.com/it/u=1705326576,1210829699&fm=26&fmt=auto',
      circleUrl5:'https://img1.baidu.com/it/u=3762563167,1544396654&fm=26&fmt=auto',
      circleUrl6:'https://img2.baidu.com/it/u=2953908856,3466344438&fm=26&fmt=auto',
      article:[{
        name:'Lin',
        title:'你好',
        com_c:3,
        VC:3,
        S:'你好吗',
        T:2,
      },{
        name:'Lin',
        title:'TEST',
        com_c:2,
        VC:1,
        S:'This is a test.',
        T:3,
      },{
        name:'Lin',
        title:'我觉得太阳很不错',
        com_c:1,
        VC:9,
        S:'不错不错.',
        T:9,
      }]
    }
  },
  methods:{
    home(){
      this.$router.push('/');
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
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {
    // getArticles({
    //   categoryId:1,
    // }).then(res=>{
    //   // console.log(res)
    // })
    this.data={
      categoryId:1,
      title:'第一个'
    }
    this.config={
      method:'get',
      url:'http://47.96.236.167:8080/findArticle/{'+this.articleId+'}',
      headers:{
        'Content-Type':'application/json'
      },
      data:this.data
    }
    // axios(this.config).then(function(response){
    //   console.log(response);
    // }).catch(function (error){
    //       console.log(error)
    // });
  }
}

</script>

<style>
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
  width: 95.2%;
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
  color: #1c3faa;
}
.el-menu-item{
  font-size: 15px;
}
.el-menu-item.is-active{
  background-color: #163288 !important;
  font-size: 18px;
}
.el-menu{
  border: none;
}

.a2:hover{
  cursor: pointer;
  color: #1c3faa;
}
</style>
