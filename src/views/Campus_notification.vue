<template>
  <div id="app">
    <div id="nav" style="width: 16.5%;height: 1000px;background-color:#182a38;position: fixed;top: 4.1%;left: 0px;">
      <img src="../assets/FZU.png" style="height: 50px;width: 50px;margin-left: 10%;position: relative">
      <span style="color: white;text-align: left;font-size: 20px;margin-left: 2%;position: absolute;margin-top: 6%;font-weight: bold">FZU_Community</span>
      <el-divider style="width: 90%;margin-left: 10%"></el-divider>
      <el-menu
          style="padding-top: 5%;text-align: left"
          default-active="6"
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
        <el-menu-item index="9" style="padding-left: 16%">
          <i class="el-icon-date" style="color: white"></i>
          <span slot="title">Daily check</span>
        </el-menu-item>
      </el-menu>
      <el-divider></el-divider>
      <div style="margin-top: -5%">
        <span class="a2" style="color: white;margin-left: 20%;margin-top: -3%">©2021 <i style="font-weight: bold">About Team 3</i></span>
        <br>
      </div>
    </div>
    <div style="width: 82.5%;float: left;margin-bottom: 1%" >
      <div style="margin-top: 15px;margin-left:20.19%;margin-bottom:15px;background-color: white;border-radius: 30px;background-color: #eff3f7;width: 100%;position: relative">
        <el-input
            style="width: 35%;margin:1.5% 0 0 2%;"
            placeholder="Search for your want"
            suffix-icon="el-icon-search"
            v-model="input1"
            :change="search">
        </el-input>
        <el-button style="margin-left: 2%" type="primary" @click="search">search</el-button>
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
        </el-popover><el-popover
          placement="bottom"
          width="260"
          trigger="hover">
        <div style="width: 130px;text-align: center;float: left;border-radius: 10px;margin-top: 5%" class="a1" @click="drawer=true">
          <i class="el-icon-document-add" style="font-size: 40px;color: lightblue"></i><br>
          <span>Create Blog</span>
        </div>
        <div style="width: 130px;text-align: center;float: left;border-radius: 10px;margin-top: 5%" class="a1"  @click="drawer=true">
          <i class="el-icon-date" style="font-size: 40px;color: lightpink"></i><br>
          <span>Create Event</span>
        </div>
        <div style="width: 130px;text-align: center;float: left;border-radius: 10px;margin-top: 5%" class="a1"  @click="drawer=true">
          <i class="el-icon-user-solid" style="font-size: 40px;color: lightgreen"></i><br>
          <span>Create Group</span>
        </div>
        <div style="width: 130px;text-align: center;float: left;border-radius: 10px;margin-top: 5%" class="a1"  @click="drawer=true">
          <i class="el-icon-s-flag" style="font-size: 40px;color: lightsalmon"></i><br>
          <span>Create Page</span>
        </div>
        <i class="el-icon-menu " slot="reference" style="color: #acacfc;float: right;font-size: 30px;margin-right: 2%;margin-top: 1.8%"></i>
      </el-popover>
        <br>
        <el-divider></el-divider>
        <div class="left" style="width: 60%;padding-bottom: 2%;min-height: 1200px">
          <div class="boxes">
            <div style="width: 100%">
              <div style="position:relative;">
                <el-avatar :size="50" :src="circleUrl2" style="margin-left: 2%;"></el-avatar>
                <span style="line-height: 34px;font-size: 25px;margin-left: 4%;position: absolute;margin-top: 1.5%">Campus notification here!</span>
              </div>
              <div style="width: 100%;border-radius: 50px;position: relative"  @click="drawer=true">
                <el-input
                    style="width: 85%;margin:1.5% 0 0 2%;"
                    placeholder="Show your life here!"
                    v-model="input">
                </el-input>
                <i class="el-icon-picture" style="color: gray;font-size: 33px;line-height: 20px;position: absolute;margin-top: 3%;margin-left: 2%"></i>
              </div>
            </div>
          </div>
          <div v-loading="loading">
            <!--文章遍历-->
            <div v-for="(item,index) in article" class="boxes">
              <div style="position: relative"><el-avatar :size="50" :src="circleUrl5" style="margin-left: 2%;"></el-avatar>
                <span style="position:absolute;margin-left: 1%;margin-top: 0.5%;font-weight: bold">{{item.username}}</span>
                <span style="position:absolute;margin-left: 1%;margin-top: 4%">{{timestampToTime(item.createDate)}}</span>
                <el-popover
                    placement="top"
                    width="120"
                    trigger="hover">
                  <div style="text-align: left; margin: 0">
                    <el-menu
                        style="padding-top: 5%;text-align: left"
                        class="el-menu-vertical-demo"
                        active-text-color="black">
                      <el-menu-item index="1" @click="report(index)">
                        <i class="el-icon-warning" style="color: red"></i>
                        <span slot="title">Report</span>
                      </el-menu-item>
                      <el-menu-item index="2" @click="open">
                        <i class="el-icon-share" style="color: #d4903a"></i>
                        <span slot="title">Share</span>
                      </el-menu-item>
                    </el-menu>
                  </div>
                  <i style="position:absolute;margin-left: 87%;margin-top: 0.5%;font-size: 20px" slot="reference" class="el-icon-more"></i>
                </el-popover>
              </div>
              <div style="position: relative"  @click="openA(index)">
                <h3 style="margin-left: 3%">{{item.title}}</h3>
                <span style="margin-left:3%">{{item.summary}}</span>
                <el-divider></el-divider>
              </div>
              <div style="position: relative;margin-top: -2%;padding-bottom: 3.5%">
                <div style="text-align: center;float: left;width: 25%">
                  <span><i class="el-icon-s-flag" style="font-size: 20px;margin-right: 2px"></i> {{ item.thumbCount }} Saves </span>
                </div>
                <div style="text-align: center;float: left;width: 25%">
                  <span><i class="el-icon-chat-line-square" style="font-size: 20px;margin-right: 2px"></i> {{item.commentsCount}} Comments</span>
                </div>
                <div style="text-align: center;float: left;width: 25%">
                  <span><i class="el-icon-user-solid" style="font-size: 20px;margin-right: 2px"></i> {{item.viewsCount}} Views</span>
                </div>
                <div style="text-align: center;float: left;width: 25%" @click="Thumb(index)" class="thumb">
                  <span v-show="!item.ifIsThumb"><i class="el-icon-star-on" style="font-size: 22px;margin-right: 2px"></i> {{ item.thumbCount }} Likes</span>
                  <span v-show="item.ifIsThumb"><i class="el-icon-star-on" style="font-size: 22px;margin-right: 2px;color: red"></i> {{ item.thumbCount }} Likes</span>
                </div>
              </div>
            </div>
            <el-empty description="No more" :image-size="50"></el-empty>
          </div>

        </div>


        <div class="right" style="width: 35%;float: right;position: absolute;top:140px;left: 63%;">
          <div>
            <h3 style="margin-left: 1%">Trending !</h3>
            <el-tag type="info" color="#d8dde1" style="margin-left: 4%;cursor: pointer" @click="open">#hello</el-tag>
            <el-tag type="info" color="#d8dde1" style="margin-left: 4%;cursor: pointer" @click="open">#Good Morning</el-tag>
            <el-tag type="info" color="#d8dde1" style="margin-left: 4%;cursor: pointer" @click="open">#study</el-tag>
            <el-tag type="info" color="#d8dde1" style="margin-left: 4%;cursor: pointer" @click="open">#test</el-tag>
            <el-tag type="info" color="#d8dde1" style="margin-left: 4%;cursor: pointer" @click="open">#work hard</el-tag>
            <el-tag type="info" color="#d8dde1" style="margin-left: 4%;margin-top: 1%;cursor: pointer" @click="open">#have a nice day</el-tag>
            <el-tag type="info" color="#d8dde1" style="margin-left: 4%;cursor: pointer" @click="open">#Good Morning</el-tag>
            <el-tag type="info" color="#d8dde1" style="margin-left: 4%;cursor: pointer" @click="open">#news</el-tag>
          </div>
          <el-divider></el-divider>
          <div>
            <h3 style="margin-left: 1%">People you may know</h3>
            <div style="position: relative"><el-avatar :size="52" :src="circleUrl4" style="margin-left: 2%;"></el-avatar>
              <span style="position:absolute;margin-left: 1%;margin-top:3%;font-size: 20px">Jane</span>
              <el-button v-show="show" type="info" plain size="mini" style="color: black;background-color:#d8dde1;margin-left: 70%;margin-top: 3%;position: absolute" @click="show=false">Follow</el-button>
              <el-button v-show="!show" type="info" plain size="mini" style="color: gray;background-color:#d8dde1;margin-left: 70%;margin-top: 3%;position: absolute" @click="show=true">Followed</el-button>
            </div>
            <div style="position: relative;margin-top: 3%"><el-avatar :size="52" :src="circleUrl3" style="margin-left: 2%;"></el-avatar>
              <span style="position:absolute;margin-left: 1%;margin-top:3%;font-size: 20px">Jack</span>
              <el-button v-show="show1" type="info" plain size="mini" style="color: black;background-color:#d8dde1;margin-left: 70%;margin-top: 3%;position: absolute" @click="show1=false">Follow</el-button>
              <el-button v-show="!show1" type="info" plain size="mini" style="color: gray;background-color:#d8dde1;margin-left: 70%;margin-top: 3%;position: absolute" @click="show1=true">Followed</el-button>            </div>
            <div style="position: relative;margin-top: 3%"><el-avatar :size="52" :src="circleUrl2" style="margin-left: 2%;"></el-avatar>
              <span style="position:absolute;margin-left: 1%;margin-top:3%;font-size: 20px">Ian</span>
              <el-button v-show="show2" type="info" plain size="mini" style="color: black;background-color:#d8dde1;margin-left: 70%;margin-top: 3%;position: absolute" @click="show2=false">Follow</el-button>
              <el-button v-show="!show2" type="info" plain size="mini" style="color: gray;background-color:#d8dde1;margin-left: 70%;margin-top: 3%;position: absolute" @click="show2=true">Followed</el-button>            </div>
            <div style="position: relative;margin-top: 3%"><el-avatar :size="52" :src="circleUrl5" style="margin-left: 2%;"></el-avatar>
              <span style="position:absolute;margin-left: 1%;margin-top:3%;font-size: 20px">Danny</span>
              <el-button v-show="show3" type="info" plain size="mini" style="color: black;background-color:#d8dde1;margin-left: 70%;margin-top: 3%;position: absolute" @click="show3=false">Follow</el-button>
              <el-button v-show="!show3" type="info" plain size="mini" style="color: gray;background-color:#d8dde1;margin-left: 70%;margin-top: 3%;position: absolute" @click="show3=true">Followed</el-button>            </div>
          </div>
          <el-divider></el-divider>
          <div>
            <h3 style="margin-left: 1%">Pages you may like</h3>
            <div style="position: relative"><el-avatar :size="52" :src="circleUrl5" style="margin-left: 2%;"></el-avatar>
              <span style="position:absolute;margin-left: 1%;margin-top:3%;font-size: 20px">Study</span>
              <el-button v-show="show4" type="info" plain size="mini" style="color: black;background-color:#d8dde1;margin-left: 70%;margin-top: 3%;position: absolute" @click="show4=false">Like</el-button>
              <el-button v-show="!show4" type="info" plain size="mini" style="color: gray;background-color:#d8dde1;margin-left: 70%;margin-top: 3%;position: absolute" @click="show4=true">Liked</el-button>            </div>
            <div style="position: relative;margin-top: 3%"><el-avatar :size="52" :src="circleUrl3" style="margin-left: 2%;"></el-avatar>
              <span style="position:absolute;margin-left: 1%;margin-top:3%;font-size: 20px">Work</span>
              <el-button v-show="show5" type="info" plain size="mini" style="color: black;background-color:#d8dde1;margin-left: 70%;margin-top: 3%;position: absolute" @click="show5=false">Like</el-button>
              <el-button v-show="!show5" type="info" plain size="mini" style="color: gray;background-color:#d8dde1;margin-left: 70%;margin-top: 3%;position: absolute" @click="show5=true">Liked</el-button>              </div>
          </div>
          <el-divider></el-divider>
          <div>
            <h3 style="margin-left: 1%">Study groups</h3>
            <div style="position: relative"><el-avatar :size="52" :src="circleUrl4" style="margin-left: 2%;"></el-avatar>
              <span style="position:absolute;margin-left: 1%;margin-top:3%;font-size: 20px">Group1</span>
              <el-button v-show="show6" type="info" plain size="mini" style="color: black;background-color:#d8dde1;margin-left: 70%;margin-top: 3%;position: absolute" @click="show6=false">Join</el-button>
              <el-button v-show="!show6" type="info" plain size="mini" style="color: gray;background-color:#d8dde1;margin-left: 70%;margin-top: 3%;position: absolute" @click="show6=true">Joined</el-button>              </div>
            <div style="position: relative;margin-top: 3%"><el-avatar :size="52" :src="circleUrl2" style="margin-left: 2%;"></el-avatar>
              <span style="position:absolute;margin-left: 1%;margin-top:3%;font-size: 20px">Group2</span>
              <el-button v-show="show7" type="info" plain size="mini" style="color: black;background-color:#d8dde1;margin-left: 70%;margin-top: 3%;position: absolute" @click="show7=false">Join</el-button>
              <el-button v-show="!show7" type="info" plain size="mini" style="color: gray;background-color:#d8dde1;margin-left: 70%;margin-top: 3%;position: absolute" @click="show7=true">Joined</el-button>                   </div>
            <div style="position: relative;margin-top: 3%"><el-avatar :size="52" :src="circleUrl6" style="margin-left: 2%;"></el-avatar>
              <span style="position:absolute;margin-left: 1%;margin-top:3%;font-size: 20px">Group3</span>
              <el-button v-show="show8" type="info" plain size="mini" style="color: black;background-color:#d8dde1;margin-left: 70%;margin-top: 3%;position: absolute" @click="show8=false">Join</el-button>
              <el-button v-show="!show8" type="info" plain size="mini" style="color: gray;background-color:#d8dde1;margin-left: 70%;margin-top: 3%;position: absolute" @click="show8=true">Joined</el-button>                   </div>
          </div>
          <el-divider></el-divider>
          <el-drawer
              :visible.sync="drawer"
              size="33%"
              :direction="direction"
              :before-close="handleClose"
              :with-header="false">
            <div style="overflow: auto">
              <div>
                <el-avatar :size="40" :src="circleUrl2" style="margin-left: 4%;margin-top: 2%"></el-avatar>
                <span style="position:absolute;margin-left: 2%;margin-top: 4%;font-weight: bold;font-size: 20px">What you are thinking now? Write down here!</span>
              </div>
              <div style="margin-right: 2%;margin-left: 4%">
                <el-form ref="form" :model="form"  :rules="rules">
                  <el-form-item label="title" prop="title">
                    <el-input v-model="form.title"></el-input>
                  </el-form-item>
                  <el-form-item label="summary" prop="summary">
                    <el-input type="textarea" v-model="form.summary" :rows="3"></el-input>
                  </el-form-item>
                  <el-form-item label="contentText" prop="summary">
                    <el-input type="textarea" v-model="form.contentText" placeholder="write down here!" :rows="8"></el-input>
                  </el-form-item>
                  <el-upload
                      class="upload-demo"
                      action=""
                      list-type="picture-card"
                      :headers="headers"
                      :on-preview="handlePreview"
                      :on-remove="handleRemove"
                      :http-request="handlePic"
                      :before-remove="beforeRemove"
                      multiple
                      :limit="6"
                      :on-exceed="handleExceed"
                      :file-list="fileList">
                    <el-button size="small" type="primary">upload</el-button>
                    <div slot="tip" class="el-upload__tip">You can upload picture here!</div>
                  </el-upload>
                  <el-form-item style="float: right">
                    <el-button type="primary" @click="onSubmit" v-loading="loading2">submit</el-button>
                    <el-button @click="onCancel">cancel</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </el-drawer>
          <el-drawer
              title="我是标题"
              size="32%"
              :visible.sync="drawer2"
              :direction="direction"
              :with-header="false"
              :before-close="handleClose">
            <div style="overflow: auto;">
              <div>
                <div style="position: relative"><el-avatar :size="50" :src="circleUrl5" style="margin-left: 2%;margin-top: 2%"></el-avatar>
                  <span style="position:absolute;margin-left: 2%;margin-top: 3%;font-weight: bold">{{ A.name }}</span>
                  <span style="position:absolute;margin-left: 2%;margin-top: 7%">{{timestampToTime(A.VC)}}</span>
                </div>
                <div style="position: relative;margin: 2%;padding-bottom: 25px" @click="drawer2=true">
                  <h3 style="margin-left: 3%">{{A.title}}</h3>
                  <span style="margin-left:3%">{{A.S}}</span>
                </div>
                <div style="width: 90%;margin-left: 5%;overflow: auto">
                  <div  style="width: 33.3%;height: 157.5px;float: left" v-for="item in url1">
                    <el-image
                        style="width: 100%;height: 157.5px"
                        :src="item"
                        :fit="cover"
                        :preview-src-list="url1">
                    </el-image>
                  </div>
                </div>
              </div>
              <el-divider></el-divider>
              <div>
                <div v-for="item in C" >
                  <span style="font-weight: bold;margin-left: 4%">{{item.userName}} :</span>
                  <span style="margin-left: 1%">{{item.content}}</span>
                  <el-divider></el-divider>
                </div>
                <div>
                  <el-input
                      style="width: 95%;margin:1.5% 0 0 2%;"
                      placeholder="Comment here!"
                      v-model="input2">
                  </el-input><br>
                  <el-button style="margin-right: 2%;margin-top:2%;float: right" type="primary" @click="comment">comment</el-button>
                </div>
              </div>
            </div>
          </el-drawer>
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
      loading2:false,
      fileList:[],
      img:[],
      cover:'cover',
      srcList:[],
      headers:{
        Authorization: localStorage.token
      },
      message:{},
      loading:true,
      url:'',
      url1:[],
      URLS:[],
      input:'',
      input2:'',
      categoryId:6,
      thumbShow:true,
      show:true,
      show1:true,
      show2:true,
      show3:true,
      show4:true,
      show5:true,
      show6:true,
      show7:true,
      show8:true,
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
      articleId:2,
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
      // console.log(_this.message);
      if(response.data.status == 0){
        alert("You have not logged in!")
        location.href = "/"
      }
    }).catch(function(error) {
      // console.log(error)
    });
  },
  methods:{
    comment(){
      let _this=this
      this.data={
        articleId:this.articleId,
        content:this.input2
      }
      this.config={
        method:'post',
        url:'http://47.96.236.167:8080/comments/publish',
        headers:{
          'Content-Type':'application/json',
          'token':localStorage.token
        },
        data:this.data
      }
      axios(this.config).then(function(response){

        if(response.data.success){
          alert('Successful')
          _this.config={
            method:'get',
            url:'http://47.96.236.167:8080/comments/find/'+_this.articleId,
            headers:{
              'Content-Type':'application/json',
              'token':localStorage.token
            },
          }
          axios(_this.config).then(function(response){
            _this.C=response.data.data
          }).catch(function (error){
          });
        }else{
          alert(response.data.msg)
        }
      }).catch(function (error){

      });
    },
    search(){
      let _this=this
      _this.loading=true
      this.data={
        categoryId:this.categoryId,
        title:this.input1
      }
      this.config={
        method:'post',
        url:'http://47.96.236.167:8080/articles/search',
        headers:{
          'Content-Type':'application/json',
          'token':localStorage.token
        },
        data:this.data
      }
      axios(this.config).then(function(response){

        if(response.data.success){
          // alert('Successful')
          _this.article=response.data.data
          _this.loading=false
        }else{
          alert(response.data.msg)
        }
      }).catch(function (error){

      });
    },
    report(index){
      this.data={
        articleId:this.article[index].articleId,
      }
      this.config={
        method:'post',
        url:'http://47.96.236.167:8080/articles/report',
        headers:{
          'Content-Type':'application/json',
          'token':localStorage.token
        },
        data:this.data
      }
      axios(this.config).then(function(response){

        if(response.data.success){
          alert('Successful')
        }else{
          alert(response.data.msg)
        }
      }).catch(function (error){

      });
    },
    Thumb(index){
      let _this=this
      if(_this.article[index].ifIsThumb==false){
        _this.article[index].thumbCount++
        _this.article[index].ifIsThumb=true
        this.config={
          method:'get',
          url:'http://47.96.236.167:8080/thumb/addThumb/'+_this.article[index].articleId,
          headers:{
            'Content-Type':'application/json',
            'token':localStorage.token
          },
        }
        axios(this.config).then(function(response){
        }).catch(function (error){
        });
      }else{
        _this.article[index].thumbCount--
        _this.article[index].ifIsThumb=false
        this.config={
          method:'get',
          url:'http://47.96.236.167:8080/thumb/cancelThumb/'+_this.article[index].articleId,
          headers:{
            'Content-Type':'application/json',
            'token':localStorage.token
          },
        }
        axios(this.config).then(function(response){
        }).catch(function (error){
        });
      }
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
      return y + '.' + MM + '.' + d + '  ' + h + ':' + m +':' + s
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
    delete(index){
      let _this=this
      _this.article.splice(index)
    },
    open(){
      this.$message({message: 'Sorry, function is not online, please look forward to it',type: 'warning'});
    },
    manage(){
      this.$router.push('/manage-user');
    },
    openA(index){
      let _this=this
      _this.drawer2=true
      _this.articleId=this.article[index].articleId
      this.config={
        method:'get',
        url:'http://47.96.236.167:8080/articles/findArticleDetails/'+_this.articleId,
        headers:{
          'Content-Type':'application/json',
          'token':localStorage.token
        },
      }
      axios(this.config).then(function(response){
        _this.A={
          name:_this.article[index].username,
          title:_this.article[index].title,
          VC:_this.article[index].createDate,
          S:response.data.data.contentText,
        }
        // console.log(response)
        _this.url1=response.data.data.contentImages
        _this.srcList.push(response.data.data.contentImages)
      }).catch(function (error){

      });
      this.config={
        method:'get',
        url:'http://47.96.236.167:8080/comments/find/'+_this.articleId,
        headers:{
          'Content-Type':'application/json',
          'token':localStorage.token
        },
      }
      axios(this.config).then(function(response){
        _this.C=response.data.data

      }).catch(function (error){

      });
    },
    onSubmit(){
      let _this=this
      this.data={
        categoryId:this.categoryId,
        tittle:this.form.title,
        contentText:this.form.contentText,
        summary:this.form.summary,
        contentImages:this.img
      }
      this.config={
        method:'post',
        url:'http://47.96.236.167:8080/articles/publish',
        headers:{
          'Content-Type':'application/json',
          'token':localStorage.token
        },
        data:this.data
      }
      axios(this.config).then(function(response){
        if(response.data.success){
          _this.contentImages=[]
          _this.form={}
          alert('Successful')
          _this.data={
            categoryId:_this.categoryId,
          }
          _this.config={
            method:'post',
            url:'http://47.96.236.167:8080/articles/listAll',
            headers:{
              'Content-Type':'application/json',
              'token':localStorage.token
            },
            data:_this.data
          }
          axios(_this.config).then(function(response){

            _this.article=response.data.data

          }).catch(function (error){

          });
          _this.drawer=false
        }else{
          alert(response.data.msg)
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
    handlePic(params){
      let _this=this
      _this.loading2=true
      const fd = new FormData()
      fd.append('image', params.file)
      this.config={
        method:'post',
        url:'http://47.96.236.167:8080/upload',
        headers:{
          'Content-Type':'application/json',
          'token':localStorage.token
        },
        data:fd
      }
      axios(this.config).then(function(response){
        _this.img.push(response.data.data)
        _this.loading2=false
        // console.log(_this.img)
      }).catch(function (error){
      });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {

    },
    handleExceed(files, fileList) {
      this.$message.warning(`limit 6 files, now you have chose ${files.length + fileList.length} files`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    }
  },
  mounted() {
    let _this=this

    this.data={
      categoryId:this.categoryId,
    }
    this.config={
      method:'post',
      url:'http://47.96.236.167:8080/articles/listAll',
      headers:{
        'Content-Type':'application/json',
        'token':localStorage.token
      },
      data:this.data
    }
    axios(this.config).then(function(response){
      // console.log(response)
      _this.article=response.data.data
      _this.loading=false
    }).catch(function (error){

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
</style>
