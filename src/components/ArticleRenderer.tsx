import React, { useMemo } from 'react';

interface ArticleRendererProps {
  htmlContent: string;
}

const HTML_TAG_REGEX = /<\s*(article|section|p|ul|ol|li|h[1-6]|blockquote|hr|br|div)\b/i;

const decodeHtmlEntities = (input: string): string => {
  if (typeof window === 'undefined') return input;

  const textarea = document.createElement('textarea');
  textarea.innerHTML = input;
  return textarea.value;
};

const normalizePlainTextToHtml = (content: string): string => {
  const blocks = content
    .replace(/\r\n/g, '\n')
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  return blocks
    .map((block) => {
      const lines = block
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean);

      const isBulletList = lines.length > 0 && lines.every((line) => /^[-•*]\s+/.test(line));

      if (isBulletList) {
        const items = lines
          .map((line) => line.replace(/^[-•*]\s+/, ''))
          .map((item) => `<li>${item}</li>`)
          .join('');

        return `<ul>${items}</ul>`;
      }

      return `<p>${lines.join('<br />')}</p>`;
    })
    .join('\n\n');
};

const normalizeArticleContent = (content: string): string => {
  const trimmed = content?.trim();
  if (!trimmed) return '';

  const decoded = decodeHtmlEntities(trimmed);
  if (HTML_TAG_REGEX.test(decoded)) {
    return decoded;
  }

  return normalizePlainTextToHtml(decoded);
};

export default function ArticleRenderer({ htmlContent }: ArticleRendererProps) {
  const normalizedContent = useMemo(() => normalizeArticleContent(htmlContent), [htmlContent]);

  return <div className="article-wrapper" dangerouslySetInnerHTML={{ __html: normalizedContent }} />;
}
