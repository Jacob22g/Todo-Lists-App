-- CREATE DATABASE perntodo;

--Child
CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    completed BOOLEAN DEFAULT FALSE,
    description VARCHAR(255),
    created_at TIMESTAMP DEFAULT Now(),
    list_id INT,
    CONSTRAINT fk_list
        FOREIGN KEY(list_id) 
            REFERENCES lists(list_id)
            ON DELETE CASCADE
);

--Parent
CREATE TABLE lists(
    list_id SERIAL PRIMARY KEY,
    list_name VARCHAR(255),
    created_at TIMESTAMP DEFAULT Now()
);
