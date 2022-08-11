console.log('index js');

//Utility Functions:
// 1.utility function to get dom element from html

function getElementFromString(html) {
    let div = document.createElement('div');
    div.innerHTML = html;
    return div.firstElementChild;
}


// Intailize no of Parameters
let addParamCount = 0;

//Hide Parameters Box initialy
let parametersBox = document.getElementById('parametersBox');
parametersBox.style.display = "none";

//IF User Click parmbox : hide the json box
let paramRadio = document.getElementById('paramsRadio');
paramRadio.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = "none";
    document.getElementById('parametersBox').style.display = "block";
})

//If User click on jsonbox: Hide the Parm Box

let JsonRadio = document.getElementById('jsonRadio');
JsonRadio.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = 'block';
    document.getElementById('parametersBox').style.display = "none";
})

// if user click on + button, Add more parameters
let addParam = document.getElementById('addParam');
addParam.addEventListener('click', () => {
    let params = document.getElementById('params');
    let html = ` <div class="row g-3">
                     <label for="parameter">Parameters ${addParamCount + 2}</label>
                          <div class="col">
                               <input id="parameterKey${addParamCount + 2}" type="text" class="form-control" placeholder="  Parameter Key ${addParamCount + 2}" aria-label=" Parameter Value ${addParamCount + 2}">
                         </div>
                         <div class="col">
                             <input id="parameterValue${addParamCount + 2}" type="text" class="form-control" placeholder="Parameter Value ${addParamCount + 2}" aria-label="Last name">
                         </div>
                    <button class="btn btn-primary my-3 deleteParam col-1"> - </button>
                </div>`

    //Convert the Element html to DOM Node
    let paramElement = getElementFromString(html);
    // Params.appendchild(paramElement);
    params.appendChild(paramElement);

    // console.log(paramElement);
    addParamCount++;
    let deleteParam = document.getElementsByClassName('deleteParam');
    for (item of deleteParam) {
        item.addEventListener('click', (e) => {
            e.target.parentElement.remove();

        })
    }
})
// Validation On Url
let validUrl;
let url1 = document.getElementById('url');

url1.addEventListener('blur', () => {
    console.log('Url is blured')
    let str = url1.value;
    console.log(str);
    if (str.length >= 6) {
        console.log('Url is Valid')
        validUrl = true;
    }
    else {
        console.log('Inavlid Url')
        validUrl = false;
    }

    console.log(validUrl);
})

// If the user click on Submit Button
let submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    


        //Show please Wait
        // document.getElementById('responseJsonText').value="Please Wait ... Fetching Response"
        
        //Fetch all the value user has enter
        let url = document.getElementById('url').value;
        let requestType = document.querySelector("input[name='requestType']:checked").value;
        let contentType = document.querySelector("input[name='contentType']:checked").value;
        
        //Log all the value

        
        //If user has use params option instead of json,Collect all parameter in an obj
        
        
        if (contentType == 'params') {
            data = {};
            for (i = 0; i < addParamCount + 1; i++) {
                if (document.getElementById('parameterKey' + (i + 1)) != undefined) {
                    let key = document.getElementById('parameterKey' + (i + 1)).value;
                    let value = document.getElementById('parameterValue' + (i + 1)).value;
                    data[key] = value;
                }
            }
            data = JSON.stringify(data);
            
        }
        else {
            data = document.getElementById('requestJsonText').value;

        }
        // console.log(url)
        // console.log(requestType)
        // console.log(contentType)
        // console.log('data is', data)
        

        // if the request type is get, invoke fetch api to create a post request
        
        if (validUrl) {
            document.getElementById('responsePrism').innerHTML = "Please Wait ... Fetching Response";
            if (requestType == 'GET') {
                fetch(url, {
                    method: 'GET',
                })
                .then(response => response.text())
                .then((text) => {
                    // document.getElementById('responseJsonText').value=text;
                    document.getElementById('responsePrism').innerHTML = text;
                    Prism.highlightAll();
                    
                })
            }

        else {
            fetch(url, {
                method: 'POST',
                body: data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
                .then(response => response.text())
                .then((text) => {
                    // document.getElementById('responseJsonText').value=text;
                    document.getElementById('responsePrism').innerHTML = text;
                    Prism.highlightAll();

                })
        }
    }
    else{
        alert('Enter Valid Url');
    }

})



