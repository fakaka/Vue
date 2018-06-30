// api
import Vue from 'vue'

var baseUrl = 'http://localhost:3003/bilibili'

export function getLikeInfo(uid) {
    return new Promise((resolve, reject) => {
        var likeDatas = []
        const url = 'http://localhost:3003/info/list'
        const data = {}
        Vue.http.get(url).then(
            resp => {
                console.log(resp.body)
                if (resp.body.code == 0) {
                    for (let index = 0; index < resp.body.data.cards.length; index++) {
                        const element = resp.body.data.cards[index]
                        likeDatas.push(element)
                    }
                    resolve(likeDatas)
                } else {
                }
            },
            resp => {
                reject(resp)
            }
        )
    })
}

function req(url) {
    return new Promise((resolve, reject) => {})
}
