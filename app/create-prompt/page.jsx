'use client';

import Form from '@/components/Form';
import { useState } from 'react';

const CreatePrompt = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: '',
    tag: '',
  });

  const createPrompt = async (e) => {
    e.preventDeafult();
    setSubmitting(true);

    try {
      const response = await fetch('/api/prompt/new', {
        method: 'POST',
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.userId,
          tag: post.tag,
        }),
      });

      if(response.ok) {
        router.push('/')
      }
    } catch (error) {}
  };

  return (
    <Form
      type='create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
