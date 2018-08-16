<template>
    <div class="panel-body points demo flow_chart"
         id="points">
    </div>
</template>

<script>
import $ from 'jquery'
import { jsPlumb } from 'jsplumb'

require('../assets/css/demo.css')
require('../assets/css/jsplumb.css')

export default {
    name: 'Index',
    data() {
        return {
            data: {
                point: [
                    {
                        _id: '58c21d713819d56d68763918',
                        name: 'start',
                        status: '0',
                        anchor: 'Right'
                    },
                    {
                        _id: '58c21d803819d56d68763919',
                        name: 'scan',
                        status: '1'
                    },
                    {
                        _id: '58c21da83819d56d6876391a',
                        name: 'ftp',
                        status: '0'
                    },
                    {
                        _id: '58c63ecf3819d5a22f2c7f2e14',
                        name: 'hdfs',
                        status: '1'
                    },
                    {
                        _id: '58c63ecf3819d5a22f2c7fwqe24',
                        name: 'end',
                        status: '1'
                    }
                ],
                location: [
                    ['start', 10, 14],
                    ['scan', 20, 14],
                    ['ftp', 30, 14],
                    ['hdfs', 40, 14],
                    ['end', 50, 14]
                ],
                line: [
                    ['58c21d713819d56d68763918', '58c21d803819d56d68763919'],
                    ['58c21d803819d56d68763919', '58c21da83819d56d6876391a'],
                    ['58c21da83819d56d6876391a', '58c63ecf3819d5a22f2c7f2e14'],
                    ['58c63ecf3819d5a22f2c7f2e14', '58c63ecf3819d5a22f2c7fwqe24']
                ]
            }
        }
    },
    methods: {
        createFlow(flowData) {
            console.log('Index created')
            const color = '#acd'
            const instance = jsPlumb.getInstance({
                Connector: ['Flowchart', {}]
            })
            console.log(instance)

            // suspend drawing and initialise.
            instance.batch(() => {
                // declare some common values:
                const arrowCommon = { foldback: 0.7, width: 12 }
                // use three-arg spec to create two different arrows with the common values:
                const overlays = [
                    ['Arrow', { location: 0.7 }, arrowCommon]
                    // ['Label', { label: 'custom label', id: 'label' }]
                ]
                // init point
                for (const point of flowData.point) {
                    $('.points').append(
                        `<div id="${point._id}" class="point chart_act_${point.status} ${
                            point.name
                        }">${point.name}</div>`
                    )
                    console.log(point.anchor)
                    let pa = {
                        uuid: `${point._id}-bottom`,
                        anchor: 'Right',
                        maxConnections: -1
                    }
                    instance.addEndpoint(
                        point._id,
                        {
                            uuid: `${point._id}-Right`,
                            anchor: 'Right',
                            maxConnections: -1
                        },
                        {
                            isSource: true,
                            isTarget: true,
                            dragAllowedWhenFull: true
                        }
                    )
                    instance.addEndpoint(
                        point._id,
                        {
                            uuid: `${point._id}-left`,
                            anchor: 'Left',
                            maxConnections: -1
                            // connectorStyle: { stroke: 'gray' },
                        },
                        {
                            isSource: true,
                            isTarget: true,
                            dragAllowedWhenFull: true
                        }
                    )
                }
                // init transition
                for (const i of flowData.line) {
                    const uuid = [`${i[0]}-Right`, `${i[1]}-left`]
                    instance.connect({
                        uuids: uuid,
                        overlays
                    })
                }
                // init location
                for (const i of flowData.location) {
                    $(`.${i[0]}`).css('left', i[1] * 20)
                    $(`.${i[0]}`).css('top', i[2] * 20)
                }
                for (const point of flowData.point) {
                    instance.draggable(`${point._id}`)
                }
            })
            jsPlumb.fire('jsPlumbDemoLoaded', instance)
        }
    },
    mounted() {
        jsPlumb.ready(() => {
            this.createFlow(this.data)
        })
    }
}
</script>

<style>
    .point.chart_act_0 {
        color: #9cc;
    }
    .point.chart_act_1 {
        color: #fac;
    }
</style>