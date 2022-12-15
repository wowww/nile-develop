import styled from '@emotion/styled';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import { useCallback, useState } from 'react';
import axios from 'axios';

export type MarkdownEditorProps = {
  // TODO
};

export const MarkdownEditor = (props: MarkdownEditorProps) => {
  const [value, setValue] = useState();

  const handleChange = useCallback((type) => {
    console.log(type);
  }, []);

  return (
    <Container>
      <Wrapper>
        <Editor
          onChange={handleChange}
          usageStatistics={false}
          plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
          hooks={{
            addImageBlobHook: (blob, callback) => {
              const data = new FormData();
              data.append('files', blob);
              axios.post('http://localhost:3000/api/image/upload', data, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              }).then(({ data }) => {
                callback(`https://nft-meta-dev.azureedge.net/market/${data.name}`);
              });
              // noting
            },
          }}
          initialEditType="wysiwyg"
        />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div([]);

const Wrapper = styled.div`
  & > * {
    margin: 8px;
  }
`;
