<template>
    <div>
        <button @click="handleClick">按我</button>
    </div>
</template>
<script>
import { getUserInfo } from '../api/app.js'
export default {
    mounted () {

    },
    methods: {
        handleClick () {
            this.$bus.$emit('on-click', '你好,世界')
        }
    }
}
</script>

