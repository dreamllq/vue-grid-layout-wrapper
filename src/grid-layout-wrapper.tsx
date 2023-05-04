import { defineComponent } from 'vue';

export default defineComponent({ 
  props: {
    col: {
      type: Number,
      default: 2
    }
  },
  render() { 
    if (this.$slots.default) {
      const vNodes = this.$slots.default();
      console.log('vNodes', vNodes);
      const list:any[][] = [];
      for (let i = 0; i < Math.ceil(vNodes.length / this.col); i++) {
        for (let j = 0; j < this.col; j++) {
          const index = i * this.col + j;
          if (vNodes[index]) {
            list[i] = list[i] || [];
            list[i][j] = vNodes[index];
          }
        }
      }

      console.log(list);
      
      return list.map(row => <el-row gutter={24}>
        {
          row.map(col => <el-col span={24 / this.col}>{col}</el-col>)
        }
      </el-row>); 
    }
    return <div></div>;
  } 
});