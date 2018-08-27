import React from 'react';
import ReactDOM from 'react-dom';
// import { getMaxListeners } from 'cluster';
//import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
const rootElement=document.querySelector("#root");

const headers ={
    headers:{
   'Authorization': `Basic ${btoa('journalreagan@gmail.com:Jevanjee40.')}`
    }
}

//Dataset function for view
function DataSet({dataset}){
    return <div> <a href = {dataset.href}>{dataset.name}</a></div>;
}
//Dataset function for List
function DataSetList({datasets}){
    return(
        <div>
            <h4>WakandaLand Dataset</h4>
            <div>
                {datasets.map((dataset)=> <DataSet dataset={dataset} />)}
            </div>
        </div>
    );
}
// Pulling datasets via API
fetch('http://197.136.81.99:8080/training/api/dataSets?paging=false&fields=id,name,code,shortName,description,href', headers
).then((fetchData) => fetchData.json()).then((jsonData)=>{
    ReactDOM.render(<DataSetList datasets={jsonData.dataSets}/>, rootElement);
}).catch((error)=>{console.log('Error', error)});
