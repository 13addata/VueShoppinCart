var app = new Vue({
  el: '#app',
  data:{
    select:false,
    goodsList:[
    {
        name:'EMIE Devil Volt插画版小恶魔移动电源',
        brand:'亿觅',
        location:'海外',
        size:'5200mAh',
        current:'1.0A',
        weight:'130g',
        price:3,
        num:2,
        item_img:'assets/img/1.png',
    },
    {
        name:'MAXCO APACHE 磨砂移动电源',
        brand:'美能格',
        location:'海外',
        size:'10400mAh',
        current:'2.1A',
        weight:'220g',
        price:3,
        num:1,
        item_img:'assets/img/2.jpg',
    },
    {
        name:'SOLOVE 甜点 移动电源',
        brand:'素乐',
        location:'海外',
        size:'10000mAh',
        current:'2.1A',
        weight:'220g',
        price:4,
        num:4,
        item_img:'assets/img/3.jpg',
    },
    {
        name:'SOLOVE 素白 移动电源',
        brand:'素乐',
        location:'海外',
        size:'8000mAh',
        current:'2.1A',
        weight:'180g',
        price:2,
        num:3,
        item_img:'assets/img/4.jpg',
    },
    ]
  },
   methods:{
    selectAll:function(){
        for(var i=0;i<this.goodsList.length;i++){
            this.goodsList[i].select=true;
        }
    },
    selectNone:function(){
        for(var i=0;i<this.goodsList.length;i++){
            this.goodsList[i].select=false;
        }
    },
    deleteOne:function(index){
        //选中之后删除
        //this.goodsList=this.goodsList.filter(function (item) {return !item.select});
        //点击删除按钮后直接删除
        this.goodsList.splice(index,1);
    },
    deleteGoods:function(){
        this.goodsList=this.goodsList.filter(function (item) {return !item.select});
    },
   },
   computed: {
    isSelectAll:function(){
        //如果每一条数据的select都为true，返回true，否则返回false;
        return this.goodsList.every(function (val) { return val.select});
    },
    getTotal:function(){
        //获取goodsList中select为true的数据。
        var _proList=this.goodsList.filter(function (val) { return val.select}),totalPrice=0;
        for(var i=0,len=_proList.length;i<len;i++){
            //总价累加
            totalPrice+=_proList[i].num*_proList[i].price;
        }
        //选择产品的件数就是_proList.length，总价就是totalPrice
        return {totalNum:_proList.length,totalPrice:totalPrice}
    },

},
  mounted:function () {
        var _this=this;
        this.goodsList.map(function (goods) {
            _this.$set(goods, 'select', false);
        })
    },
})
