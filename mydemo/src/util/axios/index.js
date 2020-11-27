// 引入重新封装的实例
import http from './axios'

// 导出接口
// 菜单管理
//封装菜单添加接口
export function getMenuAdd(data) {
    return http.post('/api/menuadd', data)
}
//封装菜单列表接口
export function getMenuList(params) {
    return http.get('/api/menulist', {
        params
    })
}
//封装菜单获取接口
export function getMenuInfo(params) {
    return http.get('/api/menuinfo', {
        params
    })
}
//封装菜单修改接口
export function getMenuEdit(data) {
    return http.post('/api/menuedit', data)
}
//封装菜单添加接口
export function getMenuDelete(data) {
    return http.post('/api/menudelete', data)
}

// 角色管理
// 封装角色添加接口
export function getRoleAdd(data) {
    return http.post('/api/roleadd', data)
}

// 封装角色列表接口 
export function getRoleList(params) {
    return http.get('/api/rolelist', {
        params
    })
}

// 封装角色获取接口
export function getRoleInfo(params) {
    return http.get('/api/roleinfo', {
        params
    })
}

// 封装角色修改接口
export function getRoleEdit(data) {
    return http.post('/api/roleedit', data)
}

// 封装角色删除接口
export function getRoleDelete(data) {
    return http.post('/api/roledelete', data)
}

// 管理员管理
// 管理员添加
export function getUserAdd(data) {
    return http.post('/api/useradd', data)
}

// 管理员列表
export function getUserList(params) {
    return http.get('/api/userlist', {
        params
    })
}

// 管理员获取
export function getUserInfo(params) {
    return http.get('/api/userinfo', {
        params
    })
}
// 管理员修改
export function getUserEdit(data) {
    return http.post('/api/useredit', data)
}

// 管理员删除
export function getUserDelete(data) {
    return http.post('/api/userdelete', data)
}
// 管理员总数
export function getUserCount() {
    return http.get('/api/usercount')
}
// 管理员登录
export function getUserLogin(data) {
    return http.post('/api/userlogin', data)
}

// 商品分类管理
// 商品分类添加
export function getCateAdd(data) {
    return http.post('/api/cateadd', data)
}
// 商品分类列表
export function getCateList(params) {
    return http.get('/api/catelist', {
        params
    })
}
// 商品分类获取
export function getCateInfo(params) {
    return http.get('/api/cateinfo', {
        params
    })
}
// 商品分类修改
export function getCateEdit(data) {
    return http.post('/api/cateedit', data)
}
// 商品分类删除
export function getCateDelete(data) {
    return http.post('/api/catedelete', data)
}

/* 商品规格管理接口 */
//商品规格添加
export function getSpecsAdd(data){
    return http.post('/api/specsadd',data)
}
//商品规格列表
export function getSpecsList(params){
    return http.get('/api/specslist',{
        params
    })
}
//商品规格获取（一条）
export function getSpecsInfo(params){
    return http.get('/api/specsinfo',{
        params
    })
}
//商品规格修改
export function getSpecsEdit(data){
    return http.post('/api/specsedit',data)
}
//商品规格删除
export function getSpecsDelete(data){
    return http.post('/api/specsdelete',data)
}
//商品规格总数（用于计算分页)
export function getSpecsCount(){
    return http.get('/api/specscount')
}


// 商品管理
// 商品添加
export function getGoodsAdd(data) {
    return http.post('/api/goodsadd', data)
}
// 商品总数
export function getGoodsCount() {
    return http.get('/api/goodscount')
}
// 商品列表
export function getGoodsList(params) {
    return http.get('/api/goodslist', {
        params
    })
}
// 商品获取
export function getGoodsInfo(params) {
    return http.get('/api/goodsinfo', {
        params
    })
}
// 商品修改
export function getGoodsEdit(data) {
    return http.post('/api/goodsedit', data)
}
// 商品删除
export function getGoodsDelete(data) {
    return http.post('/api/goodsdelete', data)
}

// 封装会员管理接口
//封装会员管理列表接口
export function getMemberList(){
    return http.get('/api/memberlist')
}
//封装会员管理获取（一条）接口
export function getMemberInfo(params){
    return http.get('/api/memberinfo',{
        params
    })
}
//封装会员管理修改接口
export function getMemberEdit(data){
    return http.post('/api/memberedit',data)
}

/* 轮播图管理接口 */
//封装轮播图添加接口
export function getBannerAdd(data){
    return http.post('/api/banneradd',data)
}
//封装轮播图列表接口
export function getBannerList(){
    return http.get('/api/bannerlist')
}
//封装轮播图获取（一条）接口
export function getBannerInfo(params){
    return http.get('/api/bannerinfo',{
        params
    })
}
//封装轮播图修改接口
export function getBannerEdit(data){
    return http.post('/api/banneredit',data)
}
//封装轮播图删除接口
export function getBannerDelete(data){
    return http.post('/api/bannerdelete',data)
}

/* 限时秒杀管理接口 */
//封装限时秒杀添加接口
export function getSeckAdd(data){
    return http.post('/api/seckadd',data)
}
//封装限时秒杀列表接口
export function getSeckList(){
    return http.get('/api/secklist')
}
//封装限时秒杀获取（一条）接口
export function getSeckInfo(params){
    return http.get('/api/seckinfo',{
        params
    })
}
//封装限时秒杀修改接口
export function getSeckEdit(data){
    return http.post('/api/seckedit',data)
}
//封装限时秒杀删除接口
export function getSeckDelete(data){
    return http.post('/api/seckdelete',data)
}