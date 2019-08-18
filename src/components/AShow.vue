<template>
    <div>
        {{content}}
    </div>
</template>
<script>
export default {
    name: 'AShow',
    props: {
        content: {
            type: String,
            default: ''
        }
    }
}
</script>
