<template>
    <div>
       <p>{{ appName }}</p>
       <p>{{ userName }}</p>
       <p>{{appNameWithVersion}}</p>
       <p>{{firstLetter}}</p>
       <p>{{age}}</p>
       <p>{{ageCalc}}</p>
       <button @click="handleClick">mutations</button>
       <button @click="handleChangeAge">age change</button>
       <button @click="handleChangeActions">Actions</button>
    </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
    name: 'Store',
    computed: {
        // ...mapState([
        //     'appName'
        // ]),
        ...mapState({
            appName: state => state.appName,
            userName: state => state.user.userName
        }),
        age (){
            return this.$store.state.age
        },
        ageCalc () {
            return this.$store.getters.ageCalc
        },
        stateValue: {
            get () {
                return this.$store.state.stateValue
            },
            set (val) {
                this.STATE_STATE_VALUE(val)
            }
        },
        ...mapGetters([
            'appNameWithVersion',
            'firstLetter'
        ])
        // appName () {
        //     return this.$store.state.appName
        // },
        // userName () {
        //     return this.$store.state.user.userName
        // }
    },
    data () {
        return {
            inputValue: '',
            count: 0
        }
    },
    methods: {
        ...mapMutations([
            'SET_APP_NAME'
        ]),
        handleClick () {
            this.SET_APP_NAME('root' + this.count++)
            // this.$store.commit('SET_APP_NAME', 'root' + this.count ++)
        },
        handleChangeAge () {
            this.$store.commit('SET_AGE', 200)
        },
        handleChangeActions () {
            this.$store.dispatch('updateAppName')
        }
    }
}
</script>
