



export const getBookSuccess=(book)=>{
    return {type:"add_book",payload:book}
};



export const getBook=()=>{

    return function (dispatch) {

        let url="http://192.168.56.1:3000/features";

        return fetch(url)
            .then(response=>response.json())
            .then(result=>dispatch(getBookSuccess(result)))
    }
};
