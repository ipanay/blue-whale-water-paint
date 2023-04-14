import Vue from 'vue';
import Vuex, {Store} from 'vuex';
import * as modules from './module';
// import persistedState  from 'vuex-persistedstate';
Vue.use(Vuex);
const store = new Store({
    state: {},
    modules,
    getters: {
        // 是否为窄屏
        isSmall: ({nav: {isSmall}}) => isSmall,
        // 窄屏显示宽度设置
        multiple: ({nav: {isSmall}}) => isSmall ? .6 : 1,
        // 当前浏览器宽度
        windowWidth: ({nav: {windowWidth}}) => windowWidth,
        // 终端列表
        // teminalList: ({teminal: {teminalList}}) => teminalList,
        // 终端类型列表
        // stypeList: ({teminal: {stypeList}}) => stypeList,
        // 版本号列表
        // versionTypeList: ({version: {typeList}}) => typeList,
        //    权限判断
        checkPermission: ({app: {menuList}}) => (id) => {

            if (id === '0') return true;
       
            return !!menuList.find(item => {
                return item.SysMenuId === id;
            });
        },
    },
    // plugins:[persistedState()]
});
export default store;
export {
    store
};

/*
(function (win) {
    win.addEventListener('beforeunload', function () {
        win.sessionStorage.setItem(StorageKey.RELOAD_STORE_APP_STATE, JSON.stringify(store.state));
    });
})(window);*/
