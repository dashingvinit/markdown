import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import data from './data';

function App() {
  console.log(data);
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        p: ({ ...props }) => <p className="mb-4 sm:mb-4" {...props} />,
        h1: ({ ...props }) => <h1 className="my-2 font-bold sm:text-2xl sm:my-2" {...props} />,
        h2: ({ ...props }) => <h2 className="my-2 font-bold sm:text-xl sm:my-1" {...props} />,
        h3: ({ ...props }) => <h3 className="text-xl my-2 sm:text-lg sm:my-1" {...props} />,
        h4: ({ ...props }) => <h4 className="text-lg my-2 sm:text-base sm:my-1" {...props} />,
        code: ({ inline, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || '');
          return inline ? (
            <code
              className="bg-gray-100 text-white px-1 py-0.5 rounded text-sm font-mono"
              {...props}>
              {children}
            </code>
          ) : (
            <SyntaxHighlighter
              style={vscDarkPlus}
              language={match ? match[1] : 'text'}
              PreTag="div"
              className="my-4 sm:my-2 rounded-lg overflow-x-auto"
              {...props}>
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          );
        },
        ul: ({ ...props }) => <ul className="list-disc pl-2 mb-6 sm:mb-4" {...props} />,
        ol: ({ ...props }) => <ol className="list-decimal pl-2 mb-6 sm:mb-4" {...props} />,
        li: ({ ...props }) => <li className="mb-2 pl-2 sm:pl-1" {...props} />,
        a: ({ ...props }) => (
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline sm:text-blue-500 hover:opacity-75"
            {...props}
          />
        ),
        table: ({ ...props }) => (
          <table
            className="min-w-full rounded-lg bg-secondary border border-gray-300 sm:text-xs"
            {...props}
          />
        ),
        thead: ({ ...props }) => <thead className="bg-foreground">{props.children}</thead>,
        tbody: ({ ...props }) => <tbody>{props.children}</tbody>,
        tr: ({ ...props }) => <tr className="border-t border-gray-300">{props.children}</tr>,
        th: ({ ...props }) => (
          <th className="px-4 py-2 text-secondary text-left text-sm sm:px-2 sm:py-1">
            {props.children}
          </th>
        ),
        td: ({ ...props }) => <td className="px-4 py-1  sm:px-2 sm:py-2">{props.children}</td>,
      }}>
      {data}
    </ReactMarkdown>
  );
}

export default App;
