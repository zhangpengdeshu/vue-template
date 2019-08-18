const getters = {
    appNameWithVersion: (state) => {
        return state.appName + 'v2.0'
    },
    ageCalc: (state) => {
        return state.age + 10
    }
}
export default getters