import{d as m,G as a,D as r,a2 as f,a3 as i,h,o as v,c as _,B as e,O as A,b as g,a as b}from"./chunks/framework.a6ddd03f.js";function C(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!f(o)}const E=m({props:{col:{type:Number,default:2}},render(){if(this.$slots.default){const o=this.$slots.default();console.log("vNodes",o);const s=[];for(let n=0;n<Math.ceil(o.length/this.col);n++)for(let l=0;l<this.col;l++){const p=n*this.col+l;o[p]&&(s[n]=s[n]||[],s[n][l]=o[p])}return console.log(s),s.map(n=>{let l;return a(r("el-row"),{gutter:24},C(l=n.map(p=>a(r("el-col"),{span:24/this.col},C(p)?p:{default:()=>[p]})))?l:{default:()=>[l]})})}return a("div",null,null)}}),V=A("",9),k=A("",4),P=JSON.parse('{"title":"lc-vue-grid-layout-wrapper","description":"","frontmatter":{},"headers":[],"relativePath":"index.md"}'),q={name:"index.md"},S=Object.assign(q,{setup(o){const s=i({value1:"",value2:"",value3:""}),n=i({value1:[{required:!0,message:"请输入value1"}]}),l=h(),p=async()=>{try{await l.value.validate()}catch(y){console.log(y)}};return(y,t)=>{const F=r("el-input"),D=r("el-form-item"),u=r("el-button"),d=r("el-form");return v(),_("div",null,[V,a(d,{ref_key:"formRef",ref:l,model:s,rules:n,"label-position":"top"},{default:e(()=>[a(g(E),{col:2},{default:e(()=>[a(D,{label:"测试1",prop:"value1"},{default:e(()=>[a(F,{modelValue:s.value1,"onUpdate:modelValue":t[0]||(t[0]=c=>s.value1=c)},null,8,["modelValue"])]),_:1}),a(D,{label:"测试2",prop:"value2"},{default:e(()=>[a(F,{modelValue:s.value2,"onUpdate:modelValue":t[1]||(t[1]=c=>s.value2=c)},null,8,["modelValue"])]),_:1}),a(D,{label:"测试3",prop:"value3"},{default:e(()=>[a(F,{modelValue:s.value3,"onUpdate:modelValue":t[2]||(t[2]=c=>s.value3=c)},null,8,["modelValue"])]),_:1})]),_:1}),a(D,{label:"测试3"},{default:e(()=>[a(u,{onClick:p},{default:e(()=>[b("确认")]),_:1})]),_:1})]),_:1},8,["model","rules"]),k])}}});export{P as __pageData,S as default};