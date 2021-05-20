import CSVReader from "react-csv-reader";

const ReadCSV = (props) => {
    // function to get data from CSV file
    const fileLoad = (data, fileInfo) => {
        props.setDataTitle(fileInfo.name)
        props.setData(data);
    }

    // papaparse to parse through the CSV file
    const papaparseOptions = {
        header: true,
        skipEmptyLines: true,
        // function to replace spaces with underscore and make all characters lowercase
        transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
      };

    return (
        <div className="csvContainer">
            <CSVReader 
            onFileLoaded = {fileLoad}
            parserOptions = {papaparseOptions}
            />
        </div>
    )
}

export default ReadCSV;