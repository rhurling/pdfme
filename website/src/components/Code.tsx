import React from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';

const Code = ({ code, language }: { code: string; language: Language }) => (
  <Highlight {...defaultProps} theme={theme} code={code} language={language}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre
        className={className}
        style={{
          ...style,
          textAlign: 'left',
          padding: '0.5em',
          overflow: 'scroll',
        }}
      >
        {tokens.map((line, i) => (
          <div
            {...getLineProps({ line, key: i })}
            style={{
              lineHeight: '1.3em',
              height: '1.3em',
            }}
          >
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
);

export default Code;
