import './App.css';
import {useState} from 'react';
import ReadCSV from './components/ReadCSV.js';
import DisplayData from './components/DisplayData.js';

function App() {
  // useState to store data from CSV file to array
  const [data, setData] = useState([]);

  // useState to store the file name of the CSV
  const [dataTitle, setDataTitle] =  useState('');
  return (
    <div className="App">
      <h1>ATS Spec Solutions Tech Challenge</h1>
      <ReadCSV 
      setData = {setData}
      setDataTitle = {setDataTitle}/>
      <DisplayData 
      data = {data}
      title = {dataTitle}/>
    </div>
  );
}

export default App;


// use CSVReader to get data from CSV
// display Data, max 100 per page
// Have a select option to filter through the data so user may choose
// to only see the data they selected