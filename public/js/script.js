const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (email && password) {
        const response = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Incorrect email or password, please try again' );
        }
    }
};

const newUser = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (username && email && password) {
        const response = await fetch('/register', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Oops! Something went wrong.')
        }
    }
};

const logout = async () => {
    const response = await fetch('/api/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
};

const newPost = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#new-post-title').value.trim();
    const description = document.querySelector('#new-post-body').value.trim();

    if (title && description) {
        const response = await fetch('/post', {
            method: 'POST',
            body: JSON.stringify({ title, description }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace(`/dashboard`);
        } else {
            alert('Oops! Something went wrong.')
        }
    }
};

const newComment = async (event) => {
    event.preventDefault();

    const body = document.querySelector('#comment-body').value.trim();

    const currentPostUrlID = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

    if (body) {
        const response = await fetch(`/post/${currentPostUrlID}`, {
            method: 'POST',
            body: JSON.stringify({ body }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            location.reload();
        } else {
            alert('Oops! Something went wrong.')
        }
    }
};

const editPost = () => {
    console.log('Edit attempt');

    const oldTitle = document.querySelector('.one-post-title').innerHTML;
    const oldDescription = document.querySelector('.one-post-body').innerHTML;

    document.getElementById("edit-box").innerHTML =
        `
        <div id="new-post-box">
        <form id="edit-post-form">
        <label for="title">Title:</label><br>
        <input type="text" id="new-post-title" name="title"><br>
        <label for="description">Blog:</label><br>
        <textarea type="text" id="new-post-body" name="description"></textarea><br>
        <input id="new-post-submit-button" type="submit" value="Submit">
        </form>
        </div>
        `;
    document.getElementById('new-post-title').value = oldTitle;
    document.getElementById('new-post-body').value = oldDescription;

    document
        .querySelector('#edit-post-form')
        .addEventListener('submit', updatePost);

    document.querySelector('.one-post').remove();
    document.querySelector('#comment-form').remove();
    document.querySelector('#users-post-container').remove();
};

const updatePost = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#new-post-title').value.trim();
    const description = document.querySelector('#new-post-body').value.trim();

    const currentPostUrlID = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

    if (title && description) {
        const response = await fetch(`/post/${currentPostUrlID}`, {
            method: 'PUT',
            body: JSON.stringify({ title, description }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            location.reload();
        } else {
            alert('Oops! Something went wrong.')
        }
    }
};

const deletePost = async (event) => {
    event.preventDefault();

    if (confirm('Are you sure you want to delete this post? This cannot be undone!')) {
        const currentPostUrlID = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

        const response = await fetch(`/post/${currentPostUrlID}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Oops! Something went wrong.');
        }
    };
};
