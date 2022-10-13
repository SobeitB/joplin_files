import {useState} from 'react';
import './App.css';
import {useFiles} from "./hooks/files";
import {Files} from "./shared/types";

function App() {
   const {files, onFile} = useFiles();
   const [nameFile, setNameFile] = useState('')

  return (
    <div className="App">
      <header className="App-header">

         {files.length !== 0 &&
             <div>
                 <input
                     onChange={(e) => setNameFile(e.target.value) }
                     value={nameFile}
                 />
                 <a
                     href={'data:text/plain;charset=utf-8,' + encodeURIComponent(files.map((file: Files) => file.text).join(' '))}
                     download={`${nameFile}.txt`}
                 >
                     dowloand file
                 </a>
             </div>
         }

         {[...files, {text:'', id: -1}].map((fileText:Files) => (
            <input key={fileText.id} type="file" onChange={(event) => onFile(event)} />
         ))}

         <br />

         {files.map((fileText:Files,) => (
            <p key={fileText.id} className='text'>{fileText.text}</p>
         ))}
      </header>
    </div>
  );
}

export default App;
