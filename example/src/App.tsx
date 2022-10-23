import KodMarkdown from '@kod-markdown'
import { useEffect, useState } from 'react'
function App() {
  const [markdown, setMarkdown] = useState<string | null>(null)
  useEffect(() => {
    fetch("/example.md")
      .then(res => res.text())
      .then(text => {
        setMarkdown(text)
      })
  }, [])
  return (
    <div className="App">
      <h1>Example</h1>
      {/* set exists markdown */}
      {/* <KodMarkdown markdown={markdown} /> */}

      {/* set markdown from url */}
      <KodMarkdown fromUrl={"/example.md"} />
    </div>
  )
}

export default App
