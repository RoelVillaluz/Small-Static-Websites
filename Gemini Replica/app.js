const aiResponses = [
    "That sounds interesting!",
    "Tell me more!",
    "I'm curious to learn about that.",
    "Let's explore that idea together.",
    "I appreciate your perspective.",
    "Interesting point of view!",
    "I'm here to chat whenever you need.",
    "Let's dive deeper into this.",
    "I'm listening.",
    "Feel free to share your thoughts.",
    "How can I assist you further?",
    "What else would you like to discuss?",
    "I'm here to help with any questions.",
    "Let's brainstorm together.",
    "Your insights are valuable to me.",
    "I'm glad you reached out.",
    "You've got my full attention.",
    "Let's make this conversation meaningful.",
    "I'm available to chat.",
    "Let's keep the conversation going.",
    "Feel free to ask anything.",
    "I'm here to support your journey.",
    "Thanks for sharing!",
    "Your feedback matters to me.",
    "Let's talk about your interests.",
    "I'm eager to hear more.",
    "I'm here to assist you in any way I can.",
    "You can count on me for guidance.",
    "I'm dedicated to providing help.",
    "Let's focus on what matters to you.",
    "I'm here to make things easier for you.",
    "Your satisfaction is important to me.",
    "I'm ready to assist whenever you need.",
    "Let's find solutions together.",
    "I'm committed to your success.",
    "Your goals are my priority.",
    "Let's work together to achieve your objectives.",
    "I'm here to make a positive impact.",
    "You're in good hands.",
    "I'm dedicated to supporting you.",
    "Let's address any challenges you're facing.",
    "I'm here to ensure your needs are met.",
    "Your progress is important to me.",
    "Let's make the most of our conversation.",
    "I'm excited to assist you.",
    "You're doing great!",
    "I'm here to provide assistance.",
    "Let's make this interaction meaningful."
];

const form = document.getElementById('chat-form');
const userInput = form.querySelector('.user-input');
const textSection = document.getElementById('text-section');
const imageSection = document.getElementById('image-section');
const cards = document.querySelector('.cards')
const messageContainer = document.querySelector('.message-container');

function handleFormSubmission(event) {
    event.preventDefault();
    const userMessage = userInput.value.trim();
    
    if (userMessage !== '') {
        textSection.style.display = 'none';
        imageSection.style.display = 'none';
        cards.style.display = 'none'

        const userMessageElement = document.createElement('div');
        userMessageElement.classList.add('user-message');
        userMessageElement.textContent = userInput.value;
        messageContainer.appendChild(userMessageElement);

        simulateAIReply(userMessage);

        form.reset()
    }
}

function simulateAIReply(message) {
    setTimeout(() => {
        const aiMessageElement = document.createElement('div');
        aiMessageElement.classList.add('ai-message');
        
        const randomResponse = Math.floor(Math.random() * aiResponses.length);
        aiMessageElement.textContent = aiResponses[randomResponse];

        messageContainer.appendChild(aiMessageElement);
        messageContainer.scrollTop = messageContainer.scrollHeight;
    }, 1000); 
}

form.addEventListener('submit', handleFormSubmission);

function toggleSidebar() {
    const menuBtn = document.querySelector('.fa-solid.fa-bars');
    const sideBar = document.querySelector('.sidebar')
    menuBtn.addEventListener('click', function() {
        if (sideBar.classList.contains('expanded')) {
            sideBar.classList.remove('expanded')
        } else {
            sideBar.classList.add('expanded')
        }
        console.log("expand")
    })
}
toggleSidebar();
