import { defineComponent,PropType,toRefs} from "vue";
import "uno.css";
//定义组件颜色类型
export type IColor = 'black' | 'gray' | 'red' | 'yellow' | 'green'|'blue'|'indigo'|'purple'|'pink'
export type ISize = "small" | "medium" | "large";
//定义props
export const props = {
  // 新增
  size: {
    type: String as PropType<ISize>,
    default: "medium",
  },

  color: {
    type: String as PropType<IColor>,
    default: "blue",
  },

  round: {
    type: Boolean,
    default: false,
  },

  plain: {
    type: Boolean,
    default: false,
  },

  icon: {
    type: String,
    default: "",
  },

}
export default defineComponent({
  name: "SButton",
  props,

  setup(props, {slots}) {
    console.log(`html`, document.querySelector(`#app`)?.innerHTML);
    const size = {
      small: {
        x: "2",
        y: "1",
        text: "sm",
      },
      medium: {
        x: "3",
        y: "1.5",
        text: "base",
      },
      large: {
        x: "4",
        y: "2",
        text: "lg",
      },
    };


    return () => <button 
    class={`
    py-2 
    px-4 
    font-semibold 
    rounded-lg 
    shadow-md 
    text-white 
    bg-${props.color}-500 
    hover:bg-${props.color}-700 
    border-none 
    py-${size[props.size].y}  
    cursor-pointer 
    m-1
    `}
        > 
        { props.icon !== "" ? <i class={`i-ic-baseline-${props.icon} p-3`}></i> : ""}
        {slots.default ? slots.default() : ''}
     </button>
  }
});
