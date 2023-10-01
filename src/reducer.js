export const initalState = {
    basket: [{
        id: 2124,
        title: "80 20 Principal80 20 Principal 80 20 Principal80 20 Principal",
        price: 22,
        rating: 5,
        image: "https://img.freepik.com/free-photo/close-up-hand-holding-smartphone_23-2149148857.jpg",
    },
    ],
    user: null,
};

    const reducer = (state, action) => {
        console.log(action.type);
        switch (action.type) {
            case 'ADD_TO_BASKET':
                //logic to add item to basket
                return {
                    ...state,
                    basket: [...state.basket, action.item]
                };
            case 'REMOVE_FROM_BASKET':
                //logic to remove item from basket
                let newbasket = [ ...state.basket ];
                const index = state.basket.findIndex(
                    (basketItem) => basketItem.id == action.id
                    );
                 if (index >= 0) {
                  //item existe
                  newbasket.splice(index, 1);

                  } else {
                  console.warn('vant remove')
                 }
                 return {
                  ...state,
                  basket: newbasket};
            default:
                 return state;
                     }
                     };
export default reducer;