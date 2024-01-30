import img1 from '../assets/Rectangle 12.png';
import img2 from '../assets/Rectangle 13.png';
import img3 from '../assets/Rectangle 32.png';
import img4 from '../assets/Rectangle 31.png';
import img5 from '../assets/Rectangle 33.png';
import img6 from '../assets/Rectangle 34.png';
import img7 from '../assets/Rectangle 35.png';
import img8 from '../assets/Rectangle 36.png';


const ticketsCardData = {
    "event_data": {
        "summary": {
            "platform": "TICKIN",
            "statistics": {
                "events_created": 42,
                "ticket_sales": 42,
                "ongoing_events": 42,
                "upcoming_events": 42
            }
        },
        "event_listings": [
            {
                "id": "event_001",
                "event_name": "Afro Festival",
                "status": "ongoing",
                "category": "Cultural",
                "event_dates": {
                    "start_date": "20/06/2024",
                    "end_date": "26/06/2024"
                },
                "price": "$250",
                "location": "2715 Ash Dr. San Jose, South Dakota 83475",
                "sales_end": "12:00pm - 12:00pm",
                "url": img1,
                "image_alt": "Crowd at concert"
            },
            {
                "id": "event_002",
                "event_name": "Tech Summit",
                "status": "upcoming",
                "category": "Cultural",
                "event_dates": {
                    "start_date": "20/06/2024",
                    "end_date": "26/06/2024"
                },
                "price": "$250",
                "location": "2715 Ash Dr. San Jose, South Dakota 83475",
                "sales_end": "13/03/2024",
                "url": img2,
                "image_alt": "People at a tech conference"
            },
            {
                "id": "event_003",
                "event_name": "Tech Summit",
                "status": "concluded",
                "category": "Conference",
                "location": "2715 Ash Dr. San Jose, South Dakota 83475",
                "start_date": "Aug 2, 2023, 12:00pm",
                "end_date": "Aug 2, 2023, 12:00pm",
                "price": "$250",
                "tickets": {
                    "available": 200,
                    "sold": 300
                },
                "revenue": "$75,000",
                "url": img3
            },
            {
                "id": "event_004",
                "event_name": "Tech Summit",
                "status": "concluded",
                "category": "Conference",
                "location": "2715 Ash Dr. San Jose, South Dakota 83475",
                "start_date": "Aug 2, 2023, 12:00pm",
                "end_date": "Aug 2, 2023, 12:00pm",
                "price": "$250",
                "tickets": {
                    "available": 200,
                    "sold": 300
                },
                "revenue": "$75,000",
                "url": img4
            },
            {
                "id": "event_005",
                "event_name": "Tech Summit",
                "status": "concluded",
                "category": "Conference",
                "location": "2715 Ash Dr. San Jose, South Dakota 83475",
                "start_date": "Aug 2, 2023, 12:00pm",
                "end_date": "Aug 2, 2023, 12:00pm",
                "price": "$250",
                "tickets": {
                    "available": 200,
                    "sold": 300
                },
                "revenue": "$75,000",
                "url": img5
            },
            {
                "id": "event_006",
                "event_name": "Tech Summit",
                "status": "concluded",
                "category": "Conference",
                "location": "2715 Ash Dr. San Jose, South Dakota 83475",
                "start_date": "Aug 2, 2023, 12:00pm",
                "end_date": "Aug 2, 2023, 12:00pm",
                "price": "$250",
                "tickets": {
                    "available": 200,
                    "sold": 300
                },
                "revenue": "$75,000",
                "url": img6
            },
            {
                "id": "event_007",
                "event_name": "Afro Festival",
                "status": "upcoming",
                "category": "Cultural",
                "location": "2715 Ash Dr. San Jose, South Dakota 83475",
                "start_date": "Aug 2, 2023, 12:00pm",
                "end_date": "Aug 2, 2023, 12:00pm",
                "price": "$250",
                "tickets": {
                    "available": 200,
                    "sold": 300
                },
                "revenue": "$75,000",
                "url": img7
            },
            {
                "id": "event_008",
                "event_name": "Tech Summit",
                "status": "concluded",
                "category": "Conference",
                "location": "2715 Ash Dr. San Jose, South Dakota 83475",
                "start_date": "Aug 2, 2023, 12:00pm",
                "end_date": "Aug 2, 2023, 12:00pm",
                "price": "$250",
                "tickets": {
                    "available": 200,
                    "sold": 300
                },
                "revenue": "$75,000",
                "url": img8
            }
        ]
    }
}


export default ticketsCardData;