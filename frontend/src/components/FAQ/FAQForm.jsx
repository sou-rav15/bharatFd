import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './FAQForm.css'
import axios from 'axios';
function FAQForm() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/faqs', { question, answer });
      
    } catch (error) {
      console.error('Error adding FAQ:', error);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="question">
      <input 
        type="text" 
        placeholder="Enter your question" 
        value={question} 
        onChange={(e) => setQuestion(e.target.value)} 
      />
      </div>

      <div className="editor">
      <Editor
        apiKey="6ltcsc7ycsobz9i88o4wkolmgcaxpo73shrbrocdmand162c"  // Optional, leave empty for free version
        value={answer}
        init={{
          height: 300,
          menubar: false,
          plugins: ['link', 'table', 'lists', 'code'],
          toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist | link table code',
          readonly: false,
        }}
        onEditorChange={(content) => setAnswer(content)}
      />
      </div>

     <div className="btn">
     <button type="submit">Submit</button>
     </div>
    </form>
  );
}

export default FAQForm;
