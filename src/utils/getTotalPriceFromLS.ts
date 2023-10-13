export const getTotalPriceFromLs = () => {
    const totalPrice = localStorage.getItem("cartTotalPrice")
    if (totalPrice !== null) {
        try {
            return JSON.parse(totalPrice);
        } catch (error) {
            console.error("Error parsing cartTotalPrice:", error);
        }
    }
    return 0; 
}