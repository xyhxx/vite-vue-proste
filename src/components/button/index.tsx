import {defineComponent, type PropType, type SlotsType} from 'vue';

export default defineComponent({
  props: {
    onClick: Function as PropType<(e: MouseEvent) => void>,
  },
  slots: Object as SlotsType<{
    default: string | undefined
  }>,
  render() {
    const {onClick} = this.$props;
    const {default: defaultSlot} = this.$slots;

    return (
      <button onClick={onClick}>
        {defaultSlot()}
      </button>
    );
  },
});
