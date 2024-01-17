<template>
  <div class="draggable-box"  :style="{width:width+'px'}">
    <div
      class="resize-handle"
      @mousedown.prevent="initDrag( $event)"
    ></div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const width = ref(300);

let startX = 0;
let startWidth = 0;

function initDrag(event: MouseEvent) {
  // 记录初始鼠标位置
  console.log('event',event)
  startX = event.clientX;
  startWidth = width.value;
  // 拖动时执行的函数
  const doDrag = (e: MouseEvent) => {
    let dx = e.clientX - startX;

    // 根据拖动的方向调整元素的尺寸
      width.value = startWidth + dx; 
  };
  // 结束拖动时执行的函数
  const stopDrag = () => {
    document.removeEventListener("mousemove", doDrag);
    document.removeEventListener("mouseup", stopDrag);
  };

  // 添加事件监听器，用于响应鼠标移动和鼠标释放事件
  document.addEventListener("mousemove", doDrag);
  document.addEventListener("mouseup", stopDrag);
}
</script>

<style scoped>
#app{
  margin: 0;
}
.draggable-box {
  position: relative;
  height: 100%;
}

.resize-handle {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 5px;
  cursor: col-resize;
  background: rgba(28, 15, 15, 0.035);
}
.resize-handle:hover {
  background-color: rgba(28, 15, 15, 0.035);
}
</style>
