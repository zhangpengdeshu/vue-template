# vue-cource

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
### 跨域问题：
    跨域：浏览器的同源策略导致跨域问题，其实只有在ajax请求才有跨域问题
    同一域名(允许)
    同一域名下不同文件夹(允许)
    同一域名不同端口(不允许)
    域名和域名对应ip(no)
    主域名相同子域名不同(no)
    同一域名，不同二级域名(no)
    不同域名(no)
    ### proxy
    ### 设置header值
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Header', 'X-Requested-With, Content-Type')
        res.header('Access-Control-Allow-Methods', 'PUT,POST,DELETE,OPTIONS,GET')
    