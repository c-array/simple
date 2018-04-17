export default {
    namespaced: true,
    state: {
        vm:{
            isTab:5
        },
        list: [{
            id: 5,
            value: 946
        }, {
            id: 4,
            value: 6
        }, {
            id: 3,
            value: 2
        }, {
            id: 2,
            value: 0
        }, {
            id: 1,
            value: 2
        }]
    },
    mutations: {
        select(state, name) {
            state.vm.status = name;
            state.vm.isShow = false;
        }
    }
}