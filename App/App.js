import { useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const [file, setFile] = useState(null)
  let formData = new FormData()

  const api = () => {

    let message = {message: 'api called'}

    formData.append(
      'file',
      file,
      'fileName'
    )

    axios.post('http://localhost:3001/test', formData, {headers: {'Content-Type': 'multipart/form-data'}})
      .then((res) => console.log(res))

    console.log(formData.has('file'))
  }
  return (
    <div className="App">
      <h1>App Page</h1>

      <input 
        type='file'
        accept='application/pdf'
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button>Submit</button>
      <button onClick={api}>Call API</button>
      <button onClick={() => console.log(formData.has('file'))}>Log FormData</button>
    </div>
  );
}

export default App;
