document.addEventListener('DOMContentLoaded', function() {
    console.log("JavaScript is loaded and ready!");

    // Function to toggle between showing all posts and the new post form
    function toggleView(view) {
        const allPosts = document.querySelector('#all-posts');
        const newPostForm = document.querySelector('#new-post');
        
        if (view === 'all') {
            allPosts.style.display = 'block';
            newPostForm.style.display = 'none';
        } else {
            allPosts.style.display = 'block';
            newPostForm.style.display = 'block';
        }
    }

    // When "All Posts" link is clicked
    document.querySelector('#showAllPostsLink')?.addEventListener('click', function(event) {
        window.location.href = "{% url 'index' %}";  // Navigate to the "All Posts" page
    });

    // When "Following" link is clicked
    document.querySelector('#showFollowingLink')?.addEventListener('click', function(event) {
        window.location.href = "{% url 'following' %}";  // Navigate to the "Following" page
    });

    // When "Create New Post" is clicked
    document.querySelector('#showNewPostLink')?.addEventListener('click', function(event) {
        event.preventDefault();  // Prevent default link behavior (for dynamic form toggle)
            toggleView('new'); // Show the New Post Form if already on the All Posts page
    });

    toggleView('all');
});
