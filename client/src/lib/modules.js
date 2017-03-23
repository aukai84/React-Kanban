export function requestHelper(header, link) {
    return new Promise(function(resolve, reject){
        let newReq = new XMLHttpRequest();
        newReq.open(header, link);
        newReq.onload = function(){
            if(this.status >= 200 && this.status < 300){
                resolve(JSON.parse(newReq.response));
            } else {
                reject({
                    status: this.status,
                    statusText: newReq.statusText
                })
            }
        };
        newReq.onerror = function(){
            reject({
                    status: this.status,
                    statusText: newReq.statusText
                })
        };
        newReq.send();
    })

}

