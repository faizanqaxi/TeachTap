export type ContentItem = {
  id: number;
  playlist: string;
  description: string;
  image: string;
  question: string;
  options: { id: string; answer: string }[];
  user: {
    name: string;
    avatar: string;
  };
};
