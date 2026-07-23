---
layout: post.njk
title: Contribution Guidelines
author: E Tolemariam
description: Contributions are welcome!
# permalink: /contribute/
---

<!--# Writing for Our Publication-->

Writing posts is a great way to share your ideas, get feedback, and expand your horizons. It forces you to clearly present your ideas, and it's the best way to check if you truly understand a topic.

Posts of the following categories are welcome:
1. **Paper Review**: A breakdown of a research paper you found interesting.
2. **Project Analysis**: An analysis of a project or experiment you've worked on.
3. **Opinion Piece**: An essay on your position on a certain topic. (e.g. *"What World-Models are Missing"*)
4. **Prediction**: A piece on what you think will happen in the future. (e.g. *"The Economic Impact of AGI"*)

> **Note:** Although you are free to write about what you want, keep in mind that your topic must be related to artificial intelligence in one way or another. 

# How to Contribute
Once you've got your sights on a topic, here are the steps to submit a post:
<!--### Submission Process-->

### **1. Fork the Repository**  
Create a fork of the blog on Github.
### **2. Draft Your Writeup**  
Create a new file in `src/posts/YYYY-MM-DD-your-topic.md` and write your stuff.
This is where your post will live. Using markdown makes writing posts easy. You can find a cheatsheet on markdown syntax on <a style="color:#3B5CFF;" href="https://www.markdownguide.org/basic-syntax">this page.</a>  

If your post uses images, put them in `src/assets/images/post-images`.
### **3. Submit a Pull Request**  
After you finish writing your post, open a PR against `main`. If your pull request is accepted, your post will be displayed on <a style="color:#3B5CFF;" href="{{ '/posts/' | url }}">/posts.</a>
