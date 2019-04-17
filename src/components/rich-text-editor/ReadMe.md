
### 组件名称 
    ```rich-text-editor```

### 组件目录
    ```src/components/rich-text-editor```

### 组件目的:
    ```富文本编辑器```
### 如何使用:
     ```在父组件中使用
         <rich-text-editor @content-change="editorContentChange" :readOnly="false" />
         readOnly=false:  可编辑
         readOnly=true: 不可编辑
         readOnly: default value is false(可编辑)
     ```
### 事件说明:
    ```
    子组件中 watch 监听了 变量的值，一旦变化就调用:
        this.$emit('content-change', val)
            val: 富文本编辑器中的值

    父组件中: 定义响应事件, 子组件中分页的参数作为params传递给父组件.
        methods:{
            editorContentChange(val) {
              // 用来接收富文本编辑器中的值的变化
            },
        }
    ```
### 具体实例

## 更新日志

### 1.0

2019/04/17 创建 by Leslie
