// src/posts/index.ts
import NavigationSystemRedesign, {
  navigationSystemRedesignMeta,
} from "./NavigationSystemRedesign";
import React from "react";
export interface PostEntry {
  Component: React.FC;
  meta: {
    slug: string;
    title: string;
    dateISO: string;
    dateDisplay: string;
    tags?: string[];
    featureImage?: string;
  };
}

export const posts: PostEntry[] = [
  { Component: NavigationSystemRedesign, meta: navigationSystemRedesignMeta },
  // more posts…
];
