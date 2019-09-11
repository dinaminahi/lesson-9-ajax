document.querySelector('.marker')
     .innerText = (new Date()).toLocaleTimeString();
document.querySelector('.get-ajax-html')
     .addEventListener('click', getHtmlAjax);

function getHtmlAjax(){
    const XHR_STATE_FINISHED = 4;
    const HTTP_STATUS_OK = 200;
    const xhr = new XMLHttpRequest;
    xhr.onreadystatechange = function () {
         if(xhr.readyState === XHR_STATE_FINISHED
            && xhr.status === HTTP_STATUS_OK){
                document.querySelector('.html-container')
                    .innerHTML = xhr.responseText;
            }
    }
    xhr.open('GET', 'client-data.html', true);
    xhr.send();
}