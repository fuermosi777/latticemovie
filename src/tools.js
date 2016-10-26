export default {
    cursorChanged(props, nextProps, value) {
        return props.cur.value()[value] !== nextProps.cur.value()[value]
    }
}