



export const getAuthorSuccess=(author)=>{
    //console.log(author);
    return {type:"get_author",payload:author}
};

export const changeText=(text)=>{
    return {type:"change_text",payload:text}
};

export const getAuthor=()=>{

    return function (dispatch) {

        let url="http://192.168.56.1:3000/autors";

        return fetch(url)
            .then(response=>response.json())
            .then(result=>dispatch(getAuthorSuccess(result)))
    }
};

