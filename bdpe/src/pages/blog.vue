<template>
    <div>
        <el-button @click="markdown2Html"
                   type="primary"
                   icon="el-icon-document">转化到 HTML</el-button>
        <el-button @click="save"
                   type="primary"
                   icon="el-icon-success">保存</el-button>
        <br>
        <code>Markdown is based on
            <a href="https://github.com/sparksuite/simplemde-markdown-editor"
               target="_blank">simplemde-markdown-editor</a> ，Simply encapsulated in Vue.
        </code>
        <div class="editor-container">
            <markdown-editor id="contentEditor"
                             ref="contentEditor"
                             v-model="content"
                             :height="300"
                             :zIndex="20"></markdown-editor>
        </div>
        <div v-html="html"></div>
    </div>
</template>

<script>
import MarkdownEditor from '@/components/markdown-editor'

const content = `
**this is test**

* vue
* element
* webpack

## Simplemde
`

export default {
    name: 'blog',
    props: {},
    data() {
        return {
            content: content,
            html: ''
        }
    },
    methods: {
        markdown2Html() {
            import('showdown').then(showdown => {
                const converter = new showdown.Converter()
                this.html = converter.makeHtml(this.content)
            })
        },
        save() {}
    },
    mounted() {},
    computed: {},
    components: {
        MarkdownEditor
    }
}
</script>

<style>

</style>
