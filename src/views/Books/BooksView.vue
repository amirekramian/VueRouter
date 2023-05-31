<template>
  <div class="mainbody" id="app">
    <br />
    <div>
      <button class="btn btn-default" @click="FavoriteOnlyToggle()">
        <span v-if="!FavoritOnly">Show only favorite books</span>
        <span v-if="FavoritOnly">Show all books</span>
      </button>
      <button class="btn btn-default" @click="SavedOnlyToggle()">
        <span v-if="!saveOnly">Show only Saved books</span>
        <span v-if="saveOnly">Show all books</span>
      </button>
    </div>
    <ul class="flex" v-if="!this.FavoritOnly && !this.saveOnly">
      <li v-for="item in Books" :key="item.id" @dblclick="LikeBook(item)">
        <div class="picbox" :class="{ fav: item.isfav , save:item.issaved , favsave:item.isfav && item.issaved}">
          <div>
            <img :src="item.imgsrc" class="bookPic" />
            <div>
              <b>{{ item.title }}</b>
              <br />
              <p>author: {{ item.author }}</p>
              <p>Release year: {{ item.releaseyear }}</p>
              <div class="buttonflex">
              <button class="btn " @click="LikeBook(item)">
                <img class="icon" src="@/assets/Icons/Liked.svg" v-if="item.isfav" alt="">
                <img class="icon" src="@/assets/Icons/Like.svg" v-if="!item.isfav" alt="">
              </button>
              <button class="btn" @click="SaveBook(item)" >
                <img class="icon" src="@/assets/Icons/Saved.svg" v-if="item.issaved" alt="">
                <img class="icon" src="@/assets/Icons/Save.svg" v-if="!item.issaved" alt="">

              </button>
              <button class="btn" @click="ShareBook(item)" >
                <img class="icon" src="@/assets/Icons/Comment.svg"  alt="">
              </button>
              </div>
              <router-link :to="{name:'BookDetail',params:{id:item.id}}">
              <p class="btn">more detail</p>
              </router-link>
              <br />
            </div>
          </div>
        </div>
      </li>
    </ul>
    <!-- LikedBooks -->
    <ul class="flex" v-if="this.FavoritOnly">
      <li v-for="item in FavBooks" :key="item.id" @dblclick="LikeBook(item)">
        <div class="picbox" :class="{ fav: item.isfav , save:item.issaved , favsave:item.isfav && item.issaved}">
          <div>
            <img :src="item.imgsrc" class="bookPic" />
            <div>
              <b>{{ item.title }}</b>
              <br />
              <p>author: {{ item.author }}</p>
              <p>Release year: {{ item.releaseyear }}</p>
              <div class="buttonflex">
              <button class="btn " @click="LikeBook(item)">
                <img class="icon" src="@/assets/Icons/Liked.svg" v-if="item.isfav" alt="">
                <img class="icon" src="@/assets/Icons/Like.svg" v-if="!item.isfav" alt="">
              </button>
              <button class="btn" @click="SaveBook(item)" >
                <img class="icon" src="@/assets/Icons/Saved.svg" v-if="item.issaved" alt="">
                <img class="icon" src="@/assets/Icons/Save.svg" v-if="!item.issaved" alt="">

              </button>
              <button class="btn" @click="ShareBook(item)" >
                <img class="icon" src="@/assets/Icons/Comment.svg"  alt="">
              </button>
              </div>
              <button class="btn">more detail </button>
              <br />
            </div>
          </div>
        </div>
      </li>
    </ul>
    <!-- saved books -->
       <ul class="flex" v-if="SaveOnly">
      <li v-for="item in saveBooks" :key="item.id" @dblclick="LikeBook(item)">
        <div class="picbox" :class="{ fav: item.isfav , save:item.issaved , favsave:item.isfav && item.issaved}">
          <div>
            <img :src="item.imgsrc" class="bookPic" />
            <div>
              <b>{{ item.title }}</b>
              <br />
              <p>author: {{ item.author }}</p>
              <p>Release year: {{ item.releaseyear }}</p>
              <div class="buttonflex">
              <button class="btn " @click="LikeBook(item)">
                <img class="icon" src="@/assets/Icons/Liked.svg" v-if="item.isfav" alt="">
                <img class="icon" src="@/assets/Icons/Like.svg" v-if="!item.isfav" alt="">
              </button>
              <button class="btn" @click="SaveBook(item)" >
                <img class="icon" src="@/assets/Icons/Saved.svg" v-if="item.issaved" alt="">
                <img class="icon" src="@/assets/Icons/Save.svg" v-if="!item.issaved" alt="">

              </button>
              <button class="btn" @click="ShareBook(item)" >
                <img class="icon" src="@/assets/Icons/Comment.svg"  alt="">
              </button>
              </div>
              <button class="btn">more detail</button>
              <br />
            </div>
          </div>
        </div>
      </li>
    </ul>
    <br />

    <!-- <div class="box" @mouseover="EventHandler($event,'over')">mouse Over</div>
    <div class="box" @mouseleave="EventHandler($event,'leave')">Mouse Leave</div>
    <br>
    <div class="box" @dblclick="EventHandler($event,'double')">double click</div>
    <div class="box" @click="EventHandler($event,'click')">Mouse Click</div>
    <br>
    <div class="box" @mousemove="HandleMouseMove">{{x}}-{{y}}</div> -->
  </div>
</template>

<script>

export default {
  props: ["BookData", "favoriteOnly","FavBooks","saveBooks","saveOnly","showDetailModal"],
  data() {
    return {
      Books: [
                 {id:0,title:'Pride and Prejudice', releaseyear: 1813 , author:'jane austin' , imgsrc:require('@/assets/Images/BeachRead.jpg'), isfav : false,issaved:false, Description:'the romantic book'},
                 {id:1,title:'Seven Days in june', releaseyear: 2021 , author:'andre aciman', imgsrc: require('@/assets/Images/PrideandPrejudice.jpg'), isfav : false,issaved:false, Description:'the romantic book'},
                 {id:2,title:'Beach Read', releaseyear: 2020 , author:'Emily Henry',imgsrc: require('@/assets/Images/SevenDaysInJune.jpg'), isfav : false,issaved:false, Description:'the romantic book'},
                 {id:3,title:'The Notebook', releaseyear: 1996 , author:'Nicholas Sparks',imgsrc: require('@/assets/Images/TheNotebook.jpg'), isfav : false,issaved:false, Description:'the romantic book'},
                 {id:4,title:'Me Before You', releaseyear: 2012 , author:'Nicholas Sparks',imgsrc: require('@/assets/Images/MeBeforeYou.jpg'), isfav : false,issaved:false, Description:'the romantic book'},
                 {id:5,title:'Outlander', releaseyear: 1991 , author:'diana gabaldon',imgsrc: require('@/assets/Images/Outlander.jpg'), isfav : false,issaved:false, Description:'the romantic book'},
                 {id:6,title:'The Flatshare', releaseyear: 2019 , author:'beth oleary',imgsrc: require('@/assets/Images/TheFlatshare.jpg'), isfav : false,issaved:false, Description:'the romantic book'},
                 {id:7,title:'One Last stop', releaseyear: 2021 , author:'casey Mcquiston',imgsrc: require('@/assets/Images/thelaststop.jpg'), isfav : false,issaved:false, Description:'the romantic book'},
                 {id:8,title:'Love on the brain', releaseyear: 2019 , author:'Beth oleary',imgsrc: require('@/assets/Images/TheNotebook.jpg'), isfav : false,issaved:false, Description:'the romantic book'},
                 {id:9,title:'The Fault in Our Stars', releaseyear: 2012 , author:'john green',imgsrc: require('@/assets/Images/TheFaultinOurStars.jpg'), isfav : false,issaved:false, Description:'the romantic book'}
                    ],
      FavoritOnly: false,
      SaveOnly: this.saveOnly,
      SelectedData:"",
      ModalShow:this.showDetailModal
    };
  },
  methods: {
    LikeBook(item) {
      this.Books[item.id].isfav = !this.Books[item.id].isfav;
    },
    FavoriteOnlyToggle() {
      this.FavoritOnly = !this.FavoritOnly
      this.$emit('FavsClick')
      // console.log(this.favorites)

    },
    SaveBook(item){
        this.Books[item.id].issaved=!this.Books[item.id].issaved;
    },
    SavedOnlyToggle(){
            this.SaveOnly = !this.SaveOnly
            this.$emit('SavedClick')
            console.log(this.saveBooks)
            console.log(this.saveOnly)
    },
    ShowMore(){
    this.$emit('ModalToggle')
    }
  },
  computed:{

  },
  mounted(){

    // console.log(this.FavBooks)
  }
};
</script>


<style scoped>
.box {
  padding: 100px 0;
  width: 400px;
  text-align: center;
  background: #92bdff;
  margin: 20px;
}

.bookPic {
  max-width: 150px;
  max-height: 200px;
}

.picbox {
  border-radius: 15px;
  padding: 10px;
  margin: 15px;
  background: #18008513;
  width: 250px;
  align-items: center;
  text-align: center;
}

div.fav {
  border-radius: 15px;
  background: #ffc8c8;
  width: 190px;
  align-items: center;
  text-align: center;
}

.flex {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
}

ul {
  list-style: none;
}

button.faved {
  border-color: #00c431;
  background-color: white;
  color: black;
}
.mainbody {
  width: 90%;
  margin: auto;
}
.buttonflex{
    width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
}
.icon{
    width: 25px;
}

div.save{
  border-radius: 15px;
  background: #c8ffda;
  width: 190px;
  align-items: center;
  text-align: center;
}

div.favsave{
  border-radius: 15px;
  background: #ffbb006b;
  width: 190px;
  align-items: center;
  text-align: center;
}
</style>