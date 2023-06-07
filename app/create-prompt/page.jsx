import Form from '@/components/Form';
import { useState } from 'react';

const CreatePrompt = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: '',
    tag: '',
  });

  const createPrompt = async (e) => {

  }

  return <Form 
    type="create"
    post={post}
    setPost={setPost}
    submitting={submitting}
    handleSubmit={createPrompt}
  />;
};

export default CreatePrompt;
