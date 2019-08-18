function getUserInfo () {
    return new Promise((resolve, reject) => {
        const err = null
        setTimeout(() => {
            if(!err) resolve({code: 200, info: { appName: 'newAppName'}})
            else reject(err)
        })
    })
}

const actions = {
    updateAppName ({commit}) {
        getUserInfo().then(res => {
            const { code,info: {appName} } = res
            commit('SET_APP_NAME', appName)
        }).catch(e => {
            console.log(e)
        })
    }
}
export default actions
