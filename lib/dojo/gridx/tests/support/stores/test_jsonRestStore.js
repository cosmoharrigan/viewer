//>>built
define("gridx/tests/support/stores/test_jsonRestStore",["dijit","dojo","dojox","dojo/require!dojox/data/JsonRestStore"],function(_1,_2,_3){
_2.require("dojox.data.JsonRestStore");
_2.xhrPost({url:"test_jsonRestStore.php?totalsize="+200,sync:true});
var _4=new _3.data.JsonRestStore({idAttribute:"id",target:"test_jsonRestStore.php"});
_4.fetch({start:10,count:10,query:{id:"*"},sort:[{attribute:"number",descending:true}],onComplete:function(_5){
_4.deleteItem(_5[0]);
_4.save({onComplete:function(){
_4.newItem({id:1000,number:123456,square:11111});
_4.save({onComplete:function(){
_4.setValue(_5[1],"number",22222);
_4.save({onComplete:function(){
_4.newItem({id:2000,number:123456,square:11111});
_4.newItem({id:3000,number:123456,square:11111});
_4.newItem({id:4000,number:123456,square:11111});
_4.save({onComplete:function(){
_4.fetch({onComplete:function(_6){
}});
}});
}});
}});
}});
}});
});