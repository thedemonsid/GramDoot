import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
 // This plugin adds support for GitHub Flavored Markdown (GFM)

function MarkdownRenderer({ markdownText }) {
  return (
    <div>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownText}</ReactMarkdown>
    </div>
  );
}

export default MarkdownRenderer;