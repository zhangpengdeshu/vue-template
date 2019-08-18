<template>
    <div>
       {{ name }}
    </div>
</template>
<script>
export default {
    props: {
        name: {
            type: [String, Number],
            default: 'pangda'
        }
    },
    befroeRouteUpdate (to, from, next) {
        console.log(to.name, from.name)
    }
}
</script>
