/**
 * Hidden Mickey Catalog - SEA Stage 2 Project
 * 
 * Enhanced version with more Hidden Mickeys, responsive design,
 * and improved functionality.
 */

// Image URLs for Hidden Mickeys 
const PIRATES_CARIBBEAN_URL = "images/pirates.jpg";
const SPACE_MOUNTAIN_URL = "images/space_mountain.jpg";
const SPACESHIP_EARTH_URL = "images/spaceship_earth.jpg";
const TOWER_TERROR_URL = "images/tower_of_terror.jpg";
const EXPEDITION_EVEREST_URL = "images/expedition_everest.jpg";
const TOY_STORY_URL = "images/toy_story.jpg";
const HAUNTED_MANSION_URL = "images/haunted_mansion.jpg";
const LION_KING_URL = "images/lion_king.jpg";
const SPLASH_MOUNTAIN_URL = "images/splash_mountain.jpg";
const STAR_TOURS_URL = "images/star_tours.jpg";
const BEAUTY_BEAST_URL = "images/beauty_and_the_beast.jpg";
const FINDING_NEMO_URL = "images/finding_nemo.jpg";
const JUNGLE_CRUISE_URL = "images/jungle_cruise.jpg";
const SMALL_WORLD_URL = "images/small_world.jpg";
const FROZEN_URL = "images/frozen.jpg";
const FLIGHT_PASSAGE_URL = "images/flight_of_passage.jpg";
const SOARIN_URL = "images/soarin.jpg";
const ADVENTURELAND_URL = "images/adventureland.jpg";
const MOANA_URL = "images/moana.jpg";
const ALADDIN_URL = "images/aladdin.png";
const RAILROAD_URL = "images/walt_disney_railroad.jpg";
const TOMORROWLAND_URL = "images/tomorrowland_transit.jpg";
const WALL_E_URL = "images/wall_e.jpg";
const RISE_RESISTANCE_URL = "images/rise_of_the_resistance.jpg";

// Main data structure - an array of objects for Hidden Mickey locations
const hiddenMickeys = [
  {
    id: 1,
    name: "Pirates of the Caribbean",
    location: "Auction Scene Table",
    description: "Look for three plates on the dining table in the auction scene that form a perfect Mickey silhouette when viewed from the right angle.",
    difficulty: 4,
    yearDiscovered: 1989,
    park: "Magic Kingdom",
    type: "Classic",
    confirmed: true,
    hint: "The hidden Mickey is visible during the first minute of the ride. Look to your right as you enter the auction scene. The three white plates on the wooden table form Mickey's silhouette when aligned properly from your boat's angle.",
    imageURL: PIRATES_CARIBBEAN_URL,
    found: false
  },
  {
    id: 2,
    name: "Spaceship Earth",
    location: "Renaissance Painter Scene",
    description: "In the Renaissance scene, look for the three paint circles on the artist's palette that form Mickey's iconic silhouette.",
    difficulty: 2,
    yearDiscovered: 2002,
    park: "EPCOT",
    type: "Intentional",
    confirmed: true,
    hint: "As you enter the Renaissance scene with the painter, look carefully at his wooden palette. The three blobs of paint are arranged in Mickey's classic head shape.",
    imageURL: SPACESHIP_EARTH_URL,
    found: false
  },
  {
    id: 3,
    name: "Tower of Terror",
    location: "Library Ceiling",
    description: "As you enter the library pre-show room, look up at the ceiling chandelier. From below, the light fixture and two adjacent ornaments form a perfect Mickey head.",
    difficulty: 5,
    yearDiscovered: 1995,
    park: "Hollywood Studios",
    type: "Classic",
    confirmed: true,
    hint: "The Hidden Mickey in Tower of Terror is very subtle. When you're in the library room with the TV, stand in the center of the room and look straight up at the ceiling fixture.",
    imageURL: TOWER_TERROR_URL,
    found: false
  },
  {
    id: 4,
    name: "Expedition Everest",
    location: "Queue Line",
    description: "In the museum portion of the queue, look for three circular tea stains on a weathered map that create a Hidden Mickey.",
    difficulty: 3,
    yearDiscovered: 2006,
    park: "Animal Kingdom",
    type: "Intentional",
    confirmed: true,
    hint: "While waiting in line, pay attention to the artifacts in the Yeti museum. There's a faded map with tea stains on a wooden table. The stains form a perfect Mickey shape!",
    imageURL: EXPEDITION_EVEREST_URL,
    found: false
  },
  {
    id: 5,
    name: "Toy Story",
    location: "Andy's Room Wallpaper",
    description: "In the original Toy Story film, Andy's room has cloud wallpaper with some clouds subtly shaped like Mickey.",
    difficulty: 4,
    yearDiscovered: 1996,
    park: "Movies",
    type: "Easter Egg",
    confirmed: true,
    hint: "This hidden Mickey appears in the first Toy Story movie (1995). When the toys are having their meeting about Andy's birthday party, look carefully at the cloud wallpaper.",
    imageURL: TOY_STORY_URL,
    found: false
  },
  {
    id: 6,
    name: "Haunted Mansion",
    location: "Ballroom Scene",
    description: "In the grand ballroom scene, look for the plate arrangement on the dining table that forms a Hidden Mickey.",
    difficulty: 3,
    yearDiscovered: 1971,
    park: "Magic Kingdom",
    type: "Classic",
    confirmed: true,
    hint: "As your Doom Buggy passes the ballroom scene with the dancing ghosts, look down at the banquet table. Three plates are arranged to form Mickey's head.",
    imageURL: HAUNTED_MANSION_URL,
    found: false
  },
  {
    id: 7,
    name: "The Lion King",
    location: "Stars in the Sky",
    description: "When Simba, Timon, and Pumbaa are looking at the stars, one constellation forms Mickey's iconic head shape.",
    difficulty: 2,
    yearDiscovered: 1994,
    park: "Movies",
    type: "Easter Egg",
    confirmed: true,
    hint: "During the scene where Simba, Timon, and Pumbaa are discussing what stars are, look at the stars in the upper right corner of the screen.",
    imageURL: LION_KING_URL,
    found: false
  },
  {
    id: 8,
    name: "Splash Mountain",
    location: "Final Drop",
    description: "Just before the final drop, look for three barrels arranged to form Mickey's silhouette.",
    difficulty: 4,
    yearDiscovered: 1992,
    park: "Magic Kingdom",
    type: "Classic",
    confirmed: true,
    hint: "As your log approaches the final big drop, look to your left. You'll see three wooden barrels stacked in a way that creates Mickey's head.",
    imageURL: SPLASH_MOUNTAIN_URL,
    found: false
  },
  {
    id: 9,
    name: "Star Tours",
    location: "Spaceport Scene",
    description: "In the queue area, look for three circular objects in the spaceport scene that create Mickey's profile.",
    difficulty: 3,
    yearDiscovered: 2011,
    park: "Hollywood Studios",
    type: "Intentional",
    confirmed: true,
    hint: "While waiting in line for Star Tours, look at the spaceport scene with the droid scanning luggage. There are three circular objects arranged to form Mickey's head.",
    imageURL: STAR_TOURS_URL,
    found: false
  },
  {
    id: 10,
    name: "Beauty and the Beast",
    location: "Castle Library",
    description: "In the library scene, three books on a shelf form Mickey's outline when viewed from a certain angle.",
    difficulty: 5,
    yearDiscovered: 1991,
    park: "Movies",
    type: "Easter Egg",
    confirmed: true,
    hint: "During the scene where Belle is in the Beast's library, scan the bookshelves carefully. On one of the shelves, three books are arranged to form Mickey's silhouette.",
    imageURL: BEAUTY_BEAST_URL,
    found: false
  },
  {
    id: 11,
    name: "Finding Nemo",
    location: "Dentist's Waiting Room",
    description: "In the dentist's waiting room, look for Mickey-shaped bubbles in the fish tank.",
    difficulty: 3,
    yearDiscovered: 2003,
    park: "Movies",
    type: "Easter Egg",
    confirmed: true,
    hint: "When Nemo first arrives at the dentist's office, carefully watch the bubbles in the tank. Several form Mickey's head shape as they rise to the surface.",
    imageURL: FINDING_NEMO_URL,
    found: false
  },
  {
    id: 12,
    name: "Space Mountain",
    location: "Queue Line Panels",
    description: "In the queue, look for three circular light panels that form Mickey's silhouette.",
    difficulty: 2,
    yearDiscovered: 1975,
    park: "Magic Kingdom",
    type: "Classic",
    confirmed: true,
    hint: "While waiting in line for Space Mountain, look at the ceiling of the space station queue. There are three circular light panels arranged in Mickey's classic three-circle pattern.",
    imageURL: SPACE_MOUNTAIN_URL,
    found: false
  },
  {
    id: 13,
    name: "Jungle Cruise",
    location: "Snake Scene",
    description: "In the snake scene of the Jungle Cruise, three rocks form a classic Mickey silhouette along the riverbank.",
    difficulty: 3,
    yearDiscovered: 1998,
    park: "Magic Kingdom",
    type: "Classic",
    confirmed: true,
    hint: "As your boat passes through the snake scene, look to the right bank. There are three round rocks that form Mickey's head when viewed from the right angle.",
    imageURL: JUNGLE_CRUISE_URL,
    found: false
  },
  {
    id: 14,
    name: "It's a Small World",
    location: "European Scene",
    description: "In the European scene, look for three gears on a clock that form a perfect Mickey head silhouette.",
    difficulty: 2,
    yearDiscovered: 1983,
    park: "Magic Kingdom",
    type: "Classic",
    confirmed: true,
    hint: "As you float through the European section, look to your right at the large ornate clock. Three of the gears inside form Mickey's iconic silhouette.",
    imageURL: SMALL_WORLD_URL,
    found: false
  },
  {
    id: 15,
    name: "Frozen",
    location: "Ice Palace Scene",
    description: "When Elsa creates her ice palace, some of the snowflakes that appear have a Mickey shape.",
    difficulty: 4,
    yearDiscovered: 2013,
    park: "Movies",
    type: "Easter Egg",
    confirmed: true,
    hint: "During the 'Let It Go' sequence when Elsa is building her ice palace, watch carefully for the snowflakes. Several of them have a distinct Mickey shape if you pause at just the right moment.",
    imageURL: FROZEN_URL,
    found: false
  },
  {
    id: 16,
    name: "Flight of Passage",
    location: "Queue Line Laboratory",
    description: "In the laboratory section of the queue, look for three circular pieces of equipment that form Mickey's silhouette.",
    difficulty: 3,
    yearDiscovered: 2017,
    park: "Animal Kingdom",
    type: "Intentional",
    confirmed: true,
    hint: "While waiting in the laboratory section with the Avatar floating in the tank, look at the equipment on the right wall. Three circular instruments form a classic Mickey head.",
    imageURL: FLIGHT_PASSAGE_URL,
    found: false
  },
  {
    id: 17,
    name: "Soarin'",
    location: "California Coastline Scene",
    description: "During the California coastline scene, three boats in the harbor form a Mickey silhouette when viewed from above.",
    difficulty: 4,
    yearDiscovered: 2005,
    park: "EPCOT",
    type: "Intentional",
    confirmed: true,
    hint: "When flying over the California coastline, look down at the harbor. Three white boats are arranged to form Mickey's silhouette when viewed from your aerial perspective.",
    imageURL: SOARIN_URL,
    found: false
  },
  {
    id: 18,
    name: "Adventureland Entrance",
    location: "Overhead Lanterns",
    description: "At the entrance to Adventureland, three lanterns hanging overhead form Mickey's shape when viewed from below.",
    difficulty: 2,
    yearDiscovered: 1990,
    park: "Magic Kingdom",
    type: "Classic",
    confirmed: true,
    hint: "As you enter Adventureland from the hub, stop and look up at the lanterns hanging from the entrance structure. Three of them form a perfect Mickey head silhouette.",
    imageURL: ADVENTURELAND_URL,
    found: false
  },
  {
    id: 19,
    name: "Moana",
    location: "Ocean Waves",
    description: "In Moana, during the scene where she first meets the ocean, some of the water droplets form Mickey's silhouette.",
    difficulty: 5,
    yearDiscovered: 2016,
    park: "Movies",
    type: "Easter Egg",
    confirmed: true,
    hint: "In the scene where baby Moana first interacts with the ocean and it forms a wave that curves over her, look for water droplets that splash in a Mickey pattern.",
    imageURL: MOANA_URL,
    found: false
  },
  {
    id: 20,
    name: "Aladdin",
    location: "Cave of Wonders",
    description: "In the Cave of Wonders scene, three gold coins form Mickey's silhouette in the treasure pile.",
    difficulty: 4,
    yearDiscovered: 1992,
    park: "Movies",
    type: "Easter Egg",
    confirmed: true,
    hint: "When Aladdin first enters the Cave of Wonders and sees all the treasure, look carefully at the pile of gold coins. Three of them form Mickey's head shape.",
    imageURL: ALADDIN_URL,
    found: false
  },
  {
    id: 21,
    name: "Walt Disney World Railroad",
    location: "Main Street Station",
    description: "In the Main Street Station, three circular gears in the mechanical display form Mickey's silhouette.",
    difficulty: 2,
    yearDiscovered: 1971,
    park: "Magic Kingdom",
    type: "Classic",
    confirmed: true,
    hint: "While waiting at the Main Street Station, look at the mechanical display showing the inner workings of a steam engine. Three of the circular gears form Mickey's head.",
    imageURL: RAILROAD_URL,
    found: false
  },
  {
    id: 22,
    name: "Tomorrowland Transit Authority",
    location: "Space Mountain Model",
    description: "In the TTA PeopleMover ride, look for three circular objects in the Space Mountain model that form Mickey's head.",
    difficulty: 3,
    yearDiscovered: 1994,
    park: "Magic Kingdom",
    type: "Intentional",
    confirmed: true,
    hint: "While riding the PeopleMover through the Space Mountain model, look to your right at the futuristic city display. Three circular objects form Mickey's signature silhouette.",
    imageURL: TOMORROWLAND_URL,
    found: false
  },
  {
    id: 23,
    name: "WALL-E",
    location: "Trash Compaction Scene",
    description: "In the scene where WALL-E is compacting trash, three round objects form Mickey's silhouette in one of the cubes.",
    difficulty: 5,
    yearDiscovered: 2008,
    park: "Movies",
    type: "Easter Egg",
    confirmed: true,
    hint: "During the opening sequence when WALL-E is creating trash cubes, look carefully at the cubes he creates. One of them has three circular objects arranged in Mickey's signature pattern.",
    imageURL: WALL_E_URL,
    found: false
  },
  {
    id: 24,
    name: "Star Wars: Rise of the Resistance",
    location: "First Order Interrogation Room",
    description: "In the interrogation room scene, three circular lights on the ceiling form Mickey's silhouette.",
    difficulty: 4,
    yearDiscovered: 2019,
    park: "Hollywood Studios",
    type: "Intentional",
    confirmed: true,
    hint: "When you're in the First Order interrogation room, look up at the ceiling. Three of the circular lights are arranged to form Mickey's head when viewed from below.",
    imageURL: RISE_RESISTANCE_URL,
    found: false
  }
];

// Keep track of the current display state
let currentMickeys = [...hiddenMickeys];
let currentSortOption = "name";
let currentFilterOption = "all";
let searchQuery = "";
let showFoundOnly = false;
let showNotFoundOnly = false;

// Function to display cards on the page
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  // Apply filters and sorting to the data
  let displayMickeys = filterMickeys(hiddenMickeys);
  displayMickeys = sortMickeys(displayMickeys, currentSortOption);
  displayMickeys = searchMickeys(displayMickeys, searchQuery);
  displayMickeys = filterByFoundStatus(displayMickeys);
  
  // Update the currentMickeys array to reflect current filter state
  currentMickeys = displayMickeys;
  
  // Display each mickey in the filtered list
  for (let i = 0; i < displayMickeys.length; i++) {
    let mickey = displayMickeys[i];
    
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, mickey); // Pass the entire mickey object
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
  
  updateStats();
}

// Edit the content of a card
function editCardContent(card, mickey) {
  card.style.display = "block";
  card.className = "card " + mickey.park.toLowerCase().replace(/\s+/g, "-");
  if (mickey.found) {
    card.classList.add("found");
  }

  // Set the card header 
  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = mickey.name;

  // Set the card image
  const cardImage = card.querySelector("img");
  cardImage.src = mickey.imageURL;
  cardImage.alt = mickey.name + " Hidden Mickey";

  // Update the bullet points with mickey details
  const bulletPoints = card.querySelectorAll("li");
  bulletPoints[0].textContent = "Location: " + mickey.location;
  bulletPoints[1].textContent = "Park: " + mickey.park;
  bulletPoints[2].textContent = "Difficulty: " + mickey.difficulty + "/5";
  
  // Add a custom attribute to store the full mickey data for interactions
  card.setAttribute("data-mickey-id", mickey.id);
  
  // Add interaction controls (found button only)
  const controlsDiv = document.createElement("div");
  controlsDiv.className = "card-controls";
  
  // Add found button
  const foundButton = document.createElement("button");
  foundButton.className = "found-button";
  foundButton.textContent = mickey.found ? "Mark as Not Found" : "Mark as Found";
  
  // Add event listener for found button
  foundButton.addEventListener('click', function(e) {
    e.stopPropagation(); // Prevent the card click event
    toggleFoundStatus(mickey.id);
  });
  
  // Add controls to card
  controlsDiv.appendChild(foundButton);
  card.querySelector('.card-content').appendChild(controlsDiv);
  
  // Add click event to show the hint
  card.addEventListener("click", function() {
    showHint(mickey);
  });
}

// Function to toggle found status
function toggleFoundStatus(mickeyId) {
  // Find the mickey by ID
  const mickey = hiddenMickeys.find(m => m.id === mickeyId);
  if (mickey) {
    // Toggle the found status
    mickey.found = !mickey.found;
    
    // Show celebration if marking as found
    if (mickey.found) {
      showCelebration(mickey.name);
    }
    
    // Update the display
    showCards();
  }
}

// Function to show a celebration animation when marking as found
function showCelebration(mickeyName) {
  // Create the celebration modal
  const celebrationModal = document.createElement('div');
  celebrationModal.className = 'celebration-modal';
  
  // Create confetti animation (simple CSS animation)
  const confetti = document.createElement('div');
  confetti.className = 'confetti';
  
  // Create celebration message
  const message = document.createElement('div');
  message.className = 'celebration-message';
  message.innerHTML = `
    <h3>Congratulations!</h3>
    <p>You found the Hidden Mickey at <strong>${mickeyName}</strong>!</p>
    <button class="close-celebration">Continue</button>
  `;
  
  // Add elements to modal
  celebrationModal.appendChild(confetti);
  celebrationModal.appendChild(message);
  
  // Add to body
  document.body.appendChild(celebrationModal);
  
  // Add event listener to close button
  const closeButton = celebrationModal.querySelector('.close-celebration');
  closeButton.addEventListener('click', function() {
    document.body.removeChild(celebrationModal);
  });
  
  // Auto close after 5 seconds
  setTimeout(function() {
    if (document.body.contains(celebrationModal)) {
      document.body.removeChild(celebrationModal);
    }
  }, 5000);
}

// Filter mickeys by found status
function filterByFoundStatus(mickeys) {
  if (showFoundOnly) {
    return mickeys.filter(mickey => mickey.found);
  } else if (showNotFoundOnly) {
    return mickeys.filter(mickey => !mickey.found);
  }
  return mickeys;
}

// Function to show a hint when a card is clicked
function showHint(mickey) {
  // Create modal for hint instead of using alert
  showHintModal(mickey.name, mickey.hint);
}

// Function to create and display a hint modal
function showHintModal(title, hintText) {
  // Create the hint modal
  const hintModal = document.createElement('div');
  hintModal.className = 'hint-modal';
  
  // Create modal content
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';
  modalContent.innerHTML = `
    <div class="modal-header">
      <h3>HINT: ${title}</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <p>${hintText}</p>
    </div>
  `;
  
  // Add modal to body
  hintModal.appendChild(modalContent);
  document.body.appendChild(hintModal);
  
  // Add event listener to close button
  const closeButton = hintModal.querySelector('.close-modal');
  closeButton.addEventListener('click', function() {
    document.body.removeChild(hintModal);
  });
  
  // Close when clicking outside the modal content
  hintModal.addEventListener('click', function(e) {
    if (e.target === hintModal) {
      document.body.removeChild(hintModal);
    }
  });
}

// Function to filter mickeys by park
function filterMickeys(mickeys) {
  if (currentFilterOption === "all") {
    return mickeys;
  }
  
  return mickeys.filter(mickey => mickey.park === currentFilterOption);
}

// Function to sort mickeys by different criteria
function sortMickeys(mickeys, sortOption) {
  let sortedMickeys = [...mickeys];
  
  switch (sortOption) {
    case "name":
      sortedMickeys.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "difficulty":
      sortedMickeys.sort((a, b) => b.difficulty - a.difficulty);
      break;
    case "year":
      sortedMickeys.sort((a, b) => a.yearDiscovered - b.yearDiscovered);
      break;
    default:
      // Default to sort by name
      sortedMickeys.sort((a, b) => a.name.localeCompare(b.name));
  }
  
  return sortedMickeys;
}

// Function to search mickeys by name or description
function searchMickeys(mickeys, query) {
  if (!query) {
    return mickeys;
  }
  
  query = query.toLowerCase();
  return mickeys.filter(mickey => 
    mickey.name.toLowerCase().includes(query) || 
    mickey.description.toLowerCase().includes(query) ||
    mickey.location.toLowerCase().includes(query)
  );
}

// Function to update stats display
function updateStats() {
  // Get the stats elements from the DOM
  const totalCountElement = document.getElementById("total-count");
  const parkCountElement = document.getElementById("park-count");
  const difficultyAvgElement = document.getElementById("difficulty-avg");
  const foundCountElement = document.getElementById("found-count");
  
  // Calculate stats
  const totalMickeys = currentMickeys.length;
  
  // Count unique parks
  const uniqueParks = new Set();
  currentMickeys.forEach(mickey => uniqueParks.add(mickey.park));
  const parkCount = uniqueParks.size;
  
  // Calculate average difficulty
  let totalDifficulty = 0;
  currentMickeys.forEach(mickey => totalDifficulty += mickey.difficulty);
  const averageDifficulty = totalMickeys > 0 ? (totalDifficulty / totalMickeys).toFixed(1) : 0;
  
  // Count found mickeys
  const foundCount = currentMickeys.filter(mickey => mickey.found).length;
  
  // Update the DOM elements
  totalCountElement.textContent = totalMickeys;
  parkCountElement.textContent = parkCount;
  difficultyAvgElement.textContent = averageDifficulty;
  if (foundCountElement) {
    foundCountElement.textContent = foundCount;
  }
}

// Function to show Disney quote in a themed popup
function quoteAlert() {
  const mickeyQuotes = [
    "Remember, you're the one who can fill the world with sunshine!",
    "Oh boy! Hidden Mickeys are everywhere when you know where to look!",
    "All our dreams can come true, if we have the courage to pursue them.",
    "I only hope that we never lose sight of one thing — that it was all started by a mouse.",
    "The way to get started is to quit talking and begin doing.",
    "Laughter is timeless, imagination has no age, and dreams are forever.",
    "When you wish upon a star, your dreams come true.",
    "A little consideration, a little thought for others, makes all the difference.",
    "The more you like yourself, the less you are like anyone else, which makes you unique.",
    "It's kind of fun to do the impossible.",
    "Why worry? If you've done the very best you can, worrying won't make it any better."
  ];
  
  // Pick a random quote
  const randomIndex = Math.floor(Math.random() * mickeyQuotes.length);
  const quote = mickeyQuotes[randomIndex];
  
  // Create the quote modal
  const quoteModal = document.createElement('div');
  quoteModal.className = 'quote-modal';
  

  const modalContent = document.createElement('div');
  modalContent.className = 'quote-content';
  
  const quoteText = document.createElement('div');
  quoteText.className = 'quote-text';
  quoteText.textContent = quote;
  
  // Add close button
  const closeButton = document.createElement('button');
  closeButton.className = 'close-quote';
  closeButton.textContent = "✨ Magical! ✨";
  
  // Assemble the modal
  modalContent.appendChild(quoteText);
  modalContent.appendChild(closeButton);
  quoteModal.appendChild(modalContent);
  
  // Add to body
  document.body.appendChild(quoteModal);
  
  // Add animation classes after a short delay 
  setTimeout(() => {
    modalContent.classList.add('active');
  }, 10);
  
  // Add event listener to close button
  closeButton.addEventListener('click', function() {
    modalContent.classList.remove('active');
    
    // Remove from DOM after animation completes
    setTimeout(() => {
      document.body.removeChild(quoteModal);
    }, 500);
  });
}

// Function to save mickeys to localStorage
function saveMickeysToLocalStorage() {
  // Create an array of just the found status
  const foundStatuses = hiddenMickeys.map(mickey => ({
    id: mickey.id,
    found: mickey.found
  }));
  
  // Save to localStorage
  localStorage.setItem('hiddenMickeysFound', JSON.stringify(foundStatuses));
}

// Function to load mickeys from localStorage
function loadMickeysFromLocalStorage() {
  const savedMickeys = localStorage.getItem('hiddenMickeysFound');
  
  if (savedMickeys) {
    try {
      const foundStatuses = JSON.parse(savedMickeys);
      
      // Update our hiddenMickeys array with saved found status
      foundStatuses.forEach(savedMickey => {
        const mickey = hiddenMickeys.find(m => m.id === savedMickey.id);
        if (mickey) {
          mickey.found = savedMickey.found;
        }
      });
    } catch (e) {
      console.error('Error loading saved Mickeys:', e);
    }
  }
}

// Function to save current view preferences
function saveViewPreferences() {
  const preferences = {
    sortOption: currentSortOption,
    filterOption: currentFilterOption,
    showFoundOnly: showFoundOnly,
    showNotFoundOnly: showNotFoundOnly
  };
  
  localStorage.setItem('hiddenMickeysPreferences', JSON.stringify(preferences));
}

// Function to load view preferences
function loadViewPreferences() {
  const savedPreferences = localStorage.getItem('hiddenMickeysPreferences');
  
  if (savedPreferences) {
    try {
      const preferences = JSON.parse(savedPreferences);
      
      // Set current options
      currentSortOption = preferences.sortOption || 'name';
      currentFilterOption = preferences.filterOption || 'all';
      showFoundOnly = preferences.showFoundOnly || false;
      showNotFoundOnly = preferences.showNotFoundOnly || false;
      

      const sortSelect = document.getElementById("sort");
      if (sortSelect) {
        sortSelect.value = currentSortOption;
      }
      
      const filterSelect = document.getElementById("filter");
      if (filterSelect) {
        filterSelect.value = currentFilterOption;
      }
      
      // Update filter buttons
      const showAllButton = document.getElementById("show-all");
      const showFoundButton = document.getElementById("show-found");
      const showNotFoundButton = document.getElementById("show-not-found");
      
      if (showFoundOnly && showFoundButton) {
        showFoundButton.classList.add("active");
        if (showAllButton) showAllButton.classList.remove("active");
        if (showNotFoundButton) showNotFoundButton.classList.remove("active");
      } else if (showNotFoundOnly && showNotFoundButton) {
        showNotFoundButton.classList.add("active");
        if (showAllButton) showAllButton.classList.remove("active");
        if (showFoundButton) showFoundButton.classList.remove("active");
      } else if (showAllButton) {
        showAllButton.classList.add("active");
        if (showFoundButton) showFoundButton.classList.remove("active");
        if (showNotFoundButton) showNotFoundButton.classList.remove("active");
      }
      
    } catch (e) {
      console.error('Error loading saved preferences:', e);
    }
  }
}

// Initialize event listeners when the page loads
document.addEventListener("DOMContentLoaded", function() {
  // First load saved data
  loadMickeysFromLocalStorage();
  loadViewPreferences();
  
  // Display initial cards
  showCards();
  
  // Set up sorting functionality
  const sortSelect = document.getElementById("sort");
  if (sortSelect) {
    sortSelect.addEventListener("change", function() {
      currentSortOption = this.value;
      showCards();
      saveViewPreferences();
    });
  }
  
  // Set up filtering functionality
  const filterSelect = document.getElementById("filter");
  if (filterSelect) {
    filterSelect.addEventListener("change", function() {
      currentFilterOption = this.value;
      showCards();
      saveViewPreferences();
    });
  }
  
  // Set up search functionality
  const searchInput = document.getElementById("search");
  if (searchInput) {
    searchInput.addEventListener("input", function() {
      searchQuery = this.value;
      showCards();
    });
  }
  
  // Set up found filter buttons
  const showAllButton = document.getElementById("show-all");
  const showFoundButton = document.getElementById("show-found");
  const showNotFoundButton = document.getElementById("show-not-found");
  
  if (showAllButton) {
    showAllButton.addEventListener("click", function() {
      showFoundOnly = false;
      showNotFoundOnly = false;
      this.classList.add("active");
      if (showFoundButton) showFoundButton.classList.remove("active");
      if (showNotFoundButton) showNotFoundButton.classList.remove("active");
      showCards();
      saveViewPreferences();
    });
  }
  
  if (showFoundButton) {
    showFoundButton.addEventListener("click", function() {
      showFoundOnly = true;
      showNotFoundOnly = false;
      this.classList.add("active");
      if (showAllButton) showAllButton.classList.remove("active");
      if (showNotFoundButton) showNotFoundButton.classList.remove("active");
      showCards();
      saveViewPreferences();
    });
  }
  
  if (showNotFoundButton) {
    showNotFoundButton.addEventListener("click", function() {
      showFoundOnly = false;
      showNotFoundOnly = true;
      this.classList.add("active");
      if (showAllButton) showAllButton.classList.remove("active");
      if (showFoundButton) showFoundButton.classList.remove("active");
      showCards();
      saveViewPreferences();
    });
  }
  
  // Save found status whenever it changes
  document.addEventListener('foundStatusChanged', function() {
    saveMickeysToLocalStorage();
  });
});

// Create a custom event for tracking found status changes
const foundStatusChangedEvent = new Event('foundStatusChanged');

