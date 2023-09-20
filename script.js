const registrationForm = document.getElementById('registration-form');
const interestsForm = document.getElementById('interests-form');
const newsFeed = document.getElementById('news-feed');
const newsList = document.getElementById('news-list');

const registerUser = () => {
  const email = document.getElementById('email').value;
  console.log(`Registered user with email: ${email}`);
  registrationForm.style.display = 'none';
  interestsForm.style.display = 'block';
};

const saveInterests = () => {
  const selectedInterests = [];
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedInterests.push(checkbox.id);
    }
  });

  console.log(`Selected Interests: ${selectedInterests.join(', ')}`);

  interestsForm.style.display = 'none';
  newsFeed.style.display = 'block';

  displayNewsArticles(selectedInterests);
};

const displayNewsArticles = (interests) => {
  const newsData = [
    {
      title: 'Tech News 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Tech News 2',
      content:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Sports News 1',
      content:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
      title: 'Sports News 2',
      content:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
    },
    {
      title: 'Politics News 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Politics News 2',
      content:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Health News 1',
      content:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
      title: 'Health News 2',
      content:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
    },
  ];

  newsList.innerHTML = '';
  interests.forEach((interest) => {
    const filteredNews = newsData.filter((news) =>
      news.title.includes(interest)
    );
    filteredNews.forEach((newsItem) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<h3>${newsItem.title}</h3><p>${newsItem.content}</p>`;
      newsList.appendChild(listItem);
    });
  });
};

document.getElementById('register-btn').addEventListener('click', registerUser);
document
  .getElementById('save-interests-btn')
  .addEventListener('click', saveInterests);
