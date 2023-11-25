// import trustReviews from "./db/trustpilot-reviews"
// import countries from "./db/countries"

export default {
    // trustReviews: trustReviews,
    appActiveUser: null,
    scrollY : 0,
    windowWith : 0,
    // countries: countries,
    // country: {},
    // reviews:[],
    // buyerDomain: process.env.NODE_ENV == 'production' ? 'https://account.oyepixels.com' : 'http://127.0.0.1:8080',
    services:[
        "Business Card", "Flyers", "Logo Design", "Letterhead", "Illustrations",
        "Business Ads", "Google Display Ads", "Amazon Listing Images", "Meta Ads",
        "Instagram Stories","Custom illustration","Labels & Stickers", "Merch & T-shirts",
        "Packaging", "Stationaries", "Presentations", "Marketing materials", "Blog graphics",
        "Banner", "Social media graphics", "Book Covers",
    ],
    frequentQuestions:[
        {
            "id": 1,
            "category": "GENERAL",
            "question": "What are your hours of operation?",
            "answer" : "Our team currently works on the United States Eastern Time. Our hours of operation are 8AM to 4PM EST, Monday through Saturday. We are closed on the weekends, so we can all spend a little time with our loved ones. If you have any questions during off hours, you can email us at business@oyepixels.com, and we will get back to you."

        },{
            "id": 2,
            "category": "GENERAL",
            "question": "How are you different from other unlimited services?",
            "answer" : "While many of the design subscription services share similarities, we think the major differences are found in the core values of a company. We focus on Relationships, Quality and Reliability." 

        },{
            "id": 3,
            "category": "GENERAL",
            "question": "What are your turnaround times like?",
            "answer" : "We aim for 12 hours to 1 business days for graphics design. Although we try to deliver everything as quickly as possible, larger time-intensive projects may take more than 2 days to complete and we’ll set realistic expectations for you as the requests come in."

        },{
            "id": 4,
            "category": "GENERAL",
            "question": "Can I really make unlimited requests?",
            "answer" : "When we say unlimited, we truly mean it! You are welcome to make unlimited design requests at any time. Just keep in mind we are only human and are focused on giving you a higher quality product than pumping out pre-made low quality templates that won’t do your business justice. Quality work takes times to complete."

        },{
            "id": 6,
            "category": "GENERAL",
            "question": "Where are Oyepixel's designers located?",
            "answer" : "We recruit talent from over 20 countries throughout Asia, Europe, Australia, and North & South America to meet our customer's diverse design needs. Our members are all full-time employees with competitive salaries and benefits."

        },{
            "id": 7,
            "category": "GENERAL",
            "question": "How do revisions work?",
            "answer" : "Getting revisions is simple with Oyepixels. Just let your Designer know the changes you require & we’ll get it done for you. You can get as many revisions as you want until you are satisfied with the design."

        }, {
            "id": 5,
            "category": "PRIVACY",
            "question": "How many requests can I submit at a time?",
            "answer" : "You can submit as many tasks as your plan offers, we will make sure we deliver your design quickly."

        },{
            "id": 11,
            "category": "PRIVACY",
            "question": "Who has ownership of the designs and codes?",
            "answer" : "You get 100% ownership of the designs the moment we deliver them to you. You can use these designs as you see fit."
        },{
            "id": 10,
            "category": "PRIVACY",
            "question": "How does Oyepixels's 30-day money back guarantee work?",
            "answer" : "All monthly plans are eligible for a full refund within 30 days. We make canceling your subscription simple. You can request to cancel within the app or contact our support team. We make cancellations simple because we rely on the quality of our service to keep you, not fine-prints."

        },{
            "id": 8,
            "category": "PRIVACY",
            "question": "Do I have to sign a contract?",
            "answer" : "No. At Oyepixels, we try to keep stuff pretty simple & straightforward. You signup when you need us & you may cancel whenever you want. You can manage your subscription from the dashboard itself."

        }
    ]
}
