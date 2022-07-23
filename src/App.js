import { useEffect, useState } from 'react'
import parse from 'html-react-parser'
import MarkdownIt from 'markdown-it'

const App = () => {
  const [previewer, setPreviewer] = useState("")
  const [markdown, setMarkdown] = useState("")
  const md = new MarkdownIt()

  useEffect(() => {
    setPreviewer(md.render(markdown))
  }, [markdown])

  const handleMarkdown = (e) => {
    setMarkdown(e.target.value)
  }

  return (
   <div className='container'>
    <h1>Markdown</h1>
    <div
      className='item-container' 
    >
      <h2 className='editor-header'>Editor</h2>
      <textarea 
        className='editor item'
        onChange={e => handleMarkdown(e) }
      />
    </div>
    <div
      className='item-container'
    >
      <h2 className='previewer-header'>Previewer</h2>
      <div
        className='previewer item'
      >
        { parse(previewer) }
      </div>
    </div>
   </div>
  );
}

export default App;
