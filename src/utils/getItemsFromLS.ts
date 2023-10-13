export const getItemsFromLS = () => {
    const items = localStorage.getItem("cartItems")
    return items ? JSON.parse(items) : []
}