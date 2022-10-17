const CACHE_KEY = "registration_history";

const putData = (data) => {
    if (typeof(Storage) !== "undefined") {
        let historyData = null;
        if (localStorage.getItem(CACHE_KEY) === null) {
            historyData = [];
        } else {
            historyData = JSON.parse(localStorage.getItem(CACHE_KEY));
        }
 
        historyData.unshift(data);
 
        if (historyData.length > 5) {
            historyData.pop();
        }
 
        localStorage.setItem(CACHE_KEY, JSON.stringify(historyData));
    } else {
        alert('browser tidak mendukung localStorage!');
    }
}

const getDataFromLocalStorage = () =>{
    if (typeof(Storage) !== "undefined") {
        return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
    } else {
        return [];
    }
}

const renderData = () => {
    const datas = getDataFromLocalStorage();
    const content = document.getElementById('content');
    if(datas.length > 0){
        content.innerHTML = '';
    } else {
        content.innerHTML = '<td colspan="7">Data masih kosong!</td>';
    }
    for (let data of datas) {
        content.innerHTML += `
            <tr>
                <td>${data.nama}</td>
                <td>${data.ttl}</td>
                <td>${data.alamat}</td>
                <td>${data.kota}</td>
                <td>${data.pekerjaan}</td>
                <td>${data.jk}</td>
                <td>${data.hobby}</td>
            </tr>
        `;
    }
}