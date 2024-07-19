# API Docs

## 开发内容

1. 菜单在 sidebar.json 中配置
2. 页面在 _pages 中配置 md 文件
3. 页面中的数据，比如数据结构 json 文件，在 wwwroot/pages 对应的 mjs 文件 中配置

## 测试和部署

### 开发测试

运行下面两个命令, 可以本机启动一个开发环境, 用于测试和开发:

```
$ npm run ui:dev
$ dotnet watch
```

### 本机生产测试

运行下面两个命令, 可以本机启动一个开发环境, 用于测试和开发:

```
$ npm run prerender
$ npm run serve
```

### 部署

执行 deploy，copy 文件到 AWS S3

    ```sh
    $ ./deploy.sh
    ```
