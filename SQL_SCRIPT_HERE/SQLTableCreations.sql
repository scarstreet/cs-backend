-- creating the database
CREATE DATABASE `confession-db`;
-- creating the tables

SHOW DATABASES;

USE `confession-db`;

CREATE TABLE `posts`(
    `id` BIGINT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT UNSIGNED NOT NULL,
    `time` TIMESTAMP NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `content` TEXT NOT NULL
);
ALTER TABLE
 `posts` ADD PRIMARY KEY `posts_id_primary`(`id`);
CREATE TABLE `users`(
    `id` BIGINT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `users` ADD PRIMARY KEY `users_id_primary`(`id`);
CREATE TABLE `comments`(
    `id` BIGINT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT UNSIGNED NOT NULL,
    `post_id` BIGINT UNSIGNED NOT NULL,
    `time` TIMESTAMP NOT NULL,
    `content` TEXT NOT NULL
);
ALTER TABLE
    `comments` ADD PRIMARY KEY `comments_id_primary`(`id`);
ALTER TABLE
    `comments` ADD CONSTRAINT `comments_post_id_foreign` FOREIGN KEY(`post_id`) REFERENCES `posts`(`id`);
ALTER TABLE
    `posts` ADD CONSTRAINT `posts_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `users`(`id`);
ALTER TABLE
    `comments` ADD CONSTRAINT `comments_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `users`(`id`);
    
SHOW TABLES;

ALTER TABLE
    `users` ADD `is_admin` BOOLEAN NOT NULL DEFAULT FALSE;

ALTER TABLE users ADD CONSTRAINT username_unique UNIQUE(username);

CREATE VIEW `posts_info` AS
SELECT COUNT(comments.id) AS comment_count, posts.id, posts.user_id, posts.time, posts.title, posts.content
FROM posts LEFT JOIN comments ON posts.id=comments.post_id
GROUP BY posts.id;