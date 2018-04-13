export default {
    namespaced: true,
    state: {
        vm: {
            isShow: false,
            list: [
                {
                    id: 1,
                    name: "上班中"
                },
                {
                    id: 2,
                    name: "快下班"
                },
                {
                    id: 3,
                    name: "下班中"
                },
                {
                    id: 4,
                    name: "吃饭中"
                }
            ],
            status: "上班中",
            tabs: [
                {
                    id: 1,
                    name: "排队列表"
                },
                {
                    id: 2,
                    name: "历史记录"
                }
            ],
            tabId: 1
        },
        buttons:[
            {style: "default", text: "过号", onButtonClick: name => {
                console.log(name);
            }, link: "/path"},
            {style: "primary", text: "开始剪发", onButtonClick: name => {
                console.log(name);
            }, link: "/path"}
        ],
        list: [{
            label: 'NO',
            value: 'D001'
        }, {
            label: '姓名',
            value: '将-卡尔'
        }, {
            label: '性别',
            value: '男'
        }, {
            label: '手机号',
            value: '18301183746'
        }, {
            label: '时间',
            value: '2018-04-03'
        }]
    },
    mutations: {
        select(state, name) {
            state.vm.status = name;
            state.vm.isShow = false;
        }
    }
}