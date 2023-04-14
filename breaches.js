const breaches = [
  {
      name: "Equifax",
      clues: [
          "September 2017, United States, $4 billion",
          "Credit reporting agency",
          "Affected approximately 147 million people",
          "Exposed Social Security numbers, birth dates, addresses, and more",
          "Company settled with the Federal Trade Commission for up to $700 million"
      ]
  },
  {
      name: "Yahoo",
      clues: [
          "December 2013, United States, $350 million",
          "Internet services company",
          "Affected 3 billion user accounts",
          "Exposed names, email addresses, phone numbers, and more",
          "Largest known data breach in history"
      ]
  },
  {
      name: "Marriott",
      clues: [
          "November 2018, United States, $124 million",
          "Hotel chain",
          "Affected around 500 million guests",
          "Exposed names, addresses, passport numbers, and more",
          "Starwood Hotels and Resorts database was compromised"
      ]
  },
  {
      name: "First American Financial",
      clues: [
          "May 2019, United States, $487 million",
          "Real estate services company",
          "Exposed around 885 million records",
          "Exposed bank account numbers, Social Security numbers, and more",
          "Data leak due to a website design flaw"
      ]
  },
  {
      name: "Adult FriendFinder",
      clues: [
          "October 2016, United States economic impact",
          "Online dating and adult entertainment platform",
          "Affected around 412 million user accounts",
          "Exposed usernames, passwords, and more",
          "Largest known data breach of a dating platform"
      ]
  },
  {
      name: "Anthem",
      clues: [
          "February 2015, United States, $260 million",
          "Health insurance company",
          "Affected around 78.8 million individuals",
          "Exposed Social Security numbers, dates of birth, addresses, and more",
          "Largest known healthcare data breach"
      ]
  },
  {
      name: "Target",
      clues: [
          "December 2013, United States, $252 million",
          "Retail corporation",
          "Affected around 110 million individuals",
          "Exposed credit and debit card information, customer names, and more",
          "Point-of-sale malware attack"
      ]
  },
  {
      name: "Sony Pictures",
      clues: [
          "November 2014, United States, $100 million",
          "Film production company",
          "Exposed unreleased movies, confidential information, and more",
          "Attributed to North Korea, possibly in retaliation for the film 'The Interview'",
          "Resulted in executive resignations and significant damage to the company's reputation"
      ]
  },
  {
      name: "Home Depot",
      clues: [
          "September 2014, United States, $194.5 million",
          "Home improvement retail chain",
          "Affected around 56 million credit and debit cards",
          "Exposed card numbers, names, and more",
          "Point-of-sale malware attack"
      ]
  },
  {
      name: "Ashley Madison",
      clues: [
          "July 2015, Canada, $11.2 million",
          "Online dating service for extramarital affairs",
          "Affected around 32 million user accounts",
          "Exposed names, addresses, credit card information, and more",
          "Hacking group 'The Impact Team' claimed responsibility"
      ]
  },
  {
      name: "Heartland Payment Systems",
      clues: [
          "January 2009, United States, $140 million",
          "Payment processing company",
          "Affected around 130 million credit and debit cards",
          "Exposed card numbers, names, and more",
          "At the time, the largest known data breach involving credit card data"
      ]
  },
  {
    name: "Staples",
    clues: [
      "July 2014, United States, $500,000",
      "Office supply retailer",
      "Over 1 million credit card numbers were potentially exposed",
      "Malware was installed on the company's point-of-sale systems",
      "Staples offered free identity protection services to affected customers"
    ]
  },
  {
    name: "Under Armour",
    clues: [
      "February 2018, United States, $150 million",
      "Athletic apparel company",
      "Usernames, email addresses, and passwords were exposed",
      "The breach affected around 150 million users of the company's app",
      "Urged all users to change their passwords"
    ]
  },
  {
    name: "Uber",
    clues: [
      "2016, Global, $148 million",
      "Ridesharing company",
      "57 million customer and driver records were exposed",
      "The company paid a $100,000 ransom to the hackers",
      "Multiple executives resigned in connection with the breach"
    ]
  },
  {
    name: "LinkedIn",
    clues: [
      "2012, Global",
      "Professional networking site",
      "Over 160 million user email addresses and passwords were exposed",
      "The company faced multiple lawsuits as a result of the breach",
      "The breach was discovered and disclosed several years after it occurred"
    ]
  },
  {
    name: "Wawa",
    clues: [
      "December 2019, United States",
      "Convenience store chain",
      "Customer payment card information was exposed",
      "The breach was the result of malware on the company's payment processing servers",
      "Wawa faced multiple lawsuits as a result of the breach"
    ]
  },
  {
    name: "T-Mobile",
    clues: [
      "August 2021, United States",
      "Wireless carrier",
      "Personal information of over 50 million customers was exposed",
      "The breach was the result of a vulnerability in the company's servers",
      "The company offered free identity protection services to affected customers"
    ]
  },
  {
    name: "Colonial Pipeline",
    clues: [
      "May 2021, United States, $4.4 million",
      "Energy company",
      "Ransomware attack led to shutdown of pipeline operations",
      "The company paid a $4.4 million ransom to the hackers",
      "The attack led to fuel shortages and price increases in multiple states"
    ]
  },
  {
    name: "JPMorgan Chase",
    clues: [
      "2014, United States",
      "Bank holding company",
      "76 million households and 7 million small businesses were affected",
      "The company spent over $250 million on the fallout from the breach",
      "Multiple suspects were arrested in connection with the breach"
    ]
  },
  {
    name: "DoorDash",
    clues: [
      "2019, United States, 4.9 million",
      "Food delivery company",
      "Customer information was exposed, including names, email addresses, and phone numbers",
      "The company faced criticism for its slow response to the breach",
      "The breach was the result of unauthorized access to a third-party service"
    ]
  },
  {
    name: "Microsoft",
    clues: [
      "2020, Global",
      "Technology company",
      "Hackers gained access to source code and other sensitive data",
      "The company initially downplayed the severity of the breach",
      "The breach was the result of vulnerabilities in third-party software used by the company"
    ]
  },
  {
    name: "Experian",
    clues: [
      "2015, Global, $20 million",
      "Credit bureau",
      "15 million T-Mobile customers' information was exposed",
      "The company faced multiple lawsuits and investigations as a result of the breach",
      "The breach was the result of a vulnerability in the company's software"
    ]
  },
  {
    name: "Cloudflare",
    clues: [
      "2017, Global",
      "Internet security company",
      "Customer data was exposed, including passwords and encryption keys",
      "The company faced criticism for the slow response to the breach",
      "The breach was the result of a software bug in the company's code"
    ]
  },
  {
    name: "Capital One",
    clues: [
      "2019, United States, 106 million",
      "Financial services company",
      "Customer data was exposed, including names, addresses, and Social Security numbers",
      "The breach was the result of a vulnerability in the company's web application firewall",
      "The hacker responsible for the breach was arrested and charged"
    ]
  },
  {
    name: "Macy's",
    clues: [
      "2018, United States",
      "Retail company",
      "Customer data was exposed, including names and credit card numbers",
      "The breach was the result of a vulnerability in the company's website",
      "The company faced criticism for its slow response to the breach"
    ]
  },
  {
    name: "The Home Shopping Network",
    clues: [
      "2017, United States",
      "Television network and retail company",
      "Customer data was exposed, including names and email addresses",
      "The breach was the result of a vulnerability in the company's website",
      "The company faced criticism for its slow response to the breach"
    ]
  },
  {
    name: "Twitter",
    clues: [
      "2020, Global",
      "Social media company",
      "Hackers gained access to high-profile accounts and used them to promote a Bitcoin scam",
      "The company faced criticism for its security measures",
      "The breach was the result of a social engineering attack on Twitter employees"
    ]
  },
  {
    name: "Dominion National",
    clues: [
      "2019, United States",
      "Dental and vision insurance company",
      "Customer data was exposed, including names and Social Security numbers",
      "The breach was the result of a vulnerability in the company's website",
      "The company faced criticism for its slow response to the breach"
    ]
  },
  {
  name: "CD Projekt Red",
    clues: [
      "February 2021, Poland",
      "Video game company",
      "Hackers gained access to the company's internal network and stole source code for several games",
      "The company faced criticism for its handling of the breach",
      "The incident highlighted the growing threat of cyberattacks against the gaming industry"
    ]
  },
  {
    name: "Epsilon",
    clues: [
      "April 2011, United States",
      "Marketing services company",
      "Customer data was exposed, including names and email addresses",
      "The breach affected numerous major companies, including JPMorgan Chase and Best Buy",
      "The incident highlighted the risks associated with the consolidation of customer data in third-party service providers"
    ]
  },
  {
    name: "Panera Bread",
    clues: [
      "April 2018, United States",
      "Restaurant chain",
      "Customer data was exposed, including names, email addresses, and credit card numbers",
      "The breach was the result of a vulnerability in the company's website",
      "The company faced criticism for its handling of the breach"
    ]
  },
  {
    name: "Verkada",
    clues: [
      "March 2021, Global",
      "Surveillance camera company",
      "Hackers gained access to the company's network and were able to view live feeds from customers' cameras",
      "The incident raised concerns about the security of internet-connected devices",
      "The company faced criticism for its handling of the breach"
    ]
  },
  {
  name: "Cambridge Analytica",
    clues: [
      "March 2018, United Kingdom",
      "Political consulting firm",
      "User data from Facebook was obtained without users' consent and used for political advertising purposes",
      "The incident raised concerns about the use of personal data in political campaigns",
      "The company faced criticism for its handling of the data and subsequent investigations"
    ]
  },
  {
  name: "Norsk Hydro",
    clues: [
      "March 2019, Norway, $70 million",
      "Aluminum producer",
      "The company's network was attacked with ransomware, disrupting operations",
      "The company refused to pay the ransom and instead focused on restoring its systems",
      "The incident highlighted the importance of cybersecurity for critical infrastructure"
    ]
  },
  {
  name: "Codecov",
    clues: [
      "April 2021, Global",
      "Code coverage platform",
      "Hackers gained access to the company's code and modified it to steal sensitive data from users",
      "The breach affected multiple major companies and organizations",
      "The incident raised concerns about the security of third-party software and the potential for supply chain attacks"
    ]
  },
  {
  name: "Aetna",
    clues: [
      "July 2017, United States, $17 million",
      "Health insurance company",
      "The company sent letters to around 12,000 customers with HIV, revealing their condition",
      "The incident resulted in a settlement with the affected customers and the implementation of new privacy measures",
      "The breach highlighted the risks of mishandling sensitive health information"
      ]
    },
  {
  name: "Deloitte",
  clues: [
    "September 2017, Global",
    "Professional services firm",
    "Hackers gained access to the company's email system and confidential client data",
    "The breach affected multiple major companies and organizations",
    "The incident raised concerns about the security of professional services firms and the potential for third-party data breaches"
    ]
  },
  {
  name: "Razer",
    clues: [
      "August 2020, Global",
      "Gaming hardware company",
      "Sensitive customer data was exposed on the company's server due to a misconfigured database",
      "The incident affected around 100,000 customers",
      "The company apologized for the breach and offered free identity protection services to affected customers"
    ]
  }
]

