package com.example.me2u.controller;

import com.example.me2u.model.Post;
import com.example.me2u.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class PostController {

    private PostService postService;

    @Autowired
    public void setPostService(PostService postService) {
        this.postService = postService;
    }

    @PostMapping("/add")
    public String addPosting(@RequestBody Post post) {
        Integer postId = postService.addPost(post);
        System.out.println("Account added = " + postId);
        return "Success!";
    }

    @GetMapping("/all")
    public Iterable<Post> showPostings() {
        return postService.getAllPostings();
    }

    @GetMapping("/search/{topic}")
    public Iterable<Post> showPostingsByTopic(@PathVariable String topic) {
        return postService.getAllPostingsByTopic(topic);
    }

}
