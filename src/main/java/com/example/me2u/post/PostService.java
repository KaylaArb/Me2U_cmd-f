package com.example.me2u.post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostService {

    PostRepository postRepository;

    @Autowired
    public void setPostRepository(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public void addPost(Post post) {
        try {
            postRepository.save(post);
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("Post could not be saved : " + e.getMessage());
        }
    }

    public Iterable<Post> getAllPostings() {
        return postRepository.findAll();
    }

    public Iterable<Post> getAllPostingsByTopic(String topic) {
        try {
            return postRepository.findAllByTopic(topic);
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("No posts with topic: " + e.getMessage());
        }
    }

}
