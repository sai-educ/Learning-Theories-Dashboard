// Learning Theories Data
const learningTheories = [
    {
        id: 1,
        title: "Behaviorism",
        theorists: ["B.F. Skinner", "Ivan Pavlov", "John Watson"],
        coreIdeas: "Learning is a change in observable behavior caused by external stimuli in the environment. Behaviorists believe that learning occurs through conditioning—either classical (associating two stimuli) or operant (learning through consequences). The focus is on measurable behaviors rather than internal mental processes, emphasizing reinforcement and punishment as key mechanisms for shaping behavior.",
        classroomPrompts: [
            "Use positive reinforcement (praise, rewards, points) to encourage desired behaviors",
            "Implement clear, consistent consequences for both positive and negative behaviors",
            "Break complex skills into smaller, manageable steps with immediate feedback",
            "Create structured routines and predictable classroom environments",
            "Use token economy systems or behavior charts to track and reward progress"
        ]
    },
    {
        id: 2,
        title: "Cognitivism",
        theorists: ["Jean Piaget", "Jerome Bruner", "Robert Gagné"],
        coreIdeas: "Learning is an active mental process of acquiring, remembering, and using knowledge. Cognitivism views the mind as an information processor, similar to a computer. Learning involves encoding information into memory through attention, perception, and mental representation. Emphasis is placed on understanding how learners process, store, and retrieve information, as well as metacognition—thinking about one's own thinking.",
        classroomPrompts: [
            "Use graphic organizers, concept maps, and visual aids to help students organize information",
            "Teach memory strategies like chunking, mnemonics, and rehearsal techniques",
            "Encourage students to make connections between new and prior knowledge",
            "Provide opportunities for students to explain their thinking processes aloud",
            "Design lessons that match students' cognitive developmental stages and build mental models"
        ]
    },
    {
        id: 3,
        title: "Constructivism",
        theorists: ["Jean Piaget", "Lev Vygotsky", "John Dewey"],
        coreIdeas: "Learners actively construct their own understanding and knowledge through experiences and reflection. Rather than passively receiving information, students build new knowledge upon their existing knowledge base. Learning is viewed as a social and collaborative process where meaning is created through interaction with the environment, materials, and other people. Each learner constructs a unique understanding based on their experiences.",
        classroomPrompts: [
            "Design hands-on, inquiry-based activities where students discover concepts themselves",
            "Facilitate collaborative group projects that encourage peer interaction and discussion",
            "Use real-world problems and scenarios that connect to students' lived experiences",
            "Encourage students to ask questions, explore, and construct their own explanations",
            "Create a classroom culture where mistakes are viewed as learning opportunities"
        ]
    },
    {
        id: 4,
        title: "Social Learning Theory",
        theorists: ["Albert Bandura"],
        coreIdeas: "People learn from one another through observation, imitation, and modeling. Bandura emphasized that learning can occur without direct reinforcement simply by watching others and the consequences of their actions. Key concepts include observational learning, self-efficacy (belief in one's abilities), and reciprocal determinism (the interaction between person, behavior, and environment). Attention, retention, reproduction, and motivation are essential for observational learning to occur.",
        classroomPrompts: [
            "Model desired behaviors, problem-solving strategies, and thinking processes explicitly",
            "Use think-alouds to demonstrate how you approach tasks and overcome challenges",
            "Implement peer tutoring and mentoring programs where students learn from each other",
            "Share videos or examples of positive role models and success stories",
            "Build students' self-efficacy by providing achievable challenges and celebrating progress"
        ]
    },
    {
        id: 5,
        title: "Experiential Learning",
        theorists: ["David Kolb", "John Dewey"],
        coreIdeas: "Learning is a process whereby knowledge is created through the transformation of experience. Kolb's learning cycle includes four stages: concrete experience (doing), reflective observation (reviewing), abstract conceptualization (concluding), and active experimentation (planning). Learning is most effective when students move through all four stages, connecting theory with practice. Experience alone is not sufficient; reflection on that experience is crucial for learning to occur.",
        classroomPrompts: [
            "Provide hands-on experiences like labs, simulations, field trips, or real-world projects",
            "Build in structured reflection time through journals, discussions, or debriefs after activities",
            "Encourage students to connect abstract theories to their personal experiences",
            "Design learning activities that allow students to experiment, test ideas, and learn from failures",
            "Use case studies and scenario-based learning to bridge theory and practice"
        ]
    },
    {
        id: 6,
        title: "Multiple Intelligences",
        theorists: ["Howard Gardner"],
        coreIdeas: "Intelligence is not a single general ability but rather a set of distinct types of intelligences. Gardner initially identified seven intelligences (later expanded to eight or nine): linguistic, logical-mathematical, spatial, musical, bodily-kinesthetic, interpersonal, intrapersonal, naturalistic, and existential. Each person has a unique profile of strengths and weaknesses across these intelligences. Effective teaching should address multiple intelligences to reach diverse learners.",
        classroomPrompts: [
            "Differentiate instruction by presenting content through multiple modalities (verbal, visual, kinesthetic)",
            "Offer choice in assignments allowing students to demonstrate learning through their strengths",
            "Incorporate music, movement, art, and hands-on activities alongside traditional methods",
            "Use group work to leverage interpersonal intelligence and reflection for intrapersonal development",
            "Connect lessons to nature, patterns, and real-world contexts to engage different intelligences"
        ]
    },
    {
        id: 7,
        title: "Zone of Proximal Development",
        theorists: ["Lev Vygotsky"],
        coreIdeas: "The Zone of Proximal Development (ZPD) is the difference between what a learner can do independently and what they can do with guidance from a more knowledgeable other. Learning is most effective when instruction targets this zone—not too easy (what students already know) and not too difficult (beyond their reach even with help). The concept of scaffolding—providing temporary support that is gradually removed—is central to working within the ZPD.",
        classroomPrompts: [
            "Assess students' current skill levels and design tasks slightly beyond their independent abilities",
            "Provide scaffolding through modeling, prompts, hints, and gradual release of responsibility",
            "Use guided practice before expecting independent work on new concepts",
            "Implement flexible grouping strategies to pair students with peers or adults who can support growth",
            "Gradually reduce support as students gain competence and confidence"
        ]
    },
    {
        id: 8,
        title: "Bloom's Taxonomy",
        theorists: ["Benjamin Bloom", "Updated by Lorin Anderson & David Krathwohl"],
        coreIdeas: "A hierarchical framework that classifies educational learning objectives into levels of complexity and specificity. The revised taxonomy includes six cognitive levels: Remember (recall facts), Understand (explain ideas), Apply (use information), Analyze (draw connections), Evaluate (justify decisions), and Create (produce original work). Higher-order thinking skills at the top of the taxonomy represent deeper, more complex learning. The taxonomy helps educators design lessons and assessments that promote critical thinking.",
        classroomPrompts: [
            "Design lessons that progress from lower to higher-order thinking skills throughout a unit",
            "Use action verbs from each taxonomy level when writing learning objectives and questions",
            "Ask questions at multiple levels: recall questions, analysis questions, and synthesis questions",
            "Assign projects that require students to create, evaluate, or analyze rather than just memorize",
            "Differentiate by offering tasks at different taxonomy levels to match student readiness"
        ]
    },
    {
        id: 9,
        title: "Universal Design for Learning (UDL)",
        theorists: ["David Rose", "Anne Meyer", "CAST Organization"],
        coreIdeas: "A framework for designing flexible learning environments that accommodate individual learning differences from the start, rather than retrofitting accommodations later. UDL is based on three principles: Multiple Means of Representation (present information in various ways), Multiple Means of Action and Expression (allow students to demonstrate learning differently), and Multiple Means of Engagement (motivate learners through choice and relevance). The goal is to make learning accessible to all students, including those with disabilities.",
        classroomPrompts: [
            "Provide content in multiple formats: text, audio, video, graphics, and hands-on materials",
            "Offer students choice in how they demonstrate learning (writing, speaking, creating, performing)",
            "Remove barriers by using accessible materials, clear language, and flexible pacing",
            "Build in options for different levels of challenge and support within the same lesson",
            "Connect learning to students' interests, cultures, and real-world contexts to increase engagement"
        ]
    },
    {
        id: 10,
        title: "Growth Mindset",
        theorists: ["Carol Dweck"],
        coreIdeas: "The belief that abilities and intelligence can be developed through dedication, hard work, and learning from mistakes. In contrast to a fixed mindset (believing abilities are static and unchangeable), a growth mindset views challenges as opportunities, effort as the path to mastery, and failures as valuable feedback. Students with a growth mindset are more resilient, persistent, and willing to take on challenges. Praise should focus on effort and strategies rather than innate ability.",
        classroomPrompts: [
            "Praise effort, strategies, and persistence rather than innate intelligence or talent",
            "Teach students about brain plasticity and how learning creates new neural connections",
            "Reframe mistakes and failures as opportunities for growth and learning",
            "Use the word 'yet' to emphasize progress: 'You haven't mastered this yet'",
            "Share stories of successful people who overcame challenges through perseverance and learning"
        ]
    }
];

// DOM Elements
const theoriesContainer = document.getElementById('theoriesContainer');
const searchInput = document.getElementById('searchInput');
const expandAllBtn = document.getElementById('expandAll');
const collapseAllBtn = document.getElementById('collapseAll');

// Render theory cards
function renderTheories() {
    theoriesContainer.innerHTML = '';
    
    learningTheories.forEach((theory, index) => {
        const card = document.createElement('div');
        card.className = 'theory-card';
        card.setAttribute('data-id', theory.id);
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="theory-header">
                <h2 class="theory-title">${theory.title}</h2>
                <span class="toggle-icon">+</span>
            </div>
            <div class="theory-content">
                <div class="theory-section">
                    <h3 class="section-title">Key Theorists</h3>
                    <div class="theorists">
                        ${theory.theorists.map(theorist => 
                            `<span class="theorist-tag">${theorist}</span>`
                        ).join('')}
                    </div>
                </div>
                
                <div class="theory-section">
                    <h3 class="section-title">Core Ideas</h3>
                    <p class="core-ideas">${theory.coreIdeas}</p>
                </div>
                
                <div class="theory-section">
                    <h3 class="section-title">Classroom Prompts for K-12 Teachers</h3>
                    <div class="classroom-prompts">
                        <ul class="prompt-list">
                            ${theory.classroomPrompts.map(prompt => 
                                `<li>${prompt}</li>`
                            ).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;
        
        // Add click event to toggle card
        const header = card.querySelector('.theory-header');
        header.addEventListener('click', () => toggleCard(card));
        
        theoriesContainer.appendChild(card);
    });
}

// Toggle individual card
function toggleCard(card) {
    card.classList.toggle('expanded');
}

// Expand all cards
function expandAll() {
    const cards = document.querySelectorAll('.theory-card');
    cards.forEach(card => {
        if (!card.classList.contains('hidden')) {
            card.classList.add('expanded');
        }
    });
}

// Collapse all cards
function collapseAll() {
    const cards = document.querySelectorAll('.theory-card');
    cards.forEach(card => card.classList.remove('expanded'));
}

// Search functionality
function searchTheories(query) {
    const searchTerm = query.toLowerCase().trim();
    const cards = document.querySelectorAll('.theory-card');
    
    cards.forEach(card => {
        const theoryId = parseInt(card.getAttribute('data-id'));
        const theory = learningTheories.find(t => t.id === theoryId);
        
        if (!theory) return;
        
        const searchableText = [
            theory.title,
            theory.theorists.join(' '),
            theory.coreIdeas,
            theory.classroomPrompts.join(' ')
        ].join(' ').toLowerCase();
        
        if (searchableText.includes(searchTerm)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Event Listeners
expandAllBtn.addEventListener('click', expandAll);
collapseAllBtn.addEventListener('click', collapseAll);

searchInput.addEventListener('input', (e) => {
    searchTheories(e.target.value);
});

// Keyboard accessibility
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        searchInput.value = '';
        searchTheories('');
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderTheories();
});
