// ONEFILM - Application Engine & UI Controller
// Supports Homepage (Movie of the Day) and Platform Pages (Netflix, Prime, Hotstar, Apple TV+)

(function() {
    'use strict';

    // ==========================================
    // 1. HOMEPAGE: MOVIE OF THE DAY CONTROLLER
    // ==========================================
    function initMovieOfTheDay() {
        const card = document.getElementById('dailyMovieCard');
        if (!card || typeof getMovieOfTheDay !== 'function') return;

        let currentDailyMovie = getMovieOfTheDay();

        function renderDailyCard(movie) {
            if (!movie) return;

            const titleEl = document.getElementById('dailyTitle');
            const genreEl = document.getElementById('dailyGenre');
            const yearEl = document.getElementById('dailyYear');
            const ratingEl = document.getElementById('dailyRating');
            const descEl = document.getElementById('dailyDesc');
            const badgeEl = document.getElementById('dailyPlatformBadge');

            if (titleEl) titleEl.textContent = movie.title;
            if (genreEl) {
                // Capitalize genre nicely
                const formattedGenre = movie.genre.charAt(0).toUpperCase() + movie.genre.slice(1);
                genreEl.textContent = formattedGenre;
            }
            if (yearEl) yearEl.textContent = movie.year;
            if (ratingEl) ratingEl.textContent = movie.imdbRating.toFixed(1);
            if (descEl) descEl.textContent = movie.description;

            if (badgeEl) {
                // Platform display map
                const platformNames = {
                    netflix: 'Netflix',
                    amazon: 'Amazon Prime',
                    hotstar: 'Disney+ Hotstar',
                    appletv: 'Apple TV+'
                };
                badgeEl.textContent = platformNames[movie.platform] || movie.platform;
                badgeEl.className = 'daily-platform-pill ' + movie.platform;
            }

            // Animate card content transition
            card.classList.remove('card-fade');
            void card.offsetWidth; // Trigger reflow
            card.classList.add('card-fade');
        }

        // Initial render of the day's persistent movie
        renderDailyCard(currentDailyMovie);

        // "Discover Another" button interaction
        const discoverBtn = document.getElementById('discoverAnotherBtn');
        if (discoverBtn) {
            discoverBtn.addEventListener('click', function(e) {
                e.preventDefault();
                if (typeof movieDatabase === 'undefined' || !movieDatabase.length) return;

                // Pick another movie excluding current
                const nextMovie = getRandomMovie(movieDatabase, currentDailyMovie ? currentDailyMovie.id : null);
                if (nextMovie) {
                    currentDailyMovie = nextMovie;
                    renderDailyCard(nextMovie);
                }
            });
        }
    }

    // ==========================================
    // 2. PLATFORM PAGES CONTROLLER
    // ==========================================
    function initPlatformPage() {
        if (typeof platform === 'undefined') return;

        const platformMovies = typeof getMoviesByPlatform === 'function' ? getMoviesByPlatform(platform) : [];
        if (!platformMovies || platformMovies.length === 0) return;

        let activeTag = null;
        let activeTagGenre = null;
        let currentMovie = null;
        const seenMovieIds = new Set();

        const tagsContainer = document.getElementById('tagsContainer');
        const searchInput = document.getElementById('searchInput');
        const refreshBtn = document.getElementById('refreshBtn');
        const luckyBtn = document.getElementById('luckyBtn');
        const movieSuggestion = document.getElementById('movieSuggestion');

        // Capitalize string helper
        function capitalize(str) {
            if (!str) return '';
            return str.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        }

        // Render Mood Buttons
        if (tagsContainer && typeof commonTags !== 'undefined') {
            tagsContainer.innerHTML = '';
            commonTags.forEach(tag => {
                const button = document.createElement('button');
                button.className = 'tag-btn';
                button.textContent = tag;
                button.setAttribute('type', 'button');
                button.onclick = () => selectTag(tag, button);
                tagsContainer.appendChild(button);
            });
        }

        // Handle tag click
        function selectTag(tag, buttonElement) {
            // Update active state on tag buttons
            const allTagButtons = tagsContainer ? tagsContainer.querySelectorAll('.tag-btn') : [];
            allTagButtons.forEach(btn => btn.classList.remove('active'));

            if (buttonElement) {
                buttonElement.classList.add('active');
            }

            activeTag = tag;

            // Clear search input if user clicks a tag
            if (searchInput) searchInput.value = '';

            const candidates = getTagCandidates(tag);
            if (candidates.length > 0) {
                // Pick candidate not seen recently if possible
                const unseen = candidates.filter(m => !seenMovieIds.has(m.id));
                const pool = unseen.length > 0 ? unseen : candidates;
                const chosen = getRandomMovie(pool, currentMovie ? currentMovie.id : null) || pool[0];

                activeTagGenre = (chosen.genre || '').toLowerCase();
                displayMovie(chosen);
            } else {
                activeTagGenre = null;
                showEmptyFeedback(`No ${tag} recommendations currently found on this platform.`);
            }
        }

        function getTagCandidates(tag) {
            const matchingMovies = getMoviesByTagAndPlatform(tag, platform);
            const normalizedTag = tag.trim().toLowerCase();
            const primaryMatches = matchingMovies.filter(m => (m.genre || '').toLowerCase() === normalizedTag);
            return primaryMatches.length > 0 ? primaryMatches : matchingMovies;
        }

        // Display movie recommendation
        function displayMovie(movie) {
            if (!movie) return;

            currentMovie = movie;
            seenMovieIds.add(movie.id);

            const titleEl = document.getElementById('movieTitle');
            const genreEl = document.getElementById('movieGenre');
            const descEl = document.getElementById('movieDescription');

            if (titleEl) titleEl.textContent = movie.title;
            if (descEl) descEl.textContent = movie.description;

            // Render rich metadata badge row
            if (genreEl) {
                const formattedGenre = capitalize(movie.genre);
                genreEl.innerHTML = `
                    <div class="meta-badges">
                        <span class="badge badge-imdb"><span class="imdb-text">IMDb Rating</span> <strong>${movie.imdbRating.toFixed(1)}</strong>/10</span>
                        <span class="badge badge-genre">${formattedGenre}</span>
                        <span class="badge badge-year">${movie.year}</span>
                    </div>
                `;
            }

            // Render secondary tags if container exists, or create dynamically
            let tagsListEl = document.getElementById('movieTagsList');
            if (!tagsListEl && movieSuggestion) {
                tagsListEl = document.createElement('div');
                tagsListEl.id = 'movieTagsList';
                tagsListEl.className = 'movie-tags-list';
                if (descEl && descEl.parentNode) {
                    descEl.parentNode.insertBefore(tagsListEl, descEl.nextSibling);
                }
            }

            if (tagsListEl && movie.tags && movie.tags.length > 0) {
                tagsListEl.innerHTML = movie.tags.map(t => `<span class="tag-chip">#${t}</span>`).join('');
                tagsListEl.style.display = 'flex';
            } else if (tagsListEl) {
                tagsListEl.style.display = 'none';
            }

            // Card animation trigger
            if (movieSuggestion) {
                movieSuggestion.classList.remove('suggestion-fade');
                void movieSuggestion.offsetWidth; // Reflow
                movieSuggestion.classList.add('suggestion-fade');
            }

            // Render reviews for this movie
            renderReviews(movie.id);
        }

        function showEmptyFeedback(message) {
            const titleEl = document.getElementById('movieTitle');
            const genreEl = document.getElementById('movieGenre');
            const descEl = document.getElementById('movieDescription');
            const tagsListEl = document.getElementById('movieTagsList');

            if (titleEl) titleEl.textContent = 'No Matches Found';
            if (genreEl) genreEl.innerHTML = '';
            if (descEl) descEl.textContent = message;
            if (tagsListEl) tagsListEl.style.display = 'none';

            // Clear reviews
            const reviewsContainer = document.querySelector('.reviews');
            if (reviewsContainer) reviewsContainer.innerHTML = '';
        }

        // Refresh button logic: suggest another movie matching current mood or characteristics
        if (refreshBtn) {
            refreshBtn.onclick = function() {
                if (activeTag) {
                    const matching = getTagCandidates(activeTag);
                    const candidates = matching.filter(m =>
                        (!currentMovie || m.id !== currentMovie.id) &&
                        (!activeTagGenre || (m.genre || '').toLowerCase() === activeTagGenre)
                    );
                    if (candidates.length > 0) {
                        const unseen = candidates.filter(m => !seenMovieIds.has(m.id));
                        const pool = unseen.length > 0 ? unseen : candidates;
                        const nextMovie = getRandomMovie(pool);
                        displayMovie(nextMovie);
                    }
                } else if (currentMovie) {
                    // Match current movie's genre or tags
                    const similar = platformMovies.filter(m =>
                        m.id !== currentMovie.id && (
                            m.genre === currentMovie.genre ||
                            m.tags.some(t => currentMovie.tags.includes(t))
                        )
                    );
                    const pool = similar.length > 0 ? similar : platformMovies.filter(m => m.id !== currentMovie.id);
                    if (pool.length > 0) {
                        displayMovie(getRandomMovie(pool));
                    }
                } else {
                    // Fallback to random pick
                    displayMovie(getRandomMovie(platformMovies));
                }
            };
        }

        // Lucky button: pick random movie from current platform
        if (luckyBtn) {
            luckyBtn.onclick = function() {
                // Clear active tag highlight
                if (tagsContainer) {
                    const allTagButtons = tagsContainer.querySelectorAll('.tag-btn');
                    allTagButtons.forEach(btn => btn.classList.remove('active'));
                }
                activeTag = null;
                activeTagGenre = null;
                if (searchInput) searchInput.value = '';

                const pool = currentMovie ? platformMovies.filter(m => m.id !== currentMovie.id) : platformMovies;
                const randomMovie = getRandomMovie(pool.length > 0 ? pool : platformMovies);
                displayMovie(randomMovie);
            };
        }

        // Search bar: searches title, primary genre, and tags
        if (searchInput) {
            let debounceTimer = null;
            searchInput.addEventListener('input', function(e) {
                clearTimeout(debounceTimer);
                debounceTimer = setTimeout(() => {
                    const term = e.target.value.trim().toLowerCase();

                    if (term.length === 0) {
                        // Restore initial prompt if empty
                        return;
                    }

                    if (term.length >= 2) {
                        // Deactivate tag buttons
                        if (tagsContainer) {
                            const allTagButtons = tagsContainer.querySelectorAll('.tag-btn');
                            allTagButtons.forEach(btn => btn.classList.remove('active'));
                        }
                        activeTag = null;
                        activeTagGenre = null;

                        const searchResults = platformMovies.filter(movie => {
                            const titleMatch = movie.title.toLowerCase().includes(term);
                            const genreMatch = movie.genre.toLowerCase().includes(term);
                            const tagMatch = movie.tags.some(t => t.toLowerCase().includes(term));
                            return titleMatch || genreMatch || tagMatch;
                        });

                        if (searchResults.length > 0) {
                            // Find exact or closest title match first, else first result
                            const exactMatch = searchResults.find(m => m.title.toLowerCase() === term);
                            displayMovie(exactMatch || searchResults[0]);
                        } else {
                            showEmptyFeedback(`No films matching "${e.target.value}" on this platform. Try searching for a different title, genre, or mood.`);
                        }
                    }
                }, 200);
            });
        }

        // ==========================================
        // 3. REVIEWS UI & RATING INTERACTIONS
        // ==========================================
        function renderReviews(movieId) {
            const container = document.querySelector('.reviews');
            if (!container) return;
            container.innerHTML = '';

            const avg = getAverageRatingForMovie(movieId);
            const reviews = getReviewsForMovie(movieId);

            // Average rating header
            const avgEl = document.createElement('div');
            avgEl.className = 'avg-rating-card';
            avgEl.innerHTML = `
                <div class="avg-score">
                    <span class="avg-number">${avg > 0 ? avg : '—'}</span>
                    <span class="avg-max">/ 5</span>
                    <span class="avg-stars">${avg > 0 ? '★'.repeat(Math.round(avg)) + '☆'.repeat(5 - Math.round(avg)) : '☆☆☆☆☆'}</span>
                </div>
                <div class="avg-count">${reviews.length} community review${reviews.length === 1 ? '' : 's'}</div>
            `;
            container.appendChild(avgEl);

            // Review submit form
            const form = document.createElement('div');
            form.className = 'review-form';
            form.innerHTML = `
                <div class="form-title">Rate this recommendation</div>
                <div class="star-rating-row">
                    <div class="star-input" data-selected="0" aria-label="Rating out of 5 stars">
                        <span class="star" data-value="1" title="1 star">★</span>
                        <span class="star" data-value="2" title="2 stars">★</span>
                        <span class="star" data-value="3" title="3 stars">★</span>
                        <span class="star" data-value="4" title="4 stars">★</span>
                        <span class="star" data-value="5" title="5 stars">★</span>
                    </div>
                    <span class="star-hint" id="starHint">Select stars</span>
                </div>
                <textarea class="review-text" rows="2" placeholder="Leave your thoughts or review notes (optional)"></textarea>
                <div class="form-actions">
                    <button class="btn btn-primary submit-review" type="button">Submit Review</button>
                </div>
            `;
            container.appendChild(form);

            // Star hover and click interactions
            const starInput = form.querySelector('.star-input');
            const stars = form.querySelectorAll('.star');
            const hint = form.querySelector('#starHint');

            function highlightStars(val) {
                stars.forEach(s => {
                    const sVal = Number(s.getAttribute('data-value'));
                    s.classList.toggle('active', sVal <= val);
                });
            }

            stars.forEach(s => {
                s.onmouseenter = () => {
                    const val = Number(s.getAttribute('data-value'));
                    highlightStars(val);
                    if (hint) hint.textContent = `${val} Star${val > 1 ? 's' : ''}`;
                };

                s.onmouseleave = () => {
                    const selectedVal = Number(starInput.getAttribute('data-selected') || 0);
                    highlightStars(selectedVal);
                    if (hint) {
                        hint.textContent = selectedVal > 0 ? `${selectedVal} Star${selectedVal > 1 ? 's' : ''}` : 'Select stars';
                    }
                };

                s.onclick = () => {
                    const val = Number(s.getAttribute('data-value'));
                    starInput.setAttribute('data-selected', val);
                    highlightStars(val);
                    if (hint) hint.textContent = `${val} Star${val > 1 ? 's' : ''}`;
                };
            });

            form.querySelector('.submit-review').onclick = () => {
                const rating = Number(starInput.getAttribute('data-selected'));
                const comment = form.querySelector('.review-text').value.trim();

                if (!rating || rating < 1) {
                    if (hint) {
                        hint.textContent = 'Please select a star rating first!';
                        hint.style.color = '#ff6b6b';
                        setTimeout(() => { hint.style.color = ''; }, 2500);
                    }
                    return;
                }

                submitReview(movieId, platform, rating, comment);
                renderReviews(movieId);
            };

            // Existing reviews list
            const list = document.createElement('div');
            list.className = 'review-list';

            if (reviews.length === 0) {
                const none = document.createElement('div');
                none.className = 'empty-state';
                none.textContent = 'No community reviews for this movie yet. Be the first to share your thoughts!';
                list.appendChild(none);
            } else {
                reviews.forEach(r => {
                    const it = document.createElement('div');
                    it.className = 'review-item';
                    it.innerHTML = `
                        <div class="review-header">
                            <span class="stars-gold">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</span>
                            <span class="review-time">${formatTimestamp(r.timestamp)}</span>
                        </div>
                        ${r.comment ? `<div class="review-body">${escapeHtml(r.comment)}</div>` : ''}
                    `;
                    list.appendChild(it);
                });
            }
            container.appendChild(list);
        }

        // ==========================================
        // 4. COMMUNITY RECOMMENDATIONS UI
        // ==========================================
        function renderCommunity() {
            const section = document.querySelector('.community');
            if (!section) return;
            section.innerHTML = '';

            const sectionHeading = document.createElement('div');
            sectionHeading.className = 'community-header';
            sectionHeading.innerHTML = `
                <h3>Community Movie Discussions</h3>
                <p>Recommend films or discuss what to watch next with other movie lovers.</p>
            `;
            section.appendChild(sectionHeading);

            // Post creation card
            const createCard = document.createElement('div');
            createCard.className = 'create-post-card';
            createCard.innerHTML = `
                <h4>Recommend a Film</h4>
                <input class="post-title" type="text" placeholder="Movie title (e.g. Parasite, Interstellar)">
                <textarea class="post-desc" rows="3" placeholder="Why should others watch it? What's the vibe?"></textarea>
                <div class="form-actions">
                    <button class="btn btn-primary submit-post" type="button">Share Recommendation</button>
                </div>
            `;
            section.appendChild(createCard);

            createCard.querySelector('.submit-post').onclick = () => {
                const title = createCard.querySelector('.post-title').value.trim();
                const desc = createCard.querySelector('.post-desc').value.trim();

                if (!title) {
                    const titleInput = createCard.querySelector('.post-title');
                    titleInput.focus();
                    titleInput.style.borderColor = '#e50914';
                    setTimeout(() => { titleInput.style.borderColor = ''; }, 2000);
                    return;
                }

                createPost(platform, title, desc);
                renderCommunity();
            };

            // Feed of platform community posts
            const feed = document.createElement('div');
            feed.className = 'post-feed';
            const posts = getPostsForPlatform(platform);

            if (posts.length === 0) {
                const none = document.createElement('div');
                none.className = 'empty-state';
                none.textContent = 'No community posts yet. Share your favorite movie above!';
                feed.appendChild(none);
            } else {
                posts.forEach(p => {
                    const postEl = document.createElement('div');
                    postEl.className = 'post-card';
                    postEl.innerHTML = `
                        <div class="post-top">
                            <h4 class="post-card-title">${escapeHtml(p.title)}</h4>
                            <span class="post-timestamp">${formatTimestamp(p.timestamp)}</span>
                        </div>
                        <div class="post-card-desc">${escapeHtml(p.description)}</div>
                        <div class="post-interactions">
                            <div class="vote-group">
                                <button class="vote-btn vote-up" type="button" title="Upvote">▲</button>
                                <span class="vote-count">${p.votes || 0}</span>
                                <button class="vote-btn vote-down" type="button" title="Downvote">▼</button>
                            </div>
                            <div class="comment-input-group">
                                <input class="comment-input" type="text" placeholder="Add a comment...">
                                <button class="btn-comment" type="button">Reply</button>
                            </div>
                        </div>
                        <div class="comment-list"></div>
                    `;

                    // Wire vote buttons
                    postEl.querySelector('.vote-up').onclick = () => {
                        votePost(p.id, 1);
                        renderCommunity();
                    };

                    postEl.querySelector('.vote-down').onclick = () => {
                        votePost(p.id, -1);
                        renderCommunity();
                    };

                    // Wire comment submit
                    const commentInput = postEl.querySelector('.comment-input');
                    const commentBtn = postEl.querySelector('.btn-comment');

                    const handleComment = () => {
                        const txt = commentInput.value.trim();
                        if (!txt) return;
                        addCommentToPost(p.id, txt);
                        renderCommunity();
                    };

                    commentBtn.onclick = handleComment;
                    commentInput.onkeydown = (e) => {
                        if (e.key === 'Enter') handleComment();
                    };

                    // Render existing comments
                    const commentsDiv = postEl.querySelector('.comment-list');
                    if (p.comments && p.comments.length > 0) {
                        p.comments.forEach(c => {
                            const cEl = document.createElement('div');
                            cEl.className = 'comment-bubble';
                            cEl.innerHTML = `
                                <div class="comment-text">${escapeHtml(c.text)}</div>
                                <div class="comment-time">${formatTimestamp(c.timestamp)}</div>
                            `;
                            commentsDiv.appendChild(cEl);
                        });
                    }

                    feed.appendChild(postEl);
                });
            }

            section.appendChild(feed);
        }

        // Helper to prevent HTML injection
        function escapeHtml(str) {
            if (!str) return '';
            return str
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#039;');
        }

        // Initial setup for platform page
        renderCommunity();

        // Expose displayMovie globally for inline triggers
        window.displayMovie = displayMovie;
    }

    // ==========================================
    // 5. BOOTSTRAP BASED ON PAGE CONTEXT
    // ==========================================
    document.addEventListener('DOMContentLoaded', function() {
        initMovieOfTheDay();
        initPlatformPage();
    });

    // In case DOMContentLoaded has already fired
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
        initMovieOfTheDay();
        initPlatformPage();
    }
})();
