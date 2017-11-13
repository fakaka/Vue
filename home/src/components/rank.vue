<template>
    <div>
        <ul>
            <!-- <li v-for=""></li> -->
            <li v-for="i in 5" :key="i">
                <i></i>
                <a href="#/home">
                    <slot></slot>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'rank',
    props: {

    },
    data() {
        return {

        }
    },
    methods: {
    },
    created() { },
    computed: {},
    components: {

    }
}
</script>

<style scoped>

</style>
