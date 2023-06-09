'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import Form from '@components/Form';

const EditPrompt = () => {
    console.log('reached update-prompt');
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get('id');

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: '', tag: '' });

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`api/prompt/${promptId}`);
      const data = response.json();
      setPost({ prompt: data.prompt, tag: data.tag });

      if (promptId) getPromptDetails();
    };
  }, [promptId]);

//   const createPrompt = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const response = await fetch('/api/prompt/new', {
//         method: 'POST',
//         body: JSON.stringify({
//           prompt: post.prompt,
//           userId: session?.user.id,
//           tag: post.tag,
//         }),
//       });

//       if (response.ok) {
//         router.push('/');
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

  return (
    <Form
      type='Edit'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={() => {}}
    />
  );
};

export default EditPrompt;
