


export  function getImageSuccess(image) {
    return {type:"get_image",payload:image}
}

export const getImage=()=>{
    return function (dispatch) {
        let url="http://192.168.56.1:3000/image";

        return fetch(url)
            .then(response=>response.json())
            .then(result=>(dispatch(getImageSuccess(result))))
    }
};
