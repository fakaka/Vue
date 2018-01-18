<template>
    <div>
        <div class="fm">{{ someData }}</div>
        <el-button @click="sendName">send</el-button>
    </div>
</template>

<script>
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

var stompClient = null

export default {
    name: 'test',
    props: {},
    data() {
        return {
            someData: '55'
        }
    },
    methods: {
        _getApi() {
            this.$http.get('http://localhost:8088/api').then(response => {
                console.log(response.body)
                this.someData = response.body.username
            })
        },
        showMessage(title, message) {
            this.$notify({
                title: title,
                message: message,
                type: 'success',
                onClick() {
                    console.log('click')
                    this.close()
                }
            })
            // setTimeout(() => {
            //     this._showMessage()
            // }, 3000)
        },
        sendName() {
            stompClient.send("/welcome", {}, JSON.stringify({
                'name': 666
            }));
        }
    },
    mounted() {
        this._getApi()

        // this._showMessage()

        var socket = new SockJS('http://localhost:8088/endpointHairpin')
        stompClient = Stomp.over(socket)
        stompClient.connect({}, (frame) => {
            console.log('开始进行连接Connected: ' + frame)
            stompClient.subscribe('/topic/getResponse', (respnose) => {
                var resp = JSON.parse(respnose.body)
                if (resp.code == 0) {
                    this.someData = resp.data
                    this.showMessage('/topic/getResponse', resp.data.msg)
                }
            })
        })




    },
    computed: {},
    components: {

    }
}
</script>

<style>

</style>
