import Vue from 'vue'
// import Cookie from '../../utils/cookie'
import { Message } from 'element-ui'
import {
    LOGIN,
    LOGOUT,
    CHECK_LOGIN,
    TOKEN,
    SET_TOKEN,
    GET_TOKEN,
    SET_DIRECTURL,
    ACCESS_TOKEN,
    SET_DEFAULTURL
} from "../mutation-types";
// import {
//     login,
//     logout,
//     checkDirectUrl,
//     checkLogin
// } from "../../api/login";
// import {
//     isObject
// } from "../../utils/judge-type";
export default {
    state: {
        sid: '',
        memberID: '',
        account: '',
        token: '',
        redirectUrl: '',
        defaultUrl: '',
        loginState: false,
    },
    mutations: {
        [SET_TOKEN](state, token) {
            let arr = location.host.split('.');
            let domain = '.'+arr[arr.length-2]+'.'+arr[arr.length-1]
            state.token = token
            // Cookie.set('AUTHTOKEN',state.token,domain)
        },
        [GET_TOKEN](state, token) {
            // state.token =  Cookie.get('AUTHTOKEN')

        },
        [SET_DIRECTURL](state, directUrl) {
            state.redirectUrl = decodeURIComponent(directUrl)
        },
        [SET_DEFAULTURL](state, defaultUrl) {
            state.defaultUrl = defaultUrl
        },
        [LOGOUT](state) {
            Object.assign(state, {
                sid: '',
                memberID: '',
                account: '',
                token: '',
                redirectUrl: '',
                loginState: false,
            });

            let arr = location.host.split('.');
            let domain = '.'+arr[arr.length-2]+'.'+arr[arr.length-1]
            console.info('domain')
            console.info(domain)
            console.info('AUTHTOKEN11111111111111111111111')
            // Cookie.remove('AUTHTOKEN',domain)
        },
        [CHECK_LOGIN](state) {
            state.loginState = true;
        }
    },
    actions: {
        loginAction({
            commit,
            state
        }, loginObj) {
            return new Promise((resolve, reject) => {
                let directUrl = state.redirectUrl;

                const [baseurl, back_url] = (directUrl || '').split('?back_url=')
                if (baseurl) {
                    checkDirectUrl(baseurl).then(res => {
                        if (res.code == 200) {
                            if (res.data) {
                                login(loginObj).then(res => {
                                    commit(SET_TOKEN, res.data.jwt||(res.data.payload&&res.data.payload.token))
                                    resolve(res)
                                }).catch(e => reject(e))
                            } else {
                                Message.error('重定向地址非法')
                            }
                        } else {
                            Message.error(res.msg || '重定向地址非法')
                        }
                    }).catch(e => {
                        Message.error('重定向地址非法')
                    })
                } else {
                    login(loginObj)
                        .then(res => {
                            commit(SET_TOKEN,  res.data.jwt||(res.data.payload&&res.data.payload.token))
                            resolve(res)
                        }).catch(e => reject(e))
                }
            })
        },
        logoutAction({
            commit,
            state
        }) {
            return new Promise((resolve, reject) => {
                const token = ''//Cookie.get('AUTHTOKEN')
                if (!token) {
                    resolve() // 管理端退出
                    return false
                }
                logout(token)
                    .then(res => {
                        commit(LOGOUT);
                        resolve(res)
                    })
                    .catch(e => {
                        console.log(e, 999999)
                        reject(e)
                    })
            })
        },
        checkLoginAction({
            commit,
            state
        }) {
            return new Promise((resolve, reject) => {
                commit(GET_TOKEN);
                let directUrl = state.redirectUrl;
                const [baseurl, back_url] = directUrl.split('?back_url=')
                const token = state.token
                if (!token||!directUrl||(directUrl.indexOf('my.12301')!=-1&&!back_url)) {
                    return reject({ loginApiCheckFail: false })
                }
                checkDirectUrl(baseurl).then(res => {
                    if (res.code == 200) {
                        if (res.data) {
                            checkLogin(token).then(res => {
                                resolve(res);
                            })
                            .catch(e => {
                                reject({ loginApiCheckFail: true, ...e});
                            })
                        } else {
                            throw new Error('重定向地址非法')
                        }
                    } else {
                        throw new Error(res.msg || '重定向地址非法')
                    }
                }).catch(e => {
                    reject({ loginApiCheckFail: false })
                    Message.error(e.message)
                })
            })
        }
    }
};
