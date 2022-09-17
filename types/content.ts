export type Question = {
  // the markdown content
  content: string;

  data: {
    // that are matched with the keywords
    indexes: string[];

    // markdown slug
    slug: string;
  };
};
