import NewsPage from "@/components/NewsPage";
import React from "react";
let myContent = `# NewsGram

Welcome to NewsGram, a platform where you can post news anonymously and receive AI-powered assistance to write your news in the best manner possible.

## Todo List
- [x] Create a new project
- [x] Database setup
- [x] Deployment
- [x] Models Creattion
- [ ] API creation
- [ ] API Testing
- [ ] User authentication
- [ ] News posting
- [ ] AI assistance
- [ ] Multi-lingual support
- [ ] Community interaction
- [ ] Trending news
- [ ] User profiles
- [ ] Rate limiting
- [ ] Responsive Design
- [ ] Security features for anonymous posting
- [ ] Docker setup
- [ ] Community guidelines
- [ ] Feedback and support
- [ ] Testing
- [ ] Documentation
- [ ] Final review
- [ ] Launch

## Getting Started

To start using NewsGram, follow these simple steps:

1. Sign up for an account by clicking on the "Sign Up" button on the homepage.
2. Once signed up, you can log in to your account and start posting news.
3. Click on the "Create News" button to compose your news article.
4. Write your news content in the provided editor. The AI assistance feature will automatically suggest improvements to enhance the quality of your news.
5. Review the suggestions provided by the AI and make any necessary edits.
6. Once you are satisfied with your news article, click on the "Publish" button to make it available to the community.

## Features

NewsGram offers the following features:

- Anonymous Posting: Feel free to share news without revealing your identity.
- AI Assistance: Our advanced AI algorithms provide suggestions to improve the quality and readability of your news articles.
- Community Interaction: Engage with other users by commenting on their news articles and participating in discussions.
- Trending News: Stay updated with the latest trending news articles on the homepage.
- User Profiles: Customize your profile, view your published articles, and keep track of your contributions.

## Community Guidelines

To ensure a positive and respectful environment, we kindly request all users to adhere to the following guidelines:

1. Respect others' opinions and avoid engaging in personal attacks or harassment.
2. Provide accurate and reliable information in your news articles.
3. Avoid posting content that is offensive, discriminatory, or violates any laws.
4. Use appropriate language and maintain a professional tone in your interactions.
5. Report any inappropriate or abusive behavior to the site administrators.

## Feedback and Support

We value your feedback and are here to assist you. If you have any questions, suggestions, or need support, please reach out to our team at support@newsgram.com.

Thank you for joining NewsGram! We hope you have a great experience sharing and reading news on our platform.`;
function News() {
  return (
    <NewsPage className 
      headline={"Siddhesh Shrirame Becomes Youngest millionire" } 
      date={"2021-09-01"}
      source={"Times of India"}
      content={myContent}
    ></NewsPage>
  );
}

export default News;
