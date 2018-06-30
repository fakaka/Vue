// api
import Vue from 'vue'

var baseUrl = 'http://localhost:3003/bilibili'

export function getLikeInfo(uid) {
    return new Promise((resolve, reject) => {
        var likeDatas = []
        const url = baseUrl + '/user/space?uid=' + uid
        const data = {}
        Vue.http.get(url).then(
            resp => {
                // console.log(resp.body)
                if (resp.body.code == 0) {
                    for (let index = 0; index < resp.body.data.cards.length; index++) {
                        if (index > 5) {
                            // break
                        }
                        const element = resp.body.data.cards[index]
                        var card = element.card
                        var cardData = JSON.parse(card)
                        cardData.type = element.desc
                        console.log(cardData)
                        likeDatas.push(cardData)
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
