# final-project
The idea : 

The project is a Platform to give support in finding missing persons.

The users will be able to post a request for a missing person using a geo map and additional information that can help the platform users to find the missing person.

The main feature will be a search/discovery and entries listing, then maintain a communication channel between the people interested in the search quest.

Nowadays finding missing persons might take months or even years, and thanks to social media; it's easier to find common connections that facilitate accessing useful information about the area where the missing person might be, the last time was seen, or any doubt.


The platform:

Our platform consists of 2 core components, the backend is composed of some public and private APIs exposed mainly to any internet user and the frontend sides consume those APIs and also provide documentation to the public ones.

Backend:
This application will contain several API calls, all split by logic and common context. The private API will include :
User authentication
User profile
Person searches (list, create, update, delete)
Person Hints (list, create, update, delete)
Communication

The public API will be available for anyone on the internet to consume in order to give anyone the chance to broadcast our data anyone, build applications on top of us that might facilitate our mission more.
Person searches (list)
Person Hints (list)

The Frontend:
Creating a ReactJS frontend application to integrate all the APIs built; will offer a responsive web interface to our visitors in order to use all the features needed to accomplish a missing persons search or contribute to it.

The front page would be an introduction for our service it means we will explain to the users who are not signed in the core service we offer 
The front page also will allow to people to create an account or log in 
If the user is already logged in they can see : 
 News feed where there are entries and news about missing people 
They would be able to search as well 
They can also see a map 
And they can contribute or react to the news feed items. 
Any entry ( a post about the missing person ) will create its own page an entry with geological data and some information that can help find the missing person. 

Best benchmark so far : 
https://www.deeye.app/ 


