let employees = [

    {
        "ID": "9500096",
        "Name": "Aklish Mourya",
        "Location": "Bhiwadi",
        "Designation": "FL",
        "Department": "GRINDING & POLISHING",
        "subDepartment": "polishing",
        "covid_positive": false,
        "infection_date":"",
        "in_contact":[],
        "status": "Healthy",
        "man_days":0
        
    },
    {
        "ID": "9500012",
        "Name": "Bhupesh Kumar",
        "Location": "Bhiwadi",
        "Designation": "FL",
        "Department": "QUALITY",
        "subDepartment": "QL",
        "covid_positive": false,
        "infection_date":"",
        "in_contact":[],
        "status": "Healthy",
        "man_days":0
    },
    {
        "ID": "1000228",
        "Name": "Sahab Singh",
        "Location": "Bhiwadi",
        "Designation": "Trainee",
        "Department": "MACHINE SHOP",
        "subDepartment": "Shop",
        "covid_positive": true,
        "infection_date":"8/11/2020",
        "in_contact":[
            {
                "ID": "9001892",
                "Name": "Amit Kumar",
                "Location": "Bhiwadi",
                "Designation": "Executive",
                "Department": "STORES",
                "subDepartment": "store",
                "covid_positive": true,
                "infection_date":"8/9/2020",
                "man_days": 5
            },
            {
                "ID": "9500082",
                "Name": "Md. Harun",
                "Location": "Bhiwadi",
                "Designation": "FL",
                "Department": "CASTING",
                "subDepartment": "QL",
                "covid_positive": true,
                "infection_date":"8/7/2020",
                "man_days": 3
            }
            
        ],
        "status": "Covid+ve",
        "man_days":7
    },
    {
        "ID": "9001892",
        "Name": "Amit Kumar",
        "Location": "Bhiwadi",
        "Designation": "Executive",
        "Department": "STORES",
        "subDepartment": "store",
        "covid_positive": true,
        "infection_date":"8/9/2020",
        "in_contact":[],
        "status": "Healthy",
        "man_days":5
    },
    {
        "ID": "9500082",
        "Name": "Md. Harun",
        "Location": "Bhiwadi",
        "Designation": "FL",
        "Department": "CASTING",
        "subDepartment": "QL",
        "covid_positive": true,
        "infection_date":"8/7/2020",
        "in_contact":[],
        "status": "Healthy",
        "man_days":3
    },
    {
        "ID": "9500084",
        "Name": "Abhishek Sharma",
        "Location": "Bhiwadi",
        "Designation": "FL",
        "Department": "CASTING",
        "subDepartment": "QL",
        "covid_positive": true,
        "infection_date":"5/20/2020",
        "in_contact":[
            {
                
                "ID": "9500085",
                "Name": "Varun Thakur",
                "Location": "Bhiwadi",
                "Designation": "Executive",
                "Department": "CASTING",
                "subDepartment": "QL",
                "covid_positive": true,
                "infection_date":"5/19/2020",
                "man_days": 6
            },
            {
                "ID": "9500086",
                "Name": "Tarun Sharma",
                "Location": "Bhiwadi",
                "Designation": "Trainee",
                "Department": "FL",
                "subDepartment": "QL",
                "covid_positive": true,
                "infection_date":"5/18/2020",
                "man_days": 5
            }
        ],
        "status": "Covid+ve",
        "man_days":5
    },
    {
        "ID": "9500085",
        "Name": "Varun Thakur",
        "Location": "Bhiwadi",
        "Designation": "Executive",
        "Department": "CASTING",
        "subDepartment": "QL",
        "covid_positive": true,
        "infection_date":"5/19/2020",
        "in_contact":[],
        "status": "Healthy",
        "man_days": 6
    },
    {
        "ID": "9500086",
        "Name": "Tarun Sharma",
        "Location": "Bhiwadi",
        "Designation": "Trainee",
        "Department": "FL",
        "subDepartment": "QL",
        "covid_positive": true,
        "infection_date":"5/18/2020",
        "in_contact":[],
        "status": "Healthy",
        "man_days": 5
    },
    
]

module.exports = employees