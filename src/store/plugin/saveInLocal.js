export default store => {
    console.log('store 初始化啦')
    if (localStorage.state) store.replaceState(JSON.parse(localStorage.state))
    store.subscribe((mutations, state) => {
        localStorage.state = JSON.stringify(state)
    })
}