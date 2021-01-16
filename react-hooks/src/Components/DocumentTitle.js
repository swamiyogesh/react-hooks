import React, {useState} from 'react'
import useDocumentTitle from '../Hooks/useDocumentTitle';

function DocumentTitle() {
  const [count, setCount] = useState(0)
  useDocumentTitle(count)

  return (
    <div>
        <h2>Custom Document Title</h2>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  )
}

export default DocumentTitle