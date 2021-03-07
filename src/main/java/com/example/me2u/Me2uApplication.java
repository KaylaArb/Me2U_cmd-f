package com.example.me2u;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Me2uApplication {

    public static void main(String[] args) {
        SpringApplication.run(Me2uApplication.class, args);
    }

//    @Configuration
//    public class CrossOriginsConf implements WebMvcConfigurer {
//
//        @Override
//        public void addCorsMappings(CorsRegistry registry) {
//            registry.addMapping("/**")
//                    .allowedOrigins("http://localhost:3000/")
//                    .allowedHeaders("http://localhost:3000/")
//                    .allowedMethods("*");
//        }
//    }

}
