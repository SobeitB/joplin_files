import {useState} from "react";
import {Files} from "../shared/types";

export const useFiles = () => {
   const [files, setFiles] = useState<Files[]>([]);

   const onFile = async (event:React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault()
      const reader = new FileReader()
      reader.onload = async (e:any) => {
         const text = (e.target.result);

         setFiles([...files,
            {
               id:Math.floor (Math.random () * (99999 - 0 + 1)) + 0,
               text
            }
         ])
      };
      reader.readAsText(event.target.files![0])
   }

   return {
      files,
      onFile,
   }
}