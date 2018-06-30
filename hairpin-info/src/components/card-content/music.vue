<template>
    <div>
        <div class="music-container">
            <audio :src="musicData.item.music_url"
                   controls="controls"></audio>
        </div>
    </div>
</template>

<script>
export default {
    name: 'card-content-muisc',
    props: {
        musicData: {
            type: Object
        }
    },
    data() {
        return {}
    },
    methods: {},
    created() {},
    computed: {},
    filters: {},
    components: {}
}
</script>

<style scoped>
</style>
