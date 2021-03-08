package com.example.me2u.service;

import com.example.me2u.dao.PostRepository;
import com.example.me2u.model.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostService {

    PostRepository postRepository;

    @Autowired
    public void setPostRepository(PostRepository postRepository) {this.postRepository = postRepository;}

    public Integer addPost(Post post) {
        try {
            Post newPost = postRepository.save(post);
            return newPost.getId();
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
