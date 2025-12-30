import React from "react";

export interface PostMeta {
  slug: string; // e.g. "/my-first-post"
  title: string;
  dateISO: string; // "2025-12-30"
  dateDisplay: string; // "December 30, 2025"
  tags?: string[];
  featureImage?: string;
}

interface PostLayoutProps {
  meta: PostMeta;
  baseUrl?: string;
  authorName: string;
  children: React.ReactNode;
}

export const PostLayout = ({
  meta,
  baseUrl = "",
  authorName,
  children,
}: PostLayoutProps) => {
  const { slug, title, dateISO, dateDisplay, tags, featureImage } = meta;

  return (
    <article className="post">
      <header className="post-header">
        <time className="post-date" dateTime={dateISO}>
          {dateDisplay}
        </time>

        <h2 className="post-title">
          <a href={`${baseUrl}${slug}`} rel="bookmark">
            {title}
          </a>
        </h2>

        <div className="post-meta">
          By <span className="post-author">{authorName}</span>
          {tags && tags.length > 0 && (
            <span className="post-tags">
              {" "}
              in{" "}
              {tags.map((tag, idx) => (
                <React.Fragment key={tag}>
                  <a
                    href={`${baseUrl}/tags/#${encodeURIComponent(tag)}`}
                    rel="tag"
                  >
                    {tag}
                  </a>
                  {idx < tags.length - 1 && ", "}
                </React.Fragment>
              ))}
            </span>
          )}
        </div>

        {featureImage && (
          <figure className="post-thumbnail image-card width-wide">
            <a href={`${baseUrl}${slug}`}>
              <img src={featureImage} alt={title} />
            </a>
          </figure>
        )}
      </header>

      <div className="post-content">{children}</div>
    </article>
  );
};
