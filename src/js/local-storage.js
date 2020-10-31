const LOCAL_STORAGE_KEY = "form-values";

const getFromLocalStorage = () =>{
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
}

const saveToLocalStorage = (data) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))
}

export function getData(key){
    const data = getFromLocalStorage();
    if(data && data[key]){
        return data[key];
    }
}

export function setData(key, value){ 
    let data = getFromLocalStorage();
    if(!data){
        data = {};
    }
    data[key] = value;
    saveToLocalStorage(data);
}