import {defineComponent, type PropType, type SlotsType} from 'vue';

export default defineComponent({
  name: 'DemoButton',
  props: {
    onClick: Function as PropType<(e: MouseEvent) => void>,
  },
  slots: Object as SlotsType<{
    default: string | undefined
  }>,
  setup(props, {slots}) {
    return () => (
      <button onClick={props.onClick}>
        {slots.default?.()}
      </button>
    );
  },
});
