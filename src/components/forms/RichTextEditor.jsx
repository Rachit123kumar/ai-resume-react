
import { useState } from 'react';
import { 
  BtnBold,
  BtnItalic,
  Editor,
  EditorProvider,
  Toolbar
} from 'react-simple-wysiwyg';
export default function RichTextEditor() {

    const [value,setValue]=useState("");
    
  return (
    <EditorProvider>
      <Editor className='snap-start' containerProps={{ style: { height:"300px", scrollbarColor:"initial"} }} value={value} onChange={(e)=>setValue(e.target.value)}>
      <Toolbar>
          <BtnBold />
          <BtnItalic />
      
        </Toolbar>
      </Editor>
    </EditorProvider>
  )
}
