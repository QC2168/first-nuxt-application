export default defineComponent({
    render() {
        const route = useRoute()
        return (
            <>
                <p>{route.params.par}</p>
            </>
        )
    }
})