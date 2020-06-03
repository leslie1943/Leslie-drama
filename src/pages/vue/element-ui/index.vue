<template>
  <div>
    <div>
      <img class="imgStyle" src="./demo.jpg" />
    </div>
    <el-row>
      <el-col :span="8">
        <div class="animation-demo">animation-demo</div>
      </el-col>
      <el-col :span="8">
        <div class="direction-demo">direction-demo</div>
      </el-col>
      <el-col :span="8">
        <div class="state-demo">state-demo</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import options from './opitons'
import demo from './demo.jpg'
export default {
  data() {
    return {
      options: options,
      value: [],
      pic: demo
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
.div-align-middle * {
  vertical-align: middle;
}
.imgStyle {
  // 初始加载样式
  height: 150px;
  width: 150px;
}
.imgStyle:hover {
  // 鼠标悬浮样式
  height: 450px;
  width: 450px;
}
.imgStyle {
  // transition: 1s height; // 只对height作用
  // transition: 1s width; // 只对width作用
  // transition: 1s height, 1s 1s width; // 先对高度作用，一秒后对width作用
  /**
  0)ease: --- 开始慢，中间快，结尾慢
  1)linear: 匀速的
  2)ease-in: 加速的
  3)ease-out: 减速的 --- 开始快，中间快，结尾慢
  4)cubic-bezier 函数,自定义速度模式
 */
  //  P0(0,0),P3(1,1)
  transition: 1s cubic-bezier(0.97, 0.97, 0.05, 1.44); // 控制P1,P2(x1,y1,x2,y2) 放大过度、然后回缩的效果
}
.animation-demo {
  border: 1px solid grey;
  height: 200px;
}

.animation-demo:hover {
  animation: 1s rainbow 3 forwards; // infinite可以为整数字 forwards停留在动画结束状态
}
@keyframes rainbow {
  0% {
    background: #c00;
  }
  50% {
    background: orange;
  }
  100% {
    background: yellowgreen;
  }
}

.direction-demo {
  border: 1px solid grey;
  height: 200px;
}
.direction-demo:hover {
  //        时间, 动画name count, 结束状态, fill-model,分步
  animation: 3s direction 3 forwards reverse steps(7); // infinite可以为整数字 forwards停留在动画结束状态
}
@keyframes direction {
  0% {
    background-color: yellow;
  }
  10% {
    background-color: pink;
  }
  20% {
    background-color: darkcyan;
  }
  30% {
    background-color: darkkhaki;
  }
  40% {
    background-color: black;
  }
  80% {
    background-color: darkmagenta;
  }
  100% {
    background: blue;
  }
}

.state-demo {
  border: 1px solid grey;
  height: 200px;
  -webkit-animation-play-state: paused;
  animation-play-state: paused;
}
.state-demo:hover {
  animation: 10s state infinite; // infinite可以为整数字 forwards停留在动画结束状态

  -webkit-animation-play-state: running;
  animation-play-state: running;
}

@keyframes state {
  0% {
    background-color: yellow;
  }
  10% {
    background-color: pink;
  }
  20% {
    background-color: darkcyan;
  }
  30% {
    background-color: darkkhaki;
  }
  40% {
    background-color: black;
  }
  80% {
    background-color: darkmagenta;
  }
  100% {
    background: blue;
  }
}
@-webkit-keyframes state {
  0% {
    background-color: yellow;
  }
  10% {
    background-color: pink;
  }
  20% {
    background-color: darkcyan;
  }
  30% {
    background-color: darkkhaki;
  }
  40% {
    background-color: black;
  }
  80% {
    background-color: darkmagenta;
  }
  100% {
    background: blue;
  }
}
</style>

