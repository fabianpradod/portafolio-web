export interface LocalizedText {
  en: string;
  es: string;
}

export interface Project {
  id: string;
  title: string;
  headline: LocalizedText;
  description: LocalizedText;
  tags: string[];
  repoUrl: string;
  liveUrl?: string;
}