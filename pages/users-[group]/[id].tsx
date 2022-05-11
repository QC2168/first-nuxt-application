export default defineComponent({
    render() {
        const route = useRoute()
        return (
            <>
                <div>{route.params.group}- {route.params.id}</div>
                <p>{route.params.slug}</p>
            </>
        )
    }
})