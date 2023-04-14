import {TAB_SHOW_CHANGE, WINDOW_WIDTH, WINDOW_WIDTH_CHANGE_STATUS} from "../mutation-types";

// const MIN_WIDTH = 768;
export default {
    state: {
        show: false,
        isSmall: false,
        defaultWidth: 768,
        windowWidth: window.innerWidth,
        windowWidthChangeStatus: false,
    },
    mutations: {
        [TAB_SHOW_CHANGE](state, status = 3) {
            state.show = status === 3 ? !state.show : status;
        },
        [WINDOW_WIDTH](state, windowWidth) {
            state.windowWidth = windowWidth;
            state.isSmall = state.defaultWidth > windowWidth;
            state.windowWidthChangeStatus = false;
        },
        [WINDOW_WIDTH_CHANGE_STATUS](state,) {
            state.windowWidthChangeStatus = true;
        }
    },
    actions: {
        async [TAB_SHOW_CHANGE]({commit}, status) {
            commit(WINDOW_WIDTH, window.innerWidth);
            await commit(TAB_SHOW_CHANGE, status);
            return Promise.resolve()
        },
        WindowChangeAction: ({commit, state, dispatch, state: {windowWidthChangeStatus, windowWidth}}) => {
            if (windowWidthChangeStatus) return;
            return new Promise((resolve) => {
                let lastWidth = window.innerWidth;
                // 判断是否修改了宽度
                if (windowWidth === lastWidth) return;
                commit(WINDOW_WIDTH_CHANGE_STATUS);
                // Message.loading({message: '重新布局中..', mask: true,})
                (function f() {
                    setTimeout(() => {
                        let nowWidth = window.innerWidth;
                        // 判断宽度修改是否停止了
                        if (lastWidth === nowWidth) {
                            commit(WINDOW_WIDTH, nowWidth);
                            dispatch(TAB_SHOW_CHANGE, nowWidth < state.defaultWidth);
                            resolve()
                        } else {
                            lastWidth = nowWidth;
                            f()
                        }
                    }, 100)
                })()
            })
        },
    },
    getters: {}
}
